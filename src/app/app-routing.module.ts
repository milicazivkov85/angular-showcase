import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFormComponent } from "./crud-form/crud-form.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { CrudListComponent } from "./crud-list/crud-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'crud', component: CrudFormComponent},
  {path: 'list', component: CrudListComponent},
  {path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
