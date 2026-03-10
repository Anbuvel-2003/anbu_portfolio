import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Visionary Developer Portfolio",
  description: "Advanced Full-Stack Engineering & Interactive Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#030305] text-white overflow-x-hidden`}
      >
        <div className="fixed inset-0 -z-[1] pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 bg-center bg-cover opacity-30"
            style={{ 
              backgroundImage: `url('/background.png')`,
              willChange: 'transform'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-transparent to-[#030305]"></div>
          
          {/* Subtle Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-purple/10 rounded-full blur-[120px]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
