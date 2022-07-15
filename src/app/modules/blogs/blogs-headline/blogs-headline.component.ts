import { Component, OnInit, Input } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blogs-headline',
  templateUrl: './blogs-headline.component.html',
  styleUrls: ['./blogs-headline.component.scss']
})
export class BlogsHeadlineComponent implements OnInit {

  constructor(private blogService: BlogsService, private router: Router) { }
  @Input() isHeaderFooter:boolean = true;
  latestBlogs:any[];

  ngOnInit(): void {
    this.latestBlogs= this.blogService.getBlogs().slice(-4).reverse();
  }
  @Input() marginTop = '80px';

  onNavigate(blog:any) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    const selectedBlog = blog.urlTitle.toLowerCase().split(' ').join('-');
    this.router.navigate(['/blogs/', selectedBlog]);
  }
 
  onNavigateTo(route:any) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    this.router.navigate([route]);
  }

}
