import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService, public router: Router) {
    const lang = window.localStorage.getItem('lang');
    if (lang) {
      this.translate.use(lang)
    } else { // set default language
      window.localStorage.setItem('lang', 'tr')
    }

  }
}
