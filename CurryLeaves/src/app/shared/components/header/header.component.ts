import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeSearchComponent } from '../home-search/home-search.component';
import { CartService } from '../../../features/cart/services/cart.service';
import { Subscription } from 'rxjs';
import { Product } from '../../../core/interfaces/product/product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HomeSearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItemsCount: number = 0;
  private subscription: Subscription = new Subscription();
  isCartSidenavOpen = false;
  isSidenavOpen = false;
  cartItems: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.cart.subscribe((cartItems) => {
      this.cartItemsCount = cartItems.length;
      this.cartItems = cartItems;
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  toggleCartSidenav() {
    this.isCartSidenavOpen = !this.isCartSidenavOpen;
  }


}
