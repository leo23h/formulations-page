import { Component } from '@angular/core';
import { FORMULATIONS } from './constants/formulations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulations-web';
  formulationList: any = FORMULATIONS;
}
 