import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Open Source Archive | Hanzla Ahmad",
  description:
    "Explore 30+ production repositories, full-stack Next.js platforms, Python automation daemons, and GenAI systems engineered by Hanzla Ahmad.",
  openGraph: {
    title: "Projects & Repositories Archive | Hanzla Ahmad",
    description:
      "Explore 30+ production repositories, full-stack Next.js platforms, Python automation daemons, and GenAI systems engineered by Hanzla Ahmad.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hanzla Ahmad Projects Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Repositories Archive | Hanzla Ahmad",
    description:
      "Explore 30+ production repositories, full-stack Next.js platforms, Python automation daemons, and GenAI systems engineered by Hanzla Ahmad.",
    images: ["/og-image.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
