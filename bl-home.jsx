// ── Lexis Loft · Bookland Edition · Homepage ────────────────────────────────
function BLHomePage(shared) {
  const { navigate, showToast } = shared;
  const onSale = BOOKS.filter(b => b.onSale).slice(0, 4);
  const arrivals = BOOKS.filter(b => b.newArrival).slice(0, 4);
  const bestsellers = BOOKS.filter(b => b.bestseller).slice(0, 3);
  const picks = BOOKS.filter(b => b.staffPick).slice(0, 4);
  const heroBooks = [BOOKS[0], BOOKS[1], BOOKS[11]];

  return (
    <div>
      {/* ── Hero ── */}
      <BLSection style={{ padding: '72px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 64, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 560 }}>
            <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--eyebrow-tracking)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 18 }}>Welcome to Lexis Loft</div>
            <h1 style={{ font: 'var(--type-display)', color: 'var(--text-heading)', margin: '0 0 18px' }}>
              Buy, Borrow & Share the Books You Love
            </h1>
            <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: '0 0 30px' }}>
              One catalogue for buying new releases, borrowing from the library, and lending your own shelf to our reading community.
            </p>
            <div style={{ maxWidth: 480, marginBottom: 26 }}>
              <BL.Input
                placeholder="Search books here"
                icon={<BLIcons.search color="var(--bl-indigo-700)" width={17} />}
                onKeyDown={e => e.key === 'Enter' && navigate('search', { query: e.target.value })}
              />
            </div>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginBottom: 26 }}>
              <BL.Button onClick={() => navigate('on-sale')}>Buy Books</BL.Button>
              <BL.Button variant="dark" onClick={() => navigate('catalogue')}>Borrow Books</BL.Button>
              <BL.Button variant="link" onClick={() => showToast('Community lending opens from your account — list your first book under My Account.')}>Lend a Book &raquo;</BL.Button>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <BL.Chip kind="promo">Get 20% Discount for today</BL.Chip>
              <BL.Chip kind="promo" color="pink">Back to school promotion</BL.Chip>
            </div>
          </div>

          <div style={{ position: 'relative', width: 460, height: 430, flex: 'none' }}>
            {/* concentric-circle decoration (homepage v2 motif) */}
            <svg width="460" height="430" viewBox="0 0 460 430" style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
              <circle cx="230" cy="215" r="120" fill="none" stroke="var(--bl-gray-200)" strokeWidth="1"></circle>
              <circle cx="230" cy="215" r="170" fill="none" stroke="var(--bl-gray-200)" strokeWidth="1"></circle>
              <circle cx="230" cy="215" r="212" fill="none" stroke="var(--bl-gray-100)" strokeWidth="1"></circle>
            </svg>
            <BL.BookCover title={heroBooks[0].title} author={heroBooks[0].author} palette={blPalette(heroBooks[0].coverPalette)} width={200}
              style={{ position: 'absolute', left: 0, top: 60, transform: 'rotate(-7deg)', boxShadow: 'var(--shadow-card-hover)' }} />
            <BL.BookCover title={heroBooks[1].title} author={heroBooks[1].author} palette={blPalette(heroBooks[1].coverPalette)} width={228} discount="30%"
              style={{ position: 'absolute', left: 122, top: 14, transform: 'rotate(2deg)', zIndex: 2, boxShadow: 'var(--shadow-card-hover)' }} />
            <BL.BookCover title={heroBooks[2].title} author={heroBooks[2].author} palette={blPalette(heroBooks[2].coverPalette)} width={192}
              style={{ position: 'absolute', right: 0, top: 80, transform: 'rotate(8deg)', boxShadow: 'var(--shadow-card-hover)' }} />
          </div>
        </div>
      </BLSection>

      {/* ── Value props ── */}
      <BLSection tint style={{ padding: '64px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <BL.ValueProp icon={<BLIcons.zap width={22} />} title="Quick Delivery">Physical orders ship in 24 hours; digital loans are instant.</BL.ValueProp>
          <BL.ValueProp icon={<BLIcons.shield width={22} />} title="Secure Payment">Cards and PayPal, protected end to end in EUR, GBP and USD.</BL.ValueProp>
          <BL.ValueProp icon={<BLIcons.thumbsUp width={22} />} title="Best Quality">Every community-lent book is checked and graded by our team.</BL.ValueProp>
          <BL.ValueProp icon={<BLIcons.refresh width={22} />} title="Easy Returns">14-day returns on physical books, free renewals on loans.</BL.ValueProp>
        </div>
      </BLSection>

      {/* ── Books on Sale ── */}
      <BLSection>
        <BLSectionHeader eyebrow="Back to school" title="Books on Sale" lede="Limited-time discounts for our student and reader community." actionLabel="View more" onAction={() => navigate('on-sale')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {onSale.map(b => <BLGridCard key={b.id} book={b} shared={shared} width={270} />)}
        </div>
      </BLSection>

      {/* ── New Arrivals ── */}
      <BLSection tint>
        <BLSectionHeader eyebrow="Just landed" title="New Arrivals" lede="This month's freshest additions to the Lexis Loft shelves." actionLabel="View more" onAction={() => navigate('new-arrivals')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {arrivals.map(b => <BLGridCard key={b.id} book={b} shared={shared} width={270} />)}
        </div>
      </BLSection>

      {/* ── Bestsellers (list rows) ── */}
      <BLSection>
        <BLSectionHeader eyebrow="Reader favourites" title="Bestsellers" lede="The most purchased and most borrowed books right now." actionLabel="View more" onAction={() => navigate('bestsellers')} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {bestsellers.map(b => <BLListRow key={b.id} book={b} shared={shared} />)}
        </div>
      </BLSection>

      {/* ── Stats band ── */}
      <BLSection tint style={{ padding: '72px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <BL.StatCard icon={<BLIcons.users width={30} />} value="125,663" label="Happy Readers" />
          <BL.StatCard icon={<BLIcons.book width={30} />} value="50,672+" label="Book Collections" />
          <BL.StatCard icon={<BLIcons.store width={30} />} value="1,562" label="Community Lenders" />
          <BL.StatCard icon={<BLIcons.feather width={30} />} value="457" label="Famous Writers" />
        </div>
      </BLSection>

      {/* ── Staff Picks ── */}
      <BLSection>
        <BLSectionHeader eyebrow="From our librarians" title="Staff Picks" lede="Hand-picked recommendations from the Lexis Loft team." actionLabel="View more" onAction={() => navigate('staff-picks')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {picks.map(b => <BLGridCard key={b.id} book={b} shared={shared} width={270} />)}
        </div>
      </BLSection>

      {/* ── Community lending CTA ── */}
      <BLSection tint style={{ padding: '80px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <BL.SectionHeading
            eyebrow="Community lending"
            title="Share Your Shelf, Earn Store Credit"
            lede="List the books you own, set your lending window, and earn credit toward your next purchase every time a neighbour borrows one."
          />
          <div style={{ display: 'flex', gap: 14, flex: 'none' }}>
            <BL.Button size="lg" onClick={() => showToast('Community lending opens from your account — list your first book under My Account.')}>Lend a Book</BL.Button>
            <BL.Button variant="outline" size="lg" onClick={() => navigate('faq')}>How It Works</BL.Button>
          </div>
        </div>
      </BLSection>

      {/* ── Testimonials ── */}
      <BLSection>
        <BL.SectionHeading align="center" eyebrow="Testimonials" title="Our Reader Community Loves Us" style={{ margin: '0 auto 48px' }} />
        <div style={{ display: 'flex', gap: 28, justifyContent: 'center', alignItems: 'stretch', flexWrap: 'wrap' }}>
          {TESTIMONIALS.map((t, i) => (
            <BL.TestimonialCard key={t.name} quote={t.text} name={t.name} role={t.role} stars={t.rating} active={i === 1} style={{ width: 340 }} />
          ))}
        </div>
      </BLSection>
    </div>
  );
}

Object.assign(window, { BLHomePage });
