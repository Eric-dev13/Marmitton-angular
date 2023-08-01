import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor() { }

  recipes = Array();

  // CREATE : Ajoute 1 recette via un formulaire
  createRecipe(recipe: JSON): any {

    if (!sessionStorage.getItem('recipes')) {
      let finalRecipe = { id: 1, ...recipe };

      this.recipes.push(finalRecipe);

      sessionStorage.setItem('recipes', JSON.stringify(this.recipes));

    } else {

      if (JSON.parse(sessionStorage.getItem('recipes')!).length != 0) {

        this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);
        // on recupere le dernier objet de notra tableau slice(-1)
        // qui recrée un tableau avec le nombre d'entrees demandees (ici 1)
        // on accede à son indice et à sa propriete id et on incremente de 1
        let id = this.recipes.slice(-1)[0]['id'] + 1;

        this.recipes.push({ id: id, ...recipe });
        sessionStorage.setItem('recipes', JSON.stringify(this.recipes));
      }
    }

  }

  // READ : Retourne toutes les recettes stockes dans une variables de session
  readRecipe() {
    return JSON.parse(sessionStorage.getItem('recipes')!);
  }

  // READ : Retourne 1 recette via son identifiant 
  readOneRecipe(id: any) {
    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);
    for (let i = 0; i < this.recipes.length; i++) {

      if (this.recipes[i]['id'] == id) {
        return this.recipes[i];
      }

    }
  }

  // UPDATE : Mets à jour 1 recette
  updateRecipe(recette: JSON, id: any) {
    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);
    for (let i = 0; i < this.recipes.length; i++) {

      if (this.recipes[i]['id'] == id) {
        this.recipes[i] = { id: id, ...recette };
        sessionStorage.setItem('recipes', JSON.stringify(this.recipes))
      }
    }
  }

    // DELETE : supprime 1 recette via son identifiant
  deleteRecipe(id: any) {
    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);

    if (this.recipes.length != 1) {
      for (let i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i]['id'] == id) {
          this.recipes.splice(i, 1);
          sessionStorage.setItem('recipes', JSON.stringify(this.recipes))
        }
      }
    } else {
      sessionStorage.removeItem('recipes');
      this.recipes = [];
    }

  }

}
