import { getAllPosts } from '@/lib/posts'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import Link from 'next/link'

export default function HomePage() {
    const posts = getAllPosts()

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Hoş Geldiniz
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Burada yazılarımı, düşüncelerimi ve deneyimlerimi paylaşıyorum.
                </p>
            </div>

            {posts.length === 0 ? (
                <div className="text-center py-12">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                        <div className="text-gray-400 mb-4">
                            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Henüz yazı yok
                        </h3>
                        <p className="text-gray-600">
                            İlk yazınızı eklemek için posts klasörüne Markdown dosyası ekleyin.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Son Yazılar
                    </h2>

                    <div className="grid gap-6">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <time className="text-sm text-gray-500">
                                            {format(new Date(post.date), 'dd MMMM yyyy', { locale: tr })}
                                        </time>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        <Link
                                            href={`/posts/${post.slug}`}
                                            className="hover:text-primary-600 transition-colors"
                                        >
                                            {post.title}
                                        </Link>
                                    </h3>

                                    {post.excerpt && (
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    )}

                                    <Link
                                        href={`/posts/${post.slug}`}
                                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
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
        </div>
    )
}
