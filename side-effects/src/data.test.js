import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generate report data()', () => {
  it('should execute logFn if provided', () => {
    const logger = vi.fn(); // creates an empty function that keeps track of executions of that function and arguments that were provided with those calls

    generateReportData(logger);

    expect(logger).toBeCalled();

    // expect(logger).toBeCalledTimes(2);
  });
});
