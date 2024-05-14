"use client";

import { ProviderProps } from "./types";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
