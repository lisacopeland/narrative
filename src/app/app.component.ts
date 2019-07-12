import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blackbird';
  opened = false;
  headerImage = 'assets/icons/flying90.png';

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('hi from the app component');
    this.router.navigateByUrl('/home');
  }
}
