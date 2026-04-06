import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions légales · Aurélien PAGE',
  description: "Mentions légales du site aurelienpage.fr — éditeur, hébergement, propriété intellectuelle, données personnelles.",
  robots: { index: false, follow: false },
}

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs text-gray-secondary mb-10">
              <Link href="/" className="hover:text-cyan transition-colors duration-200">Accueil</Link>
              <span aria-hidden="true">›</span>
              <span className="text-off-white">Mentions légales</span>
            </nav>

            <h1 className="font-space-grotesk font-bold text-3xl sm:text-4xl text-off-white mb-12">
              Mentions légales
            </h1>

            <div className="space-y-10 text-gray-secondary leading-relaxed">

              {/* Éditeur */}
              <div>
                <h2 className="font-space-grotesk font-semibold text-off-white text-lg mb-4">
                  Éditeur du site
                </h2>
                <div className="space-y-1 text-sm">
                  <p><span className="text-off-white font-medium">Nom :</span> Aurélien PAGE</p>
                  <p><span className="text-off-white font-medium">Statut :</span> Consultant freelance — [Forme juridique à compléter : auto-entrepreneur / SASU / EURL]</p>
                  <p><span className="text-off-white font-medium">SIRET :</span> [À compléter]</p>
                  <p><span className="text-off-white font-medium">Adresse :</span> Rennes, Bretagne, France</p>
                  <p>
                    <span className="text-off-white font-medium">Email :</span>{' '}
                    <a href="mailto:aurelienpage89@gmail.com" className="hover:text-cyan transition-colors duration-200">
                      aurelienpage89@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="text-off-white font-medium">Téléphone :</span>{' '}
                    <a href="tel:+33781981114" className="hover:text-cyan transition-colors duration-200">
                      07 81 98 11 14
                    </a>
                  </p>
                </div>
              </div>

              {/* Hébergement */}
              <div>
                <h2 className="font-space-grotesk font-semibold text-off-white text-lg mb-4">
                  Hébergement
                </h2>
                <div className="space-y-1 text-sm">
                  <p><span className="text-off-white font-medium">Société :</span> Vercel Inc.</p>
                  <p><span className="text-off-white font-medium">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
                  <p>
                    <span className="text-off-white font-medium">Site :</span>{' '}
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors duration-200">
                      vercel.com ↗
                    </a>
                  </p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div>
                <h2 className="font-space-grotesk font-semibold text-off-white text-lg mb-4">
                  Propriété intellectuelle
                </h2>
                <p className="text-sm">
                  L&apos;ensemble du contenu de ce site (textes, visuels, structure) est la propriété
                  exclusive d&apos;Aurélien PAGE. Toute reproduction, représentation, modification ou
                  exploitation, totale ou partielle, sans autorisation expresse et préalable est interdite
                  et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code
                  de la Propriété Intellectuelle.
                </p>
              </div>

              {/* Données personnelles */}
              <div>
                <h2 className="font-space-grotesk font-semibold text-off-white text-lg mb-4">
                  Données personnelles
                </h2>
                <div className="space-y-3 text-sm">
                  <p>
                    Les données collectées via le formulaire de contact (nom, email, message) sont utilisées
                    uniquement pour répondre aux demandes des utilisateurs. Elles ne sont pas transmises à
                    des tiers et ne font l&apos;objet d&apos;aucun traitement commercial.
                  </p>
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                    Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification,
                    d&apos;effacement et d&apos;opposition aux données vous concernant. Pour exercer ces
                    droits, contactez :{' '}
                    <a href="mailto:aurelienpage89@gmail.com" className="text-cyan hover:text-cyan-hover transition-colors duration-200">
                      aurelienpage89@gmail.com
                    </a>
                  </p>
                  <p>
                    Ce site utilise Google Analytics (GA4) pour mesurer l&apos;audience de manière anonymisée.
                    Vous pouvez vous y opposer en installant l&apos;extension de désactivation de Google Analytics.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="font-space-grotesk font-semibold text-off-white text-lg mb-4">
                  Cookies
                </h2>
                <p className="text-sm">
                  Ce site utilise des cookies de mesure d&apos;audience (Google Analytics). En naviguant sur
                  ce site, vous acceptez leur utilisation. Vous pouvez à tout moment désactiver les cookies
                  depuis les paramètres de votre navigateur.
                </p>
              </div>

              {/* Liens */}
              <div>
                <h2 className="font-space-grotesk font-semibold text-off-white text-lg mb-4">
                  Liens hypertextes
                </h2>
                <p className="text-sm">
                  Ce site peut contenir des liens vers des sites tiers. Aurélien PAGE n&apos;exerce aucun
                  contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </div>

              <p className="text-xs text-gray-secondary/60 pt-4 border-t border-steel/30">
                Dernière mise à jour : avril 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
