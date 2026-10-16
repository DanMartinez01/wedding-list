import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

/** Imagen de vista previa al compartir el link → archivo en public/ */
const SHARE_IMAGE = "/favicon.jpg";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "").trim().replace(/\/$/, "");

  const seoTransform = (html) => {
    const ogImage = siteUrl ? `${siteUrl}${SHARE_IMAGE}` : SHARE_IMAGE;
    const ogUrlLine = siteUrl
      ? `    <meta property="og:url" content="${siteUrl}/" />`
      : "";
    const canonicalLine = siteUrl ? `    <link rel="canonical" href="${siteUrl}/" />` : "";
    const appleTouchLine = `    <link rel="apple-touch-icon" href="${SHARE_IMAGE}" />`;

    return html
      .replace("%BUILD_OG_URL%", ogUrlLine)
      .replace("%BUILD_CANONICAL%", canonicalLine)
      .replace("%BUILD_APPLE_TOUCH%", appleTouchLine)
      .replaceAll("%OG_IMAGE%", ogImage)
      .replaceAll("%OG_IMAGE_TYPE%", "image/jpeg");
  };

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "seo-index-html",
        transformIndexHtml: seoTransform,
      },
    ],
  };
});
