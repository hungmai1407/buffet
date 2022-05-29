import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-music-app',
  templateUrl: './music-app.component.html',
  styleUrls: ['./music-app.component.scss'],
})
export class MusicAppComponent implements OnInit {
  constructor(
    private readonly api: ApiService,
    private readonly route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    const query = new URLSearchParams(window.location.search);
    const code = String(query.get('code'));
    const currentUrl = location.origin + location.pathname;
    if (!query.get('code')) {
      const url = this.api.getUrlAuthorize(currentUrl);
      window.location.href = url;
    } else {
      sessionStorage.setItem('code', code);
      this.api.getAccessToken(code, currentUrl).subscribe((res) => {
        const { access_token } = res;
        this.api.spotifyApi.setAccessToken(access_token);
        this.spotifyService.authToken = access_token;

        this.api.getTrack().then((res) => console.log(res));
      });
    }
  }
}
