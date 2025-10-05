import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Experience } from './experience/experience';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { Summary } from './summary/summary';

@Component({
    selector: 'app-professional',
    imports: [MatIconModule, MatDividerModule, Experience, Education, Skills, Summary],
    templateUrl: './professional.html',
    styleUrl: './professional.scss'
})
export default class Professional {}
