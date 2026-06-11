// ── Lexis Loft · Bookland Edition · Catalogue ───────────────────────────────
const BL_PRESET_COPY = {
  all:        ['Full catalogue', 'Browse Every Title', 'Buy, borrow and reserve from the complete Lexis Loft collection.'],
  newArrival: ['Just landed', 'New Arrivals', "This month's freshest additions to the shelves."],
  bestseller: ['Reader favourites', 'Bestsellers', 'The most purchased and most borrowed books right now.'],
  staffPick:  ['From our librarians', 'Staff Picks', 'Hand-picked recommendations from the Lexis Loft team.'],
  onSale:     ['Back to school', 'Books on Sale', 'Limited-time discounts for our reading community.'],
  search:     ['Search results', 'Search Results', 'Everything in the catalogue matching your search.'],
};

const BLGridGlyph = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect>
    <rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect>
  </svg>
);
const BLListGlyph = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path>
    <path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path>
  </svg>
);

function BLCataloguePage(props) {
  const { preset = 'all', query, showToast } = props;
  const { useState, useMemo, useEffect } = React;
  const [view, setView] = useState('grid');
  const [search, setSearch] = useState(query || '');
  const [cats, setCats] = useState([]);
  const [priceRange, setPriceRange] = useState(null);
  const [sort, setSort] = useState('popular');
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => { setSearch(query || ''); }, [query, preset]);
  useEffect(() => { setPageNum(1); }, [preset, search, cats, priceRange, view, sort]);

  const GENRES = [...new Set(BOOKS.map(b => b.genre))];
  const [eyebrow, title, lede] = BL_PRESET_COPY[preset] || BL_PRESET_COPY.all;

  const filtered = useMemo(() => {
    let list = BOOKS.filter(b => (preset === 'all' || preset === 'search') ? true : b[preset]);
    const q = search.trim().toLowerCase();
    if (q) list = list.filter(b => `${b.title} ${b.author} ${b.genre}`.toLowerCase().includes(q));
    if (cats.length) list = list.filter(b => cats.includes(b.genre));
    if (priceRange) list = list.filter(b => {
      const p = b.onSale && b.salePrice ? b.salePrice : b.price;
      return p != null && p >= priceRange[0] && p <= priceRange[1];
    });
    if (sort === 'price') return [...list].sort((a, b) => ((a.onSale && a.salePrice ? a.salePrice : a.price) ?? 999) - ((b.onSale && b.salePrice ? b.salePrice : b.price) ?? 999));
    if (sort === 'newest') return [...list].sort((a, b) => b.year - a.year);
    return [...list].sort((a, b) => b.ratingCount - a.ratingCount);
  }, [preset, search, cats, priceRange, sort]);

  const perPage = view === 'grid' ? 9 : 6;
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const slice = filtered.slice((pageNum - 1) * perPage, pageNum * perPage);

  const toggleCat = g => setCats(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);

  const toggleBtn = active => ({
    width: 42, height: 42, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer',
    background: active ? 'var(--action-dark)' : 'var(--bl-lavender-100)',
    color: active ? '#fff' : 'var(--bl-indigo-700)',
    transition: 'background var(--duration-fast) var(--ease-out)',
  });

  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 44, flexWrap: 'wrap' }}>
        <BL.SectionHeading eyebrow={eyebrow} title={title} lede={lede} level={1} />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flex: 'none' }}>
          <select value={sort} onChange={e => setSort(e.target.value)} style={{
            fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 500, color: 'var(--text-heading)',
            background: 'var(--surface-tint)', border: 'none', borderRadius: 'var(--radius-md)',
            padding: '12px 14px', cursor: 'pointer', outline: 'none' }}>
            <option value="popular">Sort: Most Popular</option>
            <option value="newest">Sort: Newest</option>
            <option value="price">Sort: Price Low to High</option>
          </select>
          <button aria-label="Grid view" style={toggleBtn(view === 'grid')} onClick={() => setView('grid')}><BLGridGlyph /></button>
          <button aria-label="List view" style={toggleBtn(view === 'list')} onClick={() => setView('list')}><BLListGlyph /></button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 36, alignItems: 'flex-start' }}>
        {/* ── Sidebar ── */}
        <aside style={{ width: 280, flex: 'none', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: '20px 20px 24px' }}>
            <div style={{ font: 'var(--type-h4)', fontSize: 16, color: 'var(--text-heading)', marginBottom: 18 }}>Search</div>
            <BL.Input
              placeholder="Search books here"
              icon={<BLIcons.search color="var(--bl-indigo-700)" width={16} />}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div style={{ background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-md)', padding: '20px 20px 24px' }}>
            <div style={{ font: 'var(--type-h4)', fontSize: 16, color: 'var(--text-heading)', marginBottom: 18 }}>Categories</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {GENRES.map(g => (
                <label key={g} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', font: 'var(--type-body-sm)', color: cats.includes(g) ? 'var(--text-heading)' : 'var(--text-body)' }}>
                  <input type="checkbox" checked={cats.includes(g)} onChange={() => toggleCat(g)} style={{ accentColor: 'var(--bl-indigo-700)', width: 15, height: 15, cursor: 'pointer' }} />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <BL.PriceRangeFilter
            min={0} max={50} low={5} high={45}
            onRefine={([lo, hi]) => { setPriceRange([lo, hi]); showToast(`Showing books between $${lo} and $${hi}.`); }}
            onReset={() => setPriceRange(null)}
            style={{ width: 280 }}
          />
        </aside>

        {/* ── Results ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', marginBottom: 20 }}>
            Showing {slice.length} of {filtered.length} books
          </div>

          {slice.length === 0 ? (
            <BLEmpty title="No Books Found" lede="Try a different search, or reset your filters." actionLabel="Reset Filters"
              onAction={() => { setSearch(''); setCats([]); setPriceRange(null); }} />
          ) : view === 'grid' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 272px))', gap: 24, justifyContent: 'space-between' }}>
              {slice.map(b => <BLGridCard key={b.id} book={b} shared={props} width={272} />)}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {slice.map(b => <BLListRow key={b.id} book={b} shared={props} />)}
            </div>
          )}

          {pages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
              <BL.Pagination pages={pages} current={pageNum} onChange={p => { setPageNum(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
            </div>
          )}
        </div>
      </div>
    </BLSection>
  );
}

Object.assign(window, { BLCataloguePage });
