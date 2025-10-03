import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, data: { title: 'Loja de Motos' } },
      {
        path: 'cart',
        component: CartComponent,
        data: { title: 'Carrinho' },
      },
    ],
  },

  { path: '**', redirectTo: '' },
];
