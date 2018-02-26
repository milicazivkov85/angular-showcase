import { Component } from '@angular/core';
import {NgbDropdown} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbDropdown]
})
export class AppComponent {

  public isCollapsed = true;
}
