import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncService } from 'src/app/services/API/async.service';
import { HttpService } from 'src/app/services/API/http.service';


@Component({
  selector: 'app-form-ingredient',
  templateUrl: './form-ingredient.component.html',
  styleUrls: ['./form-ingredient.component.css']
})
export class FormIngredientComponent implements OnInit {

  @Input() parentForm: any; // Utilisez le type correct pour le formulaire parent, par exemple NgForm

  id_recette: any;

  ingredient = {
    id: 0,
    name: "",
    quantite: "",
    unite: "",
    recette_id: 0
  }


  ingredients: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private async: AsyncService,
    private http: HttpService) { }

  ngOnInit() {
    this.id_recette = this.route.snapshot.paramMap.get('id_recette');

    if (this.id_recette != null) {
      this.readIngredientsByRecipe();
    }
  }

  // CREATE UPDATE Catégory
  formulaire(form: NgForm) {
      this.http.postData("ingredient", form.value).subscribe({
        next: (data) => this.readIngredientsByRecipe(),
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => this.readIngredientsByRecipe()
      });
  }

  delete(id:any)
  {
    this.http.deleteData("ingredient", id).subscribe({
      next: (data) => this.readIngredientsByRecipe(),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
  }

  readIngredientsByRecipe() {
    this.http.readByRecipe("ingredient", this.id_recette).subscribe({
      next: (data) => this.ingredients = data,
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
  }

}
