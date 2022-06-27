import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogsHeadlineComponent } from './components/blogs-headline/blogs-headline.component';
import { BlogsDescriptionComponent } from './components/blogs-description/blogs-description.component';
import { AllServicesComponent } from './components/services/all-services/all-services.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SingleServiceComponent } from './UI-components/single-service/single-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ClientsComponent,
    ContactComponent,
    HomeComponent,
    ServicesComponent,
    BlogsHeadlineComponent,
    BlogsDescriptionComponent,
    AllServicesComponent,
    PagenotfoundComponent,
    SingleServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
