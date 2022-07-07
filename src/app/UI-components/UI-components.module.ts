import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ClientsService } from "../services/clients.service";
import { BlogsService } from "../services/blogs.service";
import { DirectivesModule } from "../directives/directives-module";
import { SingleServiceComponent } from "./single-service/single-service.component";


@NgModule({
    declarations: [
        SingleServiceComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        DirectivesModule
    ],

    exports: [
        SingleServiceComponent
    ],
    providers: [ClientsService, BlogsService]
})

export class UIComponentsModule { }