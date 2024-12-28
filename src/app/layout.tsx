import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import Container from "@/components/Container";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Website",
  description: "Welcome to our web development and Malik Hunain blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light dark:bg-dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Container>
            <Navbar />
            {children}
          </Container>
          <Contact />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
