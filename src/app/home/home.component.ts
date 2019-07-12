import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bluejayImage = 'assets/icons/BlueJayOnly.png';
  constructor() {
  }

  ngOnInit() {
    console.log('hi from the home component');
  }
}
