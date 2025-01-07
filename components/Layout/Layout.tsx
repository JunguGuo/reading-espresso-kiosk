// components/Layout/Layout.tsx

import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | Reading Espresso` : "Reading Espresso"}
        </title>
        <meta
          name="description"
          content="Interactive literary kiosk: discover, personalize, and print reading materials."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Container for the entire layout */}
      <div className="flex flex-col min-h-screen">
        {/* Header / Branding */}
        {/* <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
          <div className="text-2xl font-bold">Reading Espresso</div>
        </header> */}

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center justify-start p-4">
          {children}
        </main>

        {/* Optional Footer (If needed) */}
        {/* <footer className="px-4 py-3 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Reading Espresso
          </p>
        </footer> */}
      </div>
    </>
  );
}
