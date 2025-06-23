import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [MatButtonModule, RouterLink, RouterLinkActive],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss'
})
export class Navbar {
    navigationItems: { label: string; route: string }[] = [
        { label: 'about', route: '/about' },
        { label: 'built', route: '/built' }
    ];
}
