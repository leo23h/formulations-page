import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css']
})
export class IngredientDetailComponent implements OnInit, OnChanges {

  @Input() ingredientInfo: any;
  ingredient: any = {};

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.ingredientInfo !== undefined && changes.ingredientInfo.currentValue){
      this.ingredient = changes.ingredientInfo.currentValue.data;
      // console.log("inspeccionar detalle ingrediente", this.ingredient)
    }
  }

  ngOnInit() {
  }

}
