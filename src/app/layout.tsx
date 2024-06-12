import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import Providers from "@/context";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";
import { Footer } from "@/components/footer";
import { ReturnToTop } from "@/components/return-to-top";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers>
          <Header />
          <main className="flex flex-col md:flex-row">
            <SidebarNav />
            {children}
          </main>
          <ReturnToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
