import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-16">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-bold text-gray-900">
                                        <a href="/" className="hover:text-primary-600 transition-colors">
                                            λ Blog
                                        </a>
                                    </h1>
                                </div>
                                <div className="flex space-x-8">
                                    <a
                                        href="/"
                                        className="text-gray-600 hover:text-primary-600 transition-colors"
                                    >
                                        Ana Sayfa
                                    </a>
                                    <a
                                        href="/hakkimda"
                                        className="text-gray-600 hover:text-primary-600 transition-colors"
                                    >
                                        Hakkımda
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {children}
                    </main>

                    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-16">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <div className="text-center text-gray-600">
                                <p>&copy; 2024 λ Blog. Tüm hakları saklıdır.</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    )
}
