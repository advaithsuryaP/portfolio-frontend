import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component'),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'timeline'
            },
            {
                path: 'timeline',
                loadChildren: () => import('./timeline/timeline.routes')
            },
            {
                path: 'about',
                loadChildren: () => import('./about/about.routes')
            },
            {
                path: 'ai',
                loadChildren: () => import('./advaith-intelligence/advaith-intelligence.routes')
            }
        ]
    }
];
