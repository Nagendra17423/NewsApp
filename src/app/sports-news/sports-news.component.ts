import { Component, OnInit } from '@angular/core';
import { NewApiServiceService } from '../service/new-api-service.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {
  displayNews:Array<any>=[];
  constructor(private service:NewApiServiceService) { }

  ngOnInit(): void {
    this.service.getSports().subscribe(news=>{
      // console.log("news");
      console.log(news);
      this.displayNews=news.articles;
    })

    this.service.event.subscribe((data)=>{
      this.service.getTechNews().subscribe(news=>{
        console.log("news");
        console.log(news);
        this.displayNews=news.articles;
      })
      
    })
    
  }

}
