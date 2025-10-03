import { computed, inject, Injectable, signal } from '@angular/core';
import { Bike } from '../../models/product.models';
import { BikeService } from '../bike/bike.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private bikeService = inject(BikeService);

  cart = signal<Bike[]>([]);

  addToCart(bike: Bike) {
    if (this.bikeService.bikeInStock(bike.id)) {
      this.cart.update((current) => [...current, bike]);
      this.bikeService.reduceStock(bike.id);
    }
  }

  removeFromCart(bikeId: number) {
    let removed = false;
    this.cart.update((current) =>
      current.filter((bike) => {
        if (!removed && bike.id === bikeId) {
          removed = true;
          return false;
        }
        return true;
      })
    );
    if (removed) {
      this.bikeService.increaseStock(bikeId);
    }
  }

  getAmountOf(bikeId: number): number {
    return this.cart().filter((bike) => bike.id === bikeId).length;
  }

  clearCart() {
    this.cart.set([]);
    this.cart().forEach((bike) => this.bikeService.increaseStock(bike.id));
  }

  get total() {
    return this.cart().length;
  }

  totalPrice = computed(() => {
    return this.cart().reduce((sum, bike) => sum + bike.price, 0);
  });

  constructor() {}
}
