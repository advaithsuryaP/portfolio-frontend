import { Routes } from '@angular/router';

export default [
    {
        path: '',
        pathMatch: 'full',
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
    }
] as Routes;
