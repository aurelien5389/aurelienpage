// Article-réponse (gabarit 8 blocs, voir GEO-REGLES.md).
// Les textes acceptent le Markdown en ligne ; les corps de section, le Markdown de bloc.

export interface Lien {
  href: string
  label: string
}

export interface Reponse {
  slug: string
  /** H1 = la question exacte */
  question: string
  /** Rubrique de la page /reponses */
  theme: string
  /** Balise title (sans le suffixe du site) */
  titre: string
  metaDescription: string
  /** Réponse directe de 40 à 60 mots, compréhensible seule */
  reponse: string
  /** 2 à 4 sections : H2 en question, le corps commence par une phrase-réponse */
  sections: { h2: string; corps: string }[]
  tableau: { titre: string; colonnes: string[]; lignes: string[][] }
  sources: Lien[]
  /** Renvoi commercial unique */
  fiche: Lien & { texte: string }
  faq: { q: string; a: string }[]
  /** Autres réponses liées (slugs) */
  voirAussi?: string[]
  /** Date de première publication (AAAA-MM-JJ) */
  publie: string
}
