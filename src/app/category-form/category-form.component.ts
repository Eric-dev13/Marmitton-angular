import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AsyncService } from '../services/API/async.service';
import { HttpService } from '../services/API/http.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {

  id: string | null = '0';

  category = {
    name: ""
  }

  categories:any;
  recette: any;

  constructor(private router: Router, private route: ActivatedRoute, private async: AsyncService, private http: HttpService, private http2: HttpClient) { }


  // CREATE UPDATE Catégory
  formulaire(form: NgForm, id: any) {
    this.http.postData("categorie", form.value).subscribe({
      next: (data:string) => console.log(data),
      error: (err:string) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });

    this.router.navigate(['listCategory']);
  }


}
