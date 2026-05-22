import type { MetadataRoute } from "next";

const BASE_URL = "https://markbunting.co.nz";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/admin", "/admin/", "/api/"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      // AI crawlers — explicitly allowed so the brand shows up in
      // ChatGPT, Claude, Perplexity, Google AI Overviews, etc.
      { userAgent: "GPTBot", allow: "/", disallow },
      { userAgent: "ChatGPT-User", allow: "/", disallow },
      { userAgent: "OAI-SearchBot", allow: "/", disallow },
      { userAgent: "ClaudeBot", allow: "/", disallow },
      { userAgent: "Claude-Web", allow: "/", disallow },
      { userAgent: "anthropic-ai", allow: "/", disallow },
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "Perplexity-User", allow: "/", disallow },
      { userAgent: "Google-Extended", allow: "/", disallow },
      { userAgent: "Applebot-Extended", allow: "/", disallow },
      { userAgent: "CCBot", allow: "/", disallow },
      { userAgent: "Bytespider", allow: "/", disallow },
      { userAgent: "Meta-ExternalAgent", allow: "/", disallow },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
