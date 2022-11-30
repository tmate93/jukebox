import { Component } from '@angular/core';
import { PlayerService } from "../../../../core/services/player-service/player.service";

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.scss']
})
export class JukeboxComponent {

  constructor(
    public playerService: PlayerService,
  ) { }

}
