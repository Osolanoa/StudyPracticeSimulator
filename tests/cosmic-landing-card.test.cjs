"use strict";
/* Regression: course cards remain usable after the circular arrow is removed. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const src = fs.readFileSync(path.join(root, "js/cosmic-landing.js"), "utf8");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const listeners = new Map();
const cards = ["az900", "matematicas-9-mep"].map(id => ({
  dataset: { cosmicCard: id },
  addEventListener(type, fn) {
    listeners.set(id + ":" + type, fn);
  }
}));
const app = {
  innerHTML: "",
  querySelectorAll(selector) {
    assert.equal(selector, "[data-cosmic-card]");
    return cards;
  }
};
const context = {
  window: {},
  document: { getElementById: id => id === "app" ? app : null }
};
vm.runInNewContext(src, context, {filename: "cosmic-landing.js", timeout: 3000});
assert.equal(typeof context.window.CosmicLanding?.render, "function");
const opens = [];
const registry = [
  { id: "az900", visible: true, shortName: "AZ-900", name: "Azure Fundamentals", description: "Azure", questionCount: 200 },
  { id: "matematicas-9-mep", visible: true, shortName: "Matemáticas 9.º", name: "Matemáticas 9.º Año — MEP", description: "MEP", questionCount: 170 }
];
context.window.CosmicLanding.render({
  registry,
  practiceSummary: () => ({ total: 17, done: 2 }),
  loadCourse: (id, view) => opens.push([id, view]),
  applyTheme: () => {}
});
const html = app.innerHTML;
assert.equal((html.match(/<article\b/g) || []).length, 2);
assert.equal((html.match(/role="button"/g) || []).length, 2);
assert.equal((html.match(/tabindex="0"/g) || []).length, 2);
assert.equal((html.match(/data-cosmic-card=/g) || []).length, 2);
assert.match(html, /aria-label="Open Azure Fundamentals"/);
assert.match(html, /aria-label="Open Matemáticas 9.º Año — MEP"/);
assert.ok(!html.includes("cosmos-course-go"), "Circular arrow element is still rendered");
assert.ok(!html.includes("data-cosmic-course"), "Old arrow button still rendered");
assert.ok(!html.includes("<button"), "The card should not have nested circular action controls");
assert.ok(!html.includes('M4 12h16'), "Old arrow icon SVG remains in HTML");
assert.match(index, /cosmic-landing\.js\?v=course-cards-no-arrow-20261113/);

for (const card of cards) {
  const id = card.dataset.cosmicCard;
  const click = listeners.get(id + ":click");
  const keydown = listeners.get(id + ":keydown");
  assert.equal(typeof click, "function", id + " click handler");
  assert.equal(typeof keydown, "function", id + " keyboard handler");
  click({target: card});
  let prevented = 0;
  keydown({key:"Enter", preventDefault:()=>prevented++});
  keydown({key:" ", preventDefault:()=>prevented++});
  keydown({key:"Escape", preventDefault:()=>{throw new Error("Esc should not activate card")}});
  assert.equal(prevented, 2, id + " keyboard navigation");
}
assert.equal(opens.length, 6);
for (const [id, view] of opens) {
  assert.ok(registry.some(course => course.id === id));
  assert.equal(view, "dashboard");
}
console.log("PASS: both course cards have no circular arrow and support mouse, Enter, and Space navigation.");
