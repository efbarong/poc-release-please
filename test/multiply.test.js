import { describe, it, expect } from 'vitest';
import { multiply } from '../index';

describe('sum', () => {
  it('should add multiply numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should work with negatives', () => {
    expect(multiply(-1, -1)).toBe(1);
  });
});
