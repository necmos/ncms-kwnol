import type { ReactNode } from 'react'

interface PrGuestCardProps {
  name: ReactNode
  title: ReactNode
  introParagraphs: ReadonlyArray<ReactNode>
  booksTitle: ReactNode
  books: ReadonlyArray<ReactNode>
}

export const PrGuestCard = ({
  name,
  title,
  introParagraphs,
  booksTitle,
  books,
}: PrGuestCardProps) => {
  return (
    <div className="guest-card">
      <div className="g-name">{name}</div>
      <div className="g-title">{title}</div>
      {introParagraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <div className="books">
        <h4>{booksTitle}</h4>
        <ul>
          {books.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
