import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { CartService } from '../cart.service';
import { Phone } from '../phone';
import { Plan } from '../plan';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  title = 'checkout';
  phones: Phone[];
  plans: Plan[];

  constructor(private cartService: CartService, private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

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
  gotoCart(): void {
    this.router.navigate(['cart']);
  }
  submitOrder(): void {
    (function () {
      'use strict';

      window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    }());
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
