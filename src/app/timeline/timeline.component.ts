import { Component, inject, signal } from '@angular/core';
import { TIMELINE_CONSTANTS } from './contracts/timeline.constants';
import { MomentLabel, TimelineService, TimelineTick } from './services/timeline.service';

const DEFAULT_HIGHLIGHT = 'var(--mat-sys-primary)';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss'
})
export default class TimelineComponent {
    private readonly timelineService = inject(TimelineService);

    readonly rowHeight = TIMELINE_CONSTANTS.rowHeight;
    readonly rowGap = TIMELINE_CONSTANTS.rowGap;
    readonly ticks: TimelineTick[] = this.buildTicks();
    readonly moments = this.timelineService.buildMoments(this.ticks);
    readonly gridTemplateRows = `repeat(${this.ticks.length}, minmax(${this.rowHeight}px, auto))`;

    private readonly highlightedRow = signal<number | null>(null);
    readonly highlightColor = signal<string | null>(null);

    momentsAt(rowIndex: number): MomentLabel[] {
        return this.timelineService.momentsAt(this.moments, rowIndex);
    }

    isHighlighted(rowIndex: number): boolean {
        return this.highlightedRow() === rowIndex;
    }

    onTickHover(rowIndex: number): void {
        this.highlightedRow.set(rowIndex);
        this.highlightColor.set(DEFAULT_HIGHLIGHT);
    }

    onMomentHover(rowIndex: number, color: string): void {
        this.highlightedRow.set(rowIndex);
        this.highlightColor.set(color);
    }

    onHoverEnd(): void {
        this.highlightedRow.set(null);
        this.highlightColor.set(null);
    }

    private buildTicks(): TimelineTick[] {
        const now = new Date();
        return this.timelineService.buildTicks({ year: now.getFullYear(), month: now.getMonth() });
    }
}
