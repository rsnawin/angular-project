import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsideComponent } from './clientside/clientside.component';
import { AdminsideComponent } from './adminside/adminside.component';
import { BuyingitemsComponent } from './buyingitems/buyingitems.component';
import { AdminitemsComponent } from './adminitems/adminitems.component';

const routes: Routes = [{path:'',component:ClientsideComponent},{path:'adminside',component:AdminsideComponent},{path:'buyingitems',component:BuyingitemsComponent},{path:'adminitems',component:AdminitemsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
