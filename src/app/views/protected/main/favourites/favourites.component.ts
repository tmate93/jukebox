import { Component } from '@angular/core';
import { Song } from "../../../../core/models/song/song.model";
import { SongsService } from "../../../../core/services/songs-service/songs.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent{

  public results: Song[];
  private songs: Song[];

  constructor(private songsService: SongsService) {
    this.songs = [];
    this.results = [];
    this.loadSongs().catch();
  }

  private async loadSongs(): Promise<void> {
    this.songs = await this.songsService.getSongs();
    this.results = this.songs.filter(
      song => {
        if (song.favourite === true) {
          return true;
        }
        return false;
      }
    );
  }
}
