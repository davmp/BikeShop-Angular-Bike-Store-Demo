import { Component, inject } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterLink,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header
      class="fixed w-full max-w-5xl top-0 left-0 right-0 pt-2 z-50 px-2 sm:px-4 mx-auto"
    >
      <div
        class="bg-slate-100/80 backdrop-blur-md text-white px-4 py-3 rounded-2xl border border-slate-200 flex justify-between items-center"
      >
        <button routerLink="/" class="h-6 sm:h-10 cursor-pointer">
          <img src="assets/logo.png" alt="Logo" class="h-full" />
        </button>
        <h1 class="text-2xl font-bold text-slate-800">
          {{ pageTitle }}
        </h1>
        <button
          routerLink="/cart"
          class="bg-amber-600 px-2 sm:px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <i class="pi pi-shopping-cart"></i>
          <span class="hidden sm:inline-block">
            Carrinho @if (cartService.total) {
            {{ '(' + cartService.total + ')' }}
            }
          </span>
        </button>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  pageTitle = '';

  cartService = inject(CartService);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.route.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          return child?.snapshot.data?.['title'] ?? 'Loja de Motos';
        })
      )
      .subscribe((title) => (this.pageTitle = title as string));
  }
}
