import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Rodias",
  description: "Created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={"antialiased"}>
          <Navbar />
          <main className="relative min-h-[100vh] z-10 bg-inherit">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
