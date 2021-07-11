import { Component, EventEmitter, OnInit } from '@angular/core';
import { NewApiServiceService } from '../service/new-api-service.service';

@Component({
  selector: 'app-news-header',
  templateUrl: './news-header.component.html',
  styleUrls: ['./news-header.component.css']
})
export class NewsHeaderComponent implements OnInit {

  constructor(private service:NewApiServiceService) { }
select:Array<any>=[];
region:string="India(Default)";
  ngOnInit(): void {
    this.select=this.service.allRegion;
    console.log(this.select);
  }

  RegionCall()
  {
// console.log(this.region);
this.service.setRegionGlobal(this.region);

  }


}
