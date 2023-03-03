import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PROVIDERS } from '../constants/providers';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit, OnChanges {

  @Input() providerInfo: any;
  provider: any = {};
  providerData: any;
  providerConst: any = PROVIDERS;


  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.providerInfo !== undefined && changes.providerInfo.currentValue){
      this.providerData = changes.providerInfo.currentValue.data;
      // console.log("inspeccionar detalle ingrediente", this.ingredient)
    }
  }

}
