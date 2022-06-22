import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';
@Component({
  selector: 'app-blogs-description',
  templateUrl: './blogs-description.component.html',
  styleUrls: ['./blogs-description.component.scss']
})
export class BlogsDescriptionComponent implements OnInit {

  constructor(private blogService: BlogsService, private router: Router, private activatedRoute: ActivatedRoute) { 
    router.events
      .subscribe((event: any) => {
        if (event.navigationTrigger === 'popstate') {
          this.isLoading = true;
          // this.recentPost = this.blogService.getnewsArray().slice(-8).reverse();
          // this.newsArray = this.blogService.getNews();
          activatedRoute.params.subscribe((param: Params) => {
            this.blogService.getBlogs().map((a: any) => {
              if (param['blog'].toLowerCase() == a.title.toLowerCase().split(' ').join('-')) {
                this.blog = a;
                // this.dobOfnews = this.news.dob.year;
                // this.relatedPostArray = [];
                let newsArray = this.blogService.getBlogs().slice();
                // let suffledArray = newsArray.sort(() => 0.5 - Math.random());
                // this.relatedPostArray = suffledArray.filter((news: any) => news.categoryId.toLowerCase() === this.news.categoryId.toLowerCase());
                this.isLoading = false;
              }
            })
          })

        }
      });
  }

  blogsArray:any[];
  isLoading:boolean= false;
  latestBlogs:any;
  moreBlogs:any;
  blog:any;
  ngOnInit(): void {
    this.isLoading = true;
    // this.recentPost = this.blogService.getBlogs().slice(-8).reverse();
    this.blogsArray = this.blogService.getBlogs();
    this.blogService.getBlogs().map((a: any) => {
      if (this.router.url.toLowerCase() == "/blogs/" + a.title.toLowerCase().split(' ').join('-')) {
        this.router.url.toLowerCase();
        this.blog = a;
        // this.dobOfnews = this.news.dob.year;
        // this.relatedPostArray = [];
        let celebrities = this.blogService.getBlogs().slice(-10).reverse();
        this.moreBlogs = celebrities.sort(() => 0.5 - Math.random());
        this.latestBlogs = this.blogService.getBlogs().slice(-8).reverse();
        // this.relatedPostArray = suffledArray.filter((news: any) => news.categoryId.toLowerCase() === this.news.categoryId.toLowerCase());
        // this.meta.updateTag({ property: 'og:url', content: `https://www.newsfarmers.com/news/${a.title.toLowerCase().split(' ').join('-')}` });
        this.isLoading=false;
      }
    })
    if (this.router.url.toLowerCase() !== "/blogs/" + this.blog?.title.toLowerCase().split(' ').join('-')) {
      this.router.navigate(['/']);
      this.isLoading = false;
    }

  }

  onNavigate(blog:any) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    this.blog= blog;
    const selectedBlog = blog.title.toLowerCase().split(' ').join('-');
    this.router.navigate(['/blogs/', selectedBlog]);
  }

}
