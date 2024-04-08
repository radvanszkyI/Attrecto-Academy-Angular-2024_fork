import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgesModule } from './pages/badges/badges.module';
import { UserCreateModule } from "./pages/user-create/user-create.module";
import { UserEditModule } from "./pages/user-edit/user-edit.module";
import { UsersModule } from './pages/users/users.module';
import { CounterComponent } from './shared/counter/counter.component';
import { HeaderComponent } from './shared/header/header.component';

import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderComponent,
    CounterComponent,
    RouterOutlet,
    AppRoutingModule,
    UsersModule,
    BadgesModule,
    HttpClientModule,
    UserEditModule,
    UserCreateModule,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
