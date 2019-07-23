import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bluejay',
  templateUrl: './bluejay.component.html',
  styleUrls: ['./bluejay.component.scss']
})
export class BluejayComponent implements OnInit {
  bluejayOnly100Image = 'assets/icons/BlueJayOnly100.png';
  bluejayOnly200Image = 'assets/icons/BlueJayOnly200.png';
  bluejayImage = 'assets/icons/BlueJayBoxNoText.png';

  constructor() {
  }

  ngOnInit() {
    console.log('hi from bluejay');
  }
}
