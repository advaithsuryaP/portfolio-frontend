import { Routes } from '@angular/router';
import Home from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        loadChildren: () => import('./home/home.routes'),
    },
];
