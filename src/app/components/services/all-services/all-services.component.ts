import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router,private meta: Meta) { }
  service:any;
  isLoading:boolean = false;
  serviceArray:any[];
  isSingleServiceHeader= false;

  ngOnInit(): void {
    this.isLoading= true
    this.serviceArray= this.dataService.serviceArray.slice()
    this.dataService.getServices().map((a: any) => {
      if (this.router.url.toLowerCase() == "/" + a.name.toLowerCase().split(' ').join('-')) {
        this.router.url.toLowerCase();
        this.service = a;
        
        this.meta.updateTag({ property: 'og:url', content: `https://www.dopedigital.in//${a.name.toLowerCase().split(' ').join('-')}` });
          this.isLoading = false
        
      }
    })
    if (this.router.url.toLowerCase() !== "/" + this.service?.name.toLowerCase().split(' ').join('-')) {
      this.router.navigate(['/404notfound']);
      this.isLoading = false;
    }
    this.dataService.getSelectedService.subscribe((service:any) => {
      this.service= service;
    })
  }

  
}
