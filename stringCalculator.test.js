const stringCalculator = require("./stringCalculator.js")

describe("string calculator function", () => {
  it("returns sum string and evaluated result when input is 1", () => {
    expect(stringCalculator("1")).toEqual(["1", 1])
  })

  it("returns sum string and evaluated result when input is 2", () => {
    expect(stringCalculator("2")).toEqual(["2", 2])
  })

  it("returns sum string and evaluated result when input is 3", () => {
    expect(stringCalculator("3")).toEqual(["3", 3])
  })

  it("returns sum string and evaluated result when input is 1 + 1", () => {
    expect(stringCalculator("1 + 1")).toEqual(["1 + 1", 2])
  })

  it("returns sum string and evaluated result when input is 2 + 2", () => {
    expect(stringCalculator("2 + 2")).toEqual(["2 + 2", 4])
  })

  it("returns sum string and evaluated result when input is 3 + 3", () => {
    expect(stringCalculator("3 + 3")).toEqual(["3 + 3", 6])
  })
})