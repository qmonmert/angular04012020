import { ClassicPageComponent } from './classic-page/classic-page.component';
import { MaterialPageComponent } from './material-page/material-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'material-page', component: MaterialPageComponent },
  { path: 'classic-page', component: ClassicPageComponent },
  { path: '**', component: MaterialPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
