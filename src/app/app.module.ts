import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavigationBarComponent,
    ProductAlertsComponent,
    CartComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
