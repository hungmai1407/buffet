import { Component, OnInit } from '@angular/core';
import { COLOR_SELECTOR_HOVER, SELECTOR } from 'src/app/variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.createEventListener();
  }

  private createEventListener = () => {
    const noteElement: HTMLElement | null = document.querySelector('.note');
    Object.values(SELECTOR).forEach((selector: SELECTOR) => {
      const element: HTMLElement | null = document.querySelector(
        `#${selector}`
      );
      const pageCover: HTMLElement | null = document.querySelector(
        `#${selector}-cover`
      );
      element?.addEventListener('mouseover', () => {
        element.style.color = COLOR_SELECTOR_HOVER[selector];
        if (pageCover) {
          pageCover.style.top = '0';
        }
        if (noteElement) {
          noteElement.style.left = '20px';
          noteElement.style.opacity = '1';
        }
      });
      element?.addEventListener('mouseout', () => {
        element.style.color = 'white';
        if (pageCover) {
          pageCover.style.top = '-120%';
        }
        if (noteElement) {
          noteElement.style.left = '-50%';
          noteElement.style.opacity = '0';
        }
      });
    });
  };
}
