import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ShopComponent} from "./shop/shop.component";
import {ProductsComponent} from "./shop/products/products.component";
import {ShippingComponent} from "./shop/shipping/shipping.component";
import {EditorComponent} from "./shop/products/editor/editor.component";
import {EditorUserComponent} from "./shop/users/editor-user/editor-user.component"


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'shop', component: ShopComponent, children: [
      {path: '', component: ProductsComponent},
      {path: 'editor', component: EditorComponent},
      {path: 'editor/:id', component: EditorComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'products/editor', component: EditorComponent},
      {path: 'products/editor/:id', component: EditorComponent},
      {path: 'users/editorUser', component: EditorUserComponent},
      {path: 'users/editorUser/:id', component: EditorUserComponent},
      {path: 'shipping', component: ShippingComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
