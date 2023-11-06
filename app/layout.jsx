import "@/app/globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@/app/api/auth/[...nextauth]/Provider";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/ui/theme-provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { useSession } from "next-auth/react";
import { ViewModeProvider } from "@/app/context/TableViewModeContext";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  // console.log("sesssssions:=" + session);

  // redirect("/sign-in"); // Replace "/login" with your actual login page path

  return (
    <html lang="en">
      <body className={inter.className}>
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
