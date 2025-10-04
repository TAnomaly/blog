export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Hakkımda
                </h1>
            </header>

            <div className="prose prose-lg max-w-none">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Merhaba! Ben λ. Bu blogda yazılarımı, düşüncelerimi ve deneyimlerimi paylaşıyorum.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Teknoloji, yazılım geliştirme, yaşam deneyimleri ve ilginç bulduğum konular hakkında yazıyorum.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Bu blog Next.js ve Markdown kullanılarak oluşturulmuştur. Yazılarımı posts klasöründe Markdown formatında tutuyorum.
                    </p>
                </div>
            </div>
        </div>
    )
}
