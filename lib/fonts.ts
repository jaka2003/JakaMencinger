import { Inter } from "next/font/google";

// Skupna pisava za oba jezikovna layouta (sl in en).
export const inter = Inter({
  subsets: ["latin", "latin-ext"], // latin-ext = šumniki č, š, ž
  variable: "--font-inter",
  display: "swap",
});
