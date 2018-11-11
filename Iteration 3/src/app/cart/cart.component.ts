import { Component, OnInit, } from '@angular/core';
import * as $ from 'jquery';
import { CartService } from '../cart.service';
import { Phone } from '../phone';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  title = 'cart';
  phones: Phone[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getAll().subscribe(data => {
      this.phones = data;
    }, err => {
      this.phones = [];
      console.error(err);
    });
    }
  empty(): void {
    this.cartService.empty();
    this.phones = [];
  }
  removeFromCart(phone: Phone): void {
    this.cartService.remove(phone);
    this.cartService.getAll().subscribe(data => {
      this.phones = data;
    }, err => {
      this.phones = [];
      console.error(err);
    });
  }
  getCartTotal(): number {
        return this.phones.map(phone => phone.price * phone.quantity).reduce((a, b) => a + b, 0);
  }
}
