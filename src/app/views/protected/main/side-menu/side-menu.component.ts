import { Component, Output, EventEmitter } from '@angular/core';
import { Page } from "../../../../core/models/global/global.model";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  activePage: Page | undefined;
  @Output() contentChange: EventEmitter<Page | undefined> = new EventEmitter<Page | undefined>();

  changeContent(value: Page | undefined) {
    this.activePage = value;
    this.contentChange.emit(this.activePage);
  }
}
