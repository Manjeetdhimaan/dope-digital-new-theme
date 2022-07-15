import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogsService } from 'src/app/services/blogs.service';
@Component({
  selector: 'app-blogs-description',
  templateUrl: './blogs-description.component.html',
  styleUrls: ['./blogs-description.component.scss']
})
export class BlogsDescriptionComponent implements OnInit, OnDestroy {
  blogsArray: any[];
  isLoading: boolean = false;
  latestBlogs: any;
  moreBlogs: any;
  blog: any;
  subscription: Subscription;

  constructor(private blogService: BlogsService,
     private router: Router,
     private activatedRoute: ActivatedRoute) {
    router.events
      .subscribe((event: any) => {
        if (event.navigationTrigger === 'popstate') {
          this.isLoading = true;
          activatedRoute.params.subscribe((param: Params) => {
            this.blogService.getBlogs().map((a: any) => {
              if (param['blog'].toLowerCase() == a.urlTitle.toLowerCase().split(' ').join('-')) {
                this.blog = a;
                this.isLoading = false;
                this.latestBlogs = this.blogService.getBlogs().slice(-8).reverse();
              }
            })
          })
        }
      });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.blogsArray = this.blogService.getBlogs();
  
    this.blogService.getBlogs().map((a: any) => {
      if (this.router.url.toLowerCase() == "/blogs/" + a.urlTitle.toLowerCase().split(' ').join('-')) {
        this.router.url.toLowerCase();
        this.blog = a;
        // let blogs = this.blogService.getBlogs().slice(-10).reverse();
        // this.moreBlogs = blogs.sort(() => 0.5 - Math.random());
        this.latestBlogs = this.blogService.getBlogs().slice(-8).reverse();
        this.isLoading = false;
      }
    })
    if (this.router.url.toLowerCase() !== "/blogs/" + this.blog?.urlTitle.toLowerCase().split(' ').join('-')) {
      this.router.navigate(['/404notfound']);
      this.isLoading = false;
    }

    this.subscription = this.blogService.getselectedBlog.subscribe((blog:any) => {
       this.blog = blog;
    })
  }

  onNavigate(blog: any) {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
    this.blog = blog;
    const selectedBlog = blog.urlTitle.toLowerCase().split(' ').join('-');
    this.router.navigate(['/blogs/', selectedBlog]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
