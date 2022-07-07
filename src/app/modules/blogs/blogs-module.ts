import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CoresModule } from "../core/core-module";
import { BlogsHeadlineComponent } from "./blogs-headline/blogs-headline.component";
import { BlogsDescriptionComponent } from "./blogs-description/blogs-description.component";
import { BlogsRoutingModule } from "./blogs-routing.module";
import { DirectivesModule } from "src/app/directives/directives-module";
import { ClientsService } from "src/app/services/clients.service";
import { BlogsService } from "src/app/services/blogs.service";

@NgModule({
    declarations:[
        BlogsHeadlineComponent,
        BlogsDescriptionComponent
    ],
    
imports:[
    CommonModule,
    RouterModule,
    CoresModule,
    DirectivesModule,
    BlogsRoutingModule
 ],
exports: [
    BlogsHeadlineComponent,
    BlogsDescriptionComponent
],
providers: [ClientsService, BlogsService]
})
export class BlogsModule{}