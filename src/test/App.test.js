import { reduceArray, ModeValue } from './functions'


test("should reduce array and count the mean for the upcoming 5 days", () => {
  expect(reduceArray([2, 2, 2, 2, 2])).toEqual(2);
});


test("should find the mode value", () => {
  expect(ModeValue([1, 3, 3, 3, 3, 3, 4])).toEqual(3);
});
