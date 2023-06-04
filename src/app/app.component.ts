import { Component, HostListener, OnInit, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sirajsApp';
  showFiller = false;
  public screenWidth: any;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
}
constructor(private renderer: Renderer2) { }


@HostListener('window:scroll', ['$event']) onScroll(event: Event) {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    document.body.classList.add('on-scroll');
  } else {
    document.body.classList.remove('on-scroll');
  }
}

@HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
}



