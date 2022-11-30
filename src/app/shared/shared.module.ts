import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizePipe } from "./pipes/filesize.pipe";
import { FileSortPipe } from "./pipes/file-sort.pipe";


@NgModule({
  declarations: [
    FileSizePipe,
    FileSortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FileSizePipe,
    FileSortPipe
  ]
})
export class SharedModule { }
