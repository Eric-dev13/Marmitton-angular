import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { FormIngredientComponent } from './ingredient/form-ingredient/form-ingredient.component';
import { ListIngredientComponent } from './ingredient/list-ingredient/list-ingredient.component';
import { StepFormComponent } from './step/step-form/step-form.component';
import { StepListComponent } from './step/step-list/step-list.component';
import { OneRecipeComponent } from './one-recipe/one-recipe.component';


const routes: Routes=[
  { path:"", component: HomeComponent },                     // Page d'accueil

  { path:"formRecipe", component: RecipeFormComponent},        // Ajouter 1 recette via un formulaire partagé
  { path:"formRecipe/:id", component: RecipeFormComponent},    // Modifier 1 recette via le formulaire partagé
  { path:"listRecipe", component: ListRecipeComponent},        // Voir tous les recttes
  { path:"oneRecipe/:id", component: OneRecipeComponent},
    
  { path:"formCategory", component: CategoryFormComponent},       // Ajouter 1 catégorie via un formulaire partagé
  { path:"formCategory/:id", component: CategoryFormComponent},   // Modifier 1 catégorie via le formulaire partagé
  { path:"listCategory", component: CategorieComponent},          // Voir tous les catégories

  { path:"formIngredient", component: FormIngredientComponent},      // Ajouter 1 catégorie via un formulaire partagé
  { path:"formIngredient/:id_recette", component: FormIngredientComponent},  // Modifier 1 catégorie via le formulaire partagé
  { path:"listIngredient", component: ListIngredientComponent},          // Voir tous les catégories

  {path:"formStep", component: StepFormComponent},
  {path:"formStep/:id_recette", component: StepFormComponent},
  {path:"listStep", component: StepListComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

  
 }
