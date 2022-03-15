import { UtilityModule } from './../Utility/Utility.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    FormsModule
  ],
  exports :[LoginComponent,SignupComponent]
})
export class AccountsModule { }
