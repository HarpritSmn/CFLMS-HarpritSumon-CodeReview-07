import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



const routes: Routes = [
  {
    path:"",component: HomeComponent
  },{
    path:"about",component: AboutComponent
  },{
    path:"destinations", component: ProductListComponent
  },{
    path: 'products/:productId', component: ProductDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
