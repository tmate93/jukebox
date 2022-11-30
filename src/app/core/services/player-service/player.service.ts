import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { Song } from "../../models/song/song.model";

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // Observables
  private currentSong: BehaviorSubject<Song | undefined> = new BehaviorSubject<Song | undefined>(undefined);
  public currentSong$: Observable<Song | undefined> = this.currentSong.pipe(untilDestroyed(this));
  private history: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>([]);
  public history$: Observable<Song[]> = this.history.pipe(untilDestroyed(this));
  private status: BehaviorSubject<PlaybackStatus> = new BehaviorSubject<PlaybackStatus>('ended');
  public status$: Observable<PlaybackStatus> = this.status.pipe(untilDestroyed(this));

  public get volume(): number {
    if (!this.audioPlayback) {
      return 0;
    }
    return this.audioPlayback.volume;
  }

  public set volume(volume: number) {
    if (!this.audioPlayback) {
      return;
    }
    this.audioPlayback.volume = volume;
  }

  private readonly audioPlayback: HTMLAudioElement;

  constructor() {
    this.audioPlayback = new Audio();
    this.initializeListeners();
  }

  public async loadAndPlay(song?: Song): Promise<void> {
    this.setCurrentSong(song);
    if (!song) {
      return;
    }
    this.audioPlayback.src = song.songPath;
    await this.audioPlayback.load();
    this.play();
  }

  public pause(): void {
    if (this.audioPlayback) {
      this.audioPlayback.pause();
    }
  }

  public play(): void {
    if (this.audioPlayback) {
      this.audioPlayback.play().catch();
    }
  }

  public toggle(): void {
    const status = this.status.getValue();
    if (status === 'playing') {
      this.pause();
    } else {
      this.play();
    }
  }

  private setCurrentSong(song?: Song): void {
    this.currentSong.next(song);
    if (!song) {
      return;
    }
    const history = this.history.getValue();
    this.history.next([...history, song]);
  }

  private initializeListeners(): void {
    this.audioPlayback.addEventListener('playing', () => this.onPlay());
    this.audioPlayback.addEventListener('loadstart', () => this.onLoad());
    this.audioPlayback.addEventListener('ended', () => this.onStop());
    this.audioPlayback.addEventListener('error', () => this.onError());
    this.audioPlayback.addEventListener('pause', () => this.onPause());
  }

  private onLoad(): void {
    this.status.next('loading');
  }

  private onPlay(): void {
    this.status.next('playing');
  }

  private onStop(): void {
    this.status.next('ended');
    this.setCurrentSong(undefined);
  }

  private onPause(): void {
    this.status.next('paused');
  }

  private onError(): void {
    this.status.next('error');
  }
}

export type PlaybackStatus = 'playing' | 'loading' | 'ended' | 'paused' | 'error';
