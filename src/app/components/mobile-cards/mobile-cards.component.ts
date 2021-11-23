import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-mobile-cards',
  templateUrl: './mobile-cards.component.html',
  styleUrls: ['./mobile-cards.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MobileCardsComponent implements OnInit {
  @ViewChild('swipe') swipe: SwiperComponent

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void { 
    this.swipe.swiperRef.slideTo(1);
  }

}
