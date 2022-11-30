import { Pipe, PipeTransform } from '@angular/core';
import { FileData} from "../../core/models/file/file.model";

@Pipe({
  name: 'FileSortPipe'
})
export class FileSortPipe implements PipeTransform {
  transform(fileArray: FileData[], argument: keyof FileData, ascending: boolean): FileData[] {

    fileArray.sort((file1,file2) => {
      switch (argument) {
        case "fileName":
          return file1.fileName.localeCompare(file2.fileName) * (ascending ? 1 : -1);
        case "fileSize":
          return (file2.fileSize - file1.fileSize) * (ascending ? 1 : -1);
        case "uploadDate":
          return (file2.uploadDate.getTime() - file1.uploadDate.getTime()) * (ascending ? 1 : -1);
        default:
          return 0;
      }
    });
    return fileArray;
  }
}
