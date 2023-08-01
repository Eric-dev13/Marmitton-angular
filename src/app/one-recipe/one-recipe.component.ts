import { Component } from '@angular/core';
import { HttpService } from '../services/API/http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})
export class OneRecipeComponent {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpService) { }

  recipe: any;
  id: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    console.log('recette', this.id)
    if (this.id != null) {
      this.getData();
    }
  }

  getData() {
    this.http.readRecipeById("recette", this.id).subscribe({
      next: (data) => this.recipe = data,
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
  }

  nbPersonne:number=1;

  cout:number = 5;

  ingredients: any = [
    {
      id: 1,
      nom: 'Oeuf',
      quantite: 2,
      unite: 'pièce'
    },
    {
      id: 2,
      nom: 'Farine',
      quantite: 200,
      unite: ''
    },
    {
      id: 3,
      nom: 'Chocolat',
      quantite: 500,
      unite: ''
    },
    {
      id: 4,
      nom: 'Lait',
      quantite: 1,
      unite: ''
    },
    {
      id: 5,
      nom: 'Beurre',
      quantite: 200,
      unite: ''
    }
  ]

}
