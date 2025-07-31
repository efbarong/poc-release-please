import { describe, it, expect } from 'vitest';
import { rest } from '../src/functions';

describe('sum', () => {
  it('should rest two numbers', () => {
    expect(rest(2, 3)).toBe(-1);
  });

  it('should work with negatives', () => {
    expect(rest(-1, -1)).toBe(0);
  });
});
