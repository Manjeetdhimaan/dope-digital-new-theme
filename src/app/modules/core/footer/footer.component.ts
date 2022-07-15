import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private blogService: BlogsService) { }

  latestBlogs:any[];
  isLoading: boolean = false;
  ngOnInit(): void {
    this.isLoading = true;
    this.latestBlogs= this.blogService.getBlogs().slice(-3).reverse();
    this.isLoading = false;
  }

  onNavigateToBlog(blog:any) {
    console.log(blog)
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    const selectedBlog = blog.urlTitle.toLowerCase().split(' ').join('-');
    this.blogService.getselectedBlog.next(blog);
    this.router.navigate(['/blogs/', selectedBlog]);
  }
 
  onNavigate(route:string) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    this.router.navigate([route]);
  }

}
