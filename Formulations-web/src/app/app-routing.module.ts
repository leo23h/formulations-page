import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulationsComponent } from './formulations/formulations.component';
import { IngredientsComponent } from './ingredients/ingredients.component';


const routes: Routes = [
  { path: 'formulations', component: FormulationsComponent },
  { path: 'ingredients/:id', component: IngredientsComponent },
  { path: '',   redirectTo: '/formulations', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
