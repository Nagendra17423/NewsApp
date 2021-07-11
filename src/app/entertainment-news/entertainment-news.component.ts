import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewApiServiceService } from '../service/new-api-service.service';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:NewApiServiceService) { }
newsType:string="";
displayNews:Array<any>=[];
  ngOnInit(): void {

    
      
            this.service.getEntertainmentNews().subscribe(news=>{
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
