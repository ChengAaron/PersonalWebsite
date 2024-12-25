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
          "neutral": "#DDE5ED",
          "base-100": "#DDE5ED",
          "info": "#92ACA0",
          "success": "#92ACA0",
          "warning": "#92ACA0",
          "error": "#92ACA0",
          },
        oblivion: {
          "primary": "#474747",  
          "secondary": "#606a6b",
          "accent": "#ae98c7",
          "neutral": "#e3ddd1",
          "base-100": "#e3ddd1",
          "info": "#018bba",
          "success": "#77c33d",
          "warning": "#ffad01",
          "error": "#ff4222",
          },
        },
      ],
    },
}

