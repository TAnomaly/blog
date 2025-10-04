import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'

interface PostPageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: PostPageProps) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return {
            title: 'Yazı Bulunamadı',
        }
    }

    return {
        title: post.title,
        description: post.excerpt,
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const processedContent = await remark()
        .use(html)
        .process(post.content)

    const contentHtml = processedContent.toString()

    return (
        <div>
            <article className="max-w-3xl mx-auto">
                <header className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <time className="text-gray-500 dark:text-gray-400">
                            {format(new Date(post.date), 'dd MMMM yyyy', { locale: tr })}
                        </time>
                        {post.category && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                                {post.category}
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {post.title}
                    </h1>

                    {post.excerpt && (
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            {post.excerpt}
                        </p>
                    )}

                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div
                    className="prose prose-lg prose-invert dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <a
                        href="/"
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                    >
                        <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Tüm yazılara dön
                    </a>
                </div>
            </article>
        </div>
    )
}
