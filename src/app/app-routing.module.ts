import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { DataListComponent } from './pages/data-list/data-list.component';

const routes: Routes = [
  { path: '', component: UserFormComponent  },      // Form Page
  { path: 'list', component: DataListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
