// ── Lexis Loft · Bookland Edition · Book detail ─────────────────────────────
function BLBookDetailPage(props) {
  const { book, navigate, cart, addToCart, wishlist, onWish, onBorrow, onReserve, showToast } = props;
  const inCart = cart.some(b => b.id === book.id);
  const wished = wishlist.includes(book.id);
  const buyable = book.price != null;
  const reviews = REVIEWS.filter(r => r.bookId === book.id);
  let related = BOOKS.filter(b => b.genre === book.genre && b.id !== book.id);
  if (related.length < 4) related = related.concat(BOOKS.filter(b => b.id !== book.id && !related.includes(b)).slice(0, 4 - related.length));
  related = related.slice(0, 4);

  const availPill = book.availability === 'available'
    ? <BL.StatusPill tone="success" icon={<BLIcons.check width={13} />}>In Stock</BL.StatusPill>
    : book.availability === 'on-hold'
      ? <BL.StatusPill icon={<BLIcons.clock width={13} />}>Waitlist Open</BL.StatusPill>
      : <BL.StatusPill icon={<BLIcons.clock width={13} />}>Currently Unavailable</BL.StatusPill>;

  const borrowBtn = !book.lendable ? null
    : book.availability === 'available'
      ? <BL.Button variant="dark" icon={<BLIcons.book width={15} />} onClick={() => onBorrow(book, { page: 'book-detail', data: { book } })}>Borrow Book</BL.Button>
      : <BL.Button variant="dark" icon={<BLIcons.clock width={15} />} onClick={() => onReserve(book, { page: 'book-detail', data: { book } })}>Reserve Book</BL.Button>;

  return (
    <div>
      <BLSection style={{ padding: '48px 48px 80px' }}>
        <BL.Button variant="link" onClick={() => navigate('catalogue')} style={{ marginBottom: 36 }}>&laquo; Back to catalogue</BL.Button>

        <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <BL.BookCover
            title={book.title} author={book.author}
            palette={blPalette(book.coverPalette)} discount={blDiscount(book)}
            width={380} style={{ boxShadow: 'var(--shadow-card-hover)', flex: 'none' }}
          />

          <div style={{ flex: 1, minWidth: 420 }}>
            <div style={{ font: 'var(--type-caption)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>
              {book.genre} · {book.year}
            </div>
            <h1 style={{ font: 'var(--type-h1)', color: 'var(--text-heading)', margin: '0 0 10px' }}>{book.title}</h1>
            <div style={{ font: 'var(--type-body)', color: 'var(--text-body)', marginBottom: 16 }}>
              by <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>{book.author}</span>
            </div>
            <BL.Rating value={book.rating} score={book.rating.toFixed(1)} reviews={book.ratingCount.toLocaleString()} style={{ marginBottom: 22 }} />

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
              {availPill}
              {book.lendable && <BL.StatusPill icon={<BLIcons.book width={13} />}>Borrowable</BL.StatusPill>}
              {buyable && <BL.StatusPill icon={<BLIcons.zap width={13} />}>Free Shipping</BL.StatusPill>}
            </div>

            {buyable
              ? <BL.Price size="lg" value={blBookPrice(book)} oldValue={blBookOldPrice(book)} discount={blDiscount(book)} style={{ marginBottom: 24 }} />
              : <div style={{ font: 'var(--type-h3)', color: 'var(--text-heading)', marginBottom: 24 }}>Borrow only</div>}

            <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: '0 0 32px', maxWidth: 600 }}>{book.synopsis}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px 32px', maxWidth: 600, marginBottom: 36 }}>
              <BLMeta label="Publisher" value={book.publisher} />
              <BLMeta label="Year" value={book.year} />
              <BLMeta label="Pages" value={book.pages} />
              <BLMeta label="Language" value={book.language} />
              <BLMeta label="ISBN" value={book.isbn} />
              <BLMeta label="Formats" value={book.formats.join(', ')} />
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
              {buyable && <BL.QuantityStepper defaultValue={1} />}
              {buyable && (
                <BL.Button
                  variant={inCart ? 'quiet' : 'primary'}
                  icon={<BLIcons.cart width={15} />}
                  onClick={() => {
                    if (inCart) { navigate('cart'); return; }
                    addToCart(book);
                    showToast(`"${book.title}" added to cart.`);
                  }}>
                  {inCart ? 'Already in cart' : 'Add to cart'}
                </BL.Button>
              )}
              {borrowBtn}
              <BL.Button
                variant="quiet"
                aria-label="Save to wishlist"
                style={{ padding: '14px 16px', color: wished ? 'var(--bl-pink-500)' : 'var(--bl-indigo-700)' }}
                onClick={() => { onWish(book.id); showToast(wished ? 'Removed from your wishlist.' : 'Saved to your wishlist.'); }}>
                <BLIcons.heart width={17} />
              </BL.Button>
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', marginRight: 4 }}>Tags:</span>
              <BL.Chip kind="tag">{book.genre}</BL.Chip>
              {book.formats.map(f => <BL.Chip key={f} kind="muted">{f}</BL.Chip>)}
            </div>
          </div>
        </div>
      </BLSection>

      {/* ── Reviews ── */}
      <BLSection tint style={{ padding: '72px 48px' }}>
        <BL.SectionHeading eyebrow="From our readers" title="Reader Reviews" style={{ marginBottom: 40 }} />
        {reviews.length === 0 ? (
          <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0 }}>
            No reviews yet — borrow or buy this book and be the first to share your thoughts.
          </p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {reviews.map(r => (
              <div key={r.id} style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: '26px 24px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ width: 42, height: 42, borderRadius: '50%', flex: 'none', background: 'var(--bl-lavender-200)', color: 'var(--bl-indigo-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14 }}>{r.avatar}</span>
                  <span>
                    <span style={{ display: 'block', font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-heading)' }}>{r.user}</span>
                    <span style={{ display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{r.date}</span>
                  </span>
                </div>
                <BL.Rating value={r.rating} style={{ marginBottom: 12 }} />
                <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)', margin: 0 }}>{r.comment}</p>
              </div>
            ))}
          </div>
        )}
      </BLSection>

      {/* ── Author ── */}
      <BLSection style={{ padding: '72px 48px' }}>
        <BL.SectionHeading eyebrow="The writer" title="About the Author" style={{ marginBottom: 20 }} />
        <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 0, maxWidth: 720 }}>{book.authorBio}</p>
      </BLSection>

      {/* ── Related ── */}
      <BLSection tint>
        <BLSectionHeader eyebrow="Keep browsing" title={`More in ${book.genre}`} actionLabel="View catalogue" onAction={() => navigate('catalogue')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {related.map(b => <BLGridCard key={b.id} book={b} shared={props} width={270} />)}
        </div>
      </BLSection>
    </div>
  );
}

Object.assign(window, { BLBookDetailPage });
