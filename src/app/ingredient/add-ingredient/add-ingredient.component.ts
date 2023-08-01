import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent {

  /* ******** Form Emitter ******** */
  object = {
    nom: '',
    quantite: '',
    unite: ''
  }

  @Output() ingrEvent = new EventEmitter<any>();

  addIngredient(nom: string, unite: string, quantite: string) {
    this.object.nom = nom;
    this.object.quantite = quantite;
    this.object.unite = unite;

    this.ingrEvent.emit(this.object);
  }
  /* **************************** */

}
