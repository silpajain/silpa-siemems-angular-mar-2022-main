import { AccountsModule } from './accounts/accounts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { UtilityModule } from './Utility/Utility.module';{}

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilityModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
