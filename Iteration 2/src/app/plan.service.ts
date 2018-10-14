import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plan } from './plan';
import { PLANS } from './mock-plans';

@Injectable({
  providedIn: 'root',
})

export class PlanService {

  constructor() { }
  getAllPlans(): Observable<Plan[]> {
    return of(PLANS);
  }

  getPlan(id: number): Observable<Plan> {
    const plan = PLANS.filter(plans => plans.id === id);

    if (plan.length === 1) {
      return of(plan[0]);
    }
    throw new Error('Plan does not exist');
  }
}
