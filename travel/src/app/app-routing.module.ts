import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {
    path:"",component: HomeComponent
  },{
    path:"about",component: AboutComponent
  },{
    path:"destinations", component: ProductListComponent
  },{
    path: 'products/:productId', component: ProductDetailsComponent
  },{
    path: 'cart', component: CartComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
