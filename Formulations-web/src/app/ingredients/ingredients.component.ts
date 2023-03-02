import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormulationsService } from '../formulations.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit, OnDestroy {
  id: string;

  constructor(private route: ActivatedRoute, private formulationsService: FormulationsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log("id del params",this.id);
  }

  ngOnDestroy(): void {
    this.formulationsService.clearData();
  }

}
