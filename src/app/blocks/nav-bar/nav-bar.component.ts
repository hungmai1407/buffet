import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  navItem = [
    { routerLink: '', label: 'Dash board' },
    { routerLink: '/music-app', label: 'music' },
    { routerLink: '/todo-app', label: 'todo list' },
  ];

  ngOnInit(): void {}
}
