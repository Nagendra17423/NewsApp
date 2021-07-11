import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsHeaderComponent } from './news-header/news-header.component';
import {CustomRouting} from "./custom-routing.routing";
import {HttpClientModule} from "@angular/common/http";
import { NewApiServiceService } from './service/new-api-service.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { NewsComponentComponent } from './news-component/news-component.component';
// import { EntertainmentComponent } from './entertainment/entertainment.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { BusinessComponentComponent } from './business-component/business-component.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { FormsModule } from '@angular/forms';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// import { NewServiceApiComponent } from './service/new-service-api/new-service-api.component';
@NgModule({
  declarations: [
    AppComponent,
    NewsHeaderComponent,
    ErrorPageComponent,
    TechNewsComponent,
    NewsComponentComponent,
    EntertainmentNewsComponent,
    BusinessComponentComponent,
    HealthNewsComponent,
    ScienceNewsComponent,
    SportsNewsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomRouting,
    FormsModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
