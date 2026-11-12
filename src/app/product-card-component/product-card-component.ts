import { Component, Input } from '@angular/core';
import { ToKhrPipe } from '../pipes/to-khr-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [ToKhrPipe, CurrencyPipe],
  selector: 'app-product-card-component',
  styleUrl: './product-card-component.css',
  templateUrl: './product-card-component.html',
})
export class ProductCardComponent {
  @Input() product: any = [];
}
