import { Component, OnInit, Input } from '@angular/core';
import { BlogsService } from 'src/app/modules/blogs/blogs.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToasTMessageService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-blogs-headline',
  templateUrl: './blogs-headline.component.html',
  styleUrls: ['./blogs-headline.component.scss']
})
export class BlogsHeadlineComponent implements OnInit {

  constructor(private blogService: BlogsService, private router: Router, private toastService: ToasTMessageService) { }
  @Input() isHeaderFooter:boolean = true;
  latestBlogs:any[];
  isLoading:boolean=false;
  isError: boolean = false;
  ngOnInit(): void {

    this.isLoading=true;
       this.blogService.getBlogs().then((blogs:any) => {
        this.latestBlogs = blogs.slice(-4).reverse();
        this.toastService.success('Blogs loaded successfully');
        this.isLoading = false;
        this.isError = false;
      }).catch((err) => {
        console.log(err);
        this.isLoading = false;
        this.isError = true;
        this.toastService.error(err.message);
      })

   
    // this.latestBlogs= this.blogService.blogsArray1.slice(-4).reverse();
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
