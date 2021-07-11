import { Component, OnInit } from '@angular/core';
import { NewApiServiceService } from '../service/new-api-service.service';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {
  displayNew:Array<any>=[];
  constructor(private service:NewApiServiceService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((result)=>{
      console.log(result);
      this.displayNew=result.articles;
      console.log(this.displayNew);
    })
  }

}
