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

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/hanzlaahmadcheema"),
  title: "Hanzla Ahmad | Full-Stack & Systems Developer",
  description:
    "Production-grade full-stack web platforms, deterministic control planes, and Generative AI pipelines by Hanzla Ahmad (Cheemæ).",
  keywords: [
    "Hanzla Ahmad",
    "Cheemæ",
    "Full Stack Developer",
    "Systems Engineer",
    "Next.js 15",
    "TypeScript",
    "Python",
    "Generative AI",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Hanzla Ahmad", url: "https://github.com/hanzlaahmadcheema" }],
  openGraph: {
    title: "Hanzla Ahmad | Full-Stack & Systems Developer",
    description: "Production web applications, headless control planes, and AI automation.",
    url: "https://github.com/hanzlaahmadcheema",
    siteName: "Hanzla Ahmad Portfolio",
    images: [{ url: "/banner.png", width: 1584, height: 396, alt: "Hanzla Ahmad Portfolio Banner" }],
    type: "website",
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
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#070A11] text-slate-800 dark:text-[#E2E8F0] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-900 dark:selection:text-cyan-300 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
