import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsHeaderComponent } from '../news-header/news-header.component';

@Injectable({
  providedIn: 'root'
})
export class NewApiServiceService implements OnInit{
  allRegion = [{
    name: "India(Default)",
    region: "in"
  },
  {
    name: "Argentina",
    region: "ar"
  },
  {
    name: "Australia",
    region: "au"
  },
  {
    name: "France",
    region: "fr"
  },
  {
    name: "China",
    region: "cn"
  },
  {
    name: "Germany",
    region: "de"
  },
  {
    name: "Israel",
    region: "il"
  },
  {
    name: "Japan",
    region: "jp"
  },
  {
    name: "HongKong",
    region: "hk"
  },
  {
    name: "Russia",
    region: "ru"
  },
  {
    name: "Saudi Arabia",
    region: "sa"
  },
  {
    name: "United Kingdom",
    region: "gb"
  },
  {
    name: "USA",
    region: "us"
  }
  ]
  region: string = "in";
  event=new EventEmitter<string>();
  constructor(private http: HttpClient) { 
   
  }
  ngOnInit()
  {
  //    this.header.regionevent.subscribe(region=>{
  //   this.region=region;
  // })

  }
  setRegionGlobal(chng:string)
  {
    this.region=chng;
    this.event.emit(this.region);
    console.log("ajnsjnas"+this.region);
  }
  
  // baseUrl="1803f2ee83d04fdd80c3ed4444ebb751";

  getAll(): Observable<any> {
    console.log("region is "+this.region);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.region}&apiKey=1803f2ee83d04fdd80c3ed4444ebb751`;
    return this.http.get(url);
  }

  getEntertainmentNews(): Observable<any> {
    console.log("region is "+this.region);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.region}&category=entertainment&apiKey=1803f2ee83d04fdd80c3ed4444ebb751`;
    return this.http.get(url);
  }

  getTechNews(): Observable<any> {
    console.log("region is "+this.region);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.region}&category=technology&apiKey=1803f2ee83d04fdd80c3ed4444ebb751`;
    return this.http.get(url);
  }
  getBusiness(): Observable<any> {
    console.log("region is "+this.region);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.region}&category=business&apiKey=1803f2ee83d04fdd80c3ed4444ebb751`;
    return this.http.get(url);
  }
  getHealth(): Observable<any> {
    console.log("region is "+this.region);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.region}&category=health&apiKey=1803f2ee83d04fdd80c3ed4444ebb751`;
    return this.http.get(url);
  }
  getScience(): Observable<any> {
    console.log("region is "+this.region);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.region}&category=science&apiKey=1803f2ee83d04fdd80c3ed4444ebb751`;
    return this.http.get(url);
  }
  getSports(): Observable<any> {
    console.log("region is "+this.region);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.region}&category=sports&apiKey=1803f2ee83d04fdd80c3ed4444ebb751`;
    return this.http.get(url);
  }

}
