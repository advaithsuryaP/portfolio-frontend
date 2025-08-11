import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-about.component',
    imports: [FormsModule, MatIconModule, MatSlideToggleModule, RouterOutlet],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export default class AboutComponent {
    showProfessionalView: boolean = true;
}
