import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SectionModel } from '@aotearoan/angular-fullpage';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import anime from 'animejs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('subscription') subscription: ElementRef

  sections: SectionModel[] = [
    { url: 'home', active: false, pageTop: true },
    { url: 'about', active: false },
    { url: 'about/2', active: false },
    { url: 'about/3', active: false },
    { url: 'subscription', active: false },
    { url: 'footer', active: false },
  ];
  activeSectionId;

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

  deviceInfo;

  constructor(private translate: TranslateService,
    private deviceService: DeviceDetectorService,
    private router: Router
  ) {
    this.epicFunction();
    const touchmoveHandler = event => {
      if (window.pageYOffset !== 0) { }
      else {
        return event.preventDefault();
      }
    };
    document.addEventListener('touchmove', touchmoveHandler, { passive: false });
  }

  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  get isDesktopDevice() {
    return window.innerWidth > 993;
  }

  ngAfterViewInit(): void {

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
    });

  }

  ngOnInit(): void {
    this.language = window.localStorage.getItem('lang');
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
      this.activeSectionId = window.location.hash.substring(1);
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

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  getSection(fragmentKey) {
    this.router.navigate(["/home"], { fragment: fragmentKey });
    document.getElementById('navbarSupportedContent').classList.remove('show');
  }
}
