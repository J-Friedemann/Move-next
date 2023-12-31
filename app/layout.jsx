import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Move",
  description: "Move Messenger",
  icons: {
    icon: ["/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
