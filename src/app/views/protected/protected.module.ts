import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from "./protected-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { HeaderComponent } from "./main/header/header.component";
import { SideMenuComponent } from "./main/side-menu/side-menu.component";
import { SiteContentComponent } from "./main/site-content/site-content.component";
import { JukeboxComponent } from "./main/jukebox/jukebox.component";
import { SearchComponent } from "./main/search/search.component";
import { SongListComponent } from "./main/songs/song-list/song-list.component";
import { SongItemComponent } from "./main/songs/song-list/song-item/song-item.component";
import { HistoryComponent } from './main/history/history.component';
import { FavouritesComponent } from "./main/favourites/favourites.component";
import { MainComponent } from "./main/main.component";


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    SiteContentComponent,
    JukeboxComponent,
    SearchComponent,
    SongListComponent,
    SongItemComponent,
    HistoryComponent,
    FavouritesComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProtectedModule { }
