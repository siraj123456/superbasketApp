import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  diplayForm: boolean = false;
  mobileView: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.mobileView = window.innerWidth;
    console.log(this.mobileView);
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.mobileView = event.target.innerWidth;
  }

  addForm() {

  }
}
