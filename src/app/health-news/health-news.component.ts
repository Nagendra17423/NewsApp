import { Component, OnInit } from '@angular/core';
import { NewApiServiceService } from '../service/new-api-service.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css']
})
export class HealthNewsComponent implements OnInit {
  displayNews:Array<any>=[];
  constructor(private service:NewApiServiceService) { }

  ngOnInit(): void {

      this.service.getHealth().subscribe(news=>{
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
