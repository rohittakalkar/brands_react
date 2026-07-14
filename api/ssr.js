import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

let templateHtml;
let render;

export default async function handler(req, res) {
  try {
    if (!templateHtml) {
      templateHtml = await fs.readFile(
        path.join(root, "dist/server/index.html"),
        "utf-8"
      );
    }
    if (!render) {
      ({ render } = await import(path.join(root, "dist/server/entry-server.js")));
    }

    const url = req.url;
    const { html: appHtml } = render(url);
    const html = templateHtml.replace("<!--app-html-->", appHtml);

    res.status(200).setHeader("Content-Type", "text/html").send(html);
  } catch (e) {
    console.error(e.stack);
    res.status(500).send(e.stack);
  }
}
