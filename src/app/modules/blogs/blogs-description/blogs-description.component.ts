import { Component, OnDestroy, OnInit, DoCheck } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogsService } from 'src/app/modules/blogs/blogs.service';
@Component({
  selector: 'app-blogs-description',
  templateUrl: './blogs-description.component.html',
  styleUrls: ['./blogs-description.component.scss']
})
export class BlogsDescriptionComponent implements OnInit, OnDestroy, DoCheck {
  blogsArray: any[];
  isLoading: boolean = false;
  latestBlogs: any;
  moreBlogs: any;
  blog: any;
  subscription: Subscription;

  constructor(private blogService: BlogsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
    router.events
      .subscribe((event: any) => {
        if (event.navigationTrigger === 'popstate') {
          this.isLoading = true;
          activatedRoute.params.subscribe((param: Params) => {
            this.blogService.blogsArray.map((a: any) => {
              if (param['blog'].toLowerCase() == a.urlTitle.toLowerCase().split(' ').join('-')) {
                this.blog = a;
                // this.titleService.setTitle(this.capitalizeFirstLetter(a.urlTitle) + " - Dope Digital");
                this.latestBlogs = this.blogService.blogsArray.slice(-8).reverse();
                this.isLoading = false;
              }
            })
          })
        }
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.blogService.getBlogs().then((blogs: any) => {
      blogs.map((a: any) => {
        if (this.router.url.toLowerCase() == "/blogs/" + a.urlTitle.toLowerCase().split(' ').join('-')) {
          this.router.url.toLowerCase();
          this.blog = a;
          // this.titleService.setTitle(this.capitalizeFirstLetter(a.urlTitle) + " - Dope Digital");
          // this.titleService.setTitle("Some title");
          // let blogs = this.blogService.blogsArray.slice(-10).reverse();
          // this.moreBlogs = blogs.sort(() => 0.5 - Math.random());
          this.latestBlogs = blogs.slice(-8).reverse();
          this.isLoading = false;
          // this.latestBlogs = this.blogService.blogsArray.slice(-8).reverse();
        }
      })
      if (this.router.url.toLowerCase() !== "/blogs/" + this.blog?.urlTitle.toLowerCase().split(' ').join('-')) {
        this.router.navigate(['/404notfound']);
        this.isLoading = false;
      }
    }).catch((err) => {
      console.log(err);
      this.isLoading = false;
    })

    this.subscription = this.blogService.getselectedBlog.subscribe((blog: any) => {
      this.blog = blog;
    })
  }

  ngDoCheck() {
    // if (this.router.url.toLowerCase() == "/blogs/" + this.blog?.urlTitle.toLowerCase().split(' ').join('-')) {
    //   this.router.url.toLowerCase();
    //   this.titleService.setTitle(this.capitalizeFirstLetter(this.blog?.urlTitle) + " - Dope Digital");
    //   this.isLoading = false;
    // }
  }

  capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onNavigate(blog: any) {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
    this.blog = blog;

    const selectedBlog = blog.urlTitle.toLowerCase().split(' ').join('-');
    // this.titleService.setTitle(this.capitalizeFirstLetter(blog.urlTitle) + " - Dope Digital");
    this.router.navigate(['/blogs/', selectedBlog]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
