import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  id = "";
  advice = '';

  constructor(private service: DataService) {}
  
  ngOnInit(): void {
    this.getInfo();
  }
  
  getInfo() {
    this.service.getData().subscribe({
      next: (x: any) => {
        this.id = x.slip.id;
        this.advice = x.slip.advice;
        console.log(this.id, this.advice)
      },
    });
  }
}
