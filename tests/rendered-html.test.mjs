import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete bilingual privacy policy", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Privacy Policy \| Read Aloud<\/title>/i);
  assert.doesNotMatch(html, new RegExp(["vsl", "ukh"].join(""), "i"));
  assert.doesNotMatch(html, new RegExp(["вс", "лух"].join(""), "i"));
  assert.match(html, /Your words become a voice note/);
  assert.match(html, /Privacy Policy/);
  assert.match(html, /Политика конфиденциальности/);
  assert.match(html, /3 September 2026/);
  assert.match(html, /3 сентября 2026 года/);
  assert.match(html, /Version 1\.3/);
  assert.match(html, /at most ten minutes before rendering starts/i);
  assert.match(html, /Accepted work and queue state are not persisted/i);
  assert.match(html, /Queue state is used only for capacity, fairness, progress, rendering, and replies/i);
  assert.match(html, /не более десяти минут до начала озвучивания/i);
  assert.match(html, /Принятые задачи и состояние очереди не сохраняются/i);
  assert.match(html, /используется только для ограничения вместимости/i);
  assert.match(html, /incoming Telegram update as compact JSON/i);
  assert.match(html, /каждое входящее обновление Telegram/i);
  assert.match(html, /Qwen3-TTS or Silero/);
  assert.match(html, /no cloud TTS provider receives the text/i);
  assert.match(html, /не передается облачному TTS-провайдеру/i);
  assert.match(html, /https:\/\/telegram\.org\/privacy/);
  assert.doesNotMatch(html, /Piper|Russian speech|Russian voice note/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("removes starter and identity-aware capabilities", async () => {
  const [page, layout, packageJson, hosting] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /codex-preview|SkeletonPreview|chatgpt-auth/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|chatgpt-auth/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  const hostingConfig = JSON.parse(hosting);
  assert.equal(hostingConfig.d1, null);
  assert.equal(hostingConfig.r2, null);
  assert.match(hostingConfig.project_id, /^appgprj_[a-z0-9]+$/);

  await Promise.all([
    assert.rejects(access(new URL("../app/_sites-preview", import.meta.url))),
    assert.rejects(access(new URL("../app/chatgpt-auth.ts", import.meta.url))),
  ]);
});
