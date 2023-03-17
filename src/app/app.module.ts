import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddressComponent } from './pages/address/address.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutBasketComponent } from './pages/checkout-basket/checkout-basket.component';
import { DeliveryAndPaymentComponent } from './pages/delivery-and-payment/delivery-and-payment.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductInfoComponent } from './pages/product/product-info/product-info.component';
import { BreakfastsComponent } from './pages/product/breakfasts/breakfasts.component';
import { WeeklySpecialComponent } from './pages/product/weekly-special/weekly-special.component';
import { SaladPastsComponent } from './pages/product/salad-pasts/salad-pasts.component';
import { SaladsComponent } from './pages/product/salads/salads.component';
import { FitSandwichesComponent } from './pages/product/fit-sandwiches/fit-sandwiches.component';
import { SoupsComponent } from './pages/product/soups/soups.component';
import { DessertsComponent } from './pages/product/desserts/desserts.component';
import { DrinksComponent } from './pages/product/drinks/drinks.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { CreateYourOwnComponent } from './pages/create-your-own/create-your-own.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DeliveryTypeComponent } from './pages/delivery-type/delivery-type.component';
import { AccountComponent } from './account/account.component';
import { PersonalDataComponent } from './account/personal-data/personal-data.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    AddressComponent,
    AuthorizationComponent,
    CheckoutComponent,
    CheckoutBasketComponent,
    DeliveryAndPaymentComponent,
    HomeComponent,
    ProductComponent,
    ProductInfoComponent,
    BreakfastsComponent,
    WeeklySpecialComponent,
    SaladPastsComponent,
    SaladsComponent,
    FitSandwichesComponent,
    SoupsComponent,
    DessertsComponent,
    DrinksComponent,
    FavoritesComponent,
    FeedbackComponent,
    CreateYourOwnComponent,
    PageNotFoundComponent,
    VacanciesComponent,
    ContactsComponent,
    DeliveryTypeComponent,
    AccountComponent,
    PersonalDataComponent,
    OrderHistoryComponent,
    ChangePasswordComponent,
    AdminComponent,
    AdminProductComponent,
    AdminCategoryComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
