import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from './phone';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  phones: Phone[] = [];
  plans: Plan[] = [];

  constructor() { }

  add(phone: Phone): void {
    if (!this.existsInCart(phone)) {
      phone.quantity += 1;
      this.phones.push(phone);
    }
  }
  addPlan(plan: Plan): void {
    if (!this.planExistsInCart(plan)) {
      this.plans.push(plan);
    }
  }
  remove(phone: Phone): void {
    phone.quantity = 0;
    this.removeById(phone.id);
  }
  removeById(id: number): void {
    this.phones = this.phones.filter(item => item.id !== id);
  }
  existsInCart(phone: Phone): boolean {
    return this.existsInCartById(phone.id);
  }
  existsInCartById(id: number): boolean {
    return this.phones.filter(item => item.id === id).length > 0;
  }
  getAll(): Observable<Phone[]> {
    return of(this.phones);
  }
  removePlan(plan: Plan): void {
    this.removePlanById(plan.id);
  }
  removePlanById(id: number): void {
    this.plans = this.plans.filter(item => item.id !== id);
  }
  planExistsInCart(plan: Plan): boolean {
    return this.planExistsInCartById(plan.id);
  }
  planExistsInCartById(id: number): boolean {
    return this.plans.filter(item => item.id === id).length > 0;
  }
  getAllPlans(): Observable<Plan[]> {
    return of(this.plans);
  }
  empty(): void {
    this.phones.forEach(phone => {
      phone.quantity = 0;
    });
    this.plans = [];
    this.phones = [];
  }
}
