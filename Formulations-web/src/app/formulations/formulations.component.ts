import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FORMULATIONS } from '../constants/formulations';
import { FormulationsService } from '../formulations.service';

@Component({
  selector: 'app-formulations',
  templateUrl: './formulations.component.html',
  styleUrls: ['./formulations.component.css']
})
export class FormulationsComponent implements OnInit {
  formulationList: any = FORMULATIONS;

  constructor(private router: Router, private route : ActivatedRoute, private formulationsService: FormulationsService) { }
 
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  goToIngredients(id: string){
    this.formulationsService.sendData(id);
    this.router.navigate([`/ingredients/${id}`]);
  }

}
