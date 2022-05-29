import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SpotifyWebApi from 'spotify-web-api-js';
import { spotifyEnv } from 'src/environments/environment';
import { AccessToken } from './api.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  spotifyApi = new SpotifyWebApi();
  constructor(private http: HttpClient) {}

  getTrack = () => {
    return this.spotifyApi.getCategories();
  };

  getUrlAuthorize = (redirectUrl: string): string => {
    return `${spotifyEnv.authorizeUrl}?client_id=${spotifyEnv.clientId}&response_type=code&redirect_uri=${redirectUrl}&show_dialog=true&scope=user-read-private+user-read-email+app-remote-control+user-library-read+user-library-modify`;
  };

  getAccessToken = (code: string, redirectUri: string) => {
    const body = 'grant_type=client_credentials';
    const idAndSecret: string = btoa(
      spotifyEnv.clientId + ':' + spotifyEnv.clientSecret
    );

    const options = {
      headers: new HttpHeaders({
        Authorization: 'Basic '.concat(idAndSecret),
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    return this.http.post<AccessToken>(spotifyEnv.tokenUrl, body, options);
  };
}
