import Image from 'next/image'
import Link from 'next/link'
import styles from './QuiRepond.module.css'

// Encadré « Qui répond » : nom, métier, ville, années de pratique telles qu'écrites sur l'accueil,
// lien vers la page À propos. Aucune certification ni référence client.

export default function QuiRepond() {
  return (
    <aside aria-label="Qui répond" className={styles.auteur}>
      <Image src="/photo.jpg" alt="Aurélien Page" width={64} height={64} className={styles.photo} />
      <div>
        <p className={styles.titre}>Qui répond</p>
        <p className={styles.texte}>
          <strong>Aurélien Page</strong>, consultant SEO et GEO à Rennes. SEO et SEA depuis 2020, journaliste web et
          rédacteur de 2012 à 2019. Je mesure la visibilité des sites dans les IA avec Balise, un outil que
          j&apos;ai construit.{' '}
          <Link href="/a-propos" className={styles.lien}>Parcours et méthode</Link>
        </p>
      </div>
    </aside>
  )
}
