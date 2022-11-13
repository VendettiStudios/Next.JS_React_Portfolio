/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily:{
                Comfortaa:["Comfortaa, cursive"],
                Dancing:["Dancing Script, cursive"]
            }
        },
    },
    plugins: [],
}
