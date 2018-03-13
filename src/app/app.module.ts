import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatShowComponent } from './cat/show/show.component';
import { CatVoteComponent } from './cat/vote/vote.component';
import { StubService } from './service/stub.service';

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
    FormsModule,
    HttpModule
  ],
  providers: [
    StubService
  ]
})
export class AppModule { }
