// ── Lexis Loft · Bookland Edition · shared helpers ──────────────────────────
// Built strictly on the Bookland Design System bundle.
const BL = window.BooklandDesignSystem_962317;

const BL_PALETTES = ['navy', 'forest', 'yellow', 'plum', 'charcoal', 'cream'];
const blPalette = i => BL_PALETTES[(i ?? 0) % BL_PALETTES.length];
const blMoney = v => (v == null ? null : '$' + v.toFixed(2).replace('.', ','));
const blBookPrice = b => (b.onSale && b.salePrice ? blMoney(b.salePrice) : blMoney(b.price));
const blBookOldPrice = b => (b.onSale && b.salePrice ? blMoney(b.price) : null);
const blDiscount = b => (b.onSale && b.salePrice ? Math.round((1 - b.salePrice / b.price) * 100) + '%' : null);
const blExcerpt = (t, n = 96) => (t && t.length > n ? t.slice(0, n).trimEnd() + '…' : t);

// 2px-stroke line icons (Lucide geometry, inlined — see DS readme)
const blSvg = (paths, size = 18) => ({ color = 'currentColor', width = size } = {}) => (
  <svg width={width} height={width} viewBox="0 0 24 24" fill="none" stroke={color}
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
       dangerouslySetInnerHTML={{ __html: paths }}></svg>
);
const BLIcons = {
  heart:  blSvg('<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'),
  cart:   blSvg('<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>'),
  search: blSvg('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),
  zap:    blSvg('<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'),
  shield: blSvg('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'),
  thumbsUp: blSvg('<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>'),
  star:   blSvg('<path d="M12 2l2.9 6.26 6.6.94-4.75 4.4 1.15 6.55L12 16.9l-5.9 3.25 1.15-6.55L2.5 9.2l6.6-.94L12 2z"/>'),
  users:  blSvg('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
  book:   blSvg('<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>'),
  store:  blSvg('<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/>'),
  feather: blSvg('<path d="M12.67 19a2 2 0 0 0 1.42-.59l4.32-4.32A8.5 8.5 0 0 0 12 2a8.5 8.5 0 0 0-8.41 9.59l-.18.18a2 2 0 0 0 0 2.82L8 19.18a2 2 0 0 0 1.41.59z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>'),
  check:  blSvg('<path d="M20 6 9 17l-5-5"/>'),
  mapPin: blSvg('<path d="M20 10c0 4.99-5.54 10.19-7.4 11.79a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'),
  phone:  blSvg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),
  mail:   blSvg('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
  creditCard: blSvg('<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>'),
  wallet: blSvg('<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>'),
  gift:   blSvg('<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C9 3 11 5 12 8c1-3 3-5 4.5-5a2.5 2.5 0 0 1 0 5"/>'),
  clock:  blSvg('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
  refresh: blSvg('<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>'),
};

// ── Layout primitives ────────────────────────────────────────────────────────
function BLSection({ tint = false, children, style }) {
  return (
    <section style={{ background: tint ? 'var(--surface-tint)' : 'var(--surface-page)', padding: '88px 48px', ...style }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function BLToast({ msg, onDone }) {
  React.useEffect(() => { const t = setTimeout(onDone, 2800); return () => clearTimeout(t); }, [msg]);
  return (
    <div style={{ position: 'fixed', bottom: 64, left: '50%', transform: 'translateX(-50%)', zIndex: 400,
      background: 'var(--bl-ink-900)', color: '#fff', font: 'var(--type-label)', fontFamily: 'var(--font-ui)',
      padding: '14px 24px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-card-hover)',
      maxWidth: 480, textAlign: 'center' }}>
      {msg}
    </div>
  );
}

function BLNavStrip({ navigate, page, isLoggedIn }) {
  const links = [
    ['home', 'Home'], ['catalogue', 'Catalogue'], ['new-arrivals', 'New Arrivals'],
    ['bestsellers', 'Bestsellers'], ['staff-picks', 'Staff Picks'], ['on-sale', 'On Sale'],
    ['blog', 'Blog'], ['faq', 'FAQ'], ['contact', 'Contact'],
  ];
  const account = isLoggedIn
    ? [['account', 'My Account'], ['loans', 'Loans'], ['holds', 'Holds'], ['wishlist', 'Wishlist']]
    : [['wishlist', 'Wishlist'], ['login', 'Sign In'], ['register', 'Join Free']];
  const pill = active => ({
    border: 'none', cursor: 'pointer', fontFamily: 'var(--font-ui)',
    background: active ? 'var(--bl-lavender-100)' : 'transparent',
    color: active ? 'var(--bl-indigo-700)' : 'var(--bl-gray-500)',
    fontSize: 14, fontWeight: active ? 600 : 500, lineHeight: 1.4,
    padding: '9px 14px', borderRadius: 'var(--radius-md)', whiteSpace: 'nowrap',
    transition: 'background var(--duration-fast) var(--ease-out)',
  });
  return (
    <nav style={{ borderTop: 'var(--border-hairline)', borderBottom: 'var(--border-hairline)', background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 1276, margin: '0 auto', padding: '0 48px', display: 'flex', gap: 4, alignItems: 'center', height: 56, overflowX: 'auto' }}>
        {links.map(([id, label]) => (
          <button key={id} onClick={() => navigate(id)} style={pill(page === id)}>{label}</button>
        ))}
        <span style={{ marginLeft: 'auto' }}></span>
        {account.map(([id, label]) => (
          <button key={id} onClick={() => navigate(id)} style={pill(page === id)}>{label}</button>
        ))}
      </div>
    </nav>
  );
}

// ── Book renderers (DS components wired to Lexis Loft data + flows) ─────────
function BLGridCard({ book, shared, width = 270 }) {
  const inCart = shared.cart.some(b => b.id === book.id);
  const buyable = book.price != null;
  return (
    <div onClick={() => shared.navigate('book-detail', { book })} style={{ cursor: 'pointer' }}>
      <BL.BookCard
        title={book.title}
        author={book.author}
        genres={[book.genre]}
        excerpt={blExcerpt(book.synopsis)}
        price={buyable ? blBookPrice(book) : 'Borrow only'}
        oldPrice={blBookOldPrice(book)}
        cover={{ palette: blPalette(book.coverPalette), discount: blDiscount(book) }}
        inCart={inCart}
        onAddToCart={e => {
          e.stopPropagation();
          if (!buyable) { shared.showToast('This title is available to borrow only.'); return; }
          if (inCart) { shared.navigate('cart'); return; }
          shared.addToCart(book);
          shared.showToast(`"${book.title}" added to cart.`);
        }}
        width={width}
      />
    </div>
  );
}

function BLListRow({ book, shared }) {
  const inCart = shared.cart.some(b => b.id === book.id);
  const buyable = book.price != null;
  const promos = [];
  if (blDiscount(book)) promos.push({ label: `${blDiscount(book)} OFF Discount`, color: 'orange' });
  if (book.lendable) promos.push({ label: 'Available to borrow', color: 'pink' });
  if (!buyable) promos.push({ label: 'Borrow only', kind: 'muted' });
  return (
    <div onClick={() => shared.navigate('book-detail', { book })} style={{ cursor: 'pointer' }}>
      <BL.BookListItem
        title={book.title}
        author={book.author}
        publisher={book.publisher}
        year={String(book.year)}
        categories={`${book.genre} · ${book.language}`}
        excerpt={blExcerpt(book.synopsis, 150)}
        price={buyable ? blBookPrice(book) : 'Borrow only'}
        oldPrice={blBookOldPrice(book)}
        rating={book.rating}
        reviews={book.ratingCount}
        promos={promos}
        cover={{ palette: blPalette(book.coverPalette) }}
        inCart={inCart}
        onAddToCart={e => {
          e.stopPropagation();
          if (!buyable) { shared.showToast('This title is available to borrow only.'); return; }
          if (inCart) { shared.navigate('cart'); return; }
          shared.addToCart(book);
          shared.showToast(`"${book.title}" added to cart.`);
        }}
      />
    </div>
  );
}

function BLEmpty({ icon, title, lede, actionLabel, onAction }) {
  return (
    <div style={{ textAlign: 'center', padding: '72px 24px' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 72, height: 72,
        borderRadius: '50%', background: 'var(--bl-lavender-100)', color: 'var(--bl-indigo-700)', marginBottom: 22 }}>
        {icon || <BLIcons.book width={28} />}
      </span>
      <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-heading)', margin: '0 0 10px' }}>{title}</h3>
      {lede && <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: '0 0 26px' }}>{lede}</p>}
      {actionLabel && <BL.Button onClick={onAction}>{actionLabel}</BL.Button>}
    </div>
  );
}

function BLMeta({ label, value }) {
  return (
    <div>
      <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{label}</div>
      <div style={{ font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-heading)' }}>{value}</div>
    </div>
  );
}

function BLSectionHeader({ eyebrow, title, lede, actionLabel, onAction }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 44 }}>
      <BL.SectionHeading eyebrow={eyebrow} title={title} lede={lede} />
      {actionLabel && <BL.Button variant="link" onClick={onAction} style={{ flex: 'none', marginBottom: 6 }}>{actionLabel} &raquo;</BL.Button>}
    </div>
  );
}

Object.assign(window, {
  BL, BLIcons, blPalette, blMoney, blBookPrice, blBookOldPrice, blDiscount, blExcerpt,
  BLSection, BLToast, BLNavStrip, BLGridCard, BLListRow, BLEmpty, BLMeta, BLSectionHeader,
});
