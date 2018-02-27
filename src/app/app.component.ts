import { Component } from '@angular/core';
import { NgbDropdown } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbDropdown]
})
export class AppComponent {
  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');
    this.selectedLanguage = 'en';
  }

  public isCollapsed = true;
  public selectedLanguage: string;

  useLanguage(language: string) {
    this.translate.use(language);
    this.selectedLanguage = language;
  }
}
