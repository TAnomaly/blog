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
        <article className="max-w-3xl mx-auto">
            <header className="mb-8">
                <div className="mb-4">
                    <time className="text-gray-500">
                        {format(new Date(post.date), 'dd MMMM yyyy', { locale: tr })}
                    </time>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                </h1>

                {post.excerpt && (
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {post.excerpt}
                    </p>
                )}
            </header>

            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
                <a
                    href="/"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                    <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Tüm yazılara dön
                </a>
            </div>
        </article>
    )
}
