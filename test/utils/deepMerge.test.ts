import { deepMerge } from '../../src/utils/deepMerge';

describe('deepMerge', () => {
  it('merges nested objects without mutating inputs', () => {
    const a = { foo: { bar: 1 }, arr: [1, 2] };
    const b = { foo: { baz: 2 }, arr: [3] };

    const result = deepMerge(a as any, b as any) as any;

    expect(result).toEqual({
      foo: { bar: 1, baz: 2 },
      arr: [3]
    });
    expect(a.arr).toEqual([1, 2]);
  });
});

