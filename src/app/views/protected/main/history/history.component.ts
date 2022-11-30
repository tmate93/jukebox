import { Component } from '@angular/core';
import { PlayerService } from "../../../../core/services/player-service/player.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  constructor(public playerService: PlayerService) { }

}
