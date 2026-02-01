// 診断フロー - 質問・選択肢・結果タイプ定義

export const questions = [
  {
    id: 1,
    text: '友達に誘われたパーティー。\nあなたのポジションは？',
    choices: [
      { label: 'ステージに上がって盛り上げる', type: 'rock' },
      { label: 'テラスで気持ちよく語る', type: 'garden' },
      { label: '照明や選曲にこだわる裏方', type: 'art' },
      { label: '乾杯の音頭をとる', type: 'matsuri' },
    ],
  },
  {
    id: 2,
    text: '最高の休日の過ごし方は？',
    choices: [
      { label: 'ライブやフェスに行く', type: 'rock' },
      { label: '自然の中でピクニック', type: 'garden' },
      { label: '美術館やギャラリー巡り', type: 'art' },
      { label: '仲間とBBQや祭りに行く', type: 'matsuri' },
    ],
  },
  {
    id: 3,
    text: 'もし自分のテーマソングが\nあるなら？',
    choices: [
      { label: 'ギターが唸るロックナンバー', type: 'rock' },
      { label: 'アコースティックな癒し系', type: 'garden' },
      { label: '実験的なエレクトロニカ', type: 'art' },
      { label: 'お祭り騒ぎの和太鼓ビート', type: 'matsuri' },
    ],
  },
  {
    id: 4,
    text: '人生最後の晩餐、何を食べる？',
    choices: [
      { label: 'でっかいステーキとビール', type: 'rock' },
      { label: '手作りの家庭料理', type: 'garden' },
      { label: 'シェフのおまかせコース', type: 'art' },
      { label: '屋台のB級グルメ食べ歩き', type: 'matsuri' },
    ],
  },
  {
    id: 5,
    text: '自分のことを一言で表すと？',
    choices: [
      { label: '情熱的', type: 'rock' },
      { label: '穏やか', type: 'garden' },
      { label: '独創的', type: 'art' },
      { label: 'お祭り好き', type: 'matsuri' },
    ],
  },
  {
    id: 6,
    text: 'あなたの人生を映画にするなら\nどんなジャンル？',
    choices: [
      { label: '熱血スポ根ドラマ', type: 'rock' },
      { label: '心温まるヒューマンドラマ', type: 'garden' },
      { label: 'アート系ドキュメンタリー', type: 'art' },
      { label: '笑って泣ける青春コメディ', type: 'matsuri' },
    ],
  },
]

export const TOTAL_QUESTIONS = questions.length

// 同数の場合の優先順位: matsuri > rock > art > garden
const typePriority = ['matsuri', 'rock', 'art', 'garden']

export function calculateResult(answers) {
  const scores = { rock: 0, garden: 0, art: 0, matsuri: 0 }
  answers.forEach((type) => {
    scores[type]++
  })

  let maxScore = 0
  let resultType = 'matsuri'

  for (const type of typePriority) {
    if (scores[type] > maxScore) {
      maxScore = scores[type]
      resultType = type
    }
  }

  return resultType
}

export const resultTypes = {
  rock: {
    id: 'rock',
    name: 'ロックフェス型',
    tagline: '最後のステージ、ド派手に行こうぜ。',
    gradientFrom: '#FF6B6B',
    gradientTo: '#FECA57',
    emoji: '🎸',
    plan: {
      portrait: {
        title: '遺影スタイル',
        description: 'レザージャケットにサングラス。ライブ会場で撮ったようなカッコいい一枚。',
        icon: '📸',
      },
      coffin: {
        title: '棺デザイン',
        description: 'マットブラック×炎のグラフィック。ギターピックの装飾付き。',
        icon: '⚰️',
      },
      bgm: {
        title: 'BGM',
        description: 'エレキギター全開のロックアンセム。最後はシャウトで見送り。',
        icon: '🎵',
      },
      venue: {
        title: '会場の雰囲気',
        description: 'ライブハウス風のステージ演出。スモークとスポットライト。',
        icon: '🏟️',
      },
    },
  },
  garden: {
    id: 'garden',
    name: 'ガーデンパーティ型',
    tagline: '花と風のなかで、笑って送り出して。',
    gradientFrom: '#34D399',
    gradientTo: '#FECA57',
    emoji: '🌿',
    plan: {
      portrait: {
        title: '遺影スタイル',
        description: '自然光の中で微笑む、ナチュラルなポートレート。花かんむり付き。',
        icon: '📸',
      },
      coffin: {
        title: '棺デザイン',
        description: 'ホワイトウッド×生花のアレンジメント。ボタニカルな装飾。',
        icon: '⚰️',
      },
      bgm: {
        title: 'BGM',
        description: 'アコースティックギターとピアノの優しいメロディ。鳥のさえずりSE。',
        icon: '🎵',
      },
      venue: {
        title: '会場の雰囲気',
        description: 'ガーデンテラスに花とグリーン。オープンエアで風を感じる空間。',
        icon: '🏟️',
      },
    },
  },
  art: {
    id: 'art',
    name: 'アートフェス型',
    tagline: '人生を、作品にしよう。',
    gradientFrom: '#A855F7',
    gradientTo: '#C4B5FD',
    emoji: '🎨',
    plan: {
      portrait: {
        title: '遺影スタイル',
        description: 'モノクロ＆アーティスティックな構図。ギャラリーに飾れるような一枚。',
        icon: '📸',
      },
      coffin: {
        title: '棺デザイン',
        description: 'ミニマルなホワイト×パープルのグラデーション。アート作品のような仕上がり。',
        icon: '⚰️',
      },
      bgm: {
        title: 'BGM',
        description: 'アンビエント＆エレクトロニカ。映画のサウンドトラックのような音響。',
        icon: '🎵',
      },
      venue: {
        title: '会場の雰囲気',
        description: 'ギャラリーのようなミニマル空間。プロジェクションマッピング演出。',
        icon: '🏟️',
      },
    },
  },
  matsuri: {
    id: 'matsuri',
    name: '夏フェス型',
    tagline: '泣くな、踊れ。最後はみんなで乾杯だ。',
    gradientFrom: '#FECA57',
    gradientTo: '#FF6B6B',
    emoji: '🏮',
    plan: {
      portrait: {
        title: '遺影スタイル',
        description: 'はっぴ姿でピースサイン。満面の笑みで「また来いよ！」感。',
        icon: '📸',
      },
      coffin: {
        title: '棺デザイン',
        description: '祭り提灯＆金魚模様。賑やかで温かみのあるデザイン。',
        icon: '⚰️',
      },
      bgm: {
        title: 'BGM',
        description: '和太鼓＆三味線のお祭りビート。途中でみんなで手拍子タイム。',
        icon: '🎵',
      },
      venue: {
        title: '会場の雰囲気',
        description: '縁日のような屋台エリア付き。提灯と花火の演出で賑やかに。',
        icon: '🏟️',
      },
    },
  },
}
