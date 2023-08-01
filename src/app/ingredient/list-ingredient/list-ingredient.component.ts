import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/API/http.service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent {

  ingredients: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getData();
  }

  delete(id: any) {
    this.http.deleteData("ingredient", id).subscribe({
      error: (err: string) => console.log('Observer got an error: ' + err),
      complete: () => this.getData()
    });
  }

  getData()
  {
    this.http.getData("ingredient").subscribe({
      next: (data: string) => this.ingredients = data,
      error: (err: string) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
  }
}
