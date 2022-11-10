import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado.component';

export const routes: Routes = [
  { path: '', component: ListadoComponent},
  { path: ':provincia', component: ListadoComponent, data:{uid:'provincia'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoRoutingModule {

  constructor( private router: Router){
    // new Routes mock... this info can be served trought endpoint
    const newRoutes = [
      {
        rootPath: 'listado',
        routes: [
          { path: ':provincia/:poblacion', component: ListadoComponent, data: { uid:'provincia y población'}}
        ]
      }
    ];

    setTimeout(()=>{
      this.addDynamicChildRoutes( newRoutes );
    });
  }

  addDynamicChildRoutes(newRoutes:any[]): void {
    this.router.config.forEach((rootRoute: any) => {
      newRoutes.forEach((newRoute: any) => {
        if (rootRoute._loadedConfig && rootRoute.path === newRoute.rootPath) {
          rootRoute._loadedConfig.routes = [
            ...rootRoute._loadedConfig.routes,
            ...newRoute.routes
          ];
        }
      });
    });
  }

}
