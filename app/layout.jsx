import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Jam || Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <Navbar />
        </div>
        <div className="max-w-[75%] mx-auto min-h-screen">{children}</div>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
