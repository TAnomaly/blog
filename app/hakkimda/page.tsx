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
                        Özellikle <strong>Matematik, Fizik, İstatistik</strong> ve <strong>Bilinç Felsefesi</strong> konularına derin ilgim var.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Programlama tarafında <strong>Low-level</strong>, <strong>Gömülü Sistemler</strong> ve <strong>AI/ML</strong>
                        alanlarında çalışıyorum. Bu blog λ (lambda) sembolünü kullanıyor çünkü fonksiyonel programlamanın
                        güzelliğini temsil ediyor ve matematiksel düşüncenin kodda nasıl yansıdığını gösteriyor.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        ...
                    </p>
                </div>
            </div>
        </div>
    )
}