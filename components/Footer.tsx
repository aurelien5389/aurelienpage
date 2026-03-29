'use client'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-steel/30 py-8 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-secondary">
            © 2025 Aurélien PAGE ·{' '}
            <span className="text-off-white/60">aurelienpage.com</span>
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/aurelienpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-secondary hover:text-cyan transition-colors duration-200"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-secondary hover:text-cyan transition-colors duration-200 group"
            >
              Retour en haut
              <span className="inline-block group-hover:-translate-y-0.5 transition-transform duration-200">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
