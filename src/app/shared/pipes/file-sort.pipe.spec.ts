import { FileSortPipe } from "./file-sort.pipe";
import { FileData } from "../../core/models/file/file.model";

describe('FileSortPipe', () => {

  const pipe = new FileSortPipe();
  const mockFile1: FileData = {
    fileName: 'name1',
    fileData: 'data3',
    fileSize: 512,
    uploadDate: new Date('2022-10-20')
  };
  const mockFile2: FileData = {
    fileName: 'name3',
    fileData: 'data2',
    fileSize: 123,
    uploadDate: new Date('2022-10-10')
  };
  const mockFile3: FileData = {
    fileName: 'name2',
    fileData: 'data1',
    fileSize: 312,
    uploadDate: new Date('2021-10-20')
  };
  const mockFileArray: FileData[] = [mockFile1, mockFile2, mockFile3];

  const expectedResultArrayName: FileData[] = [mockFile1, mockFile3, mockFile2];

  const expectedResultArraySize: FileData[] = [mockFile1, mockFile3, mockFile2];

  const expectedResultArrayDate: FileData[] = [mockFile1, mockFile2, mockFile3];

  it('create an instance', () => {
    const pipe = new FileSortPipe();
    expect(pipe).toBeTruthy();
  });


  it('sorts File array by name', () => {
    expect(pipe.transform(mockFileArray, 'fileName', true)).toEqual(expectedResultArrayName)
  });
  it('sorts File array by size', () => {
    expect(pipe.transform(mockFileArray, 'fileSize', true)).toEqual(expectedResultArraySize)
  });
  it('sorts File array by upload date', () => {
    expect(pipe.transform(mockFileArray, 'uploadDate', true)).toEqual(expectedResultArrayDate)
  });
});
