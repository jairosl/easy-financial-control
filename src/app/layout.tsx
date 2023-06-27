import './globals.css'
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Easy Financial Control",
  description: "application to control your finances",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body className={roboto.className}>
          <div className="min-h-screen w-full  flex items-center justify-center overflow-x-hidden">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
