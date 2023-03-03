import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FORMULATIONS } from './constants/formulations';
import { FormulationsService } from './formulations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Formulations-web';
  showOptionBeforePage: boolean = false;
  showTitle: boolean = true;
  subscription: Subscription;
  dataPassed: any;
  

  constructor(private formulationService: FormulationsService, private router: Router) {
    // subscribe to home component messages
    this.subscription = this.formulationService.getData().subscribe(value => {
      if(value && value !== ""){
        this.showOptionBeforePage = true;
        this.showTitle = false;
      }else if(value && value !== "0"){
        this.showOptionBeforePage = false;
        this.showTitle = true;
      }else if(value && value == ""){
        this.showOptionBeforePage = false;
        this.showTitle = false;
      }
    });
  }
  ngOnInit(): void {
    this.backToViewMain();
  }

  ngOnDestroy(): void {
    console.log("entro en el destroy")
    this.formulationService.clearData();
  }

  backToViewMain(){
    this.formulationService.clearData();
    this.router.navigate(['/']);
  }
}
 