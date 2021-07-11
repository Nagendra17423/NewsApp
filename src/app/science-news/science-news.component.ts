import { Component, OnInit } from '@angular/core';
import { NewApiServiceService } from '../service/new-api-service.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css']
})
export class ScienceNewsComponent implements OnInit {
  displayNews:Array<any>=[];
  constructor(private service:NewApiServiceService) { }

  ngOnInit(): void {

    this.service.getScience().subscribe(news=>{
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
