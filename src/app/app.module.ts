import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewtodoComponent } from './viewtodo/viewtodo.component';
import { NavbarComponent } from './navbar/navbar.component';

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
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
