import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './state/login.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZipcodeDirective } from './directive/zipcode.directive';
import { AuthService } from './service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmComponent,
    ZipcodeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({login: loginReducer}),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
