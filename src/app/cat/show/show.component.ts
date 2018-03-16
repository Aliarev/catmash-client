import { Component, OnInit } from '@angular/core';

import { CatDto, WebApiService } from '../../service/webapi.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html'
})
export class CatShowComponent implements OnInit {
  public cats: CatDto[] = [];

  public constructor(
    private webapiService: WebApiService
  ) { }

  public ngOnInit() {
    this.webapiService.apiCatAllGet().subscribe(cats => this.cats = cats);
  }
}
