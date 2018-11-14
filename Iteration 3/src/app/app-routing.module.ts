import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PlansComponent } from './plans/plans.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'phones',
    component: PhonesComponent
  },
  {
    path: 'plans',
    component: PlansComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: PhoneDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
