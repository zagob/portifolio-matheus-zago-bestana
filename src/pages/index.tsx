import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return <div style={roboto.style}>asdasdasd</div>;
}
