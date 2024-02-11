import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  description: "CommentableのChrome拡張機能",
  name: "Commentable for Chrome",
  version: "0.1.0",
  icons: {
    16: "icons/icon16.png",
    48: "icons/icon48.png",
    128: "icons/icon128.png",
  },
  action: {
    default_icon: "icons/icon128.png",
    default_title: "Commentable for Chrome",
    default_popup: "src/popup/index.html",
  },
  background: {
    service_worker: "src/background/index.ts",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/content_scripts/textDisplay.ts"],
    }
  ],
  options_ui: {
    page: "src/options/index.html",
  },
  permissions: ["storage"],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
