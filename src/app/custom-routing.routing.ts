import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BusinessComponentComponent } from "./business-component/business-component.component";
import { EntertainmentNewsComponent } from "./entertainment-news/entertainment-news.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HealthNewsComponent } from "./health-news/health-news.component";
import { NewsComponentComponent } from "./news-component/news-component.component";
import { NewsHeaderComponent } from "./news-header/news-header.component";
import { ScienceNewsComponent } from "./science-news/science-news.component";
import { SportsNewsComponent } from "./sports-news/sports-news.component";
import { TechNewsComponent } from "./tech-news/tech-news.component";


const route:Routes=[
    {path:"",component:NewsComponentComponent},
    {path:"tech-news",component:TechNewsComponent},
    {path:"entertainment",component:EntertainmentNewsComponent},
    {path:"business",component:BusinessComponentComponent},
    {path:"health",component:HealthNewsComponent},
    {path:"science",component:ScienceNewsComponent},
    {path:"sports",component:SportsNewsComponent},
    {path:"not-found",component:ErrorPageComponent},
    {path:"**",redirectTo:"/not-found"}
];

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})

export class CustomRouting{}
