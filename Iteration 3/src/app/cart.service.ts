import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from './phone';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  phones: Phone[] = [];
  total: 0;
  constructor() { }

  add(phone: Phone): void {
    if (!this.existsInCart(phone)) {
      this.phones.push(phone);
    }
  }
  remove(phone: Phone): void {
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
  getTotal(phone: Phone) {
    return this.total += phone.price;
  }
  empty(): void {
    this.phones = [];
  }
}


