import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F25D1D",
                "primary-hover": "#e04b0c",
                secondary: "#00A36C",
                "background-main": "#F2F7FF",
                "background-card": "#FFFFFF",
                "text-primary": "#1A1A1A",
                "text-secondary": "#666666",
                "border-color": "#E0E0E0",
            },
            fontFamily: {
                italic: ["DM Serif Text", "serif"],
            }
        },
    },
    plugins: [],
};
export default config;
