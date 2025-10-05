import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';

@Component({
    selector: 'app-home.component',
    imports: [RouterOutlet, Sidebar],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export default class HomeComponent {}
