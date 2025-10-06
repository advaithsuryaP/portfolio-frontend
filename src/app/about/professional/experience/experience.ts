import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-experience',
    imports: [MatIconModule, MatButtonModule],
    templateUrl: './experience.html',
    styleUrl: './experience.scss'
})
export class Experience {}
