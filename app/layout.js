import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Captur Photography",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
    
    <html lang="en">
    <Navbar/>
      <body className={raleway.className}>{children}</body>
    </html>
    </>
  );
}
