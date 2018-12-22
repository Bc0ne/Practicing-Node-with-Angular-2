import { CapitalizingPipe } from './capitalizing.pipe';

describe('CapitalizingPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizingPipe();
    expect(pipe).toBeTruthy();
  });
});
