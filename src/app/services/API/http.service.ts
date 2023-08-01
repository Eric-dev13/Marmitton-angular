import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // readIngredientsByRecipe(table:string, recette_id:any) {
  //   console.log('id: ',recette_id);
  //   return this.http.get('http://localhost/marmiton/src/app/services/API/'+table+'.php?action=readIngredient&recette_id='+ recette_id);
  // }

  readByRecipe(table:string, recette_id:any) {
    console.log('id: ',recette_id);
    return this.http.get('http://localhost/marmiton/src/app/services/API/'+table+'.php?action=readbyrecipe&recette_id='+ recette_id);
  }

  readRecipeById(table:string, id:any) {
    return this.http.get('http://localhost/marmiton/src/app/services/API/'+table+'.php?action=readrecipebyId&id='+ id);
  }


  getData(table: string, id:any=null): Observable<any>
  {
    console.log('table: ', table, ' : ',id)
    if(id!=null){

      return this.http.get('http://localhost/marmiton/src/app/services/API/'+table+'.php?action=readOne&id='+id);
    } else {
       return this.http.get('http://localhost/marmiton/src/app/services/API/'+table+'.php?action=readAll');
    }
   
  }

  deleteData(table: string, id:any): Observable<any> 
  {
    console.log('table: ', table, ' : ',id)
    return this.http.post('http://localhost/marmiton/src/app/services/API/'+table+'.php?action=delete&id=' + id, {});
  }

  postData(table: string, data:any): Observable<any> 
  {
    return this.http.post('http://localhost/marmiton/src/app/services/API/'+table+'.php?action=create', JSON.stringify(data));
  }


}
