import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  //{path:'',component:HeaderComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'',component:ProductsComponent},
  {path:'bag',component:CartComponent},
  {path:'Login',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
