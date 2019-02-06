import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'ahh-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;

  // or get it from plyrInit event
  // Plyr: any;

  // videoSources: Plyr.Source[] = [
  //   {
  //     src: 'bTqVqk7FSmY',
  //     provider: 'youtube',
  //   },
  // ];
  constructor() { }

  ngOnInit() {
  }

}
