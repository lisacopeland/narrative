import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bluejayImage = 'assets/icons/BlueJayOnly.png';
  jackdawImage = 'assets/icons/JackdawOnly.png';
  magpieImage = 'assets/icons/MagpieOnly.png';
  
  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('hi from the home component');
  }

  onBluejay() {
    console.log('going to bluejay');
    this.router.navigateByUrl('bluejay');
  }

}
