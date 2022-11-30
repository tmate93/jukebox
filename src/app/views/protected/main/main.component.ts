import { Component, Input } from '@angular/core';
import { Page } from "../../../core/models/global/global.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'jukebox';
  @Input() activePage: Page | undefined = 'main';

}
