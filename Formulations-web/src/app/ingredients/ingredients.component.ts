import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FORMULATIONS } from '../constants/formulations';
import { INGREDIENT_LIST } from '../constants/ingredients';
import { FormulationsService } from '../formulations.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit, OnDestroy {
  id: string;
  formulationList: any[] = FORMULATIONS;
  ingredientList: any[] = INGREDIENT_LIST;
  ingredientsListData: any[] = [];
  formulationData: any = {};

  constructor(private route: ActivatedRoute, private formulationsService: FormulationsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getFormulation(parseInt(this.id));
    console.log("id del params",this.id);
    this.formulationsService.clearData();
  }

  ngOnDestroy(): void {
    this.formulationsService.clearData();
  }

  getFormulation(id){
    this.formulationData = this.formulationList.find(i => i.id === id);
    console.log('formula encontrada', this.formulationData);
    this.getIngredients(this.formulationData.id)
  }

  getIngredients(id){
    let arrayTemp = [];
    for (let i = 0; i < this.ingredientList.length; i++) {
      if(this.ingredientList[i].formulationId === id){
        arrayTemp.push(this.ingredientList[i]);
      }
    }
    this.ingredientsListData = arrayTemp;
    console.log("objetos encontrados", this.ingredientsListData);

  }

}
