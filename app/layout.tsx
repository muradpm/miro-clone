import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { ConvexClientProvider } from "@/providers/convex-client-provider";

export const metadata: Metadata = {
  title: "Fragmenta",
  description:
    "A collaborative, open-source, and free tool for creating and sharing doodles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </ConvexClientProvider>{" "}
      </body>
    </html>
  );
}
