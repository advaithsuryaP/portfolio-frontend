import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-about.component',
    imports: [FormsModule, MatIconModule, MatSlideToggleModule, RouterOutlet],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export default class AboutComponent {
    private router = inject(Router);

    showProfessionalView: boolean = true;

    toggleView(): void {
        this.showProfessionalView = !this.showProfessionalView;
        this.router.navigate(['/about', this.showProfessionalView ? 'whoami' : 'whoamireally']);
    }
}
