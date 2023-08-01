import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncService } from 'src/app/services/API/async.service';
import { HttpService } from 'src/app/services/API/http.service';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.css']
})
export class StepFormComponent {
  id_recette: any;

  step = {
    id: 0,
    description: "",
    ordonne: "",
    recette_id: 0
  }

  steps: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private async: AsyncService,
    private http: HttpService) { }

  ngOnInit() {
    this.id_recette = this.route.snapshot.paramMap.get('id_recette');

    if (this.id_recette != null) {
      this.readStepsbyRecipe();
    }
  }

  // CREATE UPDATE Catégory
  formulaire(form: NgForm) {
    this.http.postData("step", form.value).subscribe({
      next: (data) =>  this.readStepsbyRecipe(),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
    
  }

  delete(id:any)
  {
    this.http.deleteData("step", id).subscribe({
      next: (data) => this.readStepsbyRecipe(),
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
  }

    // Récupere la liste des étapes pour la recette
    readStepsbyRecipe() {
      this.http.readByRecipe("step", this.id_recette).subscribe({
        next: (data) => this.steps = data,
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification')
      });
    }
}
