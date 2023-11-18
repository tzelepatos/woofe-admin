import "./globals.css";
import { Ubuntu } from "next/font/google";
import { NextAuthProvider } from "@/app/api/auth/[...nextauth]/Provider";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { useSession } from "next-auth/react";
import { ViewModeProvider } from "@/app/context/TableViewModeContext";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"], display: "swap" });

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  // console.log("sesssssions:=" + session);

  // redirect("/sign-in"); // Replace "/login" with your actual login page path

  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <NextAuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ViewModeProvider>{children}</ViewModeProvider>
            <Toaster />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
