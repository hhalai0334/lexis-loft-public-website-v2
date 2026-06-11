// ── Lexis Loft · Bookland Edition · Wishlist / Cart / Checkout / Orders ─────
function BLWishlistPage(props) {
  const { navigate, wishlist, onWish, showToast } = props;
  const books = BOOKS.filter(b => wishlist.includes(b.id));
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading eyebrow="Saved for later" title="My Wishlist" lede="Books you've hearted across the catalogue." level={1} style={{ marginBottom: 44 }} />
      {books.length === 0 ? (
        <BLEmpty icon={<BLIcons.heart width={28} />} title="Your Wishlist Is Empty" lede="Tap the heart on any book to keep it here for later." actionLabel="Browse Catalogue" onAction={() => navigate('catalogue')} />
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {books.map(b => (
            <div key={b.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <BLGridCard book={b} shared={props} width={270} />
              <BL.Button variant="quiet" size="sm" onClick={() => { onWish(b.id); showToast(`"${b.title}" removed from wishlist.`); }}>
                Remove from wishlist
              </BL.Button>
            </div>
          ))}
        </div>
      )}
    </BLSection>
  );
}

function BLCartPage(props) {
  const { navigate, cart, removeFromCart, showToast } = props;
  const subtotal = cart.reduce((s, b) => s + ((b.onSale && b.salePrice ? b.salePrice : b.price) || 0), 0);
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading eyebrow="Shopping summary" title="Your Cart" lede={`${cart.length} book${cart.length === 1 ? '' : 's'} ready for checkout.`} level={1} style={{ marginBottom: 44 }} />
      {cart.length === 0 ? (
        <BLEmpty icon={<BLIcons.cart width={28} />} title="Your Cart Is Empty" lede="Add books from the catalogue and they'll appear here." actionLabel="Browse Catalogue" onAction={() => navigate('catalogue')} />
      ) : (
        <div style={{ display: 'flex', gap: 36, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 460, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {cart.map(b => (
              <div key={b.id} style={{ display: 'flex', gap: 20, padding: 20, background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', alignItems: 'center' }}>
                <div onClick={() => navigate('book-detail', { book: b })} style={{ cursor: 'pointer', flex: 'none' }}>
                  <BL.BookCover title={b.title} palette={blPalette(b.coverPalette)} width={64} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 onClick={() => navigate('book-detail', { book: b })}
                      style={{ font: 'var(--type-h4)', fontSize: 16, color: 'var(--text-heading)', margin: '0 0 4px', cursor: 'pointer' }}>{b.title}</h3>
                  <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{b.author} · {b.genre}</div>
                </div>
                {blDiscount(b) && <BL.Chip kind="promo">{blDiscount(b)} OFF Discount</BL.Chip>}
                <BL.Price value={blBookPrice(b)} oldValue={blBookOldPrice(b)} />
                <BL.Button variant="subtle" size="sm" aria-label="Remove from cart"
                  onClick={() => { removeFromCart(b.id); showToast(`"${b.title}" removed from cart.`); }}>
                  Remove
                </BL.Button>
              </div>
            ))}
          </div>

          <aside style={{ width: 340, flex: 'none', background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: '28px 28px 30px' }}>
            <h3 style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: '0 0 24px' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>
              <span>Subtotal</span><span>{blMoney(subtotal)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 20, borderBottom: '1px dashed var(--bl-gray-200)', font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>
              <span>Shipping</span><span style={{ color: 'var(--bl-green-500)', fontWeight: 600 }}>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26 }}>
              <span style={{ font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-heading)' }}>Total</span>
              <BL.Price size="lg" value={blMoney(subtotal)} />
            </div>
            <BL.Button fullWidth size="lg" onClick={() => navigate('checkout')} style={{ marginBottom: 12 }}>Proceed to Checkout</BL.Button>
            <BL.Button fullWidth variant="subtle" onClick={() => navigate('catalogue')}>Continue Shopping</BL.Button>
          </aside>
        </div>
      )}
    </BLSection>
  );
}

function BLCheckoutPage(props) {
  const { navigate, cart, setCart, showToast } = props;
  const { useState } = React;
  const [method, setMethod] = useState('card');
  const subtotal = cart.reduce((s, b) => s + ((b.onSale && b.salePrice ? b.salePrice : b.price) || 0), 0);
  const card = { background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: '32px 34px' };
  const placeOrder = e => {
    e.preventDefault();
    setCart([]);
    navigate('order-confirmation');
    showToast('Order placed — thank you!');
  };
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading eyebrow="Almost there" title="Checkout" level={1} style={{ marginBottom: 36 }} />
      <BL.CheckoutStepper steps={['Shopping Summary', 'Checkout', 'Payment', 'Shipping']} current={1} style={{ marginBottom: 52, maxWidth: 880 }} />

      <form onSubmit={placeOrder} style={{ display: 'flex', gap: 36, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 480, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={card}>
            <h3 style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: '0 0 26px' }}>Shipping Details</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <BL.Input variant="underline" label="First name" placeholder="Alexandra" required />
              <BL.Input variant="underline" label="Last name" placeholder="Mitchell" required />
              <BL.Input variant="underline" label="Email address" type="email" placeholder="you@example.com" required style={{ gridColumn: '1 / -1' }} />
              <BL.Input variant="underline" label="Address" placeholder="Rua Garrett 73" required style={{ gridColumn: '1 / -1' }} />
              <BL.Input variant="underline" label="City" placeholder="Lisboa" required />
              <BL.Input variant="underline" label="Postal code" placeholder="1200-203" required />
            </div>
          </div>

          <div style={card}>
            <h3 style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: '0 0 26px' }}>Payment Method</h3>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 28 }}>
              <BL.PaymentMethodCard icon={<BLIcons.creditCard width={26} />} label="Credit Card" selected={method === 'card'} onSelect={() => setMethod('card')} />
              <BL.PaymentMethodCard icon={<BLIcons.wallet width={26} />} label="PayPal" selected={method === 'paypal'} onSelect={() => setMethod('paypal')} />
              <BL.PaymentMethodCard icon={<BLIcons.gift width={26} />} label="Gift Card" selected={method === 'gift'} onSelect={() => setMethod('gift')} />
            </div>
            {method === 'card' && (
              <div style={{ borderTop: '1px dashed var(--bl-gray-200)', paddingTop: 26, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 24 }}>
                <BL.Input variant="underline" label="Card number" placeholder="4242 4242 4242 4242" required />
                <BL.Input variant="underline" label="Expiry" placeholder="12/27" required />
                <BL.Input variant="underline" label="CVC" placeholder="123" required />
              </div>
            )}
            {method === 'paypal' && <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0, borderTop: '1px dashed var(--bl-gray-200)', paddingTop: 26 }}>You'll be redirected to PayPal to complete payment securely.</p>}
            {method === 'gift' && (
              <div style={{ borderTop: '1px dashed var(--bl-gray-200)', paddingTop: 26 }}>
                <BL.Input variant="underline" label="Gift card code" placeholder="LXL-XXXX-XXXX" required />
              </div>
            )}
          </div>
        </div>

        <aside style={{ width: 340, flex: 'none', background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: '28px 28px 30px' }}>
          <h3 style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: '0 0 22px' }}>Your Order</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 22 }}>
            {cart.map(b => (
              <div key={b.id} style={{ display: 'flex', justifyContent: 'space-between', gap: 14, font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.title}</span>
                <span style={{ flex: 'none', fontWeight: 600, color: 'var(--text-heading)' }}>{blBookPrice(b)}</span>
              </div>
            ))}
            {cart.length === 0 && <span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>Your cart is empty.</span>}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, paddingTop: 20, borderTop: '1px dashed var(--bl-gray-200)', font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>
            <span>Shipping</span><span style={{ color: 'var(--bl-green-500)', fontWeight: 600 }}>Free</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26 }}>
            <span style={{ font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-heading)' }}>Total</span>
            <BL.Price size="lg" value={blMoney(subtotal)} />
          </div>
          <BL.Button type="submit" fullWidth size="lg" disabled={cart.length === 0}>Place Order</BL.Button>
        </aside>
      </form>
    </BLSection>
  );
}

function BLOrderConfirmationPage(props) {
  const { navigate } = props;
  return (
    <BLSection style={{ padding: '96px 48px 120px' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 84, height: 84, borderRadius: '50%', background: 'var(--bl-green-500)', marginBottom: 28 }}>
          <BLIcons.check color="#fff" width={36} />
        </span>
        <h1 style={{ font: 'var(--type-h2)', color: 'var(--text-heading)', margin: '0 0 14px' }}>Thank You for Your Order!</h1>
        <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: '0 0 26px' }}>
          Order <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>#LXL-2026-0057</span> is confirmed.
          A receipt is on its way to your inbox, and digital titles are ready in your library right now.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 38 }}>
          <BL.Chip kind="value">Digital — instant delivery</BL.Chip>
          <BL.Chip kind="value">Physical — 3–5 days</BL.Chip>
        </div>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <BL.Button variant="dark" onClick={() => navigate('order-history')}>View Order History</BL.Button>
          <BL.Button onClick={() => navigate('home')}>Back to Home</BL.Button>
        </div>
      </div>
    </BLSection>
  );
}

function BLOrderHistoryPage(props) {
  const { navigate, showToast } = props;
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading eyebrow="My account" title="Order History" lede="Every purchase on your account, with invoices." level={1} style={{ marginBottom: 44 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 920 }}>
        {ORDER_HISTORY.map(o => (
          <div key={o.id} style={{ background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: '26px 30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
              <h3 style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: 0 }}>{o.id}</h3>
              <BL.StatusPill tone="success" icon={<BLIcons.check width={12} />}>{o.status}</BL.StatusPill>
            </div>
            <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', marginBottom: 20 }}>
              <BLMeta label="Date" value={o.date} />
              <BLMeta label="Payment" value={o.payment} />
              <BLMeta label="Delivery" value={o.delivery} />
              <BLMeta label="Total" value={blMoney(o.total)} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: 12 }}>
                {o.items.map(b => (
                  <div key={b.id} onClick={() => navigate('book-detail', { book: b })} style={{ cursor: 'pointer' }}>
                    <BL.BookCover title={b.title} palette={blPalette(b.coverPalette)} width={56} />
                  </div>
                ))}
              </div>
              <BL.Button variant="link" onClick={() => showToast('Invoice downloaded.')} style={{ fontSize: 13 }}>Download Invoice &raquo;</BL.Button>
            </div>
          </div>
        ))}
      </div>
    </BLSection>
  );
}

Object.assign(window, { BLWishlistPage, BLCartPage, BLCheckoutPage, BLOrderConfirmationPage, BLOrderHistoryPage });
