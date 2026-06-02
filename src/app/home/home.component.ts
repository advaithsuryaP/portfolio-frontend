import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-home.component',
    imports: [RouterOutlet, SidebarComponent, HeaderComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export default class HomeComponent {}
