import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = localFont({
  src: [
    {
      path: "../public/fonts/JetBrainsMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hanzlaahmad.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hanzla Ahmad | Full-Stack & Systems Developer",
    template: "%s | Hanzla Ahmad",
  },
  description:
    "Production-grade full-stack web platforms, deterministic control planes, and Generative AI pipelines by Hanzla Ahmad (Cheemæ).",
  keywords: [
    "Hanzla Ahmad",
    "Cheemæ",
    "hanzlaahmadcheema",
    "Full Stack Developer",
    "Systems Engineer",
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Node.js",
    "Python",
    "MERN Stack Developer",
    "Tailwind CSS",
    "PostgreSQL",
    "SQLite",
    "Docker",
    "Linux Systems",
    "Ubuntu",
    "Generative AI",
    "LLM Engineering",
    "RAG",
    "RESTful APIs",
    "WebSocket",
    "Server Actions",
    "Lahore Pakistan",
    "Hire Full Stack Developer",
    "Software Engineer Portfolio",
    "IT Beam Intern",
    "FastAPI",
    "Express.js",
    "Prisma ORM",
  ],
  authors: [{ name: "Hanzla Ahmad", url: "https://github.com/hanzlaahmadcheema" }],
  creator: "Hanzla Ahmad",
  publisher: "Hanzla Ahmad",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Hanzla Ahmad | Full-Stack & Systems Developer",
    description:
      "Production-grade web platforms, deterministic control planes, and Generative AI pipelines.",
    url: siteUrl,
    siteName: "Hanzla Ahmad",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hanzla Ahmad — Full-Stack & Systems Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanzla Ahmad | Full-Stack & Systems Developer",
    description:
      "Production-grade web platforms, deterministic control planes, and Generative AI pipelines.",
    images: ["/og-image.png"],
    creator: "@hanzlaahmadcheema",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('portfolio-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored ? stored : (prefersDark ? 'dark' : 'light');
      if (theme === 'dark' || (theme === 'system' && prefersDark)) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    } catch (e) {}
  })();
`;

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hanzla Ahmad",
  alternateName: ["Cheemæ", "hanzlaahmadcheema"],
  jobTitle: "Full-Stack & Systems Developer",
  description:
    "Full-Stack and Systems Developer focused on engineering resilient software platforms, deterministic background control planes, and production-grade AI pipelines.",
  url: "https://hanzlaahmad.com",
  image: "https://hanzlaahmad.com/avatar.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://hanzlaahmad.com",
    "https://github.com/hanzlaahmadcheema",
    "https://www.linkedin.com/in/hanzlaahmadcheema",
    "https://wa.me/923266900001",
  ],
  worksFor: {
    "@type": "Organization",
    name: "HA Entertainment",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "MERN Stack",
    "MongoDB",
    "Express.js",
    "PostgreSQL",
    "Docker",
    "Linux Ubuntu",
    "Generative AI",
    "REST APIs",
    "Tailwind CSS",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hanzla Ahmad",
  alternateName: [
    "Hanzla Ahmad (Cheemæ)",
    "Hanzla Ahmad Portfolio",
    "hanzlaahmad.com",
  ],
  url: siteUrl,
  description:
    "Production-grade full-stack web platforms, deterministic control planes, and Generative AI pipelines by Hanzla Ahmad (Cheemæ).",
  author: {
    "@type": "Person",
    name: "Hanzla Ahmad",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#070A11] text-slate-800 dark:text-[#E2E8F0] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-900 dark:selection:text-cyan-300 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
