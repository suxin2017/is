import sum from "../src/index";

test("should 1 + 2 to equeal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
