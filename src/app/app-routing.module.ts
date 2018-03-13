import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatShowComponent } from './cat/show/show.component';
import { CatVoteComponent } from './cat/vote/vote.component';

const routes: Routes = [
  {
    path: 'cat',
    children: [
      {
        path: '',
        redirectTo: 'show',
        pathMatch: 'full'
      },
      {
        path: 'show',
        component: CatShowComponent
      },
      {
        path: 'vote',
        component: CatVoteComponent
      }
    ]
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
