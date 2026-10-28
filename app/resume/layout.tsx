import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Hanzla Ahmad — Full-Stack & Systems Software Engineer",
  description:
    "Official ATS-friendly resume of Hanzla Ahmad. Full-Stack & Systems Software Engineer with 4+ years of production experience in Next.js, React, TypeScript, Python, Linux daemons, and PostgreSQL.",
  openGraph: {
    title: "Resume | Hanzla Ahmad — Full-Stack & Systems Software Engineer",
    description:
      "Official ATS-compliant resume of Hanzla Ahmad. View online or download PDF and Word versions.",
    url: "/resume",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hanzla Ahmad Official Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Hanzla Ahmad — Full-Stack & Systems Software Engineer",
    description:
      "Official ATS-compliant resume of Hanzla Ahmad. View online or download PDF and Word versions.",
    images: ["/og-image.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
