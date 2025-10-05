import { Routes } from '@angular/router';

export default [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about'
    },
    {
        path: 'about',
        loadComponent: () => import('../about/about'),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'whoami'
            },
            {
                path: 'whoami',
                loadComponent: () => import('../about/professional/professional')
            },
            {
                path: 'whoamireally',
                loadComponent: () => import('../about/personal/personal')
            }
        ]
    },
    {
        path: 'built',
        loadComponent: () => import('../built/built')
    }
] as Routes;
