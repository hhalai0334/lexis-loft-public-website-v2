// ── Lexis Loft · Mock Data ─────────────────────────────────────────────────
const COVER_PALETTES = [
  { bg:'#0E1C35', accent:'#C9A84C' },
  { bg:'#1A3324', accent:'#5FB87A' },
  { bg:'#2D1A2A', accent:'#C97AB8' },
  { bg:'#1A1A3C', accent:'#8080D4' },
  { bg:'#3C2A12', accent:'#C9A87A' },
  { bg:'#0F2A2A', accent:'#4AB8B8' },
  { bg:'#2C1A1A', accent:'#C97A7A' },
  { bg:'#1A2A3C', accent:'#7AB8C9' },
  { bg:'#2A2C1A', accent:'#A8C97A' },
  { bg:'#3C1A28', accent:'#C95888' },
  { bg:'#0A1E10', accent:'#58A872' },
  { bg:'#2A1A0A', accent:'#E8A844' },
];

const BOOKS = [
  {
    id:1, title:'The Architecture of Memory', author:'Sofia Carvalho',
    genre:'Literary Fiction', year:2023, rating:4.8, ratingCount:2847,
    isbn:'978-3-16-148410-0', pages:368, language:'English',
    formats:['Physical','eBook'], availability:'available',
    price:18.99, lendable:true, coverPalette:0,
    featured:true, bestseller:true, staffPick:true, newArrival:true, onSale:false, salePrice:null,
    synopsis:'A sweeping novel about love, loss, and the secrets we keep across three generations of a Portuguese family — from Lisbon to Rio, through war, revolution, and exile.',
    publisher:'Meridian Press', authorBio:'Sofia Carvalho is a Lisbon-born novelist and winner of the European Book Prize. She writes in both Portuguese and English.',
  },
  {
    id:2, title:'Quantum Echoes', author:'Dr. Marcus Webb',
    genre:'Science Fiction', year:2024, rating:4.5, ratingCount:1203,
    isbn:'978-1-23-456789-0', pages:412, language:'English',
    formats:['Physical','eBook','Audiobook'], availability:'available',
    price:21.50, lendable:true, coverPalette:5,
    featured:true, bestseller:false, staffPick:false, newArrival:true, onSale:true, salePrice:14.99,
    synopsis:'In a world where quantum computers shatter the barrier between parallel timelines, physicist Dr. Lena Cross must prevent a catastrophic merge of realities before both worlds collapse.',
    publisher:'Horizon Books', authorBio:'Marcus Webb holds a PhD in Theoretical Physics from MIT and has published four acclaimed science fiction novels.',
  },
  {
    id:3, title:'The Silk Road Diaries', author:'Amir Nazari',
    genre:'Historical Fiction', year:2023, rating:4.7, ratingCount:3412,
    isbn:'978-0-99-887766-5', pages:520, language:'English',
    formats:['Physical','eBook'], availability:'on-hold',
    price:24.99, lendable:true, coverPalette:3,
    featured:false, bestseller:true, staffPick:true, newArrival:false, onSale:false, salePrice:null,
    synopsis:'A merchant and a cartographer travel the ancient trade routes in 1250 AD, discovering love, betrayal, and the hidden knowledge of lost civilisations.',
    publisher:'Saffron Press', authorBio:'Amir Nazari is an Iranian-British historian and novelist whose work spans the ancient world.',
  },
  {
    id:4, title:'Midnight in Cascais', author:'Elena Ferreira',
    genre:'Mystery', year:2024, rating:4.6, ratingCount:892,
    isbn:'978-0-12-345678-9', pages:295, language:'Portuguese',
    formats:['Physical','eBook'], availability:'available',
    price:15.99, lendable:true, coverPalette:6,
    featured:false, bestseller:false, staffPick:true, newArrival:true, onSale:true, salePrice:9.99,
    synopsis:'Detective Ana Sousa investigates mysterious disappearances in the coastal town of Cascais, uncovering secrets that stretch back to the Salazar regime.',
    publisher:'Lisboa Editorial', authorBio:'Elena Ferreira is a Porto-based crime writer and former investigative journalist.',
  },
  {
    id:5, title:'Roots & Routes', author:'Yusuf Adeyemi',
    genre:'Memoir', year:2022, rating:4.9, ratingCount:5621,
    isbn:'978-0-45-678901-2', pages:304, language:'English',
    formats:['Physical','eBook','Audiobook'], availability:'available',
    price:19.99, lendable:false, coverPalette:1,
    featured:true, bestseller:true, staffPick:false, newArrival:false, onSale:false, salePrice:null,
    synopsis:'A Nigerian-British journalist traces his family\'s journey across three continents, weaving personal history with the broader story of the African diaspora.',
    publisher:'Atlantic Press', authorBio:'Yusuf Adeyemi is a BAFTA-winning documentary filmmaker and author based in London.',
  },
  {
    id:6, title:"The Cartographer's Daughter", author:'Camille Brossard',
    genre:'Fantasy', year:2024, rating:4.4, ratingCount:732,
    isbn:'978-0-78-901234-5', pages:487, language:'English',
    formats:['eBook','Audiobook'], availability:'available',
    price:null, lendable:true, coverPalette:2,
    featured:false, bestseller:false, staffPick:true, newArrival:true, onSale:false, salePrice:null,
    synopsis:'In a world where maps are living artifacts that shape reality, a young cartographer discovers her mother\'s hidden map could either save or destroy their nation.',
    publisher:'Arcanum Press', authorBio:'Camille Brossard is a French-Canadian fantasy author known for her world-building and lyrical prose.',
  },
  {
    id:7, title:'The Behavioural Mind', author:'Prof. Claire Liu',
    genre:'Psychology', year:2023, rating:4.6, ratingCount:1567,
    isbn:'978-0-34-567890-1', pages:342, language:'English',
    formats:['Physical','eBook'], availability:'unavailable',
    price:29.99, lendable:true, coverPalette:7,
    featured:false, bestseller:false, staffPick:false, newArrival:false, onSale:false, salePrice:null,
    synopsis:'A groundbreaking exploration of how behavioural economics and neuroscience are reshaping our understanding of human decision-making.',
    publisher:'Cognition Press', authorBio:'Claire Liu is Professor of Behavioural Science at Oxford University.',
  },
  {
    id:8, title:'Songs of the River Tagus', author:'Manuel Rodrigues',
    genre:'Poetry', year:2024, rating:4.3, ratingCount:312,
    isbn:'978-9-72-345678-0', pages:128, language:'Portuguese',
    formats:['Physical'], availability:'available',
    price:12.50, lendable:true, coverPalette:9,
    featured:false, bestseller:false, staffPick:true, newArrival:true, onSale:false, salePrice:null,
    synopsis:'A bilingual collection celebrating the landscapes, people, and melancholy beauty of Portugal, from the Tagus river to the Alentejo plains.',
    publisher:'Fado Edições', authorBio:'Manuel Rodrigues is one of Portugal\'s most celebrated contemporary poets.',
  },
  {
    id:9, title:'Climate & Capital', author:'Dr. Sarah Okonkwo',
    genre:'Non-Fiction', year:2024, rating:4.7, ratingCount:2134,
    isbn:'978-0-56-789012-3', pages:398, language:'English',
    formats:['Physical','eBook','Audiobook'], availability:'available',
    price:26.99, lendable:true, coverPalette:10,
    featured:true, bestseller:true, staffPick:false, newArrival:false, onSale:true, salePrice:18.99,
    synopsis:'An urgent examination of how global financial systems can be restructured to address the climate crisis, with policy proposals and case studies from six continents.',
    publisher:'Meridian Press', authorBio:'Dr. Sarah Okonkwo is a climate economist and senior fellow at the UN Environment Programme.',
  },
  {
    id:10, title:'The Last Fado', author:'Ana Luísa Santos',
    genre:'Literary Fiction', year:2022, rating:4.8, ratingCount:4201,
    isbn:'978-9-89-012345-6', pages:276, language:'Portuguese',
    formats:['Physical','eBook'], availability:'available',
    price:17.99, lendable:true, coverPalette:4,
    featured:false, bestseller:true, staffPick:true, newArrival:false, onSale:false, salePrice:null,
    synopsis:'A fadista in 1960s Lisbon navigates the tensions between art, love, and resistance during the twilight years of the Estado Novo regime.',
    publisher:'Lisboa Editorial', authorBio:'Ana Luísa Santos is a two-time winner of the Prémio Literário Fernando Namora.',
  },
  {
    id:11, title:'Machine Learning with Python', author:'David Chen',
    genre:'Technology', year:2024, rating:4.5, ratingCount:876,
    isbn:'978-0-12-987654-3', pages:598, language:'English',
    formats:['eBook'], availability:'available',
    price:44.99, lendable:false, coverPalette:8,
    featured:false, bestseller:false, staffPick:false, newArrival:true, onSale:true, salePrice:29.99,
    synopsis:'A comprehensive practical guide to machine learning, covering neural networks, NLP, computer vision, and MLOps with hands-on Python examples.',
    publisher:'Dev Publications', authorBio:'David Chen is a principal engineer at a leading AI research lab.',
  },
  {
    id:12, title:'The Garden Between Worlds', author:'Fatima Al-Rashid',
    genre:"Children's", year:2024, rating:4.9, ratingCount:1843,
    isbn:'978-0-78-654321-0', pages:186, language:'English',
    formats:['Physical','eBook'], availability:'on-hold',
    price:13.99, lendable:true, coverPalette:11,
    featured:true, bestseller:false, staffPick:true, newArrival:true, onSale:false, salePrice:null,
    synopsis:'Ten-year-old Maya discovers a magical garden between her apartment and the old library, where plants whisper the stories of everyone who has ever read them.',
    publisher:'Storyweave Books', authorBio:'Fatima Al-Rashid is a Saudi-British author of children\'s literature and picture books.',
  },
];

const REVIEWS = [
  { id:1, bookId:1, user:'Maria S.',   avatar:'MS', rating:5, date:'March 2024',    comment:'Absolutely beautiful writing. Sofia Carvalho has crafted something truly special — the kind of novel that stays with you long after the last page.' },
  { id:2, bookId:1, user:'João R.',    avatar:'JR', rating:5, date:'February 2024', comment:'A masterpiece of Portuguese literary fiction. The way history and personal memory intertwine is breathtaking.' },
  { id:3, bookId:1, user:'David K.',   avatar:'DK', rating:4, date:'January 2024',  comment:'Rich, evocative, and deeply moving. Some passages are a touch slow but the overall effect is magnificent.' },
];

const TESTIMONIALS = [
  { name:'Clara Mendes',     role:'Avid Reader',          text:'Lexis Loft has completely transformed how I read. Having access to thousands of books — both to borrow and buy — all in one place is remarkable.', rating:5 },
  { name:'Ricardo Alves',    role:'Graduate Student',      text:'The catalogue is massive and the filters make it easy to find exactly what I need. I discover wonderful new books every week through Staff Picks.', rating:5 },
  { name:'Sarah Mitchell',   role:'Book Club Organiser',   text:'We use Lexis Loft for our whole book club. The wishlist and hold features make coordinating monthly reads so much easier for everyone.', rating:5 },
];

const FAQ_DATA = [
  { category:'Borrowing', questions:[
    { q:'How do I borrow a book?', a:'Search or browse for a book, open its detail page, and click "Borrow Book". You\'ll need a registered account. Digital loans are available immediately after borrowing.' },
    { q:'How long can I borrow a book?', a:'Standard loan periods are 14 days for eBooks and 21 days for audiobooks. You can request one renewal per loan if no active holds exist.' },
    { q:'How many books can I borrow at once?', a:'Registered patrons can hold up to 5 active loans simultaneously. Premium members may borrow up to 10.' },
  ]},
  { category:'Purchasing', questions:[
    { q:'What payment methods do you accept?', a:'We accept all major credit and debit cards via Stripe, as well as PayPal. We support payments in EUR, GBP, and USD.' },
    { q:'Can I get a refund on a digital purchase?', a:'Digital book purchases are non-refundable once downloaded. Physical books may be returned within 14 days in original, unread condition.' },
    { q:'Do you offer gift cards?', a:'Yes! Gift cards are available in €10, €25, €50, and €100 denominations from the account section.' },
  ]},
  { category:'Account', questions:[
    { q:'How do I reset my password?', a:'Click "Forgot Password" on the login page and we\'ll send a secure reset link to your email within a few minutes.' },
    { q:'Can I delete my account?', a:'Yes. Go to Account Settings → Privacy → Request Account Deletion. We process all requests within 30 days in line with GDPR regulations.' },
  ]},
  { category:'Holds & Reservations', questions:[
    { q:'How does the hold/waitlist system work?', a:'If a book is unavailable, click "Reserve Book" to join the queue. You\'ll receive an email when a copy becomes available for you.' },
    { q:'How long is a hold valid once it\'s ready?', a:'You\'ll have 5 days to borrow a book once your hold becomes active. After that, it passes automatically to the next patron in the queue.' },
  ]},
];

const BLOG_POSTS = [
  {
    id:1, title:'The Best Portuguese Novels of 2024', author:'Editorial Team', date:'May 2024',
    category:'Book Lists', readTime:'4 min', coverPalette:0,
    excerpt:'From sweeping historical epics to sharp contemporary satire, these are the titles that defined the Portuguese literary conversation this year.',
    body:`From sweeping generational epics to sharp political satire, 2024 has been a watershed year for Portuguese-language fiction. Writers across Portugal and Brazil have produced work of remarkable ambition, anchored in a shared anxiety about memory, displacement, and the cost of progress.

At the top of our list sits Sofia Carvalho's The Architecture of Memory, a novel that manages to be intimate and panoramic at once. Her prose — precise in Portuguese, luminous in English — traces three generations of a Lisbon family against the backdrop of empire's end and exile's beginning. It is, by any measure, one of the finest books written in any language this decade.

Our critics also highlight Ana Luísa Santos's The Last Fado, which renders 1960s Lisbon with aching fidelity, and Elena Ferreira's Midnight in Cascais, a detective novel with genuine literary ambition behind its taut plotting. Together, these books mark a generation of writers who have made peace with the past and begun, at last, to write about the future.`,
  },
  {
    id:2, title:'How to Build a Reading Habit That Actually Sticks', author:'Clara Mendes', date:'April 2024',
    category:'Reading Tips', readTime:'6 min', coverPalette:1,
    excerpt:'Neuroscientist Dr. James Chen shares the science behind habit formation and exactly how to apply it to your reading life.',
    body:`The science of habit formation is unambiguous on one point: context matters more than willpower. You're far more likely to read consistently if you attach reading to an existing daily ritual — morning coffee, the commute, twenty minutes before sleep — than if you simply resolve to "read more" without anchoring that intention to a specific moment.

Neuroscientist Dr. James Chen recommends what he calls the "minimum viable page": commit to reading just one page a day. The psychological trick is that you almost never stop at one. Once the book is open, inertia does the rest. The barrier isn't stamina — it's starting.

Lexis Loft members average 3.2 books per month, well above the national average. The data suggests that access matters enormously: members with books already borrowed and sitting in their Active Loans are four times more likely to read that week. Keep your queue stocked. The best time to choose your next book is before you've finished your current one.`,
  },
  {
    id:3, title:'New Arrivals: May 2024 Edition', author:'Editorial Team', date:'May 2024',
    category:'New Arrivals', readTime:'3 min', coverPalette:4,
    excerpt:"This month's most anticipated releases — from debut fiction to groundbreaking nonfiction — are now available to borrow or buy.",
    body:`May has brought a particularly strong crop of new titles to Lexis Loft's catalogue. The month's standout is Quantum Echoes by Dr. Marcus Webb, a physicist-turned-novelist whose debut blends hard science with genuine emotional stakes — a rare combination that has already earned comparisons to Ted Chiang's early work.

We've also added Fatima Al-Rashid's beloved children's novel The Garden Between Worlds, now available in physical and eBook formats. For non-fiction readers, David Chen's Machine Learning with Python arrives at exactly the right moment: a practical, jargon-light guide for the AI-curious professional who wants to understand the technology shaping their world.

For those whose tastes run to the literary, Elena Ferreira's Midnight in Cascais completes a remarkable debut year. All May titles are available to borrow, reserve, or purchase from today. Staff reading guides will follow within the week.`,
  },
  {
    id:4, title:'An Interview with Sofia Carvalho', author:'Ricardo Alves', date:'March 2024',
    category:'Author Spotlight', readTime:'8 min', coverPalette:2,
    excerpt:'The author of "The Architecture of Memory" talks research, writing in two languages, and what\'s coming next.',
    body:`"I never intended to write the same novel twice," Sofia Carvalho tells us, settled into a quiet corner of the Lisbon café she has claimed as her writing retreat for the past decade. "And yet The Architecture of Memory grew from the same obsession I had twenty years ago: what do families carry across generations that they never name?"

Carvalho spent seven years on the novel, living between Lisbon, Rio de Janeiro, and London. The research took her into archives, family letters, and long conversations with historians of the Estado Novo period. The political, she insists, is always personal. Repression doesn't happen in the abstract — it happens at specific dinner tables, in specific silences.

Writing in two languages is, she says, not a burden but a gift. Portuguese holds things English cannot, and vice versa. The final manuscript was drafted in English and revised in Portuguese simultaneously, each version informing the other. As for what comes next: she smiles and says only that it will be shorter, set in the present, and probably in the Alentejo. Something is forming.`,
  },
  {
    id:5, title:'5 Audiobooks Perfect for Your Commute', author:'Staff Picks Team', date:'April 2024',
    category:'Recommendations', readTime:'4 min', coverPalette:5,
    excerpt:'Whether you\'re on the train, walking, or stuck in traffic, these audiobooks will make every journey feel too short.',
    body:`The best commute audiobooks share one quality that distinguishes them from page-turners: they're built from short, self-contained episodes of action or idea. You can pause at your stop without losing the thread. You can resume mid-thought. The best narrators know this and use sentence rhythm to guide attention through noise and distraction.

Our top picks for the season: Roots & Routes by Yusuf Adeyemi, narrated by the author himself — an intimacy that no professional narrator can replicate for a memoir this personal. Climate & Capital by Dr. Sarah Okonkwo, whose ideas are dense but whose narrator makes each chapter feel like a masterclass rather than a lecture. And Quantum Echoes by Marcus Webb, whose science-fiction narrative unfolds with the propulsive energy of a thriller, perfectly suited to a forty-minute commute.

For shorter journeys of fifteen minutes or less, we recommend poetry. Manuel Rodrigues's Songs of the River Tagus, read in both Portuguese and English, turns even a brief bus ride into something close to meditation. All five are available to borrow now — no waitlist.`,
  },
  {
    id:6, title:'Our Summer Reading Challenge is Back!', author:'Events Team', date:'May 2024',
    category:'Events', readTime:'2 min', coverPalette:9,
    excerpt:'Read 5 books between June and August, log them in your account, and win exclusive prizes. Register now!',
    body:`The Lexis Loft Summer Reading Challenge returns for its third year, and the prizes are better than ever. Read five books between 1 June and 31 August, log them in your account via the Reading Log section, and you'll be entered into our monthly prize draw — you don't have to wait until the end of summer to win.

This year's prize pool includes a €200 Lexis Loft credit, a curated box of twelve books selected by our editorial team, and an exclusive invitation to the Autumn Reading Festival in Lisbon: a weekend of author talks, panel discussions, and, of course, books. One grand prize is drawn at the end of August; three monthly prizes are drawn in June, July, and August respectively.

Registration is free for all members and requires no minimum tier. Log into your account dashboard, look for the "Summer Challenge" banner, and click Join. Questions? Email events@lexisloft.com or find us on the Contact page. Happy reading.`,
  },
];

const LOANS = [
  { id:1, book:BOOKS[0], borrowedDate:'May 10, 2024', dueDate:'May 24, 2024', daysLeft:3, format:'eBook',     canRenew:true },
  { id:2, book:BOOKS[4], borrowedDate:'May 14, 2024', dueDate:'May 28, 2024', daysLeft:7, format:'Audiobook', canRenew:true },
  { id:3, book:BOOKS[9], borrowedDate:'May 16, 2024', dueDate:'May 30, 2024', daysLeft:9, format:'eBook',     canRenew:false },
];

const HOLDS = [
  { id:1, book:BOOKS[2],  position:2, totalInQueue:5,  addedDate:'May 8, 2024',  estimatedWait:'1–2 weeks' },
  { id:2, book:BOOKS[11], position:1, totalInQueue:8,  addedDate:'May 15, 2024', estimatedWait:'Ready soon', ready:true },
  { id:3, book:BOOKS[6],  position:4, totalInQueue:12, addedDate:'April 28, 2024', estimatedWait:'3–4 weeks' },
];

const ORDER_HISTORY = [
  { id:'LXL-2024-0041', date:'May 12, 2024', items:[BOOKS[1], BOOKS[8]], total:33.98, currency:'EUR', status:'Delivered', payment:'Visa •••• 4242', delivery:'Digital – instant', invoiceReady:true },
  { id:'LXL-2024-0028', date:'April 5, 2024', items:[BOOKS[4]], total:19.99, currency:'EUR', status:'Delivered', payment:'PayPal', delivery:'Physical – 3–5 days', invoiceReady:true },
  { id:'LXL-2024-0015', date:'March 18, 2024', items:[BOOKS[3], BOOKS[10]], total:39.98, currency:'EUR', status:'Delivered', payment:'Visa •••• 4242', delivery:'Physical – 3–5 days', invoiceReady:true },
];

Object.assign(window, { BOOKS, COVER_PALETTES, REVIEWS, TESTIMONIALS, FAQ_DATA, BLOG_POSTS, LOANS, HOLDS, ORDER_HISTORY });
