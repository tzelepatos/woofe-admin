/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,jsx,js}",
    "./components/**/*.{ts,tsx,jsx,js}",
    "./app/**/*.{ts,tsx,jsx,js}",
    "./app/compoments/**/*.{ts,tsx,jsx,js}",
    "./src/**/*.{ts,tsx,jsx,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "2sm": "400px",
      },
    },

    extend: {
      colors: {
        // jimOrange: "#f7941d",
        // jimGray: "#e3e3e3",
        // jimGrayLight: "#ececec",
        // groomingPink1: "#d784bc",
        // groomingPink2: "#ce4da7",
        // groomingPink3: "#b62098",
        // groomingPink4: "#b95ebc",
        // groomingPink5: "#ca6dab",
        // groomingPink6: "#c082c0",
        // groomingPink7: "#915298",
        // groomingPink8: "#b66aa2",
        // groomingPink9: "#b420b6",
        // groomingPink10: "#ca6cc7",

        groomingPink1: "hsl(var(--groomingPink1))",
        groomingPink2: "hsl(var(--groomingPink2))",
        groomingPink3: "hsl(var(--groomingPink3))",
        groomingPink4: "hsl(var(--groomingPink4))",
        groomingPink5: "hsl(var(--groomingPink5))",
        groomingPink6: "hsl(var(--groomingPink6))",
        groomingPink7: "hsl(var(--groomingPink7))",
        groomingPink8: "hsl(var(--groomingPink8))",
        groomingPink9: "hsl(var(--groomingPink9))",
        groomingPink10: "hsl(var(--groomingPink10))",

        bgCustom: "hsl(var(--bgCustom))",

        jimOrange: "hsl(var(--jimOrange))",
        jimGray: "hsl(var(--jimGray))",
        jimGrayLight: "hsl(var(--jimGrayLight))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        //criss x4 buttons ui
        logIn: {
          DEFAULT: "hsl(var(--logIn))",
          foreground: "hsl(var(--jim-logIn))",
        },
        jim: {
          DEFAULT: "hsl(var(--jim))",
          foreground: "hsl(var(--jim-foreground))",
        },

        create: {
          DEFAULT: "hsl(var(--create))",
          foreground: "hsl(var(--create-foreground))",
        },

        signIn: {
          DEFAULT: "hsl(var(--signIn))",
          foreground: "hsl(var(--signIn-foreground))",
          //end
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
