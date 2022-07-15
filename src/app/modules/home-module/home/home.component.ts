import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services-module/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }
  isHeaderFooter = false;
  isContactComponent= false;
  serviceArray:any[];
  marginTop= '-40px'

  ngOnInit(): void {
    this.serviceArray= this.dataService.serviceArray.slice(0,4)
  }

}
