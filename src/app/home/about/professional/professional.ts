import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-professional',
    imports: [MatExpansionModule, MatIconModule],
    templateUrl: './professional.html',
    styleUrl: './professional.scss'
})
export class Professional {}
