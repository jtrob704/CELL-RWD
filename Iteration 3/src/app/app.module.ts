import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhoneService } from './phone.service';
import { PlanService } from './plan.service';
import { CartService } from './cart.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PhonesComponent } from './phones/phones.component';
import { PlansComponent } from './plans/plans.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    PhonesComponent,
    PlansComponent,
    PhoneDetailsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    PhoneService,
    PlanService,
    CartService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
