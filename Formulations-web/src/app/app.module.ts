import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { FormulationsComponent } from './formulations/formulations.component';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';
import { ProviderDetailComponent } from './provider-detail/provider-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    FormulationsComponent,
    IngredientDetailComponent,
    ProviderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/' },
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
