
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "sidebar-background": "hsl(var(--sidebar-background))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary))",
          foreground: "hsl(var(--sidebar-primary-foreground))",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent))",
          foreground: "hsl(var(--sidebar-accent-foreground))",
        },
        "sidebar-muted": {
          DEFAULT: "hsl(var(--sidebar-border))",
          foreground: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "float-fast": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "float-containers": {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-7px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "rotate-cube": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "rotateX(90deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(180deg) rotateY(0deg)" },
          "75%": { transform: "rotateX(270deg) rotateY(90deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(0deg)" },
        },
        "rotate-cube-fast": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "25%": { transform: "rotateX(90deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(180deg) rotateY(0deg)" },
          "75%": { transform: "rotateX(270deg) rotateY(90deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(0deg)" },
        },
        "float-shapes": {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(10deg)" },
          "66%": { transform: "translateY(5px) rotate(-5deg)" },
          "100%": { transform: "translateY(0px) rotate(0deg)" },
        },
        "float-shapes-fast": {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(15deg)" },
          "66%": { transform: "translateY(7px) rotate(-10deg)" },
          "100%": { transform: "translateY(0px) rotate(0deg)" },
        },
        "blink": {
          "0%": { opacity: "1" },
          "40%": { opacity: "1" },
          "50%": { opacity: "0" },
          "90%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-medium": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "flicker": {
          "0%": { opacity: "1" },
          "25%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
          "75%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in": "slide-in 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "float-fast": "float-fast 3s ease-in-out infinite",
        "float-containers": "float-containers 6s ease-in-out infinite",
        "rotate-cube": "rotate-cube 16s cubic-bezier(0.68, -0.6, 0.32, 1.6) infinite",
        "rotate-cube-fast": "rotate-cube-fast 8s cubic-bezier(0.68, -0.6, 0.32, 1.6) infinite",
        "float-shapes": "float-shapes 10s ease-in-out infinite",
        "float-shapes-fast": "float-shapes-fast 5s ease-in-out infinite",
        "blink": "blink 1.5s step-end infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        "spin-medium": "spin-medium 8s linear infinite",
        "flicker": "flicker 2s ease-in-out infinite",
      },
      scale: {
        "102": "1.02",
        "98": "0.98",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
