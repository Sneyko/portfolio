import type { MetadataRoute } from "next";

import { brand } from "@/lib/brand";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${brand.url}/`, priority: 1 },
    { url: `${brand.url}/en/`, priority: 0.8 },
  ];
}
