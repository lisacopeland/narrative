import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bluejay',
  templateUrl: './bluejay.component.html',
  styleUrls: ['./bluejay.component.scss']
})
export class BluejayComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('hi from bluejay');
  }
}
