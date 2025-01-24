import {AppProvider} from "@/components/AppContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Roboto } from 'next/font/google'
import './globals.css'
import {Toaster} from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Hotel Hive',
  description: 'Generated by Abhinav Mishra',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            {/* <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2024 All rights reserved
            </footer> */}
           
          </AppProvider>
        </main>
        <Footer/>
      </body>
    </html>
  )
}
