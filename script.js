const LINKS = [
  {
    id: 'moodle',
    title: 'moodle',
    url: 'https://moodle4.matsuyama-u.ac.jp/moodle/',
    desc: '授業資料・課題提出・小テスト・出欠確認',
    account: { label: '学籍番号', className: 'badge-gakusei' },
    tags: ['授業']
  },
  {
    id: 'unipa-pc',
    title: 'unipa PC',
    url: 'https://unipa.matsuyama-u.ac.jp/uprx/ShibbolethAuthServlet',
    desc: '履修登録・成績照会・時間割確認（パソコン用）',
    account: { label: '学籍番号', className: 'badge-gakusei' },
    tags: ['履修']
  },
  {
    id: 'unipa-mobile',
    title: 'unipa mobile',
    url: 'https://unipa.matsuyama-u.ac.jp/uprx/MobileShibbolethAuthServle',
    desc: '履修登録・成績照会・時間割確認（スマートフォン用）',
    account: { label: '学籍番号', className: 'badge-gakusei' },
    tags: ['履修']
  },
  {
    id: 'gmail',
    title: '松山大学Gmail',
    url: 'https://mail.google.com/a/g.matsuyama-u.ac.jp',
    desc: '大学公式メール（@g.matsuyama-u.ac.jp）の送受信',
    account: { label: '松大アカウント', className: 'badge-matsudai' },
    tags: ['メール']
  },
  {
    id: 'classroom',
    title: 'Google Classroom',
    url: 'https://classroom.google.com/',
    desc: '授業ごとの資料配布・課題提出・連絡',
    account: { label: '松大アカウント', className: 'badge-matsudai' },
    tags: ['授業']
  },
  {
    id: 'gemini',
    title: 'Gemini',
    url: 'https://gemini.google.com/',
    desc: 'Googleの生成AIアシスタント',
    account: { label: '松大アカウント', className: 'badge-matsudai' },
    tags: ['AI']
  },
  {
    id: 'meet',
    title: 'Google Meet',
    url: 'https://meet.google.com/',
    desc: 'ブラウザから使えるビデオ会議ツール',
    account: { label: '松大アカウント', className: 'badge-matsudai' },
    tags: ['会議']
  },
  {
    id: 'teams',
    title: 'Microsoft Teams',
    url: 'https://teams.microsoft.com/',
    desc: 'チャット・ビデオ会議・ファイル共有',
    account: { label: '松大アカウント', className: 'badge-matsudai' },
    tags: ['会議']
  },
  {
    id: 'zoom',
    title: 'Zoom',
    url: 'https://zoom.us/',
    desc: 'オンライン授業・ミーティング向けビデオ会議',
    account: { label: 'Zoomアカウント', className: 'badge-zoom' },
    tags: ['会議']
  },
  {
    id: 'drive',
    title: 'Google Drive',
    url: 'https://drive.google.com/',
    desc: 'レポート・資料のクラウド保存と共有',
    account: { label: '松大アカウント', className: 'badge-matsudai' },
    tags: ['ファイル']
  },
  {
    id: 'youtube',
    title: 'YouTube（授業動画）',
    url: 'https://www.youtube.com/',
    desc: '録画授業・大学公式動画の視聴',
    account: { label: '松大アカウント', className: 'badge-matsudai' },
    tags: ['授業']
  },
  {
    id: 'wifi',
    title: '学内無線LAN接続方法',
    url: 'https://link.g.matsuyama-u.ac.jp/wifi',
    desc: 'キャンパス無線LANへの接続手順',
    account: { label: '学籍番号', className: 'badge-gakusei' },
    tags: ['ネットワーク']
  },
  {
    id: 'wifi-qa',
    title: '無線LANトラブル対処',
    url: 'https://link.g.matsuyama-u.ac.jp/wifi-qa',
    desc: '学内無線LANの接続トラブル時の確認ポイント',
    account: null,
    tags: ['サポート']
  },
  {
    id: 'login-help',
    title: 'ログインできない場合',
    url: 'https://link.g.matsuyama-u.ac.jp/faq',
    desc: 'パスワード再設定・アカウントロック解除の手順',
    account: null,
    tags: ['サポート']
  },
  {
    id: 'qa',
    title: 'Q&A（よくある質問）',
    url: 'https://link.g.matsuyama-u.ac.jp/qa',
    desc: 'ICTサービスに関するよくある質問と回答集',
    account: null,
    tags: ['サポート']
  },
  {
    id: 'security',
    title: 'ウィルス・セキュリティ対策',
    url: 'https://link.g.matsuyama-u.ac.jp/security-tips',
    desc: 'ウイルス対策ソフト導入手順・情報セキュリティ対策',
    account: null,
    tags: ['セキュリティ']
  },
  {
    id: 'mac-firewall',
    title: 'Macファイアーウォール',
    url: 'https://link.g.matsuyama-u.ac.jp/security-tips/mac-firewall',
    desc: 'Macのファイアーウォール設定方法',
    account: null,
    tags: ['セキュリティ']
  },
  {
    id: 'official-site',
    title: '松山大学オフィシャルHP',
    url: 'https://www.matsuyama-u.ac.jp/',
    desc: '大学公式サイト（学内情報・イベント）',
    account: null,
    tags: ['公式']
  },
  {
    id: 'syllabus',
    title: 'シラバス検索',
    url: 'https://unipa.matsuyama-u.ac.jp/guestlogin.html',
    desc: '授業の目標・内容・評価方法などを確認',
    account: null,
    tags: ['授業']
  },
  {
    id: 'faculty',
    title: '教員検索',
    url: 'https://syl.matsuyama-u.ac.jp/mtuhp/KgApp',
    desc: '教員の専門分野・研究内容・連絡先を検索',
    account: null,
    tags: ['授業']
  },
  {
    id: 'opac',
    title: '蔵書検索（OPAC）',
    url: 'https://libweb.matsuyama-u.jp/drupal/',
    desc: '図書館の蔵書・雑誌・電子資料の所在を検索',
    account: null,
    tags: ['図書館']
  },
  {
    id: 'sns',
    title: '公式ソーシャルメディア',
    url: 'https://www.matsuyama-u.ac.jp/guide/pr/sns/',
    desc: '松山大学の公式SNSアカウント一覧',
    account: null,
    tags: ['公式']
  }
];

const STORAGE_KEY = 'matsuyama_u_link_click_counts';
const ALL_TAG = 'すべて';

const gridEl = document.getElementById('links-grid');
const tagFilterEl = document.getElementById('tag-filter');
const resetClicksEl = document.getElementById('reset-clicks');

let activeTag = ALL_TAG;
let clickCounts = loadCounts();

function loadCounts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function saveCounts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clickCounts));
}

function getCount(linkId) {
  const value = clickCounts[linkId];
  return Number.isFinite(value) ? value : 0;
}

function incrementCount(linkId) {
  clickCounts[linkId] = getCount(linkId) + 1;
  saveCounts();
}

function renderTagButtons() {
  const uniqueTags = Array.from(new Set(LINKS.flatMap((link) => link.tags))).sort((a, b) => a.localeCompare(b, 'ja'));
  const tags = [ALL_TAG, ...uniqueTags];

  tagFilterEl.innerHTML = '';
  tags.forEach((tag) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `tag-button${tag === activeTag ? ' active' : ''}`;
    button.textContent = tag;
    button.addEventListener('click', () => {
      activeTag = tag;
      renderTagButtons();
      renderCards();
    });
    tagFilterEl.appendChild(button);
  });
}

function createBadge(className, text) {
  const span = document.createElement('span');
  span.className = className;
  span.textContent = text;
  return span;
}

function renderCards() {
  const filteredLinks = LINKS
    .filter((link) => activeTag === ALL_TAG || link.tags.includes(activeTag))
    .sort((a, b) => {
      const countDiff = getCount(b.id) - getCount(a.id);
      if (countDiff !== 0) return countDiff;
      return a.title.localeCompare(b.title, 'ja');
    });

  gridEl.innerHTML = '';

  if (!filteredLinks.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.textContent = '該当するリンクがありません。';
    gridEl.appendChild(empty);
    return;
  }

  filteredLinks.forEach((link) => {
    const card = document.createElement('article');
    card.className = 'card';

    const title = document.createElement('h3');
    title.className = 'card-title';

    const anchor = document.createElement('a');
    anchor.className = 'card-link';
    anchor.href = link.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = link.title;
    anchor.addEventListener('click', () => {
      incrementCount(link.id);
      renderCards();
    });

    title.appendChild(anchor);

    const desc = document.createElement('p');
    desc.className = 'card-desc';
    desc.textContent = link.desc;

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    meta.appendChild(createBadge('click-count', `クリック ${getCount(link.id)}`));

    if (link.account) {
      meta.appendChild(createBadge(`badge ${link.account.className}`, link.account.label));
    }

    link.tags.forEach((tag) => {
      meta.appendChild(createBadge('tag-chip', tag));
    });

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(meta);
    gridEl.appendChild(card);
  });
}

resetClicksEl.addEventListener('click', () => {
  clickCounts = {};
  saveCounts();
  renderCards();
});

renderTagButtons();
renderCards();
