import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Phone } from './phone';
import { PHONES } from './mock-phones';

@Injectable({
  providedIn: 'root',
})

export class PhoneService {

  constructor() { }
  getAllPhones(): Observable<Phone[]> {
    return of(PHONES);
  }


  getPhone(id: number): Observable<Phone> {
    const phone = PHONES.filter(phones => phones.id === id);

    if (phone.length === 1) {
      return of(phone[0]);
    }

    throw new Error('Phone does not exist');

  }

}
