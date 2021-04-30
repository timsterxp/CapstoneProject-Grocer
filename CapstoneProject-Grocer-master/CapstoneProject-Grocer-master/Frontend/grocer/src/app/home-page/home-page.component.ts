import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [`
      .hero {
        background-image: url('assets/Grocer.jpeg') !important;
        background-size: cover;
        background-position: center center;
      }
  
  
  `]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
