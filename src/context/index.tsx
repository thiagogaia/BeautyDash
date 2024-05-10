"use client";

import { ProviderProps } from "./types";
import { ThemeProvider } from "./theme-provider";
import { TopicsProvider } from "./topics-provider";

export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TopicsProvider>{children}</TopicsProvider>
    </ThemeProvider>
  );
}
