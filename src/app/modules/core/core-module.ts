import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { DirectivesModule } from "src/app/directives/directives-module";


@NgModule({
    declarations:[
        HeaderComponent,
        FooterComponent,
    ],
    
imports:[
    CommonModule,
    RouterModule,
    DirectivesModule    
],
exports: [
    HeaderComponent,
    FooterComponent,
],
providers: []
})

export class CoresModule{}