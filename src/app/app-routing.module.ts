import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { TvComponent } from './components/tv/tv.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './services/auth.guard';

// 1. named routes - url based navigation
// 2. link based navigation and identify active route
// 3. index route - route which loads at the begining
// 4. wild card route used to avoid dead zones in routing
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "", redirectTo: "home/id", pathMatch: "prefix" },

  {
    path: 'home',
    component: HomeComponent,
    canActivateChild: [AuthGuard],
    canDeactivate: [AuthGuard],
    children: [
      // <h2>Without named router outlet</h2>
      { path: 'mobile', component: MobileComponent },
      { path: 'tv', component: TvComponent },

      // <h2>With named router outlet</h2>
      /* { path: 'mobile', component: MobileComponent, outlet: 'mobile' },
      { path: 'tv', component: TvComponent, outlet: 'tv' }, */
    ]
  },
  { path: 'products', component: ProductsComponent, resolve: { products1: AuthGuard } },
  { path: 'product-info/:id/:name/:image/:description', component: ProductInfoComponent },
  { path: 'product-details', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
