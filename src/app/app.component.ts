import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'project';
  isValidSize = false;
  ngOnInit(): void {
    window.onresize = this.onResize;
    this.isValidSize = window.innerWidth > 1000;
  }

  onResize = () => {
    this.isValidSize = window.innerWidth > 1000;
  };
}
