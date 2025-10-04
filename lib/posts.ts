import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
    slug: string
    title: string
    date: string
    excerpt?: string
    content: string
    tags?: string[]
    category?: string
}

export function getAllPosts(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
        .filter((name) => name.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '')
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const matterResult = matter(fileContents)

            return {
                slug,
                title: matterResult.data.title,
                date: matterResult.data.date,
                excerpt: matterResult.data.excerpt,
                content: matterResult.content,
                tags: matterResult.data.tags || [],
                category: matterResult.data.category || 'Genel',
            }
        })

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getPostBySlug(slug: string): Post | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
            slug,
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            content: matterResult.content,
            tags: matterResult.data.tags || [],
            category: matterResult.data.category || 'Genel',
        }
    } catch (error) {
        return null
    }
}

export function getAllTags(): string[] {
    const posts = getAllPosts()
    const allTags = posts.flatMap(post => post.tags || [])
    return Array.from(new Set(allTags)).sort()
}

export function getAllCategories(): string[] {
    const posts = getAllPosts()
    const allCategories = posts.map(post => post.category).filter(Boolean)
    return Array.from(new Set(allCategories)).sort()
}

export function getPostsByTag(tag: string): Post[] {
    const posts = getAllPosts()
    return posts.filter(post => post.tags?.includes(tag))
}

export function getPostsByCategory(category: string): Post[] {
    const posts = getAllPosts()
    return posts.filter(post => post.category === category)
}
