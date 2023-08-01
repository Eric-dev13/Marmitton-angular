import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BoutonDetailComponent } from './bouton-detail/bouton-detail.component';
import { AppRoutingModule } from './app-routing.module';                            // Gestion du routage 
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { FormsModule } from '@angular/forms';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategoryFormComponent } from './category-form/category-form.component';                                       // Gestion de formulaire lié a ngModel
import { HttpClientModule } from '@angular/common/http';
import { ListIngredientComponent } from './ingredient/list-ingredient/list-ingredient.component';
import { FormIngredientComponent } from './ingredient/form-ingredient/form-ingredient.component';
import { StepListComponent } from './step/step-list/step-list.component';
import { StepFormComponent } from './step/step-form/step-form.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';
import { QuantityPipe } from './quantity.pipe';
import { PricePipe } from './price.pipe';
import { EuroPipe } from './euro.pipe';
import { AddIngredientComponent } from './ingredient/add-ingredient/add-ingredient.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BoutonDetailComponent,
    RecipeFormComponent,
    ListRecipeComponent,
    CategorieComponent,
    CategoryFormComponent,
    ListIngredientComponent,
    FormIngredientComponent,
    StepListComponent,
    StepFormComponent,
    OneRecipeComponent,
    QuantityPipe,
    PricePipe,
    EuroPipe,
    AddIngredientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
