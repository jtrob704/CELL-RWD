import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
  encapsulation:
    ViewEncapsulation.None
})

export class PhonesComponent implements OnInit, AfterViewInit {
  phones: Phone[];

  constructor(private phoneService: PhoneService, private router: Router, private cartService: CartService)  { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit() {
    this.phoneService.getAllPhones().subscribe(phones => this.phones = phones, err => console.log(err));
  }

  ngAfterViewInit() {
    $.extend($.expr[':'], {
      'containsIN': function(elem, i, match, array) {
      return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || '').toLowerCase()) >= 0;
      }
      });

    $('#search-box').keyup(function () {
      $('.card').removeClass('d-none');
      const keyword = $(this).val();
      $('.row').find('.card-title:not(:containsIN("' + keyword + '"))').parent().parent().addClass('d-none');
    });
  }
  isInCart(phone: Phone): boolean {
    return this.cartService.existsInCart(phone);
  }
  addToCart(phone: Phone): void {
    this.cartService.add(phone);
    this.router.navigate(['cart']);
  }
}

