import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    imports: [MatButtonModule, RouterLink, RouterLinkActive],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.scss'
})
export class Sidebar {

    navigationItems: { label: string; route: string }[] = [
        { label: 'about', route: '/about' },
        { label: 'built', route: '/built' }
    ]

}
