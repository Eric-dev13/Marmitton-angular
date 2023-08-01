import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bouton-detail',
  templateUrl: './bouton-detail.component.html',
  styleUrls: ['./bouton-detail.component.css']
})
export class BoutonDetailComponent {
  @Input() recette: any
  @Input() description: any
  @Input() ingredients: any
  @Input() difficulte: any
  @Input() tempsPrep: any
  @Input() tempsCuisson: any
  @Input() cout: any
  @Input() photo: any
  @Input() etapes: any

  affiche: boolean = false;
  toogleBtn_1: boolean = false;
  toogleBtn_2: boolean = false;

  surClick() {
    this.affiche = !this.affiche;
  }

  onMouseLeaveBtn_1() {
    this.toogleBtn_1 = !this.toogleBtn_1;
  }

  onMouseLeaveBtn_2() {
    this.toogleBtn_2 = !this.toogleBtn_2;
  }

}
