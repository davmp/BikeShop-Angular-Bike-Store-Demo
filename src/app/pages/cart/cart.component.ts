import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import type { Bike } from '../../models/product.models';
import { CartService } from '../../services/cart/cart.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [OrderSummaryComponent, CardModule, ButtonModule, RouterLink],
  templateUrl: './cart.component.html',
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);

  get bikes() {
    return this.cartService.cart().reduce((acc, bike) => {
      if (!acc.find((b) => b.id === bike.id)) {
        acc.push(bike);
      }
      return acc;
    }, [] as Bike[]);
  }
}
