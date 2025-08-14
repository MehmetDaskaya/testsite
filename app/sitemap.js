export default function sitemap() {
  const baseUrl = "https://futureverde.com";
  const lastModified = new Date().toISOString();
  const locales = ["en", "tr"];

  // Define routes with their priorities and change frequencies
  const routes = [
    { path: "", priority: 1.0, changeFreq: "weekly" }, // Homepage
    { path: "/about", priority: 0.9, changeFreq: "monthly" },
    { path: "/solution", priority: 0.9, changeFreq: "monthly" },
    { path: "/partnerships", priority: 0.8, changeFreq: "monthly" },
    { path: "/insights", priority: 0.8, changeFreq: "weekly" },
    { path: "/contact", priority: 0.7, changeFreq: "monthly" },
  ];

  const urls = [];

  for (const locale of locales) {
    for (const route of routes) {
      urls.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: lastModified,
        changeFrequency: route.changeFreq,
        priority: route.priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route.path}`,
            tr: `${baseUrl}/tr${route.path}`,
          },
        },
      });
    }
  }

  return urls;
}
