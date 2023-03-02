import { Component, OnInit } from '@angular/core';
import { FORMULATIONS } from '../constants/formulations';

@Component({
  selector: 'app-formulations',
  templateUrl: './formulations.component.html',
  styleUrls: ['./formulations.component.css']
})
export class FormulationsComponent implements OnInit {
  formulationList: any = FORMULATIONS;

  constructor() { }

  ngOnInit() {
  }

}
