import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'products'
    },
    {
        path: 'dynamic24',
        loadChildren: () => import('./dynamic24/dynamic24.module').then(m => m.Dynamic24Module)
    },
    {
        path: 'products',
        loadChildren: () => import('./products/products.routes').then(r => r.PRODUCT_ROUTES)
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart/cart.component').then(c => c.CartComponent)
    }
];
