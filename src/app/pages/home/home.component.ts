import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BikeService } from '../../services/bike/bike.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-home',
  imports: [CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  cartService = inject(CartService);
  bikeService = inject(BikeService);
}
