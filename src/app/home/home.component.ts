import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bluejayImage = 'assets/icons/BlueJayBox.png';
  jackdawImage = 'assets/icons/JackdawBox.png';
  magpieImage = 'assets/icons/MagpieBox.png';
  ravenImage = 'assets/icons/RavenBox.png';

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
