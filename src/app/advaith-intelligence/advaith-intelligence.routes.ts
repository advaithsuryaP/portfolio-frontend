import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./advaith-intelligence.component')
    }
] as Routes;
