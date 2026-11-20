#!/usr/bin/env node
// Dependency-free source verification. Does not replace browser or deployment QA.
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";

const site = resolve("docs");
const read = (file) => readFileSync(join(site, file), "utf8");
const html = read("index.html");
const js = read("app.js");
const css = read("styles.css");
const assets = ["index.html","styles.css","app.js","404.html","sitemap.xml",".nojekyll","assets/favicon.svg","assets/social-preview.svg"];
assets.forEach((file) => assert(existsSync(join(site, file)), "Missing site file: " + file));

assert(html.startsWith("<!doctype html>"), "HTML doctype missing");
assert(html.includes('name="viewport"'), "Mobile viewport missing");
assert(html.includes('name="description"'), "Meta description missing");
assert(html.includes('class="skip-link"'), "Skip link missing");
assert(css.includes("prefers-reduced-motion"), "Accessibility motion handling missing");
assert(js.includes("localStorage"), "Language preference storage missing");

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
const internal = [...html.matchAll(/\bhref="#([^"]+)"/g)].map((m) => m[1]);
for (const target of internal) assert(ids.has(target), "Broken internal anchor #" + target);
for (const url of ["./styles.css", "./app.js", "./assets/favicon.svg"]) {
  assert(html.includes(url), "Missing reference " + url);
  assert(existsSync(resolve(site,url)), "Missing asset " + url);
}
assert(html.includes("https://github.com/trminhkhoi76-code/auth-service"), "Auth repo citation missing");
assert(html.includes("https://github.com/trminhkhoi76-code/meridian-travel-atlas"), "Travel repo citation missing");
assert(html.includes("https://github.com/trminhkhoi76-code/verify-iam-policies"), "Verification repo citation missing");
assert(!html.includes("mailto:"), "Unapproved email address in HTML");
assert(!html.includes('src="/assets/') && !html.includes('href="/styles.css"'), "Project Pages require relative paths");

const keys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]);
assert(keys.length >= 80, "Not enough bilingual content");
const dict = js.split("const vi = {")[1]?.split("\n  };")[0];
assert(dict, "Vietnamese dictionary missing");
const translated = new Set([...dict.matchAll(/^\s{4}([a-z][a-z0-9_]+):/gm)].map((m) => m[1]));
for (const key of keys) assert(translated.has(key), "Missing Vietnamese translation: " + key);
assert(html.includes('id="projects"') && html.includes('id="paths"'), "Exploration sections missing");
assert(css.includes("@media") && css.includes("prefers-reduced-motion"), "Responsive styles missing");
assert(html.includes('aria-expanded="false"'), "Accessible menu state missing");

console.log("Portfolio static verification passed: " + assets.length + " files, " + internal.length + " anchor links, " + keys.length + " bilingual placements.");
console.log("Evidence: static source only; not a browser runtime or Pages deployment test.");
