import {Component, Input} from '@angular/core';
import { Song } from "../../../../../core/models/song/song.model";
import { PlayerService } from "../../../../../core/services/player-service/player.service";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent {

  @Input() public songs!: Song[] | null;

  constructor(public playerService: PlayerService) { }

}
