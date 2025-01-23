/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "courierPrime": ["Courier Prime", "monospace"],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        botanical: {  
          "primary": "#3E5D58",
          "secondary": "#DDE5ED",
          "accent": "#92ACA0",
          "neutral": "#3E5D58",
          "base-100": "#DDE5ED",
          "info": "#92ACA0",
          "success": "#92ACA0",
          "warning": "#92ACA0",
          "error": "#92ACA0",
          "primary-content": "DDE5ED",
          "secondary-content": "3E5D58",
          },
        nimbus: {
          "primary": "#f5f5f5",
          "secondary": "#b6e0ee",
          "accent": "#4b4d4c",
          "neutral": "#4b4d4c",
          "base-100": "#4b4d4c",
          "info": "#4b4d4c",
          "success": "#4b4d4c",
          "warning": "#4b4d4c",
          "error": "#4b4d4c",
          "primary-content": "#4b4d4c",
          "secondary-content": "#4b4d4c",
          },
        olivia: {
          "primary": "#2b2b2b",
          "secondary": "#e1dbd1",
          "accent": "#2b2b2b",
          "neutral": "#2b2b2b",
          "base-100": "#2b2b2b",
          "info": "#2b2b2b",
          "success": "#2b2b2b",
          "warning": "#2b2b2b",
          "error": "#2b2b2b",
          "primary-content": "#f1beb0",
          "secondary-content": "#2b2b2b",
          },
        delta: {
          "primary": "#111111",
          "secondary": "#e0e1e3",
          "accent": "#62d1be",
          "neutral": "#111111",
          "base-100": "#e0e1e3",
          "info": "#62d1be",
          "success": "#62d1be",
          "warning": "#62d1be",
          "error": "#62d1be",
          "primary-content": "#62d1be",
          "secondary-content": "#111111",
          },
        mizu: {
          "primary": "#243746",
          "secondary": "#b7d8eb",
          "accent": "#f8f7f3",
          "neutral": "#243746",
          "base-100": "#e0e1e3",
          "info": "#f8f7f3",
          "success": "#f8f7f3",
          "warning": "#f8f7f3",
          "error": "#f8f7f3",
          "primary-content": "#f8f7f3",
          "secondary-content": "#111111",
          },
          yuru: {
            "primary": "#712f3e",
            "secondary": "#e1dbd1",
            "accent": "#88d4cc",
            "neutral": "#712f3e",
            "base-100": "#e1dbd1",
            "info": "#88d4cc",
            "success": "#712f3e",
            "warning": "#712f3e",
            "error": "#712f3e",
            "primary-content": "#e1dbd1",
            "secondary-content": "#712f3e",
            },
        },
      ],
    },
}

