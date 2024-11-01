/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	},
	  screens: {
        xs: '480px',
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1400px',
      },
      container: {
        screens: {
          xs: '480px',
          sm: '600px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1400px',
        },
        padding: {
          DEFAULT: "1rem"
        }
      }
  },
  plugins: [require("tailwindcss-animate")],
}

