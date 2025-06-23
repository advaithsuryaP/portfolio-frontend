import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Personal } from './personal/personal';
import { Professional } from './professional/professional';

@Component({
    selector: 'app-about',
    imports: [FormsModule, MatIconModule, MatSlideToggleModule, Personal, Professional],
    templateUrl: './about.html',
    styleUrl: './about.scss'
})
export default class About {
    showProfessionalView: boolean = true;
}
