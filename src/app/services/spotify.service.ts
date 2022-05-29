import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token = new BehaviorSubject('');
  constructor() {}

  get authToken() {
    return this.token.getValue();
  }

  set authToken(token: string) {
    this.token.next(token);
  }
}
