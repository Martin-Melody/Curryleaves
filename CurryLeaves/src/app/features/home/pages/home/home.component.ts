import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { MissionStatementComponent } from '../../components/mission-statement/mission-statement.component';
import { ProductFilterComponent } from '../../../../shared/components/product-filter/product-filter.component';
import { ProductListComponent } from '../../../../shared/components/product-list/product-list.component';
import { HomeSearchComponent } from '../../../../shared/components/home-search/home-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, MissionStatementComponent, ProductFilterComponent, ProductListComponent, HomeSearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
