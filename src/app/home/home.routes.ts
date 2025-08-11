import { Routes } from '@angular/router';

export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about'
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component'),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'whoami'
            },
            {
                path: 'whoami',
                loadComponent: () => import('./about/professional/professional.component')
            },
            {
                path: 'whoamireally',
                loadComponent: () => import('./about/personal/personal.component')
            }
        ]
    },
    {
        path: 'built',
        loadComponent: () => import('./built/built')
    }
] as Routes;
