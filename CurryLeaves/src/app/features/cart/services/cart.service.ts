import { Injectable } from '@angular/core';
import { Product } from '../../../core/interfaces/product/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  private cart$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.cartItems);

  get cart(): Observable<Product[]> {
    return this.cart$.asObservable();
  }

  addToCart(product: Product): void {
    this.cartItems.push(product);
    // Notify all subscribers about the new cart state
    this.cart$.next(this.cartItems);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
}

