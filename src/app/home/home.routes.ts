import { Routes } from '@angular/router';

export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about',
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about'),
    },
    {
        path: 'built',
        loadComponent: () => import('./built/built'),
    },
] as Routes;
