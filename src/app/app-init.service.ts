import { Injectable } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { timer } from 'rxjs';
import { routes } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@Injectable()
export class AppInitService {

  constructor(private router: Router) {}

  init() {
    return new Promise<void>((resolve, reject) => {
      this.getUrls().then((newRoutes: Routes) =>
        this.router.resetConfig( [
        ...newRoutes,
        ...routes,
        ]));

      /*
        WARNING: IMPORTANT!!!
        The newRoutes must be in first place in array.
        > Why?
        > I don't know, but if the new routes are in last position, routing don't recognize the new routes.
      */

      resolve();
    });
  }

  getUrls(): Promise<Routes> {
    return new Promise<Routes>((resolve) => {
      resolve (
        [ { path: 'listado3', loadChildren: () => import('./listado/listado.module').then( m => m.ListadoModule) },
          { path: 'listado4', loadChildren: () => import('./listado/listado.module').then( m => m.ListadoModule) },
          { path: 'listado5', loadChildren: () => import('./listado/listado.module').then( m => m.ListadoModule) }, ]
      )
    })
  }

}

