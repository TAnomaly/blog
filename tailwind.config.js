/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: '#374151',
                        a: {
                            color: '#3b82f6',
                            textDecoration: 'underline',
                            fontWeight: '500',
                        },
                        'a:hover': {
                            color: '#1d4ed8',
                        },
                        h1: {
                            color: '#111827',
                        },
                        h2: {
                            color: '#111827',
                        },
                        h3: {
                            color: '#111827',
                        },
                        h4: {
                            color: '#111827',
                        },
                        code: {
                            color: '#111827',
                            backgroundColor: '#f3f4f6',
                            padding: '0.25rem 0.375rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.875em',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                    },
                },
                invert: {
                    css: {
                        color: '#d1d5db',
                        a: {
                            color: '#60a5fa',
                            textDecoration: 'underline',
                            fontWeight: '500',
                        },
                        'a:hover': {
                            color: '#93c5fd',
                        },
                        h1: {
                            color: '#f9fafb',
                        },
                        h2: {
                            color: '#f9fafb',
                        },
                        h3: {
                            color: '#f9fafb',
                        },
                        h4: {
                            color: '#f9fafb',
                        },
                        code: {
                            color: '#f9fafb',
                            backgroundColor: '#374151',
                            padding: '0.25rem 0.375rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.875em',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
