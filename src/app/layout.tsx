import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import Providers from "@/context";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import SidebarNav from "@/components/sidebar-nav";
import { Footer } from "@/components/footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Providers>
        <body
          className={cn("min-h-screen bg-background font-sans antialiased", fontSans.className)}
        >
          <Header />
          <main className="flex flex-col md:flex-row">
            <SidebarNav />
            {children}
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
