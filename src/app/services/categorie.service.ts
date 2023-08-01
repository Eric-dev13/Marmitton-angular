import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }

  categories = Array();

  
  // CREATE : Ajoute 1 catégorie via un formulaire
  createCategory(category: JSON): any {

    if (!sessionStorage.getItem('categories')) {

      let finalCategories = { id: 1, ...category };

      this.categories.push(finalCategories);

      sessionStorage.setItem('categories', JSON.stringify(this.categories));

    } else {

      if (JSON.parse(sessionStorage.getItem('categories')!).length != 0) {

        this.categories = JSON.parse(sessionStorage.getItem('categories')!);
        let id = this.categories.slice(-1)[0]['id'] + 1;

        this.categories.push({ id: id, ...category });
        sessionStorage.setItem('categories', JSON.stringify(this.categories));
      }
    }
  }

  // // READ : Retourne toutes les catégories stockes dans une variables de session
  // readCategory() {
  //   return JSON.parse(sessionStorage.getItem('categories')!);
  // }

  // READ : Retourne 1 catégorie via son identifiant
  readOneCategory(id: any) {
    this.categories = JSON.parse(sessionStorage.getItem('categories')!);
    for (let i = 0; i < this.categories.length; i++) {

      if (this.categories[i]['id'] == id) {
        return this.categories[i];
      }

    }
  }

  // UPDATE : Mets à jour 1 catégorie
  updateCategory(category: JSON, id: any) {
    this.categories = JSON.parse(sessionStorage.getItem('categories')!);
    for (let i = 0; i < this.categories.length; i++) {

      if (this.categories[i]['id'] == id) {
        this.categories[i] = { id: id, ...category };
        sessionStorage.setItem('categories', JSON.stringify(this.categories))
      }

    }
  }

  // DELETE : supprime 1 catégorie via son identifiant
  deleteCategory(id: any) {
    this.categories = JSON.parse(sessionStorage.getItem('categories')!);

    if (this.categories.length != 1) {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i]['id'] == id) {
          this.categories.splice(i, 1);
          sessionStorage.setItem('categories', JSON.stringify(this.categories))
        }
      }
    } else {
      sessionStorage.removeItem('categories');
      this.categories = [];
    }
  }
}
