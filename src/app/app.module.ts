import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { TvComponent } from './components/tv/tv.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ErrorComponent } from './components/error/error.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileComponent,
    TvComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductInfoComponent,
    ErrorComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    // useClass: PathLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
