import { it, expect } from 'vitest';
import writeData from './io';

it('should execute the writeFile method', () => {
  const testData = 'Test';
  const testFilename = 'test.txt';
  expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});

// side effect here could be creation or deletion of files that we don't intend to have on the system or vice versa
// generally, working with databases
// all these things are side effects because we interact with other systems (databases or HTTP requests), hard drive etc. We are interacting with something outside of our code

// we DON'T want to know if the file was actually written to the file system
// we might want to know if the right file was called successfully, if we passed the right data
