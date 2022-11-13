import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import { HttpClient } from '@angular/common/http';

export function initializeApp( appInitService: AppInitService){
  return (): Promise<any> => {
    return appInitService.init();
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [ AppInitService ],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
