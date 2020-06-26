import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
heroHeading:string;
heroDescription:string;
heroText:string;
heroBtn:string;
  constructor() { 
    this.heroHeading = "Best Trip ever mever";
    this.heroDescription = "Das ist eine eine kleine Beschreibung ";
    this.heroText = "Das ist ein ein Text im Hero Sektor beziehungsweise im Jumbotron";
    this.heroBtn = "Über uns"
  }

  ngOnInit(): void {
  }

}
