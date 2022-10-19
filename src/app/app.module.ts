import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookviewComponent } from './bookview/bookview.component';




const appRoutes:Routes=[
  {
    path:"",component:BookentryComponent
  },
  {
    path:"view",component:BookviewComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookentryComponent,
    BookviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
