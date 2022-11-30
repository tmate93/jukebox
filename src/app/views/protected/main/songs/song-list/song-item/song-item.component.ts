import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from "../../../../../../core/models/song/song.model";

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent implements OnInit{
  @Input() song!: Song;
  @Output() selected: EventEmitter<Song> = new EventEmitter<Song>();

  public onClick () {
    this.selected.emit(this.song);
  }

  ngOnInit() {
  }
}
