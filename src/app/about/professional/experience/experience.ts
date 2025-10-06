import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import Icon from '../../../ui/icon/icon';

@Component({
    selector: 'app-experience',
    imports: [MatIconModule, MatButtonModule, Icon],
    templateUrl: './experience.html',
    styleUrl: './experience.scss'
})
export class Experience {}
