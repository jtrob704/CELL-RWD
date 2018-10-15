import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
  encapsulation:
    ViewEncapsulation.None
})

export class PhonesComponent implements OnInit, AfterViewInit {
  phones: Phone[];

  constructor(private phoneService: PhoneService, private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit() {
    this.phoneService.getAllPhones().subscribe(phones => this.phones = phones, err => console.log(err));
  }

  ngAfterViewInit() {
    $('#search-box').keyup(function () {
      $('.card').removeClass('d-none');
      const keyword = $(this).val();
      $('.card-deck').find('.card-title:not(:contains("' + keyword + '"))').parent().parent().addClass('d-none');
    });
  }
}

