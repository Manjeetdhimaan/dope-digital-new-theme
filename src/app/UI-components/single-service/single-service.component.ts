import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/components/services/data.service';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.scss']
})
export class SingleServiceComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }
  @Input() serviceArray:any[];
  @Input() isSingleServiceHeader:boolean = true;
  isLoading:boolean = false;
  ngOnInit(): void {
  }

  onNavigate(selected: any) {
    this.isLoading=true;
    window.scrollTo(0,0)
    const serviceName = selected.name.toLowerCase().split(' ')
    const serviceNameJion = serviceName.join('-');
    this.dataService.getSelectedService.next(selected);
    this.router.navigate(['/', serviceNameJion]); 
    this.isLoading=false
  }

}
