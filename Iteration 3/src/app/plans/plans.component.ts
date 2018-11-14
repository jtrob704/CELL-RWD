import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  encapsulation:
  ViewEncapsulation.None
})

export class PlansComponent implements OnInit {
  plans: Plan[];

  constructor(private planService: PlanService, private cartService: CartService, private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit() {
    this.planService.getAllPlans().subscribe(plans => this.plans = plans, err => console.log(err));
  }
  isInCart(plan: Plan): boolean {
    return this.cartService.planExistsInCart(plan);
  }
  addToCart(plan: Plan): void {
    this.cartService.addPlan(plan);
    this.router.navigate(['cart']);
  }
}

