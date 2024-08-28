import { CapitalizeWordsPipe } from './capitalize-words.pipe';

describe('CapitalizeWordsPipe', () => {
  let pipe: CapitalizeWordsPipe;

  beforeEach(() => {
    pipe = new CapitalizeWordsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter of every word', () => {
    const testString = 'hello world';
    const transformed = pipe.transform(testString);
    expect(transformed).toBe('Hello World');
  });

  it('should handle empty strings', () => {
    const testString = '';
    const transformed = pipe.transform(testString);
    expect(transformed).toBe('');
  });

  it('should handle single word', () => {
    const testString = 'angular';
    const transformed = pipe.transform(testString);
    expect(transformed).toBe('Angular');
  });

  it('should handle strings with multiple spaces', () => {
    const testString = 'angular  pipe  test';
    const transformed = pipe.transform(testString);
    expect(transformed).toBe('Angular  Pipe  Test');
  });

  it('should not change already capitalized words', () => {
    const testString = 'Angular Pipe Test';
    const transformed = pipe.transform(testString);
    expect(transformed).toBe('Angular Pipe Test');
  });

  it('should handle strings with special characters', () => {
    const testString = 'hello-world test';
    const transformed = pipe.transform(testString);
    expect(transformed).toBe('Hello-World Test');
  });
});
