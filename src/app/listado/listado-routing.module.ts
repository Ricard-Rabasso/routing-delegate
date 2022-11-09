import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado.component';

const routes: Routes = [
  { path: '', component: ListadoComponent},
  { path: ':provincia', component: ListadoComponent, data:{uid:'provincia'}},
  { path: ':provincia/:ciudad', component: ListadoComponent, data:{uid:'provincia y ciudad'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRoutingModule { }
