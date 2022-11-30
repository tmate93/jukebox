import { Component } from '@angular/core';
import { Song } from "../../../../core/models/song/song.model";
import { SongsService } from "../../../../core/services/songs-service/songs.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public keywords: string;
  public results: Song[];
  private songs: Song[];

  constructor(private songsService: SongsService) {
    this.keywords = '';
    this.songs = [];
    this.results = [];
    this.loadSongs().catch();
  }

  private async loadSongs(): Promise<void> {
    this.songs = await this.songsService.getSongs();
  }

  search(keywords: string): void {
    const filter = keywords.toLowerCase();
    this.results = this.songs.filter(
      song => {
        if (song.name.toLowerCase().indexOf(filter) >= 0) {
          return true;
        }
        if (song.artist.toLowerCase().indexOf(filter) >= 0) {
          return true;
        }
        return false;
      }
    );
  }

}
