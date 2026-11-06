// Balise title : Google coupe l'affichage vers 60 caractères.
// On ajoute la marque seulement quand elle tient ; sinon le titre de la page passe seul.
const MARQUE = 'Aurélien Page'

export function seoTitle(titre: string, max = 60): string {
  const base = titre.replace(/\s*[·|]\s*Aurélien PAGE\s*$/i, '').trim()
  const avecMarque = `${base} · ${MARQUE}`
  return avecMarque.length <= max ? avecMarque : base
}
