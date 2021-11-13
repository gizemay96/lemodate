import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SectionModel } from '@aotearoan/angular-fullpage';
import anime from 'animejs';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('subscription') subscription : ElementRef

  sections: SectionModel[] = [
    { url: 'home', active: false, pageTop: true },
    { url: 'about', active: false },
    { url: 'about/2', active: false },
    { url: 'about/3', active: false },
    { url: 'subscription', active: false },
    { url: 'footer', active: false },
  ];
  language;
  closeScrolling = false;
  imgLeftAnim;
  imgRightAnim;
  cardAnim;
  cardLogoAnim;
  cardUpAnime;

  options: AnimationOptions = {
    path: '/assets/pinjump.json',
    renderer: 'svg',
    loop: false,
    autoplay: true,
  };

  constructor(private translate: TranslateService) {
  }

  ngAfterViewInit(): void {
    var textWrapper = document.querySelector('.an-2');
    if (textWrapper) {
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

    this.cardAnim = anime({
      targets: '.openAnimation',
      translateY: [-120, 190],
      duration: 5000,
      autoplay: false,
    })

    this.cardLogoAnim = anime({
      targets: '.cardLogoAnim',
      duration: 5000,
      translateY: [-180, -210],
      autoplay: false,
      opacity: 1,
      zIndex: {
        value: [0, 1],
        round: true
      }
    })

    this.cardUpAnime = anime({
      targets: '.cardUpAnime',
      duration: 2000,
      autoplay: false,
      easing: 'easeInOutQuart',
      zIndex: {
        value: [5, 0],
        round: true
      },
    })

  }

  ngOnInit(): void {
    this.language = window.localStorage.getItem('lang');
    setTimeout(() => {
      document.getElementById('greating-anim').style.display = 'none';
    }, 2000);
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
    }, 700);
  }

  animationToggle() {
    if (window.location.hash === '#about' || window.location.hash === '#about/3') {
      this.imgRightAnim.restart();
    }
    if (window.location.hash === ('#about/2')) {
      this.imgLeftAnim.restart();
    }

    if (window.location.hash === ('#subscription')) {
      setTimeout(() => {
        this.cardAnim.restart();
        this.cardUpAnime.restart();
        this.cardLogoAnim.restart();
      }, 200);
    }
  }

  getCurrentRoute() {
    return window.location.hash === 'about/2'
  }


  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  getSection(e : HTMLElement){
    window.scrollTo(0 , this.subscription.nativeElement.offsetTop)
  }

}
