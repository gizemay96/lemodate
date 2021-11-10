import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable , fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  language;
  @ViewChild('section2') section2: HTMLUnknownElement


  private timeoutQueue: number;
  scrollTop;
  afterScroll;
  activeSection = 1;
  scrollEventB = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    // console.log(event)
    // console.log(event)
    /**
     * If another timeout is on queue who have to be process, let cancel it.
     **/
    // if (this.timeoutQueue) {
    //   this.scrollEventB = false;
    //   clearTimeout(this.timeoutQueue);
    // }

    // /**
    //  We store timeout uniq reference on class property to be able to cancel it if another scroll is fire before execution time of this timeout.
    // **/
    // this.timeoutQueue = window.setTimeout(() => {

    //   // console.log('afterScroll:', this.afterScroll, 'pageYOffset:', window.pageYOffset);
    //   this.afterScroll = window.pageYOffset;
    //   // console.log(this.afterScroll)

    //   let sectionName;
    //   console.log(this.scrollEventB)
    //   this.scrollEventB = true
    //   if ((window.pageYOffset > this.scrollTop) && this.activeSection !== 5 && this.scrollEventB) {
    //     // DOWN
    //     this.getNextProject(this.activeSection + 1);
    //   } else {
    //     // TOP
    //     this.getPrevProject();
    //   }
    //   this.scrollTop = this.afterScroll;
    // }, 700);
  }

  source = fromEvent(window, 'scroll', { capture: false }).subscribe(console.log);
  constructor(private translate: TranslateService, public router: Router, private scroller: ViewportScroller) {
    // const event = this.source.subscribe(event => {
    //   if (this.timeoutQueue) {
    //     this.scrollEventB = false;
    //     clearTimeout(this.timeoutQueue);
    //   }
  
    //   /**
    //    We store timeout uniq reference on class property to be able to cancel it if another scroll is fire before execution time of this timeout.
    //   **/
    //   this.timeoutQueue = window.setTimeout(() => {
  
    //     // console.log('afterScroll:', this.afterScroll, 'pageYOffset:', window.pageYOffset);
    //     this.afterScroll = window.pageYOffset;
    //     // console.log(this.afterScroll)
  
    //     let sectionName;
    //     // console.log(this.scrollEventB)
    //     this.scrollEventB = true
    //     if ((window.pageYOffset > this.scrollTop) && this.activeSection !== 5 && this.scrollEventB) {
    //       // DOWN
    //       this.getNextProject(this.activeSection + 1);
    //     } else {
    //       // TOP
    //       this.getPrevProject();
    //     }
    //     this.scrollTop = this.afterScroll;
    //   }, 700);
    // })
   }

  getNextProject(section) {
    const sectionName = `section` + section
    this.scroller.scrollToAnchor(sectionName);
    this.activeSection = section;
    // console.log(this.scroller.getScrollPosition())
  }

  getPrevProject() {
    console.log('get getPrevProject')
  }

  ngOnInit(): void {
    this.language = window.localStorage.getItem('lang');
    console.log(this.language)
  }

  changeLanguage(lang: string) {
    window.localStorage.setItem('lang', lang)
    this.translate.use(lang)
    this.language = lang;
  }

}
