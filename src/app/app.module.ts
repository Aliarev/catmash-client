import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { DataTableModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatShowComponent } from './cat/show/show.component';
import { CatVoteComponent } from './cat/vote/vote.component';
import { EnvironnementService } from './service/environnement.service';
import { API_BASE_URL, WebApiService } from './service/webapi.service';

export function getWebApiBaseUrl(env: EnvironnementService): string {
  return env.apiUrl;
}

export function createWebApiService(http: Http, url: string): WebApiService {
  return new WebApiService(http, url);
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CatShowComponent,
    CatVoteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataTableModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EnvironnementService,
    {
      provide: API_BASE_URL,
      deps: [EnvironnementService],
      useFactory: getWebApiBaseUrl
    },
    {
      provide: WebApiService,
      deps: [Http, API_BASE_URL],
      useFactory: createWebApiService
    }
  ]
})
export class AppModule { }
