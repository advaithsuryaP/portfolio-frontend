import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../core/components/sidebar/sidebar';

@Component({
    selector: 'app-home',
    imports: [RouterOutlet, Sidebar],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export default class Home { }
