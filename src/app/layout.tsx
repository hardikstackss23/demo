import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { NightModeProvider } from "./Components/NightModeContext";
import SmoothScroll from "./Components/SmoothScroll";
import CustomCursor from "./Components/CustomCursor";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stackss",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NightModeProvider>
          <CustomCursor/>
          <SmoothScroll>{children}</SmoothScroll>
          <Navbar />
        </NightModeProvider>
      </body>
    </html>
  );
}
