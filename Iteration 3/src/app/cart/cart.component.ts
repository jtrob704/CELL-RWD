import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  total = 0;

  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) { }

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
}
