import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';
import { DataService } from './modules/services-module/services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dope-digital';
  blogs: any

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService, private metaService: Meta, private http: HttpClient) {
  }

  isSingleService: boolean = false;
  isBlog: boolean = false;
  ngOnInit() {
    //updating app title and meta tags.
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

          const child = this.activatedRoute.firstChild;

          this.http.get(`http://localhost:4040/blogs`).subscribe((res: any) => {
            //logged in user
            this.blogs = res;
            console.log("this.blogs", this.blogs);
            this.blogs.map((a: any) => {
              if (this.router.url.toLowerCase() === "/blogs/" + a.urlTitle.toLowerCase().split(' ').join('-')) {
                if (child?.snapshot.data['title']) {
                  this.isBlog = false;
                  // child.snapshot.data['title'] = this.capitalizeFirstLetter(this.router.url.slice(7).split('-').join(' ')) + ' - ' + 'Dope Digital';
                  this.metaService.updateTag({ property: 'og:url', content: `https://www.dopedigital.in/${this.router.url.slice(1)}` });
                  this.metaService.updateTag({ name: 'description', content: this.capitalizeFirstLetter(this.router.url.slice(7).split('-').join(' ')) });
                  // return child.snapshot.data['title'];
                }
                // else {
                //   return 'BLOGS - Dope Digital';
                // }
              }
            })
            // getting attendance of logged in user
          },
            error => {
              console.log(error);
            })


          if (child?.snapshot.data['title']) {
            if (this.isSingleService == true) {
              this.isSingleService = false;
              child.snapshot.data['title'] = this.router.url.slice(1).split('-').join(' ').toUpperCase() + ' - ' + 'Dope Digital';
              this.metaService.updateTag({ property: 'og:url', content: `https://www.dopedigital.in/${this.router.url.slice(1)}` });
              this.metaService.updateTag({ name: 'description', content: this.capitalizeFirstLetter(this.router.url.slice(1).split('-').join(' ')) });
              return child.snapshot.data['title'];
            }
            else {
              this.metaService.updateTag({ name: 'description', content: `Dope digital is best digital marketing agency in Chandigarh` });
              return child.snapshot.data['title'];
            }
          }
          //getting name from url 
          let routerUrl_split = this.router.url.slice(1).split("-")
          let result = []
          for (let i = 0; i < routerUrl_split.length; i++) {
            result.push(routerUrl_split[i].slice(0, 1).toUpperCase() + routerUrl_split[i].slice(1))
          }


          if (child?.snapshot.data['metaUrl'] && !this.isSingleService) {
            this.metaService.updateTag({ property: 'og:url', content: `https://www.dopedigital.in/${child.snapshot.data['metaUrl']}` });
          }
          this.metaService.updateTag({ name: 'description', content: `Dope digital is best digital marketing agency in Chandigarh` });
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
