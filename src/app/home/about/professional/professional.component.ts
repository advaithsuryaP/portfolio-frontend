import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-professional.component',
    imports: [MatIconModule, MatExpansionModule],
    templateUrl: './professional.component.html',
    styleUrl: './professional.component.scss'
})
export class ProfessionalComponent {}
