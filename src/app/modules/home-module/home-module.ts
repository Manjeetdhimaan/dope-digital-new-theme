import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DirectivesModule } from "src/app/directives/directives-module";
import { ComponentsModule } from "../components-module";
import { HomeComponent } from "./home/home.component";
import { AboutModule } from "../about/about-module";
import { BlogsModule } from "../blogs/blogs-module";
import { UIComponentsModule } from "src/app/UI-components/UI-components.module";
import { CoresModule } from "../core/core-module";
import { ClientsService } from "src/app/services/clients.service";
import { BlogsService } from "src/app/services/blogs.service";


@NgModule({
    declarations: [
        HomeComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        DirectivesModule,
        ComponentsModule,
        AboutModule,
        BlogsModule,
        UIComponentsModule,
        CoresModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [ClientsService, BlogsService]
})

export class HomeModule { }