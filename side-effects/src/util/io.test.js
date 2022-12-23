import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';
vi.mock('fs'); // test.txt won't be created, all functions will be replaced with empty modules, we no longer will get back a promise that gets resolved

it('should execute the writeFile method', () => {
  const testData = 'Test';
  const testFilename = 'test.txt';

  writeData(testData, testFilename);
  // expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  expect(fs.writeFile).toBeCalled();
});

// side effect here could be creation or deletion of files that we don't intend to have on the system or vice versa
// generally, working with databases
// all these things are side effects because we interact with other systems (databases or HTTP requests), hard drive etc. We are interacting with something outside of our code

// we DON'T want to know if the file was actually written to the file system
// we might want to know if the right file was called successfully, if we passed the right data
