import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-order-summary',
  imports: [ButtonModule],
  templateUrl: './order-summary.component.html',
  styles: ``,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  handleCheckout() {
    alert('O pedido foi realizado com sucesso!');
    this.cartService.clearCart();
  }
}
