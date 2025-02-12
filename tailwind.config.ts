import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			'fade-in': 'fade-in 0.5s ease-out',
  			blob: 'blob 10s infinite',
  			meteor: 'meteor 5s linear infinite',
  			'meteor-effect': 'meteor 5s linear infinite',
  			gradient: 'gradient 8s linear infinite',
  			'slide-width': 'slide-width 1s ease-in-out forwards',
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			blob: {
  				'0%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(30px, -50px) scale(1.2)'
  				},
  				'66%': {
  					transform: 'translate(-20px, 20px) scale(0.8)'
  				},
  				'100%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size) 0'
  				}
  			},
  			'slide-width': {
  				'0%': { width: '0%' },
  				'100%': { width: 'var(--width)' }
  			},
  		}
  	}
  },
  darkMode: ["class"],
  plugins: [],
};

export default config;
