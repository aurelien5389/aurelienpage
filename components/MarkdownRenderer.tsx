import Link from 'next/link'
import { Fragment } from 'react'
import styles from './MarkdownRenderer.module.css'

// Converts inline markdown to JSX: **bold**, *italic*, `code`, [link](url)
export function renderInline(text: string, key: string | number): React.ReactNode {
  const parts: React.ReactNode[] = []
  let remaining = text
  let i = 0

  while (remaining.length > 0) {
    // **bold**
    const bold = remaining.match(/^([\s\S]*?)\*\*(.+?)\*\*/)
    // *italic*
    const italic = remaining.match(/^([\s\S]*?)\*([^*]+?)\*/)
    // `code`
    const code = remaining.match(/^([\s\S]*?)`([^`]+?)`/)
    // [text](url)
    const link = remaining.match(/^([\s\S]*?)\[([^\]]+)\]\(([^)]+)\)/)

    const typedMatches: [RegExpMatchArray | null, number][] = [
      [bold, 0],
      [italic, 1],
      [code, 2],
      [link, 3],
    ]
    const candidates = typedMatches.filter(
      (c): c is [RegExpMatchArray, number] => c[0] !== null
    )
    if (candidates.length === 0) {
      parts.push(<Fragment key={`${key}-t-${i}`}>{remaining}</Fragment>)
      break
    }

    // Pick the earliest match
    const [earliest, matchType] = candidates.reduce((a, b) => (a[0][1].length <= b[0][1].length ? a : b))

    if (earliest[1]) {
      parts.push(<Fragment key={`${key}-t-${i}`}>{earliest[1]}</Fragment>)
      i++
    }

    if (matchType === 0) {
      parts.push(<strong key={`${key}-b-${i}`} className={styles.mdGras}>{earliest[2]}</strong>)
    } else if (matchType === 1) {
      parts.push(<em key={`${key}-i-${i}`} className={styles.mdItalique}>{earliest[2]}</em>)
    } else if (matchType === 2) {
      parts.push(
        <code key={`${key}-c-${i}`} className={styles.mdCode}>
          {earliest[2]}
        </code>
      )
    } else {
      const href = earliest[3]
      const isExternal = href.startsWith('http')
      parts.push(
        isExternal ? (
          <a
            key={`${key}-l-${i}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mdLien}
          >
            {earliest[2]}
          </a>
        ) : (
          <Link
            key={`${key}-l-${i}`}
            href={href}
            className={styles.mdLien}
          >
            {earliest[2]}
          </Link>
        )
      )
    }
    i++
    remaining = remaining.slice(earliest[1].length + earliest[0].length - earliest[1].length)
  }

  return <>{parts}</>
}

interface Props {
  content: string
}

export default function MarkdownRenderer({ content }: Props) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let ulItems: string[] = []
  let olItems: string[] = []
  let paragraphLines: string[] = []
  let idx = 0

  function flushParagraph() {
    if (paragraphLines.length === 0) return
    const text = paragraphLines.join(' ').trim()
    if (text) {
      elements.push(
        <p key={`p-${idx++}`} className={styles.mdParagraphe}>
          {renderInline(text, `p-${idx}`)}
        </p>
      )
    }
    paragraphLines = []
  }

  function flushUl() {
    if (ulItems.length === 0) return
    elements.push(
      <ul key={`ul-${idx++}`} className={styles.mdListe}>
        {ulItems.map((item, j) => (
          <li key={j} className={styles.mdListeItem}>
            <span className={styles.mdPuce} aria-hidden="true">▸</span>
            <span>{renderInline(item, `ul-${idx}-${j}`)}</span>
          </li>
        ))}
      </ul>
    )
    ulItems = []
  }

  function flushOl() {
    if (olItems.length === 0) return
    elements.push(
      <ol key={`ol-${idx++}`} className={styles.mdListeOrd}>
        {olItems.map((item, j) => (
          <li key={j} className={styles.mdListeOrdItem}>
            <span className={styles.mdNumero}>
              {j + 1}.
            </span>
            <span>{renderInline(item, `ol-${idx}-${j}`)}</span>
          </li>
        ))}
      </ol>
    )
    olItems = []
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Fenced code block
    if (/^```/.test(line.trim())) {
      flushParagraph(); flushUl(); flushOl()
      const code: string[] = []
      i++
      while (i < lines.length && !/^```/.test(lines[i].trim())) code.push(lines[i++])
      elements.push(
        <pre key={`pre-${idx++}`} className={styles.mdPre}>
          <code>{code.join('\n')}</code>
        </pre>
      )
      continue
    }

    // Table: header row followed by a |---| separator row
    if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|?\s*:?-{3,}/.test(lines[i + 1])) {
      flushParagraph(); flushUl(); flushOl()
      const cells = (row: string) => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())
      const head = cells(line)
      const body: string[][] = []
      i += 2
      while (i < lines.length && /^\s*\|/.test(lines[i])) body.push(cells(lines[i++]))
      i--
      const t = idx++
      elements.push(
        <div key={`tw-${t}`} className={styles.mdTableWrap}>
          <table className={styles.mdTable}>
            <thead>
              <tr>{head.map((c, j) => <th key={j} scope="col">{renderInline(c, `th-${t}-${j}`)}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((row, r) => (
                <tr key={r}>{row.map((c, j) => <td key={j}>{renderInline(c, `td-${t}-${r}-${j}`)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    }

    // H2
    if (/^## /.test(line)) {
      flushParagraph(); flushUl(); flushOl()
      elements.push(
        <h2 key={`h2-${idx++}`} className={styles.mdH2}>
          {renderInline(line.slice(3).trim(), `h2-${idx}`)}
        </h2>
      )
      continue
    }

    // H3
    if (/^### /.test(line)) {
      flushParagraph(); flushUl(); flushOl()
      elements.push(
        <h3 key={`h3-${idx++}`} className={styles.mdH3}>
          {renderInline(line.slice(4).trim(), `h3-${idx}`)}
        </h3>
      )
      continue
    }

    // H4
    if (/^#### /.test(line)) {
      flushParagraph(); flushUl(); flushOl()
      elements.push(
        <h4 key={`h4-${idx++}`} className={styles.mdH4}>
          {renderInline(line.slice(5).trim(), `h4-${idx}`)}
        </h4>
      )
      continue
    }

    // HR
    if (/^---+$/.test(line.trim())) {
      flushParagraph(); flushUl(); flushOl()
      elements.push(<hr key={`hr-${idx++}`} className={styles.mdHr} />)
      continue
    }

    // Unordered list
    if (/^[-*] /.test(line)) {
      flushParagraph(); flushOl()
      ulItems.push(line.slice(2).trim())
      continue
    }

    // Ordered list
    if (/^\d+\. /.test(line)) {
      flushParagraph(); flushUl()
      olItems.push(line.replace(/^\d+\. /, '').trim())
      continue
    }

    // Blank line
    if (line.trim() === '') {
      flushParagraph(); flushUl(); flushOl()
      continue
    }

    // Regular text → accumulate in paragraph
    flushUl(); flushOl()
    paragraphLines.push(line)
  }

  flushParagraph(); flushUl(); flushOl()

  return <div className={styles.mdContenu}>{elements}</div>
}
