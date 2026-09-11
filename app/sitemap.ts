import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tomtestu.me/", priority: 1 },
    { url: "https://tomtestu.me/en/", priority: 0.8 },
  ];
}
