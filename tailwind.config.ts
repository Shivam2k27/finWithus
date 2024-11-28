import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mygreen: "#001d21",
        myblue:'#CDCBFF',
      },
      fontSize:{
        responsiveLarge: 'clamp(4rem, 2.765rem + 4.71vw, 7rem)',
        responsiveMedium:'clamp(1.5rem,2.5rem,3rem)',
        responsiveSmall: 'clamp(1rem, 0.8rem + 4.71vw, 1.5rem)',
      },
      keyframes: {
        myAnimation: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      height:{
        '2rem':'2rem',
        '3rem':'3rem',
      },
      animation: {
        'fade-in': 'myAnimation 3s ease-in-out', // Set your desired duration and easing
      },
    },
  },
  plugins: [],
} satisfies Config;
