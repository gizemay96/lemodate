import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  language;

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


}
