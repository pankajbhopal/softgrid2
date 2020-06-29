import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [
  {
    path: "",
    component: UserComponent
  },
  {
    path: "partners",
    component: PartnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
