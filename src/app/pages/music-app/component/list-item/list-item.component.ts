import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ENTER_KEYCODE } from 'src/app/variables';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    // this.api.getAccessToken().then((res) => console.log(res));
  }

  onKeywordChange = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.keyCode !== ENTER_KEYCODE) return;
    console.log(event);
  };
}
