import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bluejayImage = 'assets/icons/BlueJayBoxNoText.png';
  jackdawImage = 'assets/icons/JackdawBoxNoText.png';
  magpieImage = 'assets/icons/MagpieBoxNoText.png';
  ravenImage = 'assets/icons/RavenBoxNoText.png';

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
