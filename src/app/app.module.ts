import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewtodoComponent } from './viewtodo/viewtodo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myroute:Routes=[
  {
    path:"",
    component:AddtodoComponent
  },
  {
    path:"view",
    component:ViewtodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    ViewtodoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
