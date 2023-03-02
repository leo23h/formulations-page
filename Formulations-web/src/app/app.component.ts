import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FORMULATIONS } from './constants/formulations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Formulations-web';
  

  constructor() {}
  
  ngOnInit(): void {
  }
}
 