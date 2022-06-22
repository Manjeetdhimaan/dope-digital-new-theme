import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AllServicesComponent } from './components/services/all-services/all-services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsHeadlineComponent } from './components/blogs-headline/blogs-headline.component';
import { BlogsDescriptionComponent } from './components/blogs-description/blogs-description.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { 
    path: '404notfound', component: PagenotfoundComponent, data: { title: 'Page not Found' } 
  },
  {
    path: 'about', component: AboutUsComponent, data: {title: 'ABOUT - Dope Digital'} 
  },
  {
    path: 'services', component: ServicesComponent, data: {title: 'SERVICES - Dope Digital'}
  },
  {
    path: 'blogs', component: BlogsHeadlineComponent, data: {title: 'BLOGS - Dope Digital'}
  },
  {
    path: 'contact', component: ContactComponent, data: {title: 'CONTACT - Dope Digital'}
  },
  {
    path: 'blogs/:blog', component: BlogsDescriptionComponent, data: {title: 'BLOGS - Dope Digital'}
  },
  {
    path: ':services', component: AllServicesComponent, data: {title: 'Services - Dope Digital'}
  },
  
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
