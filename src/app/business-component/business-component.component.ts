import { Component, OnInit } from '@angular/core';
import { NewApiServiceService } from '../service/new-api-service.service';

@Component({
  selector: 'app-business-component',
  templateUrl: './business-component.component.html',
  styleUrls: ['./business-component.component.css']
})
export class BusinessComponentComponent implements OnInit {

  constructor(private service:NewApiServiceService) { }
  displayNews:Array<any>=[];
  ngOnInit(): void {

    
      
    this.service.getBusiness().subscribe(news=>{
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
