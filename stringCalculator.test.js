const stringCalculator = require("./stringCalculator.js")

describe("string calculator function", () => {
  it("returns sum string and evaluated result when input is 1", () => {
    expect(stringCalculator("1")).toEqual(["1", 1])
  })
})