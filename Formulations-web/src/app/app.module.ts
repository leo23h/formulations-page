import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { FormulationsComponent } from './formulations/formulations.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    FormulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
