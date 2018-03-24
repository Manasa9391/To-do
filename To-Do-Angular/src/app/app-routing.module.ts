import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListHomeComponent } from './to-do-list-home/to-do-list-home.component';
import {ManasaComponent} from './manasa/manasa.component';
import {HarshComponent} from './harsh/harsh.component';


const routes: Routes = [
{  path:'',
component:ToDoListHomeComponent},
{  path:'Manasa',
component:ManasaComponent},
{  path:'Harsh/:id',
component:HarshComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
