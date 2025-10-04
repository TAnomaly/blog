import { getAllPosts, getAllTags, getAllCategories } from '@/lib/posts'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import Link from 'next/link'

export default function HomePage() {
    const posts = getAllPosts()
    const tags = getAllTags()
    const categories = getAllCategories()

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Hoş Geldiniz
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Burada yazılarımı, düşüncelerimi ve deneyimlerimi paylaşıyorum.
                </p>
            </div>

            {posts.length === 0 ? (
                <div className="text-center py-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
                        <div className="text-gray-400 dark:text-gray-500 mb-4">
                            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Henüz yazı yok
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            İlk yazınızı eklemek için posts klasörüne Markdown dosyası ekleyin.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Son Yazılar
                    </h2>

                    <div className="grid gap-6">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <time className="text-sm text-gray-500 dark:text-gray-400">
                                            {format(new Date(post.date), 'dd MMMM yyyy', { locale: tr })}
                                        </time>
                                        {post.category && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                                                {post.category}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                        <Link
                                            href={`/posts/${post.slug}`}
                                            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        >
                                            {post.title}
                                        </Link>
                                    </h3>

                                    {post.excerpt && (
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    )}

                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <Link
                                        href={`/posts/${post.slug}`}
                                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                                    >
                                        Devamını oku
                                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            )}

            {/* Etiket ve Kategori Sidebar */}
            {(tags.length > 0 || categories.length > 0) && (
                <div className="mt-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Kategoriler */}
                        {categories.length > 0 && (
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Kategoriler
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <Link
                                            key={category}
                                            href={`/kategori/${category.toLowerCase()}`}
                                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                                        >
                                            {category}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Etiketler */}
                        {tags.length > 0 && (
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Etiketler
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <Link
                                            key={tag}
                                            href={`/etiket/${tag.toLowerCase()}`}
                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
