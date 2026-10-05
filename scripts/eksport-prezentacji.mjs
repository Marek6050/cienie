// Zrzuty slajdów prezentacji do out/prezentacja/slajd-NN.png (1920×1080).
// Wymaga: działającego `npm run dev` oraz Google Chrome. Użycie:
//   node scripts/eksport-prezentacji.mjs [port]      (domyślnie 3001)
// Potem: python3 scripts/zloz-pptx.py
import { spawn } from "node:child_process";
import fs from "node:fs";

const port = process.argv[2] ?? "3001";
const notatki = JSON.parse(fs.readFileSync("components/prezentacja/notatki.json", "utf8"));
fs.mkdirSync("out/prezentacja", { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const chrome = spawn(
  "google-chrome",
  ["--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--remote-debugging-port=9340", "--window-size=1920,1080", "about:blank"],
  { stdio: "ignore" },
);
await sleep(2500);
const karty = await (await fetch("http://localhost:9340/json")).json();
const ws = new WebSocket(karty.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));

let id = 0;
const oczekujace = new Map();
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && oczekujace.has(m.id)) { oczekujace.get(m.id)(m.result); oczekujace.delete(m.id); }
};
const wyslij = (method, params = {}) => new Promise((r) => { const i = ++id; oczekujace.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

await wyslij("Page.enable");
await wyslij("Emulation.setDeviceMetricsOverride", { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });
// reduced-motion: animacje wchodzą od razu w stan końcowy, więc zrzut jest deterministyczny
await wyslij("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });

for (let n = 1; n <= notatki.length; n++) {
  await wyslij("Page.navigate", { url: `http://localhost:${port}/prezentacja/eksport/${n}` });
  await sleep(4500);
  await wyslij("Runtime.evaluate", { expression: "document.querySelectorAll('nextjs-portal').forEach(e=>e.remove())" });
  const r = await wyslij("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(`out/prezentacja/slajd-${String(n).padStart(2, "0")}.png`, Buffer.from(r.data, "base64"));
  console.log("slajd", n);
}
chrome.kill();
process.exit(0);
