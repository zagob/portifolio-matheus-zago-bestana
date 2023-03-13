import { AnimationScroll } from "@/components/animationScroll";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";

import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <div style={inter.style} className="h-screen">
      <Header />
      <main className="px-2 text-7xl h-screen lg:text-8xl mx-auto flex flex-col gap-10 items-center justify-center">
        <div className="mt-0 text-transparent lg:mt-20">
          <h1 className="bg-clip-text bg-gradient-to-r from-indigo-900 via-indigo-700 to-blue-700">
            Development
          </h1>
          <h1 className="bg-clip-text bg-gradient-to-b from-blue-800 to-black">
            Web / Mobile
          </h1>
        </div>

        <p className="text-lg px-3 lg:px-0 lg:text-xl text-gray-500 text-center max-w-2xl">
          Specialized in web and mobile development using the most modern
          technologies in the market, bringing optimization and performance to
          applications for a specific web system.
        </p>

        <Link
          target="_blank"
          href="/pdf/curriculo-de-matheus-zago.pdf"
          className="text-xl text-blue-600 border-blue-600 px-2 py-2 rounded hover:text-blue-700 hover:border-blue-700 transition-all"
        >
          Download Curriculo
        </Link>

        <AnimationScroll />
      </main>
    </div>
  );
}
