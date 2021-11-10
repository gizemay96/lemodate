import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SectionModel } from '@aotearoan/angular-fullpage';

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

  constructor(private translate: TranslateService) {
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
      this.closeScrolling = false;
    }, 700);
  }

}
