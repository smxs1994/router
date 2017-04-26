import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Code404Component} from "./code404/code404.component";
import {ProductdescComponent} from "./productdesc/productdesc.component";
import {SellerInfoComponent} from "./seller-info/seller-info.component";

const routes: Routes = [
  {
    path: '',redirectTo:'/home',pathMatch:'full',
  },//重定向
  {
    path: 'home',component:HomeComponent,
  },
  {
    path: 'product/:id',component:ProductComponent,
    children:[
        {path: '',component:ProductdescComponent,},
        {path: 'seller/:id',component:SellerInfoComponent,},
  ],
  },
  {
    path: '**',component:Code404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
