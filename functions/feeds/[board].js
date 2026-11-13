import { buildFeed } from "../../lib/feed.js";

export function onRequestGet({ params }) {
  const name = String(params.board || "").replace(/\.xml$/, "");
  const xml = buildFeed(name, Date.now());
  if (xml === null) return new Response("Not found", { status: 404 });
  return new Response(xml, {
    headers: { "content-type": "application/rss+xml; charset=utf-8", "cache-control": "public, max-age=900" },
  });
}
