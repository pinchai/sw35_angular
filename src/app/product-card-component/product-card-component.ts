import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {

  @Input() product:any = []
}
