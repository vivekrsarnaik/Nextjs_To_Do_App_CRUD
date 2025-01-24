import type { Config } from "tailwindcss";
import daisyUI from 'daisyui';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      plugins: [daisyUI],
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  
};
export default config;