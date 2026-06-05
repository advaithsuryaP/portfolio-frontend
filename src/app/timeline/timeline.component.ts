import { Component, inject, signal } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import IconComponent from '../ui/icon/icon.component';
import { TIMELINE_CONSTANTS } from './contracts/timeline.constants';
import { EmploymentSpan, TimelineMilestone, TimelineService, TimelineTick } from './services/timeline.service';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    imports: [MatTooltipModule, IconComponent],
    styleUrl: './timeline.component.scss'
})
export default class TimelineComponent {
    private readonly timelineService = inject(TimelineService);

    readonly rowHeight = TIMELINE_CONSTANTS.rowHeight;
    readonly ticks: TimelineTick[] = this.buildTicks();
    readonly milestones = this.timelineService.buildMilestones(this.ticks);
    readonly spans: EmploymentSpan[] = this.buildSpans();
    readonly gridTemplateRows = `repeat(${this.ticks.length}, minmax(${this.rowHeight}px, auto))`;

    private readonly highlightedRows = signal<ReadonlySet<number>>(new Set());
    private readonly elongatedRow = signal<number | null>(null);

    milestonesAt(rowIndex: number): TimelineMilestone[] {
        return this.timelineService.milestonesAt(this.milestones, rowIndex);
    }

    isHighlighted(rowIndex: number): boolean {
        return this.highlightedRows().has(rowIndex);
    }

    isElongated(rowIndex: number): boolean {
        return this.elongatedRow() === rowIndex;
    }

    onTickHover(rowIndex: number): void {
        this.highlightedRows.set(new Set([rowIndex]));
        this.elongatedRow.set(rowIndex);
    }

    onMilestoneHover(rowIndex: number): void {
        this.highlightedRows.set(new Set([rowIndex]));
        this.elongatedRow.set(null);
    }

    onContentHover(topRow: number, bottomRow: number): void {
        const rows = new Set<number>();
        const start = Math.min(topRow, bottomRow);
        const end = Math.max(topRow, bottomRow);

        for (let row = start; row <= end; row += 1) {
            rows.add(row);
        }

        this.highlightedRows.set(rows);
        this.elongatedRow.set(null);
    }

    onHoverEnd(): void {
        this.highlightedRows.set(new Set());
        this.elongatedRow.set(null);
    }

    private buildTicks(): TimelineTick[] {
        const now = new Date();
        return this.timelineService.buildTicks(now.getFullYear(), now.getMonth());
    }

    private buildSpans(): EmploymentSpan[] {
        const now = new Date();
        return this.timelineService.buildEmploymentSpans(this.ticks, now.getFullYear(), now.getMonth());
    }
}
