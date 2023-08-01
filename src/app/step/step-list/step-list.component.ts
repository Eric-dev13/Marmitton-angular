import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/API/http.service';


@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.css']
})
export class StepListComponent {
  steps: any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getData();
  }

  delete(id: any) {
    this.http.deleteData("step", id).subscribe({
      error: (err: string) => console.log('Observer got an error: ' + err),
      complete: () => this.getData()
    });
  }

  getData()
  {
    this.http.getData("step").subscribe({
      next: (data: string) => this.steps = data,
      error: (err: string) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    });
  }
}
