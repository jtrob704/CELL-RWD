import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  phone: Phone = undefined;
  constructor(private route: ActivatedRoute, private router: Router, private phoneService:
    PhoneService, private cartService: CartService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'),
      10);
    this.phoneService.getPhone(id).subscribe(phone => this.phone =
      phone, err => console.error(err));
  }
  isInCart(phone: Phone): boolean {
    return this.cartService.existsInCart(phone);
  }
  addToCart(phone: Phone): void {
    this.cartService.add(phone);
    this.router.navigate(['cart']);
  }
}

