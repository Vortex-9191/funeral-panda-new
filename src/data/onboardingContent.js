export const slides = [
  {
    id: 'welcome',
    type: 'welcome',
    headline: '人生最後の、\n最高のフェス。',
    subtitle: 'Funeral Panda',
  },
  {
    id: 'concept',
    type: 'concept',
    headline: 'お葬式じゃない。\nフェスだ。',
    body: '好きな音楽、好きな写真、好きな演出。\nあなたの人生を、最高のカタチで\n締めくくろう。',
  },
  {
    id: 'value',
    type: 'concept',
    headline: '遺影も、棺も、BGMも。\nぜんぶ自分で決められる。',
    body: 'かんたん操作で、あなただけの\nプランを作成。',
    cards: [
      { icon: '📸', label: '遺影' },
      { icon: '⚰️', label: '棺' },
      { icon: '🎵', label: '音楽' },
    ],
  },
  {
    id: 'cta',
    type: 'cta',
    headline: 'さあ、「理想の最期」を\n見つけよう。',
    ctaLabel: '診断をはじめる',
    skipLabel: 'あとで',
  },
]

export const TOTAL_SLIDES = slides.length
