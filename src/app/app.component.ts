import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened = false;
  headerImage = 'assets/icons/RavenFlyingWhiteSquare.png';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigateByUrl('/home');
  }
}
