---
title: "Next.js ile Blog Oluşturma"
date: "2024-01-14"
excerpt: "Next.js kullanarak nasıl modern bir blog sitesi oluşturabileceğinizi anlatıyorum."
---

# Next.js ile Blog Oluşturma Rehberi

Modern web geliştirmede Next.js, React tabanlı uygulamalar oluşturmak için mükemmel bir framework'tür. Bu yazıda Next.js kullanarak nasıl bir blog sitesi oluşturabileceğinizi adım adım anlatacağım.

## Neden Next.js?

Next.js'in blog oluşturmak için sunduğu avantajlar:

- **Server-Side Rendering (SSR)**: SEO dostu sayfalar
- **Static Site Generation (SSG)**: Hızlı yükleme süreleri
- **File-based Routing**: Kolay sayfa yönetimi
- **API Routes**: Backend işlevselliği
- **Image Optimization**: Otomatik görsel optimizasyonu

## Temel Kurulum

```bash
npx create-next-app@latest my-blog
cd my-blog
npm run dev
```

## Markdown Desteği

Blog yazılarınızı Markdown formatında tutmak için gerekli paketler:

```bash
npm install gray-matter remark remark-html
```

## Proje Yapısı

```
my-blog/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── posts/
│       └── [slug]/
│           └── page.tsx
├── lib/
│   └── posts.ts
└── posts/
    ├── yazi-1.md
    └── yazi-2.md
```

## Sonuç

Next.js ile blog oluşturmak hem kolay hem de güçlü bir çözüm sunuyor. Modern web standartlarına uygun, hızlı ve SEO dostu bir blog sitesi oluşturabilirsiniz.

### Faydalı Kaynaklar

- [Next.js Dokümantasyonu](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Markdown Rehberi](https://www.markdownguide.org/)

*Bu yazıda Next.js ile blog oluşturmanın temellerini ele aldık. Daha detaylı bilgi için Next.js dokümantasyonunu inceleyebilirsiniz.*
