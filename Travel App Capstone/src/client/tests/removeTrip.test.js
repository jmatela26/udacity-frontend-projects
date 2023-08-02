// Clearing fields should clear all fields
import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

const titleResult = global.document.getElementById("titleResult");
const highTemp = global.document.getElementById("highTemp");
const lowTemp = global.document.getElementById("lowTemp");
const averageTemp = global.document.getElementById("averageTemp");
const daysAway = global.document.getElementById("daysAway");

test('Test remove all', () => {
  expect(titleResult).toBe('' || null);
  expect(highTemp).toBe('' || null);
  expect(lowTemp).toBe('' || null);
  expect(averageTemp).toBe('' || null);
  expect(daysAway).toBe('' || null);
})