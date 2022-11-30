import { FileSizePipe} from "./filesize.pipe";

describe('FileSizePipe', () => {
  const pipe = new FileSizePipe();

  it('create an instance', () => {
    const pipe = new FileSizePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "1048576" to "1.00MB"', () => {
    expect(pipe.transform(1048576)).toBe('1.00MB')
  });
});
