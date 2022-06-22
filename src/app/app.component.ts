import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';
import { DataService } from './components/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dope-digital';
  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService, private metaService: Meta) { }

  isSingleService: boolean= false;
  ngOnInit() {
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          this.dataService.serviceArray.map((a: any) => {
            if (this.router.url.toLowerCase() === "/" + a.name.toLowerCase().split(' ').join('-')) {
              this.router.url.toLowerCase();
              this.isSingleService = true;
            }
          })

          //getting name from url 
          let routerUrl_split = this.router.url.slice(1).split("-")
          let result = []
          for (let i = 0; i < routerUrl_split.length; i++) {
            result.push(routerUrl_split[i].slice(0, 1).toUpperCase() + routerUrl_split[i].slice(1))
          }

          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data['title']) {
            if (this.isSingleService == true) {
              this.isSingleService = false;
              child.snapshot.data['title'] = this.router.url.slice(1).split('-').join(' ').toUpperCase() + ' - ' + appTitle;
              this.metaService.updateTag({ name: 'description', content: this.capitalizeFirstLetter(this.router.url.slice(10).split('-').join(' ')) });
             
              return child.snapshot.data['title'];
            }
            else {
              return child.snapshot.data['title']
            }
          }
          return appTitle;
        })
        
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }

  capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
