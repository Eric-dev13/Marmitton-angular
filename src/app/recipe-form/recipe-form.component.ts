import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetteService } from '../services/recette.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { HttpService } from '../services/API/http.service';



@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  id: any;
  categories!: any;

  recette = {
    id: 0,
    titre: '',
    description: '',
    ingredients: [],
    difficulte: '',
    categorie_id: 0,
    tempsprep: 0,
    tempscuisson: 0,
    cout: 0,
    photo: ""
  }
  

  // Injection de dépendance du service
  constructor(private rs: RecetteService, 
              private cs: CategorieService, 
              private router: Router, 
              private route: ActivatedRoute, 
              private http: HttpService) { }

  ngOnInit() {
    
    this.http.getData("categorie").subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.http.getData("recette", this.id).subscribe({
        next: (data) => this.recette=data,
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification')
      });
    }
  }

  /* ******** Form Emitter ******** */
  ingredients: Array<any>=[]

  addIngr(event:any)
  {
    this.ingredients.push({
      quantite: event.quantite,
      nom: event.nom,
      unite: event.unite,
    })
  }
  /* ***************************** */


  formulaire(form: NgForm) {
    this.http.postData("recette", form.value).subscribe({ 
      next: (data) => console.log('ok'),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
  });

    this.router.navigate(['listRecipe']);
  }


}
