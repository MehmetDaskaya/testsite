// This function loads the dictionary based on the locale
export async function getDictionary(locale) {
  try {
    // Default to English if locale is not provided
    const targetLocale = locale || "en";

    // Import the appropriate dictionary file
    const dictionary = await import(`../locales/${targetLocale}.json`);

    return dictionary.default || dictionary;
  } catch (error) {
    console.error(`Error loading dictionary for locale ${locale}:`, error);

    // Fallback to English if there's an error
    try {
      const fallbackDictionary = await import("../locales/en.json");
      return fallbackDictionary.default || fallbackDictionary;
    } catch (fallbackError) {
      console.error("Error loading fallback dictionary:", fallbackError);

      // Return a minimal dictionary to prevent app crash
      return {
        title: "Paving the Way for Tech-Driven Sustainability",
        description:
          "We maximize automation, digitalization, and verification in ESG Reporting and Green Finance.",
        nav: {
          home: "Home",
          about: "About Us",
          solution: "Our Solution",
          features: "Key Features",
          industries: "Industries We Serve",
        },
      };
    }
  }
}
