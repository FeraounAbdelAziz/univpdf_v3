import type { Metadata } from "next";
import { Container } from "@mantine/core";
import SwitchTheme from "@/components/SwitchTheme/SwitchTheme";
import Hotkeys from "@/components/HotKeys/HotKeys";
import Providers from "./Providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import '@mantine/core/styles.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "UnivPDF",
  description: "Free courses with a high quality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container size="lg" mt={10}>
            <Hotkeys />
            {children}
            <Analytics />
            <SpeedInsights />
            <SwitchTheme />
          </Container>
        </Providers>
      </body>

    </html>
  );
}
