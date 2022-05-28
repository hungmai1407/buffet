import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  navItem = [
    { routerLink: '/todo-app', label: 'todo list' },
    { routerLink: '/music-app', label: 'music' },
  ];

  ngOnInit(): void {}
}
