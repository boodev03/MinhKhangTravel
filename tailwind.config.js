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
  		colors: {},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	screens: {
  		xs: '480px',
  		sm: '600px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1200px',
  		'2xl': '1400px'
  	},
  	container: {
  		screens: {
  			xs: '480px',
  			sm: '600px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1200px',
  			'2xl': '1400px'
  		},
  		padding: {
  			DEFAULT: '1rem'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

