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
        // "9xl": "3200px",
        // "8xl": "3000px",
        // "7xl": "2600px",
        // "6xl": "2400px",
        // "5xl": "2100px",
        // "4xl": "1800px",
        // "3xl": "1700px",
        // "2xl": "1400px",
        // "1xl": "1200px",
        // "10xl": "955px",
        // "2sm": "790px",
      },
    },

    extend: {
      screens: {
        "3xl": "2000px",
      },
      colors: {
        // jimOrange: "#f7941d",
        // jimGray: "#e3e3e3",
        // jimGrayLight: "#ececec",
        // groomingPink: "C689B8"
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

        // servicesGreen1: "#83C351",
        // servicesGreen2: "#75b940",
        // servicesGreen3: "#71c351",
        // servicesGreen4: "#61c351",
        // servicesGreen5: "#91c351",
        // servicesGreen6: "#92df2f",
        // servicesGreen7: "#72ec13",
        // servicesGreen8: "#63d709",
        // servicesGreen9: "#2cda31",
        // servicesGreen10: "#98cb36",
        // servicesGreen11: "#83be1c",
        // servicesGreen12: "#2abe1b",
        // servicesGreen13: "#46b761",

        //19 oranges
        // suppliesOrange1: "#f7941d",
        // suppliesOrange2: "#fa8801",
        // suppliesOrange3: "#df8e2d",
        // suppliesOrange4: "#df7a00",
        // suppliesOrange5: "#f7ad1d",
        // suppliesOrange6: "#f77e1d",
        // suppliesOrange7: "#ffae00",
        // suppliesOrange8: "#ffa800",
        // suppliesOrange9: "#f79d1d",
        // suppliesOrange10: "#f76a1d",
        // suppliesOrange11: "#fea53a",
        // suppliesOrange12: "#df8300",
        // suppliesOrange13: "#ff7300",
        // suppliesOrange14: "#e59d13",
        // suppliesOrange15: "#fa9620",
        // suppliesOrange16: "#fa8201",
        // suppliesOrange17: "#ec8c03",
        // suppliesOrange18: "#ffa800",
        // suppliesOrange19: "#e97a1f",

        //19 colors supplies orange
        suppliesOrange1: "hsl(var(--suppliesOrange1))",
        suppliesOrange2: "hsl(var(--suppliesOrange2))",
        suppliesOrange3: "hsl(var(--suppliesOrange3))",
        suppliesOrange4: "hsl(var(--suppliesOrange4))",
        suppliesOrange5: "hsl(var(--suppliesOrange5))",
        suppliesOrange6: "hsl(var(--suppliesOrange6))",
        suppliesOrange7: "hsl(var(--suppliesOrange7))",
        suppliesOrange8: "hsl(var(--suppliesOrange8))",
        suppliesOrange9: "hsl(var(--suppliesOrange9))",
        suppliesOrange10: "hsl(var(--suppliesOrange10))",
        suppliesOrange11: "hsl(var(--suppliesOrange11))",
        suppliesOrange12: "hsl(var(--suppliesOrange12))",
        suppliesOrange13: "hsl(var(--suppliesOrange13))",
        suppliesOrange14: "hsl(var(--suppliesOrange14))",
        suppliesOrange15: "hsl(var(--suppliesOrange15))",
        suppliesOrange16: "hsl(var(--suppliesOrange16))",
        suppliesOrange17: "hsl(var(--suppliesOrange17))",
        suppliesOrange18: "hsl(var(--suppliesOrange18))",
        suppliesOrange19: "hsl(var(--suppliesOrange19))",

        //13 colors supplies green
        servicesGreen1: "hsl(var(--servicesGreen1))",
        servicesGreen2: "hsl(var(--servicesGreen2))",
        servicesGreen3: "hsl(var(--servicesGreen3))",
        servicesGreen4: "hsl(var(--servicesGreen4))",
        servicesGreen5: "hsl(var(--servicesGreen5))",
        servicesGreen6: "hsl(var(--servicesGreen6))",
        servicesGreen7: "hsl(var(--servicesGreen7))",
        servicesGreen8: "hsl(var(--servicesGreen8))",
        servicesGreen9: "hsl(var(--servicesGreen9))",
        servicesGreen10: "hsl(var(--servicesGreen10))",
        servicesGreen11: "hsl(var(--servicesGreen11))",
        servicesGreen12: "hsl(var(--servicesGreen12))",
        servicesGreen13: "hsl(var(--servicesGreen13))",

        //10 colors supplies pink + 1 main
        groomingPink: "hsl(var(--groomingPink1))",
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

        groomingGreen: "hsl(var(--groomingGreen))",

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
