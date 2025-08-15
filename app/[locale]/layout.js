import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getDictionary } from "../../lib/getDictionary";
import ClientDictionaryProvider from "../../lib/ClientDictionaryProvider";
import LangSetter from "./components/LangSetter";

export async function generateMetadata(props) {
  const { params } = await props;
  const locale = (await params)?.locale ?? "en";
  const dictionary = await getDictionary(locale);

  const baseUrl = "https://futureverde.com"; // ensure this matches production domain

  return {
    title: dictionary.title,
    description: dictionary.description,
    // Do NOT set canonical at layout to avoid overriding page-level canonicals
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: dictionary.title,
      description: dictionary.description,
      url: `${baseUrl}/${locale}`,
      type: "website",
      locale,
      siteName: "FutureVerde",
      images: [
        { url: `${baseUrl}/images/fv-banner.webp`, width: 1200, height: 630 },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.title,
      description: dictionary.description,
      images: [`${baseUrl}/images/fv-banner.webp`],
    },
  };
}

export default async function LocaleLayout(props) {
  const { children, params } = await props;
  const locale = (await params)?.locale ?? "en";
  const dictionary = await getDictionary(locale);

  return (
    <ClientDictionaryProvider dictionary={dictionary}>
      <LangSetter locale={locale} />
      <Navbar dictionary={dictionary} />
      <main>{children}</main>
      <Footer dictionary={dictionary} />
    </ClientDictionaryProvider>
  );
}
