import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ahh-scroll',
  template: `
  <div class="scroll-image">
    <div class="container">
      <drag-scroll>
        <img drag-scroll-item src="../../assets/images/clients-logo/ammetlife_logo.png" />
        <img drag-scroll-item src="../../assets/images/clients-logo/petronas_logo.png" />
        <img drag-scroll-item src="../../assets/images/clients-logo/toyota_logo.png" />
        <img drag-scroll-item src="../../assets/images/clients-logo/singtel_logo.png" />
        <img drag-scroll-item src="../../assets/images/clients-logo/starbucks_logo.png" />
        <img drag-scroll-item src="../../assets/images/clients-logo/guardian_logo.png" />
      </drag-scroll>
    </div>
  </div>
  `,
  styles: [`
    .scroll-image {
      padding: 10px;
      box-shadow: 0 1px 7px rgba(0, 0, 0, 0.12);
    }
    drag-scroll {
      height: 75px;
      width: 100%;
      overflow: hidden;
    }
    img {
      height: 75px;
      width: 75px;
    }
    `]
})
export class ScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
