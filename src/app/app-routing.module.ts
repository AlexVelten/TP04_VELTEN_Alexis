import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'form-customer', loadChildren: () => import('./form-customer/form-customer.module').then(m => m.CustomersModule) },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: ProductsDetailComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
