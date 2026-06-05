import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./timeline.component')
    }
] as Routes;
