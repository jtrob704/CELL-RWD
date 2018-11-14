import { Component, OnInit, } from '@angular/core';
import * as $ from 'jquery';
import { CartService } from '../cart.service';
import { Phone } from '../phone';
import { Plan } from '../plan';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  title = 'cart';
  phones: Phone[];
  plans: Plan[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getAll().subscribe(data => {
      this.phones = data;
    }, err => {
      this.phones = [];
      console.error(err);
    });
    this.cartService.getAllPlans().subscribe(data => {
      this.plans = data;
    }, err => {
      this.plans = [];
      console.error(err);
    });
  }
  empty(): void {
    this.cartService.empty();
    this.phones = [];
    this.plans = [];
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
  removePlanFromCart(plan: Plan): void {
    this.cartService.removePlan(plan);
    this.cartService.getAllPlans().subscribe(data => {
      this.plans = data;
    }, err => {
      this.plans = [];
      console.error(err);
    });
  }
  getCartTotal(): number {
    return this.phones.map(phone => phone.price * phone.quantity).reduce((a, b) => a + b, 0);
  }
  getPlanTotal(): number {
    if (this.plans.length > 0) {
      return this.plans.map(plan => plan.price).reduce((c, d) => c + d);
    } else {
      return 0;
    }
  }
}
