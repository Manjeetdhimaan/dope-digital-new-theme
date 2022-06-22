import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }
  isSticky:boolean=false;
  isLoading:boolean=false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
      this.isSticky = window.pageYOffset >= 100;
  }

  ngOnInit(): void {
  }

  onNavigate(route:string) {
    window.scrollTo({
      behavior:'smooth',
      top:0
    });
    this.router.navigate([route]);
  }

  onNavigateToService(route: any) {
    this.isLoading=true;
    this.dataService.getServices().map((a: any) => {
      if (route.toLowerCase() == a.name.toLowerCase().split(' ').join('-')) {
        debugger;
        this.router.url.toLowerCase();
        this.dataService.getSelectedService.next(a);
        window.scrollTo(0,0)
        this.router.navigate(['/', route]); 
        this.isLoading = false
      }
    })
  }
  
  isMobileMenu:boolean=false
  onToggleMobileMenu() {
    this.isMobileMenu = !this.isMobileMenu;
  }

}
