import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminitemsComponent } from './adminitems/adminitems.component';
import { AdminsideComponent } from './adminside/adminside.component';
import { BuyingitemsComponent } from './buyingitems/buyingitems.component';
import { ClientsideComponent } from './clientside/clientside.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminitemsComponent,
    AdminsideComponent,
    BuyingitemsComponent,
    ClientsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
