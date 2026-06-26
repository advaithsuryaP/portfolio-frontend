import { Injectable } from '@angular/core';
import {
    CATEGORY_COLORS,
    TIMELINE_MOMENTS,
    TIMELINE_MONTHS,
    TIMELINE_PERIODS,
    TIMELINE_START,
    TimelineMoment,
    TimelinePeriod,
    YearMonth
} from '../contracts/timeline.data';

export interface TimelineTick {
    label: string;
    slug: string;
    isYearMark: boolean;
    year: number;
    month: number;
    rowIndex: number;
}

export interface MomentLabel {
    id: string;
    label: string;
    color: string;
}

@Injectable({
    providedIn: 'root'
})
export class TimelineService {
    buildTicks(end: YearMonth): TimelineTick[] {
        const ticks: Omit<TimelineTick, 'rowIndex'>[] = [];
        let year = TIMELINE_START.year;
        let month = TIMELINE_START.month;

        while (year < end.year || (year === end.year && month <= end.month)) {
            const label = `${TIMELINE_MONTHS[month]} ${year}`;
            ticks.push({
                label,
                slug: label.toLowerCase().replace(/\s+/g, '-'),
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

    buildMoments(ticks: TimelineTick[]): Map<number, MomentLabel[]> {
        const byRow = new Map<number, MomentLabel[]>();

        const add = (rowIndex: number, label: MomentLabel, sortKey: number) => {
            const bucket = byRow.get(rowIndex) ?? [];
            (bucket as (MomentLabel & { _sort?: number })[]).push(Object.assign(label, { _sort: sortKey }));
            byRow.set(rowIndex, bucket);
        };

        for (const period of TIMELINE_PERIODS) {
            const color = CATEGORY_COLORS[period.category];

            add(
                this.rowIndexFor(ticks, period.start),
                { id: `${period.id}-start`, label: this.startLabel(period), color },
                0
            );

            if (period.end) {
                add(
                    this.rowIndexFor(ticks, period.end),
                    { id: `${period.id}-end`, label: this.endLabel(period), color },
                    1
                );
            }
        }

        for (const moment of TIMELINE_MOMENTS) {
            add(
                this.rowIndexFor(ticks, moment.date),
                {
                    id: moment.id,
                    label: this.momentLabel(moment),
                    color: CATEGORY_COLORS[moment.category]
                },
                2
            );
        }

        for (const [rowIndex, labels] of byRow) {
            const sorted = (labels as (MomentLabel & { _sort?: number })[])
                .sort((a, b) => (a._sort ?? 0) - (b._sort ?? 0))
                .map(({ _sort, ...rest }) => rest);
            byRow.set(rowIndex, sorted);
        }

        return byRow;
    }

    momentsAt(moments: Map<number, MomentLabel[]>, rowIndex: number): MomentLabel[] {
        return moments.get(rowIndex) ?? [];
    }

    private rowIndexFor(ticks: TimelineTick[], date: YearMonth): number {
        const slug = `${TIMELINE_MONTHS[date.month]} ${date.year}`.toLowerCase().replace(/\s+/g, '-');
        return ticks.find(tick => tick.slug === slug)?.rowIndex ?? 0;
    }

    private startLabel(period: TimelinePeriod): string {
        if (period.category === 'Education') {
            return `Started ${period.role} at ${period.title}`;
        }
        return `Joined ${period.title} as ${period.role}`;
    }

    private endLabel(period: TimelinePeriod): string {
        if (period.category === 'Education') {
            return `Completed ${period.role} at ${period.title}`;
        }
        const tenure = this.formatTenure(period.start, period.end!);
        return `Left ${period.title} after ${tenure}`;
    }

    private momentLabel(moment: TimelineMoment): string {
        switch (moment.category) {
            case 'Certification':
                return `Earned ${moment.title}`;
            case 'Project':
                return `Launched ${moment.title}`;
            default:
                return moment.title;
        }
    }

    private formatTenure(start: YearMonth, end: YearMonth): string {
        const totalMonths = end.year * 12 + end.month - (start.year * 12 + start.month) + 1;
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
