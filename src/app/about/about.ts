import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterOutlet } from '@angular/router';
import Icon from '../ui/icon/icon';

@Component({
    selector: 'app-about',
    imports: [FormsModule, MatIconModule, MatSlideToggleModule, RouterOutlet, MatTooltipModule, Icon],
    templateUrl: './about.html',
    styleUrl: './about.scss'
})
export default class About {
    private router = inject(Router);

    showProfessionalView: boolean = true;

    toggleView(): void {
        this.showProfessionalView = !this.showProfessionalView;
        this.router.navigate(['/about', this.showProfessionalView ? 'whoami' : 'whoamireally']);
    }
}
