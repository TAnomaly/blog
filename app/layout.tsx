import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'λ Blog',
    description: 'Kişisel blog sayfam',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <body className={inter.className}>
                <ThemeProvider>
                    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between items-center h-16">
                                    <div className="flex items-center">
                                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                                            <a href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                                λ Blog
                                            </a>
                                        </h1>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex space-x-8">
                                            <a
                                                href="/"
                                                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                            >
                                                Ana Sayfa
                                            </a>
                                            <a
                                                href="/hakkimda"
                                                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                            >
                                                Hakkımda
                                            </a>
                                            <a
                                                href="/etiketler"
                                                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                            >
                                                Etiketler
                                            </a>
                                        </div>
                                        <ThemeToggle />
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            {children}
                        </main>

                        <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-16">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div className="text-center text-gray-600 dark:text-gray-400">
                                    <p>&copy; 2024 λ Blog. Tüm hakları saklıdır.</p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
