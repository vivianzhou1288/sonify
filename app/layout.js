import { Inter, Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Sonify",
  description: "Elevate your playlist with Sonify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "bg-[#1C1C1C] w-full min-h-screen text-white " + karla.className
        }
      >
        {children}
      </body>
    </html>
  );
}
