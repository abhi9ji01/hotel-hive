import { AppProvider } from "@/components/AppContext";
import Header from "@/components/layout/Header";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Hotel Hive",
  description: "Created by Abhinav Mishra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`flex flex-col min-h-screen ${roboto.className}`}>
        {/* Main layout */}
        <AppProvider>
          <Toaster />
          <Header />
          {/* Content section grows to push footer */}
          <main className="flex-grow max-w-4xl mx-auto p-4">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
