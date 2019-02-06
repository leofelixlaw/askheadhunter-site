import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ahh-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
