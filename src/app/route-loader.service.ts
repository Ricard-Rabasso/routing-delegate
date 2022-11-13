import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { of, tap } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';

@Injectable({
    providedIn: 'root',
})
export class RouteLoaderService {
    constructor(
        private router: Router
    ) { }

  /*
    public load() {
      console.log('lading?');
      return new Promise((resolve) => {
        const newRoutes = [
          { path: 'listado2', loadChildren: () => import('./listado/listado.module').then( m => m.ListadoModule) },
          { path: 'listado3', loadChildren: () => import('./listado/listado.module').then( m => m.ListadoModule) },
          { path: 'listado4', loadChildren: () => import('./listado/listado.module').then( m => m.ListadoModule) },
          { path: 'listado5', loadChildren: () => import('./listado/listado.module').then( m => m.ListadoModule) },
        ];
        resolve(this.createRoutes( newRoutes ))
      });
      //this.client.get('/my-routes').pipe(switchMap((json:any) => this.createRoutes(json)));
    }
*/

/*
    private createRoutes(routes:any) {
      const newRoutes = [
        ...this.router.config,
        ...routes
      ];
      console.log('routes created:', newRoutes);
      return newRoutes;
    }
*/
   /* private toCrudRoutes(entities:any) {
      return Object.keys(entities)
        .map(it => ([
          {
            path: `${entities[it].name}s`,
            component: ListadoComponent,
          },
          {
            path: `${entities[it].name}`,
            component: HomeComponent,
          }
        ]).reduce((agg:any, item:any) => ([...agg, ...item]), []))
  }
*/
}
