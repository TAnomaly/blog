import { getPostsByTag, getAllTags } from '@/lib/posts'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface TagPageProps {
    params: {
        tag: string
    }
}

export async function generateStaticParams() {
    const tags = getAllTags()
    return tags.map((tag) => ({
        tag: tag.toLowerCase(),
    }))
}

export default function TagPage({ params }: TagPageProps) {
    const tagName = params.tag.charAt(0).toUpperCase() + params.tag.slice(1)
    const posts = getPostsByTag(tagName)

    if (posts.length === 0) {
        notFound()
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    #{tagName} Etiketi
                </h1>
                <p className="text-lg text-gray-600">
                    {posts.length} yazı bulundu
                </p>
            </div>

            <div className="space-y-6">
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

                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                <Link
                                    href={`/posts/${post.slug}`}
                                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    {post.title}
                                </Link>
                            </h2>

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
                                            className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium transition-colors ${tag === tagName
                                                ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                }`}
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
