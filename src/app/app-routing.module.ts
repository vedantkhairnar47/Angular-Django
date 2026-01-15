import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataListComponent } from './pages/data-list/data-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },      // Form Page
  { path: 'list', component: DataListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
