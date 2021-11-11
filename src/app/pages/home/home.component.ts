import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SectionModel } from '@aotearoan/angular-fullpage';
import anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sections: SectionModel[] = [
    { url: 'home', active: false, pageTop: true },
    { url: 'about', active: false },
    { url: 'about/2', active: false },
    { url: 'about/3', active: false },
    { url: 'subscription', active: false },
  ];
  language;
  closeScrolling = false;
  imgLeftAnim;
  imgRightAnim;

  constructor(private translate: TranslateService) {
  }

  ngAfterViewInit(): void {
    var textWrapper = document.querySelector('.an-2');
    if (textWrapper) {
      console.log('bla')
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    this.imgLeftAnim = anime({
      targets: '.fadeInLeft',
      translateX: [-50, 0],
      duration: 10000,
      autoplay: false,
      opacity: 1,
    })

    this.imgRightAnim = anime({
      targets: '.fadeInRight',
      translateX: [50, 0],
      duration: 10000,
      autoplay: false,
      opacity: 1,
    })

    anime({
      targets: '.dir',
      translateX: 50,
      easing: 'easeInOutSine'
    });

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

  public sectionChange(url: string) {
    this.closeScrolling = true;
    setTimeout(() => {
      this.animationToggle();
    }, 150);
    setTimeout(() => {
      this.closeScrolling = false;
      console.log(window.location.hash)
    }, 700);
  }

  animationToggle() {
    if (window.location.hash === '#about' || window.location.hash === '#about/3') {
      this.imgRightAnim.restart();
    }
    if (window.location.hash === ('#about/2')) {
      this.imgLeftAnim.restart();
    }
  }

  getCurrentRoute() {
    return window.location.hash === 'about/2'
  }

}
