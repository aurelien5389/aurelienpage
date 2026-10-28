// Registre des articles-réponses publiés sous /reponses/.
import type { Lien, Reponse } from './types'
import { getContentDates } from '@/lib/content-dates'
import quEstCeQueLeGeo from './qu-est-ce-que-le-geo'
import differenceSeoGeo from './difference-seo-geo'
import differenceAuditSeoAuditGeo from './difference-audit-seo-audit-geo'
import robotsIa from './robots-ia-faut-il-les-bloquer'
import llmsTxt from './faut-il-creer-un-fichier-llms-txt'
import contenuIa from './contenu-ia-penalise-par-google'
import chatgptBing from './chatgpt-utilise-t-il-bing'
import delaisSeo from './combien-de-temps-resultats-seo'
import delaisChatgpt from './combien-de-temps-pour-etre-cite-par-chatgpt'
import aiModes from './difference-ai-overviews-ai-mode'
import donneesStructurees from './donnees-structurees-ia'
import partDeVoix from './part-de-voix-dans-les-ia'
import financement from './formation-seo-cpf-opco'
import aiTrafic from './ai-overviews-baisse-de-trafic'
import budgetAds from './budget-minimum-google-ads'
import nombreMots from './combien-de-mots-article-seo'
import coutAudit from './combien-coute-un-audit-seo'
import etreCite from './comment-etre-cite-par-chatgpt-et-perplexity'
import etreCiteClaude from './comment-etre-cite-par-claude'
import traficIaGa4 from './trafic-ia-google-analytics-4'

export const REPONSES: Reponse[] = [
  quEstCeQueLeGeo,
  differenceSeoGeo,
  differenceAuditSeoAuditGeo,
  coutAudit,
  robotsIa,
  llmsTxt,
  contenuIa,
  chatgptBing,
  etreCite,
  etreCiteClaude,
  delaisSeo,
  delaisChatgpt,
  aiModes,
  donneesStructurees,
  partDeVoix,
  traficIaGa4,
  financement,
  aiTrafic,
  budgetAds,
  nombreMots,
]

/** Ordre d'affichage des rubriques sur /reponses */
export const THEMES = [
  'Comprendre le GEO',
  'Moteurs et IA',
  'Audits',
  'Mesure et délais',
  'Robots et technique',
  'Contenus et IA',
  'Google Ads',
  'Formation',
]

export function getReponse(slug: string): Reponse | undefined {
  return REPONSES.find((r) => r.slug === slug)
}

export function reponseLien(slug: string): Lien | undefined {
  const r = getReponse(slug)
  return r ? { href: `/reponses/${r.slug}`, label: r.question } : undefined
}

export function reponseDates(r: Reponse) {
  const d = getContentDates([`lib/reponses/${r.slug}.ts`])
  return { published: r.publie, modified: d.modified > r.publie ? d.modified : r.publie }
}
