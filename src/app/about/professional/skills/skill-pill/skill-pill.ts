import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Icon from '../../../../ui/icon/icon';
import { Skill } from '../skill.interface';

@Component({
    selector: 'app-skill-pill',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Icon],
    template: `
        <div class="flex items-center justify-center gap-2 p-2 border border-gray-200 rounded-xl transition">
            <app-icon [src]="'images/' + skill.icon" [alt]="skill.name" />
            <p class="fs-medium">
                <strong>{{ skill.name }}</strong>
            </p>
        </div>
    `
})
export class SkillPill {
    @Input({ required: true }) skill!: Skill;
}
