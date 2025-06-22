import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-about',
    imports: [FormsModule, MatIconModule, MatSlideToggleModule],
    templateUrl: './about.html',
    styleUrl: './about.scss'
})
export default class About {
    showPersonalView: boolean = false;
}
