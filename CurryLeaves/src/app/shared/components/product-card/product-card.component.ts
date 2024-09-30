import { Component, Input } from '@angular/core';
import { Product } from '../../../core/interfaces/product/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../features/cart/services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  constructor(private cartService: CartService) { }

  @Input() product!: Product;

  isActive: boolean = false;
  addToCartClicked: boolean = false;

  toggleOverlay() {
    this.isActive = !this.isActive;
  }

  addToCart() {
    this.addToCartClicked = true;
    this.cartService.addToCart(this.product)
  }
}
