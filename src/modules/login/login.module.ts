import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/modules/shared-module/shared-module.module';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', redirectTo: 'invoices', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent },
];


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  
})
export class LoginModule { }
