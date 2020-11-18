import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './customer/home/home.component';
import { DetailsComponent } from './customer/details/details.component';
import { CreateComponent } from './customer/create/create.component';
import { UpdateComponent } from './customer/update/update.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/helpers/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: '/', pathMatch: 'full'},
  { path: "customer", component: CustomerComponent},
  { path: "login", component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'customer/details', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'customer/update', component: UpdateComponent },

  // // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
