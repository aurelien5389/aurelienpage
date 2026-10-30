import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CALENDLY_URL } from '@/components/DiagnosticCTA'
import TestGeo from '@/components/TestGeo'
import Icon from '@/components/Icon'
import JsonLd from '@/components/JsonLd'
import { renderInline } from '@/components/MarkdownRenderer'
import { pageGraph, faqNode, webPageNode } from '@/lib/schema'
import { getContentDates } from '@/lib/content-dates'
import { availability } from '@/config/availability'
import { CONTACT } from '@/config/contact'
import { PARCOURS, METHODE, BALISE, DIAGNOSTIC } from '@/lib/fiche-commun'
import { FAQ_ACCUEIL } from '@/lib/faq-accueil'
import { getReponse } from '@/lib/reponses'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Laval et Rennes',
  description:
    'Consultant SEO, GEO et SEA à Laval et Rennes : être trouvé sur Google et cité par ChatGPT, Perplexity et les AI Overviews. Audits, accompagnement, Google Ads, formations. Diagnostic offert.',
  alternates: { canonical: 'https://aurelienpage.fr' },
  openGraph: {
    title: 'Aurélien PAGE · Consultant SEO, GEO et SEA à Laval et Rennes',
    description:
      "J'aide les entreprises à être trouvées sur Google et citées par les IA : audits SEO et GEO, accompagnement, Google Ads, formations. Laval, Rennes et à distance.",
    url: 'https://aurelienpage.fr',
  },
}

// Offre : une demande phare, puis les autres demandes formulées avec les mots du client.
// Pas de montant sur l'accueil (choix d'Aurélien) : les tarifs sont sur les fiches.
const OFFRE_PHARE = {
  demande: 'Je veux savoir pourquoi je ne suis pas trouvé sur Google, ni cité par les IA.',
  titre: 'Consultant SEO & GEO : audit, puis suivi',
  texte: 'Audit, stratégie, cocons sémantiques, optimisation GEO pour les moteurs IA. Une visibilité organique qui dure.',
  tarif: 'Tarif détaillé sur la fiche',
  href: '/prestations/consultant-seo-geo',
}

const DEMANDES: { demande: string; titre: string; href: string }[] = [
  { demande: 'Je veux savoir si ChatGPT et les IA citent mon entreprise.', titre: 'Audit GEO', href: '/prestations/audit-geo' },
  { demande: "Je veux quelqu'un qui suive mon site chaque mois.", titre: 'Accompagnement SEO mensuel', href: '/accompagnement-seo' },
  { demande: 'Je veux que mon équipe sache faire.', titre: 'Formations SEO et GEO', href: '/formation-seo' },
  { demande: 'Je veux des campagnes Google Ads qui rapportent.', titre: 'Traffic Manager (SEA)', href: '/prestations/traffic-manager-sea' },
  { demande: 'Je veux un pilote pour ma refonte ou ma migration.', titre: 'Chef de Projet Digital', href: '/prestations/chef-de-projet-digital' },
]

// Déroulé : fiche Consultant SEO et GEO, condensé en 4 étapes
const ETAPES = [
  { titre: 'Diagnostic offert', duree: '30 minutes', livrable: "premières pistes et périmètre de l'audit", texte: "Nous regardons ensemble votre site, vos objectifs et vos concurrents. Je vous dis si un audit est utile et ce qu'il couvrira." },
  { titre: 'Audit SEO et GEO', duree: 'selon la taille du site, précisée dans le devis', livrable: 'liste des blocages classés par priorité, carte des mots-clés, relevé de visibilité dans les IA', texte: 'Exploration du site, indexation, accès des robots de Google, de Bing et des IA ; requêtes qui comptent pour votre activité ; relevé de qui est cité par ChatGPT, Perplexity, Gemini et Google sur les questions de vos clients.' },
  { titre: "Restitution et plan d'action", duree: 'une réunion', livrable: "plan d'action classé par impact et par effort", texte: 'Je vous présente les résultats et les actions à mener. Vous pouvez les appliquer seul, avec votre équipe ou avec moi.' },
  { titre: 'Mise en œuvre ou suivi mensuel', duree: 'mensuelle, sans contrat annuel imposé', livrable: 'reporting mensuel', texte: 'Mise en œuvre, suivi des positions et des citations dans les IA, ajustements.' },
]

const POURQUOI: { titre: string; texte: string }[] = [
  { titre: 'Praticien', texte: PARCOURS },
  { titre: 'Sourcé et mesuré', texte: METHODE },
  { titre: 'Outillé', texte: BALISE },
]

const REPERES: { titre: string; texte: string }[] = [
  { titre: 'Parcours', texte: 'SEO et SEA depuis 2020, en agence, pour un groupe de presse professionnelle et en freelance. Journaliste web et rédacteur de 2012 à 2019.' },
  { titre: 'Domaines', texte: 'SEO · GEO · SEA (Google Ads) · Formation SEO et GEO' },
  { titre: 'Outils', texte: 'Google Search Console, Screaming Frog, Semrush, Ahrefs, Looker Studio, Balise' },
  { titre: 'Formations suivies', texte: 'Expert SEO et media buying (301 Ades Bootcamp) · AI Search et GEO (FormaSEO) · Master 2 Droit du numérique · Master 2 Management des médias' },
]

const REPONSES_PHARES = ['qu-est-ce-que-le-geo', 'difference-seo-geo', 'combien-de-temps-resultats-seo']

export default function HomePage() {
  const reponses = REPONSES_PHARES.map(getReponse).filter((r): r is NonNullable<typeof r> => Boolean(r))
  const demarrage = availability.detail.charAt(0).toLowerCase() + availability.detail.slice(1)
  const dates = getContentDates(['app/page.tsx', 'lib/faq-accueil.ts'])
  const graph = pageGraph(
    webPageNode('/', 'Aurélien PAGE, consultant SEO, GEO et SEA à Laval et Rennes', dates, { mainEntity: { '@id': 'https://aurelienpage.fr/#person' } }),
    faqNode(FAQ_ACCUEIL)
  )

  return (
    <>
      <Header />
      <JsonLd schema={graph} />
      <main>
        {/* 1. Héros : la conversation */}
        <section className={styles.hero} aria-labelledby="h1">
          <div className={styles.heroInner}>
            <div className={styles.heroTexte}>
              <p className={styles.eyebrow}>
                <Icon name="pin" size={18} />
                Laval &amp; Rennes · Grand Ouest et à distance
              </p>
              <h1 id="h1" className={styles.h1}>
                <span className={styles.h1Signature}>Aurélien PAGE, consultant SEO, GEO et SEA</span>
                <span className={styles.srOnly}> : </span>
                <span className={styles.h1Accroche}>
                  Vos clients posent la question. <span className={`surligne ${styles.surligneFort}`}>Soyez dans la réponse.</span>
                </span>
              </h1>
              <div className={styles.actions} data-cta-principal>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primaire">
                  Réserver mon diagnostic offert
                  <span className={styles.srOnly}> (ouvre Calendly dans un nouvel onglet)</span>
                </a>
                <a href={CONTACT.telHref} className="btn btn-secondaire">
                  <Icon name="phone" size={18} /> {CONTACT.telAffiche}
                </a>
              </div>
              <ul className={styles.reperesHero}>
                <li><Icon name="calendar" size={16} />30 min · Visio ou téléphone · Gratuit</li>
                {availability.reponseSous && <li><Icon name="clock" size={16} />{availability.reponseSous}</li>}
                <li><Icon name="check" size={16} />Démarrage : {demarrage}</li>
              </ul>
              <p className={styles.pitch}>
                J&apos;aide les entreprises à être trouvées sur Google et citées par ChatGPT, Perplexity,
                Gemini et les AI Overviews. <strong>Audit SEO et GEO, accompagnement mensuel</strong>, campagnes
                Google Ads et formations SEO. À Laval, à Rennes, en télétravail ou en déplacement. Premier échange :
                un diagnostic offert de 30 minutes.
              </p>
            </div>

            {/* Illustration : la question d'un client, la réponse d'une IA, la place à prendre */}
            <figure className={styles.conversation}>
              <figcaption className={styles.srOnly}>
                Illustration : un client demande à une IA quel expert-comptable choisir à Laval ; la réponse cite
                trois sources, et votre site doit en faire partie. Aurélien Page vérifie si vous êtes cité et vous
                aide à y entrer.
              </figcaption>
              <div aria-hidden="true">
                <p className={styles.convQui}>Votre client, à son IA</p>
                <p className={styles.bulleClient}>Quel expert-comptable me recommandes-tu à Laval ?</p>
                <p className={styles.convQui}>La réponse</p>
                <div className={styles.bulleIa}>
                  <span className={styles.iaLigne} />
                  <span className={`${styles.iaLigne} ${styles.iaLigneCourte}`} />
                  <span className={styles.sourcesTitre}>Sources citées</span>
                  <span className={styles.source}>cabinet-concurrent.fr</span>
                  <span className={styles.source}>annuaire-pro.fr</span>
                  <span className={`${styles.source} ${styles.sourceVous}`}>votre-site.fr ?</span>
                </div>
                <div className={styles.bulleMoi}>
                  <Image src="/photo.jpg" alt="" width={56} height={56} className={styles.moiPhoto} priority />
                  <p className={styles.moiTexte}>
                    Je vérifie si vous êtes cité, et je vous aide à y entrer.
                    <span className={styles.moiStatut}>
                      <span className={styles.dispoPoint} />
                      {availability.available ? availability.label : 'Premier échange offert'}
                    </span>
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* 2. Par où commencer : les demandes, avec les mots du client */}
        <section className={styles.section} aria-labelledby="prestations">
          <div className={styles.inner}>
            <h2 id="prestations" className={styles.h2}>Par où commencer ?</h2>
            <p className={styles.sous}>Dites-moi ce que vous voulez obtenir. Voici ce que j&apos;entends le plus souvent.</p>
            <div className={styles.offre}>
              <article className={styles.phare}>
                <p className={styles.demandePhare}>« {OFFRE_PHARE.demande} »</p>
                <h3 className={styles.phareTitre}>{OFFRE_PHARE.titre}</h3>
                <p className={styles.phareTexte}>{OFFRE_PHARE.texte}</p>
                <p className={styles.pharePrix}>{OFFRE_PHARE.tarif}</p>
                <Link href={OFFRE_PHARE.href} className="lien-fleche">
                  Voir la prestation <Icon name="arrow" size={18} />
                </Link>
              </article>
              <ul className={styles.demandes}>
                {DEMANDES.map((d) => (
                  <li key={d.href}>
                    <Link href={d.href} className={styles.demande}>
                      <span className={styles.demandeTexte}>« {d.demande} »</span>
                      <span className={styles.demandeService}>
                        {d.titre} <Icon name="arrow" size={18} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/prestations" className={`lien-fleche ${styles.lienFin}`}>
              Toutes les prestations et les tarifs <Icon name="arrow" size={18} />
            </Link>
          </div>
        </section>

        {/* 3. Test : êtes-vous dans la réponse ? */}
        <section className={`${styles.section} ${styles.sectionTest}`} aria-labelledby="test">
          <div className={`${styles.inner} ${styles.testGrille}`}>
            <div>
              <h2 id="test" className={styles.h2}>Votre entreprise est-elle dans la réponse ?</h2>
              <p className={styles.sous}>
                Faites le test en une minute. Posez à une IA la question que poserait votre client, et regardez
                qui elle cite.
              </p>
              <p className={styles.testAide}>
                C&apos;est le point de départ de chaque audit GEO : je pose des dizaines de questions de ce type,
                sur plusieurs IA, et je relève qui est cité, à quelle fréquence et pourquoi.
              </p>
            </div>
            <TestGeo />
          </div>
        </section>

        {/* 4. Comment on travaille ensemble */}
        <section className={styles.section} aria-labelledby="travail">
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

        {/* 5. Pourquoi travailler avec moi + repères */}
        <section className={`${styles.section} ${styles.sectionSurface}`} aria-labelledby="pourquoi">
          <div className={styles.inner}>
            <h2 id="pourquoi" className={styles.h2}>Pourquoi travailler avec moi</h2>
            <div className={styles.pourquoi}>
              {POURQUOI.map((p, i) => (
                <div key={p.titre} className={styles.pq}>
                  <span className={styles.pqNum} aria-hidden="true">0{i + 1}</span>
                  <h3 className={styles.pqTitre}>{p.titre}</h3>
                  <p className={styles.pqTexte}>{renderInline(p.texte, p.titre)}</p>
                </div>
              ))}
            </div>
            <dl className={styles.reperes}>
              {REPERES.map((r) => (
                <div key={r.titre} className={styles.repere}>
                  <dt className={styles.repereTitre}>{r.titre}</dt>
                  <dd className={styles.repereTexte}>{r.texte}</dd>
                </div>
              ))}
            </dl>
            <Link href="/a-propos" className={`lien-fleche ${styles.lienFin}`}>
              Parcours complet et formations <Icon name="arrow" size={18} />
            </Link>
          </div>
        </section>

        {/* 6. Trois réponses */}
        <section className={styles.section} aria-labelledby="reponses">
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

        {/* 7. FAQ */}
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

        {/* 8. À propos */}
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
                et je forme des équipes. Basé à <Link href="/consultant-seo-laval">Laval</Link> et à{' '}
                <Link href="/consultant-seo-rennes">Rennes</Link>, je travaille à distance et en déplacement dans{' '}
                <Link href="/zones-intervention">tout le Grand Ouest</Link>.
              </p>
              <Link href="/a-propos" className="lien-fleche">Lire la suite sur la page À propos <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
        </section>

        {/* 9. Contact : trois façons d'échanger */}
        <section id="contact" className={styles.contact} aria-labelledby="contact-titre">
          <div className={styles.inner}>
            <h2 id="contact-titre" className={styles.contactTitre}>On en parle ?</h2>
            <p className={styles.contactSous}>
              Trois façons d&apos;échanger, choisissez la vôtre.
              {availability.reponseSous && <> {availability.reponseSous}.</>}
            </p>
            <ul className={styles.canaux}>
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`${styles.canal} ${styles.canalPrincipal}`}>
                  <Icon name="calendar" size={28} />
                  <span className={styles.canalTitre}>Réserver 30 minutes</span>
                  <span className={styles.canalTexte}>Diagnostic offert, en visio ou par téléphone. Vous choisissez le créneau.</span>
                  <span className={styles.srOnly}> (ouvre Calendly dans un nouvel onglet)</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.telHref} className={styles.canal}>
                  <Icon name="phone" size={28} />
                  <span className={styles.canalTitre}>{CONTACT.telAffiche}</span>
                  <span className={styles.canalTexte}>Un appel direct, pour une question rapide.</span>
                </a>
              </li>
              <li>
                <Link href="/contact" className={styles.canal}>
                  <Icon name="mail" size={28} />
                  <span className={styles.canalTitre}>Écrire un message</span>
                  <span className={styles.canalTexte}>Décrivez votre projet, je vous réponds par e-mail.</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
