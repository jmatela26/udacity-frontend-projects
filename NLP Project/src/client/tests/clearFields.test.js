// Clearing fields should clear all fields
import { JSDOM } from "jsdom"
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

const article = global.document.getElementById("article-url");
const agreement = global.document.getElementById("agreement");
const confidence = global.document.getElementById("confidence");
const subjectivity = global.document.getElementById("subjectivity");
const irony = global.document.getElementById("irony");
const score_tag = global.document.getElementById("score_tag");

test('Test clear all', () => {
  expect(article).toBe('' || null);
  expect(agreement).toBe('' || null);
  expect(confidence).toBe('' || null);
  expect(subjectivity).toBe('' || null);
  expect(irony).toBe('' || null);
  expect(score_tag).toBe('' || null);
})