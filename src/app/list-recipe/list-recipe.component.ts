import { Component } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent {

 constructor(private http: HttpService){}

 recipes:any;


 delete(id: any) {
  this.http.deleteData("recette", id).subscribe({
    error: (err: string) => console.log('Observer got an error: ' + err),
    complete: () => this.getData()
  });
}

 // Correspond à addEventListener("DomContentLoader", ()=>{});
 ngOnInit(): void {
  this.getData();
 }

 getData()
  {
    this.http.getData("recette").subscribe({
     next: (data: string) => this.recipes =data ,
     error: (err: string) => console.log('Observer got an error: ' + err),
     complete: () => console.log('Observer got a complete notification')
   });
  }

}
