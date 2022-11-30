import { Injectable } from '@angular/core';
import { Song } from "../../models/song/song.model";

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private songs: Song[] | undefined;

  public async getSongs(forceLoad?: boolean): Promise<Song[]> {
    if (!this.songs || forceLoad) {
      this.songs = await this.loadSongs();
    }
    return this.songs;
  }

  private async loadSongs(): Promise<Song[]> {
    return getSongs();
  }

}

function getSongs(): Song[] {
  return songs.map(song => ({
    name: song[0],
    artist: song[1],
    songPath: song[2],
    songThumbnailPath: song[3],
    favourite: Math.random() < 0.3,
  }))
}

const songs = [
  ['A1', 'B', 'assets/music/Braken-To_The_Stars_cut.mp3', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F1792%2F42978012211_40bfb844f0_b.jpg&f=1&nofb=1'],
  ['A2', 'A', 'assets/music/_Fly_Like_A_Butterfly.mp3', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1Cftp0n5C8%2Fmaxresdefault.jpg&f=1&nofb=1'],
  ['A3', 'B', 'assets/music/Haunted.mp3', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2F1400%2F98057834879925.56060ce84d590.jpg&f=1&nofb=1'],
  ['B1', 'B', 'assets/music/Fly_Like_A_Butterfly.mp3', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fedge.alluremedia.com.au%2Fm%2Fg%2F2020%2F01%2Frickroll.jpg&f=1&nofb=1'],
  ['B2', 'A', 'C', 'D'],
  ['B3', 'B', 'C', 'D'],
  ['B4', 'C', 'C', 'D'],
  ['B5', 'B', 'C', 'D'],
  ['C1', 'A', 'C', 'D'],
  ['C2', 'B', 'C', 'D'],
  ['C3', 'C', 'C', 'D'],
  ['C4', 'C', 'C', 'D']
];
