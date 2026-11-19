import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card-component/product-card-component';
import { JsonPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [ProductCardComponent, JsonPipe, RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name_: string = 'Heng dara';
  gender: string = 'Male';
}
