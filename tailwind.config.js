/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx,html}",
        "./public/**/*.{html,js}",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    50: '#FBF8EF',
                    100: '#F6F1DF',
                    200: '#EEE0BB',
                    300: '#E5CE96',
                    400: '#DFBE63',
                    500: '#E0B84C',
                    600: '#C79E3F',
                    700: '#9F7B31',
                    800: '#7A5D27',
                    900: '#513C19',
                },
            },
        },
    },
    plugins: [],
}
