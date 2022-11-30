import { Component, Input } from '@angular/core';
import { Page } from "../../../../core/models/global/global.model";

@Component({
  selector: 'app-site-content',
  templateUrl: './site-content.component.html',
  styleUrls: ['./site-content.component.scss']
})
export class SiteContentComponent {
  @Input() activePage: Page | undefined;
}
