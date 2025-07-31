import { describe, it, expect } from 'vitest';
import { sum } from '../src/functions';

describe('sum', () => {
  it('should add two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should work with negatives', () => {
    expect(sum(-1, -1)).toBe(-2);
  });
});
