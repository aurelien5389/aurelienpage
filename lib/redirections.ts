// Pages fusionnées par redirection 301 : la liste vit dans config/redirections-seo.json,
// partagée avec next.config.js. Une page listée ici n'est plus jamais liée depuis le site.
import table from '@/config/redirections-seo.json'

const REDIRECTIONS: Record<string, string> = Object.fromEntries(
  Object.entries(table as Record<string, string>).filter(([source]) => source.startsWith('/')),
)

export function estRedirige(href: string): boolean {
  return href.split(/[?#]/)[0].replace(/\/$/, '') in REDIRECTIONS
}

/** Adresse finale d'un lien interne : suit la redirection si la page a été fusionnée. */
export function lienFinal(href: string): string {
  const [chemin, reste = ''] = href.split(/(?=[?#])/)
  const cible = REDIRECTIONS[chemin.replace(/\/$/, '')]
  return cible ? cible + reste : href
}
