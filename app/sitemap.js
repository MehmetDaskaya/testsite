export default function sitemap() {
  const baseUrl = "https://futureverde.com";
  const locales = ["en", "tr"];
  const routes = [
    "",
    "/about",
    "/solution",
    "/partnerships",
    "/insights",
    "/contact",
  ];

  const urls = [];
  for (const locale of locales) {
    for (const route of routes) {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  return urls;
}
