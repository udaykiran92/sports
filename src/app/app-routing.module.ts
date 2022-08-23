import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutsComponent } from './components/checkouts/checkouts.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  //{path:'',component:HeaderComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'',component:ProductsComponent},
  {path:'bag',component:CartComponent},
  {path:'Login',component:LoginPageComponent},
  {path:'sign', component:SignupComponent},
  {path:'pay', component:PaymentComponent},
  {path:'ship',component:ShippingComponent},
  {path:'check',component:CheckoutsComponent},
  {path:'confirm',component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
