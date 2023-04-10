import "@/styles/app.scss";
import { Lora } from "next/font/google";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

// If loading a variable font, you don't need to specify the font weight
const font = Lora({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
