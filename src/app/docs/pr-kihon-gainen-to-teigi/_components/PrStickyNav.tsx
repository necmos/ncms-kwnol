import { AnchorNavLink } from '@/components/ui/anchor-nav-link'

const navItems: ReadonlyArray<{
  href: string
  label: string
  newBadge?: boolean
}> = [
  { href: '#s1', label: 'はじめに' },
  { href: '#s2', label: '基本概念・定義' },
  { href: '#s3', label: 'PRとは何か' },
  { href: '#s4', label: '日本の課題' },
  { href: '#s5', label: 'PR発展史', newBadge: true },
  { href: '#s6', label: 'グローバル化', newBadge: true },
  { href: '#s7', label: 'コロナとPR', newBadge: true },
  { href: '#s8', label: '事例' },
  { href: '#s9', label: '評価・参考' },
  { href: '#s10', label: '様々なリレーションズ', newBadge: true },
  { href: '#s11', label: 'コーポレート/マーケティング', newBadge: true },
  { href: '#s12', label: 'リレーションシップ管理', newBadge: true },
  {
    href: '#s13',
    label: 'メディア・リレーションズ',
    newBadge: true,
  },
]

export const PrStickyNav = () => {
  return (
    <nav>
      {navItems.map((item) => (
        <AnchorNavLink
          key={item.href}
          href={item.href}
          newBadge={item.newBadge}
        >
          {item.label}
        </AnchorNavLink>
      ))}
    </nav>
  )
}
