// ── Lexis Loft · Bookland Edition · Account pages ───────────────────────────
function BLLoanRow({ loan, navigate, onRenew, onReturn }) {
  const urgent = loan.daysLeft <= 3;
  return (
    <div style={{ display: 'flex', gap: 24, padding: 24, background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', alignItems: 'center', flexWrap: 'wrap' }}>
      <div onClick={() => navigate('book-detail', { book: loan.book })} style={{ cursor: 'pointer', flex: 'none' }}>
        <BL.BookCover title={loan.book.title} palette={blPalette(loan.book.coverPalette)} width={84} />
      </div>
      <div style={{ flex: 1, minWidth: 220 }}>
        <h3 onClick={() => navigate('book-detail', { book: loan.book })}
            style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: '0 0 6px', cursor: 'pointer' }}>{loan.book.title}</h3>
        <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', marginBottom: 4 }}>{loan.format} · Borrowed {loan.borrowedDate}</div>
        <div style={{ font: 'var(--type-caption)', color: 'var(--text-body)' }}>Due {loan.dueDate}</div>
      </div>
      <BL.Chip kind={urgent ? 'promo' : 'value'} color="pink">{loan.daysLeft} days left</BL.Chip>
      <div style={{ display: 'flex', gap: 10 }}>
        <BL.Button variant="dark" size="sm" disabled={!loan.canRenew} onClick={onRenew}>Renew</BL.Button>
        <BL.Button variant="subtle" size="sm" onClick={onReturn}>Return</BL.Button>
      </div>
    </div>
  );
}

function BLAccountDashboard(props) {
  const { navigate, loans, holds, wishlist, setIsLoggedIn, showToast } = props;
  const tiles = [
    { icon: 'book',  value: loans.length,         label: 'Active Loans',   page: 'loans' },
    { icon: 'clock', value: holds.length,         label: 'Holds & Reservations', page: 'holds' },
    { icon: 'heart', value: wishlist.length,      label: 'Wishlist Titles', page: 'wishlist' },
    { icon: 'store', value: ORDER_HISTORY.length, label: 'Past Orders',     page: 'order-history' },
  ];
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 52, flexWrap: 'wrap' }}>
        <BL.SectionHeading eyebrow="My account" title="Welcome Back, Alexandra" lede="Your loans, holds, orders and reading life — all in one place." level={1} />
        <div style={{ display: 'flex', gap: 10, flex: 'none' }}>
          <BL.Button variant="outline" size="sm" onClick={() => navigate('settings')}>Account Settings</BL.Button>
          <BL.Button variant="subtle" size="sm" onClick={() => { setIsLoggedIn(false); navigate('home'); showToast('Signed out. See you soon!'); }}>Sign Out</BL.Button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', marginBottom: 64 }}>
        {tiles.map(t => {
          const Ic = BLIcons[t.icon];
          return (
            <div key={t.label} onClick={() => navigate(t.page)} style={{ cursor: 'pointer' }}>
              <BL.StatCard icon={<Ic width={30} />} value={t.value} label={t.label} />
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-heading)', margin: 0 }}>Active Loans</h3>
            <BL.Button variant="link" onClick={() => navigate('loans')} style={{ fontSize: 13 }}>View all &raquo;</BL.Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {props.loans.slice(0, 2).map(l => (
              <div key={l.id} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 16, background: 'var(--surface-tint)', borderRadius: 'var(--radius-md)' }}>
                <BL.BookCover title={l.book.title} palette={blPalette(l.book.coverPalette)} width={52} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-heading)' }}>{l.book.title}</div>
                  <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>Due {l.dueDate}</div>
                </div>
                <BL.Chip kind="value">{l.daysLeft} days</BL.Chip>
              </div>
            ))}
            {props.loans.length === 0 && <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0 }}>Nothing borrowed right now.</p>}
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-heading)', margin: 0 }}>Recent Orders</h3>
            <BL.Button variant="link" onClick={() => navigate('order-history')} style={{ fontSize: 13 }}>View all &raquo;</BL.Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {ORDER_HISTORY.slice(0, 2).map(o => (
              <div key={o.id} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 16, background: 'var(--surface-tint)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-heading)' }}>{o.id}</div>
                  <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{o.date} · {o.items.length} item{o.items.length > 1 ? 's' : ''}</div>
                </div>
                <span style={{ font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-heading)' }}>{blMoney(o.total)}</span>
                <BL.StatusPill tone="success" icon={<BLIcons.check width={12} />}>{o.status}</BL.StatusPill>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BLSection>
  );
}

function BLActiveLoansPage(props) {
  const { navigate, loans, setLoans, showToast } = props;
  const renew = id => {
    setLoans(prev => prev.map(l => l.id === id ? { ...l, daysLeft: l.daysLeft + 14, canRenew: false } : l));
    showToast('Renewed for 14 more days.');
  };
  const ret = id => {
    setLoans(prev => prev.filter(l => l.id !== id));
    showToast('Book returned — thanks for reading!');
  };
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading eyebrow="My account" title="Active Loans" lede="Renew once per loan, or return early whenever you finish." level={1} style={{ marginBottom: 44 }} />
      {loans.length === 0 ? (
        <BLEmpty title="No Active Loans" lede="Borrow any lendable book from the catalogue and it will appear here." actionLabel="Browse Catalogue" onAction={() => navigate('catalogue')} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {loans.map(l => <BLLoanRow key={l.id} loan={l} navigate={navigate} onRenew={() => renew(l.id)} onReturn={() => ret(l.id)} />)}
        </div>
      )}
    </BLSection>
  );
}

function BLHoldsPage(props) {
  const { navigate, holds, setHolds, onBorrow, showToast } = props;
  const cancel = id => {
    setHolds(prev => prev.filter(h => h.id !== id));
    showToast('Hold cancelled.');
  };
  const borrowNow = hold => {
    setHolds(prev => prev.filter(h => h.id !== hold.id));
    onBorrow(hold.book);
  };
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading eyebrow="My account" title="Holds & Reservations" lede="Your place in the queue, with estimated wait times." level={1} style={{ marginBottom: 44 }} />
      {holds.length === 0 ? (
        <BLEmpty icon={<BLIcons.clock width={28} />} title="No Holds Placed" lede="Reserve any book that's currently out on loan and track your queue spot here." actionLabel="Browse Catalogue" onAction={() => navigate('catalogue')} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {holds.map(h => (
            <div key={h.id} style={{ display: 'flex', gap: 24, padding: 24, background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', alignItems: 'center', flexWrap: 'wrap' }}>
              <div onClick={() => navigate('book-detail', { book: h.book })} style={{ cursor: 'pointer', flex: 'none' }}>
                <BL.BookCover title={h.book.title} palette={blPalette(h.book.coverPalette)} width={84} />
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <h3 onClick={() => navigate('book-detail', { book: h.book })}
                    style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: '0 0 6px', cursor: 'pointer' }}>{h.book.title}</h3>
                <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', marginBottom: 4 }}>Hold placed {h.addedDate}</div>
                <div style={{ font: 'var(--type-caption)', color: 'var(--text-body)' }}>Estimated wait: {h.estimatedWait}</div>
              </div>
              {h.ready
                ? <BL.StatusPill tone="success" icon={<BLIcons.check width={13} />}>Ready to Borrow</BL.StatusPill>
                : <BL.Chip kind="value">#{h.position} of {h.totalInQueue} in queue</BL.Chip>}
              <div style={{ display: 'flex', gap: 10 }}>
                {h.ready && <BL.Button size="sm" onClick={() => borrowNow(h)}>Borrow Now</BL.Button>}
                <BL.Button variant="subtle" size="sm" onClick={() => cancel(h.id)}>Cancel Hold</BL.Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </BLSection>
  );
}

function BLSettingsPage(props) {
  const { showToast, setIsLoggedIn, navigate } = props;
  const card = { background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: '32px 34px' };
  const prefRow = (label, hint, checked) => (
    <label key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
      <input type="checkbox" defaultChecked={checked} style={{ accentColor: 'var(--bl-indigo-700)', width: 16, height: 16, marginTop: 3, cursor: 'pointer' }} />
      <span>
        <span style={{ display: 'block', font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-heading)' }}>{label}</span>
        <span style={{ display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{hint}</span>
      </span>
    </label>
  );
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading eyebrow="My account" title="Account Settings" lede="Profile, notifications and privacy." level={1} style={{ marginBottom: 44 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 28, alignItems: 'start', maxWidth: 1024 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={card}>
            <h3 style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: '0 0 26px' }}>Profile</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <BL.Input variant="underline" label="First name" defaultValue="Alexandra" />
              <BL.Input variant="underline" label="Last name" defaultValue="Mitchell" />
              <BL.Input variant="underline" label="Email address" defaultValue="alexandra@lexisloft.com" style={{ gridColumn: '1 / -1' }} />
              <BL.Input variant="underline" label="Phone" defaultValue="+351 21 555 0123" style={{ gridColumn: '1 / -1' }} />
            </div>
            <BL.Button style={{ marginTop: 30 }} onClick={() => showToast('Profile saved.')}>Save Changes</BL.Button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={card}>
            <h3 style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: '0 0 22px' }}>Notifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {prefRow('Due-date reminders', 'Email me 3 days before a loan is due.', true)}
              {prefRow('Hold updates', 'Tell me when a reserved book is ready.', true)}
              {prefRow('Newsletter', 'Newest books updates, once a week.', false)}
            </div>
          </div>
          <div style={card}>
            <h3 style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: '0 0 22px' }}>Privacy</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <BL.Button variant="subtle" size="sm" onClick={() => showToast('Data export requested — we will email you a download link.')}>Request Data Export</BL.Button>
              <BL.Button variant="outline" size="sm" style={{ color: 'var(--bl-pink-500)', borderColor: 'var(--bl-pink-500)' }}
                onClick={() => { setIsLoggedIn(false); navigate('home'); showToast('Account deletion requested. Processed within 30 days (GDPR).'); }}>
                Request Account Deletion
              </BL.Button>
            </div>
          </div>
        </div>
      </div>
    </BLSection>
  );
}

Object.assign(window, { BLAccountDashboard, BLActiveLoansPage, BLHoldsPage, BLSettingsPage });
