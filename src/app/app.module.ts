import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

// import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddressComponent } from './pages/address/address.component';
import { CheckoutBasketComponent } from './pages/checkout-basket/checkout-basket.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DeliveryTypeComponent } from './pages/delivery-type/delivery-type.component';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    VacanciesComponent,

    FeedbackComponent,
    PageNotFoundComponent,
    ContactsComponent,
    DeliveryTypeComponent,
    CheckoutBasketComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideStorage(() => getStorage()),
    // provideFirestore(() => getFirestore()),
    // provideAuth(() => getAuth()),
    ToastrModule.forRoot({ positionClass: 'inline' }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
