import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-item',
  templateUrl: './play-item.component.html',
  styleUrls: ['./play-item.component.scss'],
})
export class PlayItemComponent implements OnInit {
  constructor() {}
  isPlay: boolean = false;
  isInitRotate = true;
  title = 'RUNG ĐỘNG - DƯƠNG EDWARD x VŨ KHẮC ANH (Duzme Remix) / Audio Lyrics';

  ngOnInit(): void {}

  onPlayAndPause = () => {
    const playAnimation: HTMLElement | null =
      document.querySelector('#play-animation');
    console.log(this.isInitRotate);

    if (this.isInitRotate && playAnimation) {
      playAnimation.classList.add('rotate-auto-class');
      this.isPlay = !this.isPlay;
      this.isInitRotate = false;
      return;
    }

    if (playAnimation) {
      this.isPlay && playAnimation.classList.add('pause');
      !this.isPlay && playAnimation.classList.remove('pause');

      this.isPlay = !this.isPlay;
    }
  };
}
