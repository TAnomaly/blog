# λ Blog

Modern ve basit bir blog sitesi. Next.js ve Markdown kullanılarak oluşturulmuştur.

## Özellikler

- ✅ Next.js 14 ile modern web teknolojisi
- ✅ Markdown formatında yazı desteği
- ✅ Responsive tasarım
- ✅ SEO dostu
- ✅ Hızlı yükleme süreleri
- ✅ Modern UI/UX tasarımı

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Yeni Yazı Ekleme

1. `posts` klasörüne yeni bir `.md` dosyası oluşturun.
2. Dosyanın başına frontmatter ekleyin:

```markdown
---
title: "Yazı Başlığı"
date: "2024-01-15"
excerpt: "Yazı özeti"
---

# Yazı İçeriği

Yazınızın içeriği buraya...
```

3. Blog otomatik olarak yeni yazıyı gösterecektir.

## Proje Yapısı

```
blog/
├── app/                 # Next.js app router
│   ├── globals.css     # Global stiller
│   ├── layout.tsx      # Ana layout
│   ├── page.tsx        # Ana sayfa
│   ├── hakkimda/       # Hakkımda sayfası
│   └── posts/[slug]/   # Yazı detay sayfaları
├── lib/
│   └── posts.ts        # Blog yazıları işleme
├── posts/              # Markdown yazılar
└── public/             # Statik dosyalar
```

## Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - CSS framework
- **gray-matter** - Markdown frontmatter işleme
- **remark** - Markdown işleme
- **date-fns** - Tarih formatlama

## Lisans

MIT License
