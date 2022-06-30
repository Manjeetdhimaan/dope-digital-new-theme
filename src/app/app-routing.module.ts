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
import { ClientsComponent } from './components/clients/clients.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, data: { metaUrl:''}
  },
  { 
    path: '404notfound', component: PagenotfoundComponent, data: { title: 'Page not Found' } 
  },
  {
    path: 'about', component: AboutUsComponent, data: {title: 'ABOUT - Dope Digital', metaUrl:'about'} 
  },
  {
    path: 'services', component: ServicesComponent, data: {title: 'SERVICES - Dope Digital', metaUrl:'services'}
  },
  {
    path: 'blogs', component: BlogsHeadlineComponent, data: {title: 'BLOGS - Dope Digital', metaUrl:'blogs'}
  },
  {
    path: 'contact', component: ContactComponent, data: {title: 'CONTACT - Dope Digital', metaUrl:'contact'}
  },
  {
    path: 'clients', component: ClientsComponent, data: {title: 'CLIENTS - Dope Digital', metaUrl:'clients'}
  },
  {
    path: 'blogs/:blog', component: BlogsDescriptionComponent, data: {title: 'BLOGS - Dope Digital', metaUrl:'blogs'}
  },
  {
    path: ':services', component: AllServicesComponent, data: {title: 'Services - Dope Digital', metaUrl:'services'}
  },
  
  {
    path: '**', pathMatch: 'full', redirectTo: '404notfound'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
