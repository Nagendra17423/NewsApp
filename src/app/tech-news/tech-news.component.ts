import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsHeaderComponent } from '../news-header/news-header.component';

import { NewApiServiceService } from '../service/new-api-service.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
newsType:string="";
  constructor(private route:ActivatedRoute,
    private service:NewApiServiceService) { }
displayNews:Array<any>=[];
  ngOnInit(): void {

 
      this.service.getTechNews().subscribe(news=>{
        console.log("news");
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
