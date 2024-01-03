import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
        poppinsMedium: ["var(--font-poppins-medium)", "system-ui", "sans-serif"],
        poppinsBold: ["var(--font-poppins-bold)", "system-ui", "sans-serif"],
        poppinsBlack: ["var(--font-poppins-black)", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
}
export default config
