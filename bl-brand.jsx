// ── Lexis Loft brand chrome ──────────────────────────────────────────────────
// Local fork of the design system's Logo / Header / Footer with the Lexis Loft
// wordmark and site copy. Structure, tokens and styling follow the DS exactly.

function LLLogo({ size = 'md', tagline = true, onDark = false, style }) {
  const s = size === 'sm' ? 0.8 : size === 'lg' ? 1.25 : 1;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 * s, ...style }}>
      <svg width={40 * s} height={36 * s} viewBox="0 0 44 40" fill="none">
        <path d="M21 6.5C17.5 3.6 12.6 2.4 7.2 2.9c-1.5.1-2.7 1.4-2.7 2.9v24.4c0 1.7 1.5 3 3.2 2.9 4.6-.3 9.6.8 13.3 3.4V6.5Z" fill="var(--bl-orange-500)"></path>
        <path d="M23 6.5c3.5-2.9 8.4-4.1 13.8-3.6 1.5.1 2.7 1.4 2.7 2.9v24.4c0 1.7-1.5 3-3.2 2.9-4.6-.3-9.6.8-13.3 3.4V6.5Z" fill="var(--bl-orange-400)"></path>
        <path d="M22 7v29" stroke="#fff" strokeWidth="1.6"></path>
      </svg>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 * s }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 24 * s, lineHeight: 1 }}>
          <span style={{ color: onDark ? '#fff' : 'var(--bl-ink-900)' }}>Lexis</span>
          <span style={{ color: 'var(--bl-orange-500)' }}>Loft</span>
        </span>
        {tagline && (
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 400, fontSize: 8.5 * s, letterSpacing: '0.18em', textTransform: 'uppercase', color: onDark ? 'rgba(255,255,255,0.75)' : 'var(--text-muted)' }}>
            Library &amp; Book Store
          </span>
        )}
      </span>
    </span>
  );
}

function LLBadged({ icon, count, label, onClick }) {
  return (
    <button onClick={onClick} aria-label={label}
      style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'inline-flex' }}>
      {icon}
      {count > 0 && (
        <span style={{ position: 'absolute', top: -2, right: -4, minWidth: 18, height: 18, padding: '0 4px', borderRadius: 9,
          background: 'var(--accent-badge)', color: '#fff', fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {count}
        </span>
      )}
    </button>
  );
}

const LLChevron = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--bl-gray-400)" strokeWidth="2" strokeLinecap="round">
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

function LLHeader({
  wishlistCount = 0, cartCount = 0,
  userName = 'Guest', userEmail = '',
  onLogoClick = () => {}, onSearch = () => {}, onCartClick = () => {}, onWishlistClick = () => {},
  menuLabel = 'Menus', onMenuClick = () => {},
  style,
}) {
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: 32, height: 'var(--header-h)', padding: '0 48px', background: 'var(--surface-page)', ...style }}>
      <a onClick={onLogoClick} style={{ cursor: 'pointer', flex: 'none' }}><LLLogo /></a>
      <div style={{ flex: 1, maxWidth: 640, display: 'flex', alignItems: 'center', background: 'var(--surface-tint)', borderRadius: 'var(--radius-md)', padding: '4px 4px 4px 0' }}>
        <button onClick={onMenuClick} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', background: 'transparent', cursor: 'pointer',
          padding: '12px 20px', fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--text-heading)',
          borderRight: 'var(--border-hairline)' }}>
          {menuLabel} <LLChevron />
        </button>
        <BL.Input
          placeholder="Search books here"
          icon={<BLIcons.search color="var(--bl-indigo-700)" width={17} />}
          style={{ background: 'transparent', padding: '10px 16px' }}
          onKeyDown={e => e.key === 'Enter' && onSearch(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginLeft: 'auto', flex: 'none' }}>
        <LLBadged icon={<BLIcons.heart color="var(--bl-ink-900)" width={22} />} count={wishlistCount} label="Wishlist" onClick={onWishlistClick} />
        <LLBadged icon={<BLIcons.cart color="var(--bl-ink-900)" width={22} />} count={cartCount} label="Cart" onClick={onCartClick} />
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginLeft: 10 }}>
          <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'linear-gradient(140deg, var(--bl-indigo-600), var(--bl-ink-900))', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 16 }}>
            {userName.charAt(0)}
          </span>
          <span>
            <span style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--text-heading)' }}>{userName}</span>
            <span style={{ display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{userEmail}</span>
          </span>
          <LLChevron />
        </span>
      </div>
    </header>
  );
}

const LL_FOOTER_CATEGORIES = [
  ['Architecture', 'Art', 'Action', 'Biography & Autobiography', 'Body, Mind & Spirit'],
  ['Business & Economics', 'Children Fiction', 'Children Non-Fiction', 'Comics & Graphic Novels', 'Cooking'],
  ['Crafts & Hobbies', 'Design', 'Drama', 'Education', 'Family & Relationships'],
];
const LL_SOCIALS = [
  { label: 'Facebook', color: '#1877f2', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'YouTube', color: '#ff0000', d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17 M10 15l5-3-5-3z' },
  { label: 'Twitter', color: '#1da1f2', d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
  { label: 'LinkedIn', color: '#0a66c2', d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M6 9H2v12h4z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { label: 'Instagram', color: '#e4405f', d: 'M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z M17.5 6.5h.01' },
];

function LLFooter({ assetsBase = '.', onSubscribe = () => {}, style }) {
  return (
    <footer style={{ background: 'var(--surface-page)', ...style }}>
      <div style={{ background: `var(--bl-plum-overlay) url(${assetsBase}/assets/newsletter-band.png) center / cover`, backgroundBlendMode: 'multiply', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <h2 style={{ font: 'var(--type-h2)', color: '#fff', margin: 0, maxWidth: 460 }}>Subscribe our newsletter for newest books updates</h2>
          <form onSubmit={e => { e.preventDefault(); onSubscribe(); }}
            style={{ display: 'flex', flex: 1, minWidth: 380, maxWidth: 620, background: '#fff', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <BL.Input variant="newsletter" placeholder="Type your email here" style={{ borderRadius: 0, flex: 1 }} />
            <BL.Button size="lg" style={{ borderRadius: 0, letterSpacing: '0.06em' }}>SUBSCRIBE</BL.Button>
          </form>
        </div>
      </div>

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 48px 0' }}>
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--text-heading)', marginBottom: 28 }}>+ Books categories</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px 32px', marginBottom: 56 }}>
          {LL_FOOTER_CATEGORIES.map((col, ci) => (
            <ul key={ci} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {col.map(c => (
                <li key={c}>
                  <a href="#" onClick={e => e.preventDefault()} style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)', textDecoration: 'none' }}>{c}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <LLLogo />
        <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)', maxWidth: 420, margin: '20px 0 28px' }}>
          Lexis Loft is a modern library and book store. Buy new releases, borrow from our collection, and lend your own shelf to a community of 125,000+ readers.
        </p>
        <div style={{ display: 'flex', gap: 22, paddingBottom: 40 }}>
          {LL_SOCIALS.map(s => (
            <a key={s.label} href="#" aria-label={s.label} onClick={e => e.preventDefault()} style={{ display: 'inline-flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={s.d}></path>
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div style={{ borderTop: 'var(--border-hairline)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '22px 48px', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', font: 'var(--type-caption)', color: 'var(--text-body)' }}>
          <span>Lexis Loft — Library &amp; Book Store</span>
          <span>© 2026 All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { LLLogo, LLHeader, LLFooter });
