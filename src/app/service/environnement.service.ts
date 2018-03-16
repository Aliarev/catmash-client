import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class EnvironnementService {
  public constructor() { }

  public get apiUrl(): string {
    return environment.apiUrl;
  }
}
