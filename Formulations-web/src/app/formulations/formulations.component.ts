import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FORMULATIONS } from '../constants/formulations';

@Component({
  selector: 'app-formulations',
  templateUrl: './formulations.component.html',
  styleUrls: ['./formulations.component.css']
})
export class FormulationsComponent implements OnInit {
  formulationList: any = FORMULATIONS;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToIngredients(id: string){
    this.router.navigate([`/ingredients/${id}`]);
  }

}
