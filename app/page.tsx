import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import DiagnosticCTA, { CALENDLY_URL } from '@/components/DiagnosticCTA'
import Icon, { type IconName } from '@/components/Icon'
import { renderInline } from '@/components/MarkdownRenderer'
import { availability } from '@/config/availability'
import { PARCOURS, METHODE, BALISE, DIAGNOSTIC } from '@/lib/fiche-commun'
import { FAQ_ACCUEIL } from '@/lib/faq-accueil'
import { getReponse } from '@/lib/reponses'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Rennes',
  description:
    'Consultant SEO, GEO et SEA à Rennes : être trouvé sur Google et cité par ChatGPT, Perplexity et les AI Overviews. Audits, accompagnement, Google Ads, formations. Diagnostic offert.',
  alternates: { canonical: 'https://aurelienpage.fr' },
  openGraph: {
    title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Rennes',
    description:
      "J'aide les entreprises à être trouvées sur Google et citées par les IA : audits SEO et GEO, accompagnement, Google Ads, formations. Rennes et à distance.",
    url: 'https://aurelienpage.fr',
  },
}

// Cartes prestations : textes du hub /prestations. Pas de montant sur l'accueil (choix d'Aurélien) : les tarifs sont sur les fiches
const PRESTATIONS: { titre: string; texte: string; icone: IconName; tarif: string; href: string }[] = [
  { titre: 'Consultant SEO & GEO', texte: 'Audit, stratégie, cocons sémantiques, optimisation GEO pour les moteurs IA. Une visibilité organique qui dure.', icone: 'search', tarif: 'Tarif détaillé sur la fiche', href: '/prestations/consultant-seo-geo' },
  { titre: 'Audit GEO', texte: "Les IA vous citent-elles ? Relevé des réponses de ChatGPT, Perplexity, Gemini et Google, part de voix, sites cités, plan d'action.", icone: 'sparkles', tarif: "Inclus dans l'audit SEO et GEO", href: '/prestations/audit-geo' },
  { titre: 'Accompagnement SEO mensuel', texte: 'Un consultant SEO au mois : optimisations, contenus, suivi des positions et des citations dans les IA.', icone: 'chart', tarif: 'Sans contrat annuel imposé', href: '/accompagnement-seo' },
  { titre: 'Traffic Manager (SEA)', texte: 'Campagnes Google Ads & Meta Ads créées, pilotées et optimisées. Chaque euro investi est tracé.', icone: 'megaphone', tarif: 'Sur devis', href: '/prestations/traffic-manager-sea' },
  { titre: 'Formations SEO et GEO', texte: 'Former vos équipes au référencement et à la visibilité dans les IA, sur votre propre site. En individuel ou en équipe, à Rennes ou à distance.', icone: 'cap', tarif: 'Sur devis', href: '/formation-seo' },
  { titre: 'Chef de Projet Digital', texte: "Coordination de projets web et digitaux transversaux : refonte, migration SEO, déploiement d'outils, reporting. Du diagnostic à l'exécution.", icone: 'folder', tarif: 'Sur devis', href: '/prestations/chef-de-projet-digital' },
]

// Déroulé : fiche Consultant SEO et GEO, condensé en 4 étapes
const ETAPES = [
  { titre: 'Diagnostic offert', duree: '30 minutes', livrable: "premières pistes et périmètre de l'audit", texte: "Nous regardons ensemble votre site, vos objectifs et vos concurrents. Je vous dis si un audit est utile et ce qu'il couvrira." },
  { titre: 'Audit SEO et GEO', duree: 'selon la taille du site, précisée dans le devis', livrable: 'liste des blocages classés par priorité, carte des mots-clés, relevé de visibilité dans les IA', texte: 'Exploration du site, indexation, accès des robots de Google, de Bing et des IA ; requêtes qui comptent pour votre activité ; relevé de qui est cité par ChatGPT, Perplexity, Gemini et Google sur les questions de vos clients.' },
  { titre: "Restitution et plan d'action", duree: 'une réunion', livrable: "plan d'action classé par impact et par effort", texte: 'Je vous présente les résultats et les actions à mener. Vous pouvez les appliquer seul, avec votre équipe ou avec moi.' },
  { titre: 'Mise en œuvre ou suivi mensuel', duree: 'mensuelle, sans contrat annuel imposé', livrable: 'reporting mensuel', texte: 'Mise en œuvre, suivi des positions et des citations dans les IA, ajustements.' },
]

const POURQUOI: { titre: string; texte: string; icone: IconName }[] = [
  { titre: 'Praticien', texte: PARCOURS, icone: 'tools' },
  { titre: 'Sourcé et mesuré', texte: METHODE, icone: 'shield' },
  { titre: 'Outillé', texte: BALISE, icone: 'chart' },
]

const REPERES: { titre: string; texte: string; icone: IconName }[] = [
  { titre: 'Parcours', texte: 'SEO et SEA depuis 2020, en agence, pour un groupe de presse professionnelle et en freelance. Journaliste web et rédacteur de 2012 à 2019.', icone: 'clock' },
  { titre: 'Domaines', texte: 'SEO · GEO · SEA (Google Ads) · Formation SEO et GEO', icone: 'shield' },
  { titre: 'Outils', texte: 'Google Search Console, Screaming Frog, Semrush, Ahrefs, Looker Studio, Balise', icone: 'tools' },
  { titre: 'Formations suivies', texte: 'Expert SEO et media buying (301 Ades Bootcamp) · AI Search et GEO (FormaSEO) · Master 2 Droit du numérique · Master 2 Management des médias', icone: 'book' },
]

const REPONSES_PHARES = ['qu-est-ce-que-le-geo', 'difference-seo-geo', 'combien-de-temps-resultats-seo']

export default function HomePage() {
  const reponses = REPONSES_PHARES.map(getReponse).filter((r): r is NonNullable<typeof r> => Boolean(r))
  const demarrage = availability.detail.charAt(0).toLowerCase() + availability.detail.slice(1)

  return (
    <>
      <Header />
      <main>
        {/* 1. Héros */}
        <section className={styles.hero} aria-labelledby="h1">
          <div className={styles.heroInner}>
            <div>
              <p className={styles.eyebrow}>
                <Icon name="pin" size={18} />
                Rennes · Télétravail &amp; déplacements
              </p>
              <h1 id="h1" className={styles.h1}>
                Aurélien PAGE
                <span className={styles.srOnly}>, </span>
                <span className={styles.metier}>Consultant SEO, GEO et SEA à Rennes</span>
              </h1>
              {availability.available && (
                <p className={styles.dispo}>
                  <span className={styles.dispoPoint} aria-hidden="true" />
                  {availability.label}
                </p>
              )}
              <p className={styles.pitch}>
                J&apos;aide les entreprises à être trouvées sur Google et citées par ChatGPT, Perplexity,
                Gemini et les AI Overviews. <strong>Audit SEO et GEO, accompagnement mensuel</strong>, campagnes
                Google Ads et formations SEO. À Rennes, en télétravail ou en déplacement. Premier échange :
                un diagnostic offert de 30 minutes.
              </p>
              <div className={styles.actions} data-cta-principal>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primaire">
                  Réserver mon diagnostic offert
                </a>
                <Link href="/prestations" className="btn btn-secondaire">
                  Voir mes prestations <Icon name="arrow" size={18} />
                </Link>
              </div>
              <ul className={styles.reperesHero}>
                <li><Icon name="calendar" size={16} />30 min · Visio ou téléphone · Gratuit</li>
                {availability.reponseSous && <li><Icon name="clock" size={16} />{availability.reponseSous}</li>}
                <li><Icon name="check" size={16} />Démarrage : {demarrage}</li>
              </ul>
            </div>
            <figure className={styles.portrait}>
              <Image src="/photo.jpg" alt="Aurélien Page" width={220} height={220} priority sizes="(max-width: 899px) 150px, 220px" />
            </figure>
          </div>
        </section>

        {/* 2. Prestations */}
        <section className={styles.section} aria-labelledby="prestations">
          <div className={styles.inner}>
            <h2 id="prestations" className={styles.h2}>Mes prestations</h2>
            <p className={styles.sous}>Des expertises complémentaires pensées ensemble, pas des silos juxtaposés.</p>
            <div className={styles.grille}>
              {PRESTATIONS.map((p) => (
                <article key={p.href} className={styles.carte}>
                  <Icon name={p.icone} size={28} className={styles.carteIcone} />
                  <h3 className={styles.carteTitre}>{p.titre}</h3>
                  <p className={styles.carteTexte}>{p.texte}</p>
                  <p className={styles.cartePrix}>{p.tarif}</p>
                  <Link href={p.href} className="lien-fleche">En savoir plus <Icon name="arrow" size={18} /></Link>
                </article>
              ))}
            </div>
            <Link href="/prestations" className={`lien-fleche ${styles.lienFin}`}>
              Voir toutes les prestations en détail <Icon name="arrow" size={18} />
            </Link>
          </div>
        </section>

        {/* 3. Comment on travaille ensemble */}
        <section className={`${styles.section} ${styles.sectionSurface}`} aria-labelledby="travail">
          <div className={styles.inner}>
            <h2 id="travail" className={styles.h2}>Comment on travaille ensemble</h2>
            <p className={styles.sous}>{renderInline(DIAGNOSTIC, 'diag')}</p>
            <ol className={styles.etapes}>
              {ETAPES.map((e, i) => (
                <li key={e.titre} className={styles.etape}>
                  <span className={styles.etapeNum} aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className={styles.etapeTitre}>{e.titre}</h3>
                    <p className={styles.etapeTexte}>{e.texte}</p>
                    <p className={styles.etapeMeta}>
                      <span><strong>Durée :</strong> {e.duree}</span>
                      <span><strong>Livrable :</strong> {e.livrable}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. Pourquoi travailler avec moi + repères */}
        <section className={styles.section} aria-labelledby="pourquoi">
          <div className={styles.inner}>
            <h2 id="pourquoi" className={styles.h2}>Pourquoi travailler avec moi</h2>
            <div className={styles.pourquoi}>
              {POURQUOI.map((p) => (
                <div key={p.titre} className={styles.pq}>
                  <Icon name={p.icone} size={28} className={styles.pqIcone} />
                  <h3 className={styles.pqTitre}>{p.titre}</h3>
                  <p className={styles.pqTexte}>{renderInline(p.texte, p.titre)}</p>
                </div>
              ))}
            </div>
            <dl className={styles.reperes}>
              {REPERES.map((r) => (
                <div key={r.titre} className={styles.repere}>
                  <dt className={styles.repereTitre}><Icon name={r.icone} size={20} />{r.titre}</dt>
                  <dd className={styles.repereTexte}>{r.texte}</dd>
                </div>
              ))}
            </dl>
            <Link href="/a-propos" className={`lien-fleche ${styles.lienFin}`}>
              Parcours complet et formations <Icon name="arrow" size={18} />
            </Link>
          </div>
        </section>

        {/* 5. Trois réponses */}
        <section className={styles.sectionCourte} aria-labelledby="reponses">
          <div className={styles.inner}>
            <h2 id="reponses" className={styles.h2}>Trois réponses pour commencer</h2>
            <p className={styles.sous}>Des réponses courtes, avec leurs sources officielles.</p>
            <div className={styles.reponses}>
              {reponses.map((r) => (
                <Link key={r.slug} href={`/reponses/${r.slug}`} className={styles.reponse}>
                  <span className={styles.reponseQuestion}>{r.question}</span>
                  <span className={styles.reponseTexte}>{r.metaDescription}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className={styles.sectionCourte} aria-labelledby="faq">
          <div className={styles.inner}>
            <h2 id="faq" className={styles.h2}>Questions fréquentes</h2>
            <div className={styles.faqListe}>
              {FAQ_ACCUEIL.map((f, i) => (
                <details key={f.q} className="faq">
                  <summary>{f.q}</summary>
                  <p>{renderInline(f.a, `faq-${i}`)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. À propos */}
        <section id="about" className={`${styles.section} ${styles.sectionSurface}`} aria-labelledby="apropos">
          <div className={`${styles.inner} ${styles.apropos}`}>
            <Image src="/photo.jpg" alt="" width={120} height={120} className={styles.aproposPhoto} />
            <div>
              <h2 id="apropos" className={styles.h2}>À propos</h2>
              <p className={styles.aproposTexte}>
                Je suis venu au référencement par l&apos;écriture. Journaliste web puis rédacteur, j&apos;ai d&apos;abord
                cherché à comprendre pourquoi un article était trouvé et un autre non. C&apos;est resté ma façon de
                travailler : partir du contenu et de la question du lecteur, puis régler la technique.
              </p>
              <p className={styles.aproposTexte}>
                Je réalise des audits SEO et GEO, j&apos;accompagne des sites au mois, je pilote des campagnes Google Ads
                et je forme des équipes. Basé à Rennes, je travaille à distance et en déplacement.
              </p>
              <Link href="/a-propos" className="lien-fleche">Lire la suite sur la page À propos <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
        </section>

        {/* 8. Bandeau diagnostic */}
        <DiagnosticCTA variant="section" />

        {/* 9. Contact */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
