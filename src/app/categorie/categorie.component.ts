import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categories: any;

  constructor(private http2: HttpClient, private http: HttpService) { }


  // Correspond à addEventListener("DomContentLoader", ()=>{});
  ngOnInit(): void {
    this.getData();
  }

  delete(id: any) {
    this.http.deleteData("categorie", id).subscribe({
      error: (err: string) => console.log('Observer got an error: ' + err),
      complete: () => this.getData()
    });
  }

  getData()
  {
    this.http.getData("categorie").subscribe({
      next: (data: string) => this.categories = data,
      error: (err: string) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
  }


}
