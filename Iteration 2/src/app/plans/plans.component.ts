import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  encapsulation:
  ViewEncapsulation.None
})

export class PlansComponent implements OnInit {
  plans: Plan[];

  constructor(private planService: PlanService, private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit() {
    this.planService.getAllPlans().subscribe(plans => this.plans = plans, err => console.log(err));
  }
}

