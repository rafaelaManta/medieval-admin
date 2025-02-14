import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			'0': '0px',
  			'1': '0.25rem',
  			'2': '0.5rem',
  			'3': '0.75rem',
  			'4': '1rem',
  			'5': '1.25rem',
  			'6': '1.5rem',
  			'7': '1.75rem',
  			'8': '2rem',
  			'9': '2.25rem',
  			'10': '2.5rem',
  			'11': '2.75rem',
  			'12': '3rem',
  			'14': '3.5rem',
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'28': '7rem',
  			'30': '7.5rem',
  			'32': '8rem',
  			'34': '8.5rem',
  			'36': '9rem',
  			'40': '10rem',
  			'44': '11rem',
  			'48': '12rem',
  			'52': '13rem',
  			'54': '13.5rem',
  			'56': '14rem',
  			'60': '15rem',
  			'64': '16rem',
  			'68': '17rem',
  			'72': '18rem',
  			'75': '18.75rem',
  			'80': '20rem',
  			'90': '22.5rem',
  			'96': '24rem',
  			'120': '30rem',
  			'135': '33.75rem',
  			'180': '45rem',
  			'240': '60rem',
  			'285': '71.25rem',
  			'330': '82.5rem',
  			px: '1px',
  			'0.38': '0.095rem',
  			'0.5': '0.125rem',
  			'0.54': '0.135rem',
  			'0.75': '0.1875rem',
  			'1.2': '0.3rem',
  			'1.25': '0.3125rem',
  			'1.4': '0.35rem',
  			'1.5': '0.375rem',
  			'1.6': '0.4rem',
  			'1.75': '0.4375rem',
  			'1.8': '0.45rem',
  			'2.2': '0.55rem',
  			'2.375': '.59375rem',
  			'2.5': '0.625rem',
  			'2.7': '0.675rem',
  			'3.5': '0.875rem',
  			'3.6': '0.9rem',
  			'4.5': '1.125rem',
  			'4.92': '1.23rem',
  			'5.25': '1.3125rem',
  			'5.5': '1.375rem',
  			'5.6': '1.4rem',
  			'5.75': '1.4375rem',
  			'6.35': '1.5875rem',
  			'6.5': '1.625rem',
  			'6.92': '1.73rem',
  			'7.5': '1.875rem',
  			'8.75': '2.1875rem',
  			'11.252': '2.813rem',
  			'18.5': '4.625rem',
  			'19.5': '4.875rem',
  			'62.5': '15.625rem',
  			'68.5': '17.125rem',
  			'31/100': '31%'
  		},
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
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
