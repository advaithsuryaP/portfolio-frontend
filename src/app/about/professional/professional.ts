import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-professional',
    imports: [MatIconModule, MatDividerModule],
    templateUrl: './professional.html',
    styleUrl: './professional.scss'
})
export default class Professional {}
