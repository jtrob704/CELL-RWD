import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:
  ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  phones: Phone[];

  constructor(private phoneService: PhoneService, private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit() {
    this.phoneService.getAllPhones().subscribe(phones => this.phones = phones, err => console.log(err));
  }
}
