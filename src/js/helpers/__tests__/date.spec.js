import { formatDate } from "../date";

describe('formatDate', () => {
  it('check format', () => {
    expect(formatDate(1577656786988, 'yyyy')).toBe('2019');
  });
});