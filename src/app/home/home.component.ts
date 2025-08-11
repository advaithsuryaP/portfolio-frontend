import { Component } from '@angular/core';
import { Sidebar } from '../core/components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home.component',
    imports: [RouterOutlet, Sidebar],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export default class HomeComponent {}
