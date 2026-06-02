import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import IconComponent from '../../../ui/icon/icon.component';

@Component({
    selector: 'app-experience',
    imports: [MatIconModule, MatButtonModule, IconComponent],
    templateUrl: './experience.html',
    styleUrl: './experience.scss'
})
export class Experience {}
