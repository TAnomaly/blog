import { getAllTags, getAllCategories } from '@/lib/posts'
import Link from 'next/link'

export default function TagsPage() {
    const tags = getAllTags()
    const categories = getAllCategories()

    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Etiketler ve Kategoriler
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Blog içeriğini organize etmek için kullandığım etiketler ve kategoriler.
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Kategoriler */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Kategoriler ({categories.length})
                    </h2>
                    <div className="space-y-2">
                        {categories.map((category) => (
                            <Link
                                key={category}
                                href={`/kategori/${category.toLowerCase()}`}
                                className="block px-4 py-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors border border-gray-200 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-700"
                            >
                                <span className="font-medium">{category}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Etiketler */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Etiketler ({tags.length})
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Link
                                key={tag}
                                href={`/etiket/${tag.toLowerCase()}`}
                                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors border border-gray-200 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-700"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                >
                    <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Ana sayfaya dön
                </Link>
            </div>
        </div>
    )
}
