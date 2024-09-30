import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../../core/interfaces/product/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  @Input() title: string = '';

  products: Product[] = [
    {
      title: 'Sri Lankan Jackfruit in Brine (400g)',
      price: 3.99,
      imageUrl: 'https://us.images.westend61.de/0001120354j/jackfruit-in-brine-LVF07702.jpg',
      rating: 4.5
    },
    {
      title: 'Coconut Milk - Traditional Sri Lankan (200ml)',
      price: 1.49,
      imageUrl: 'https://cdn11.bigcommerce.com/s-p6eiht9ezd/images/stencil/1280x1280/products/12528/13583/CMP_Coconut_Milk_Powder_Organic_A__17139.1655559693.jpg?c=1',
      rating: 4.8
    },
    {
      title: 'Sri Lankan Tuna Chunks in Oil (185g)',
      price: 2.79,
      imageUrl: 'https://www.onlinekade.lk/wp-content/uploads/2023/02/4792225700846-1.jpg',
      rating: 4.2
    },
    {
      title: 'Mango Chutney - Authentic Sri Lankan (250g)',
      price: 3.49,
      imageUrl: 'https://i.ebayimg.com/images/g/Io0AAOSwouNiwXjr/s-l1200.jpg',
      rating: 4.7
    },
    {
      title: 'Curry Powder Mix - Sri Lankan Spices (50g)',
      price: 2.29,
      imageUrl: 'https://rayinfood.com/wp-content/uploads/2022/05/2K1A0040-removebg-preview.png',
      rating: 4.9
    }
  ];
}

