import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhoneService } from './phone.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PhonesComponent } from './phones/phones.component';
import { PlansComponent } from './plans/plans.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    PhonesComponent,
    PlansComponent,
    PhoneDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    PhoneService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
