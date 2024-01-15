/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          0: "#233631",
          100: "#284A3B",
          200: "#2D5E45",
          300: "#33724F",
          400: "#388659",
          500: "#3D9B62",
          600: "#42AF6C",
          700: "#48C376",
          800: "#48C376",
          900: "#4DD780",
        },
        yellow: {
          0: "#241D13",
          100: "#3A2C17",
          200: "#503B1C",
          300: "#664B20",
          400: "#7C5A25",
          500: "#936929",
          600: "#A9782E",
          700: "#BF8832",
          800: "#D59737",
          900: "#EBA63B",
        },
        purple: {
          0: "#1D0E29",
          100: "#280E38",
          200: "#330E46",
          300: "#3E0F55",
          400: "#490F64",
          500: "#540F72",
          600: "#5F0F81",
          700: "#6A1090",
          800: "#75109E",
          900: "#8010AD",
        },
        black: {
          0: "#1D0E29",
          100: "#1A0C24",
          200: "#170B20",
          300: "#13091B",
          400: "#100817",
          500: "#0D0612",
          600: "#0A050E",
          700: "#060309",
          800: "#030205",
          900: "#000000",
        },
        white: {
          0: "#C69CD6",
          100: "#CCA7DB",
          200: "#D3B2DF",
          300: "#D9BDE4",
          400: "#DFC8E8",
          500: "#E6D3ED",
          600: "#ECDEF1",
          700: "#F2E9F6",
          800: "#F9F4FA",
          900: "#FFFFFF",
        },
        "red-to-white": {
          0: "#AD1049",
          100: "#B62B5D",
          200: "#BF4571",
          300: "#C86086",
          400: "#D17A9A",
          500: "#DB95AE",
          600: "#E4AFC2",
          700: "#EDCAD7",
          800: "#F6E4EB",
          900: "#FFFFFF",
        },
        "red-to-black": {
          0: "#AD1049",
          100: "#9A0E41",
          200: "#870C39",
          300: "#730B31",
          400: "#600929",
          500: "#4D0720",
          600: "#3A0518",
          700: "#260410",
          800: "#130208",
          900: "#000000",
        }
      },
      keyframes: {
        smaller: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        }
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans'],
      mono: ['IBM Plex Mono', 'monospace']
    }
  },
  plugins: [],
}