import { Injectable } from '@angular/core';
import { TIMELINE_ENTITIES, TIMELINE_MONTHS, TIMELINE_START, TimelineEntity } from '../contracts/timeline.data';

export interface TimelineTick {
    label: string;
    slug: string;
    isYearMark: boolean;
    year: number;
    month: number;
    rowIndex: number;
}

export type MilestoneType = 'joined' | 'left';

export interface TimelineMilestone {
    type: MilestoneType;
    label: string;
    entityId: string;
}

export interface EmploymentSpan {
    entity: TimelineEntity;
    /** CSS grid row line at the top of the content (most recent month). */
    rowStart: number;
    /** CSS grid row line at the bottom of the content (oldest month). */
    rowEnd: number;
    /** Inclusive tick row range highlighted when hovering employment content. */
    highlightTopRow: number;
    highlightBottomRow: number;
    heading: string;
}

@Injectable({
    providedIn: 'root'
})
export class TimelineService {
    private readonly employmentEntities = TIMELINE_ENTITIES.filter(entity => entity.category === 'Employment');

    monthSlug(label: string): string {
        return label.toLowerCase().replace(/\s+/g, '-');
    }

    buildTicks(endYear: number, endMonth: number): TimelineTick[] {
        const ticks: Omit<TimelineTick, 'rowIndex'>[] = [];
        let year = TIMELINE_START.year;
        let month = TIMELINE_START.month;

        while (year < endYear || (year === endYear && month <= endMonth)) {
            const label = `${TIMELINE_MONTHS[month]} ${year}`;
            ticks.push({
                label,
                slug: this.monthSlug(label),
                isYearMark: month === 0,
                year,
                month
            });

            month += 1;
            if (month > 11) {
                month = 0;
                year += 1;
            }
        }

        return ticks.reverse().map((tick, rowIndex) => ({ ...tick, rowIndex }));
    }

    buildMilestones(ticks: TimelineTick[]): Map<number, TimelineMilestone[]> {
        const byRow = new Map<number, TimelineMilestone[]>();

        const add = (rowIndex: number, milestone: TimelineMilestone) => {
            const bucket = byRow.get(rowIndex) ?? [];
            bucket.push(milestone);
            byRow.set(rowIndex, bucket);
        };

        for (const entity of this.employmentEntities) {
            const startRow = this.rowIndexFor(ticks, entity.startYear, entity.startMonth);
            add(startRow, {
                type: 'joined',
                label: this.joinedLabel(entity),
                entityId: entity.id
            });

            if (entity.endYear !== null) {
                const endRow = this.rowIndexFor(ticks, entity.endYear, entity.endMonth ?? 0);
                add(endRow, {
                    type: 'left',
                    label: this.leftLabel(entity),
                    entityId: entity.id
                });
            }
        }

        for (const [rowIndex, milestones] of byRow) {
            byRow.set(
                rowIndex,
                milestones.sort((a, b) => {
                    if (a.type === b.type) {
                        return 0;
                    }
                    return a.type === 'joined' ? -1 : 1;
                })
            );
        }

        return byRow;
    }

    buildEmploymentSpans(ticks: TimelineTick[], referenceYear: number, referenceMonth: number): EmploymentSpan[] {
        return this.employmentEntities.map(entity => {
            const { contentTop, contentBottom } = this.contentBounds(entity, referenceYear, referenceMonth);
            const topRowIndex = this.rowIndexFor(ticks, contentTop.year, contentTop.month);
            const bottomRowIndex = this.rowIndexFor(ticks, contentBottom.year, contentBottom.month);

            const highlightTopRow =
                entity.endYear === null
                    ? this.rowIndexFor(ticks, referenceYear, referenceMonth)
                    : this.rowIndexFor(ticks, entity.endYear, entity.endMonth ?? 0);
            const highlightBottomRow = this.rowIndexFor(ticks, entity.startYear, entity.startMonth);

            return {
                entity,
                rowStart: topRowIndex + 1,
                rowEnd: bottomRowIndex + 2,
                highlightTopRow,
                highlightBottomRow,
                heading: `${entity.role} at ${entity.title}`
            };
        });
    }

    milestonesAt(milestones: Map<number, TimelineMilestone[]>, rowIndex: number): TimelineMilestone[] {
        return milestones.get(rowIndex) ?? [];
    }

    private contentBounds(
        entity: TimelineEntity,
        referenceYear: number,
        referenceMonth: number
    ): { contentTop: { year: number; month: number }; contentBottom: { year: number; month: number } } {
        const contentBottom = this.addMonths(entity.startYear, entity.startMonth, 1);
        const contentTop =
            entity.endYear === null
                ? this.addMonths(referenceYear, referenceMonth, -1)
                : this.addMonths(entity.endYear, entity.endMonth ?? 0, -1);

        return { contentTop, contentBottom };
    }

    private rowIndexFor(ticks: TimelineTick[], year: number, month: number): number {
        const slug = this.monthSlug(`${TIMELINE_MONTHS[month]} ${year}`);
        return ticks.find(tick => tick.slug === slug)?.rowIndex ?? 0;
    }

    private addMonths(year: number, month: number, delta: number): { year: number; month: number } {
        const total = year * 12 + month + delta;
        return {
            year: Math.floor(total / 12),
            month: ((total % 12) + 12) % 12
        };
    }

    private joinedLabel(entity: TimelineEntity): string {
        return `Joined ${entity.title} as ${entity.role}`;
    }

    private leftLabel(entity: TimelineEntity): string {
        const tenure = this.formatTenure(entity.startYear, entity.startMonth, entity.endYear!, entity.endMonth ?? 0);
        return `Left ${entity.title} after ${tenure}`;
    }

    /** Inclusive month count from start through end (e.g. Jan 2022–Aug 2023 → 1 year 8 months). */
    private formatTenure(startYear: number, startMonth: number, endYear: number, endMonth: number): string {
        const totalMonths = endYear * 12 + endMonth - (startYear * 12 + startMonth) + 1;
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        const parts: string[] = [];
        if (years > 0) {
            parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
        }
        if (months > 0) {
            parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
        }

        return parts.length ? parts.join(' ') : 'less than a month';
    }
}
