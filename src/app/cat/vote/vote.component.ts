import { Component, OnInit } from '@angular/core';

import { CatDto, VoteDto, WebApiService } from 'app/service/webapi.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html'
})
export class CatVoteComponent implements OnInit {
  public cats: CatDto[] = [];
  public loading: boolean = true;


  public constructor(
    private webApiService: WebApiService
  ) { }

  public ngOnInit() {
    this.getNextCats();
  }

  private getNextCats() {
    this.loading = true;
    this.webApiService.apiCatNextGet().subscribe(
      cats => {
        this.cats = cats;
        this.loading = false;
      },
      err => this.loading = false
    );
  }

  public vote(indexUp: number) {
    const vote = new VoteDto({
      idDown: this.cats[(indexUp + 1) % 2].id,
      idUp: this.cats[indexUp].id
    });
    this.webApiService.apiCatVotePost(vote).subscribe(() => this.getNextCats());
  }
}
