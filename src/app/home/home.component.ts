import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  recettes = [
    {
      titre: 'Tartiflette',
      description: 'Super recette pour l\'été',
      ingredients: ['10 patates', '2 reblochons', '2 oignons', '300g de lardons', '20cl de crème liquide'],
      difficulte: 'debutant',
      tempsPrep: '30',
      tempsCuisson: '30',
      cout: 2,
      photo: "https://img.cuisineaz.com/960x504/2015/09/22/i50088-recettes-tartiflettes.webp",
      etapes: ['faire revenir les oignons et les lardons', 'ajouter les pomme de terre et le vin blanc', '']
    },
    {
      titre: 'Tarte aux pommes',
      description: 'Super recette pour l\'été',
      ingredients: ['10 patates', '2 reblochons', '2 oignons', '300g de lardons', '20cl de crème liquide'],
      difficulte: 'debutant',
      tempsPrep: '30',
      tempsCuisson: '30',
      cout: 2,
      photo: "https://assets.afcdn.com/recipe/20220128/128250_w2000h1445c1cx1294cy688cxb2037cyb1472.webp",
      etapes: ['faire revenir les oignons et les lardons', 'ajouter les pomme de terre et le vin blanc', '']
    },
    {
      titre: 'Chili con carne',
      description: 'Super recette pour l\'été',
      ingredients: ['10 patates', '2 reblochons', '2 oignons', '300g de lardons', '20cl de crème liquide'],
      difficulte: 'debutant',
      tempsPrep: '30',
      tempsCuisson: '30',
      cout: 2,
      photo: "https://img-3.journaldesfemmes.fr/2_AQRohwJGlZEGNAYGU4SEyyLSA=/750x500/smart/12451c2672c148249bb4de0db7749edd/recipe-jdf/10056653.jpg",
      etapes: ['faire revenir les oignons et les lardons', 'ajouter les pomme de terre et le vin blanc', '']
    }
  ]
}
