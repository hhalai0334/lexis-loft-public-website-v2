// ── Lexis Loft · Bookland Edition · FAQ / Contact / Blog ────────────────────
const BL_BLOG_GRADS = [
  ['linear-gradient(160deg,#241d56,#14102f)', '#e8e3d2'],
  ['linear-gradient(160deg,#1e4d3b,#0e2a1f)', '#f2ead8'],
  ['linear-gradient(160deg,#f4d343,#e3b92e)', '#221d10'],
  ['linear-gradient(160deg,#4d3360,#271433)', '#f0e4ef'],
  ['linear-gradient(160deg,#33323b,#131217)', '#f3f1ea'],
  ['linear-gradient(160deg,#f4ecdc,#e4d6bc)', '#3a2c18'],
];
const blBlogGrad = i => BL_BLOG_GRADS[(i ?? 0) % BL_BLOG_GRADS.length];

function BLFAQPage(props) {
  const { navigate } = props;
  const { useState } = React;
  const [open, setOpen] = useState('Borrowing-0');
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading align="center" eyebrow="Help centre" title="Frequently Asked Questions" lede="Everything about borrowing, buying, holds and your account." level={1} style={{ margin: '0 auto 56px' }} />
      <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 44 }}>
        {FAQ_DATA.map(cat => (
          <div key={cat.category}>
            <h3 style={{ font: 'var(--type-h3)', color: 'var(--text-heading)', margin: '0 0 20px' }}>{cat.category}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {cat.questions.map((q, i) => {
                const id = `${cat.category}-${i}`;
                const isOpen = open === id;
                return (
                  <div key={id} style={{ border: 'var(--border-hairline)', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', boxShadow: isOpen ? 'var(--shadow-card)' : 'none', transition: 'box-shadow var(--duration-base) var(--ease-out)' }}>
                    <button onClick={() => setOpen(isOpen ? null : id)} style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                      padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                      fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 600, color: 'var(--text-heading)' }}>
                      {q.q}
                      <span style={{ flex: 'none', color: 'var(--bl-orange-500)', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform var(--duration-fast) var(--ease-out)', fontSize: 20, fontWeight: 400, lineHeight: 1 }}>+</span>
                    </button>
                    {isOpen && (
                      <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)', margin: 0, padding: '0 22px 20px' }}>{q.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 56 }}>
        <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: '0 0 18px' }}>Still need help?</p>
        <BL.Button onClick={() => navigate('contact')}>Get in Touch With Us</BL.Button>
      </div>
    </BLSection>
  );
}

function BLContactPage(props) {
  const { showToast } = props;
  const infoRow = (Icon, label, value) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 12, background: 'var(--bl-peach-100)', color: 'var(--bl-orange-500)', flex: 'none' }}>
        <Icon width={20} />
      </span>
      <span>
        <span style={{ display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
        <span style={{ display: 'block', font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-heading)' }}>{value}</span>
      </span>
    </div>
  );
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading eyebrow="Contact" title="Get in Touch With Us" lede="Questions about an order, a loan, or lending your own books — we reply within one working day." level={1} style={{ marginBottom: 52 }} />
      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <form
          onSubmit={e => { e.preventDefault(); showToast('Message sent — we will reply within one working day.'); }}
          style={{ flex: 1, minWidth: 440, background: 'var(--surface-card)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-lg)', padding: '34px 36px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26 }}>
            <BL.Input variant="underline" label="First name" placeholder="Alexandra" required />
            <BL.Input variant="underline" label="Last name" placeholder="Mitchell" required />
            <BL.Input variant="underline" label="Email address" type="email" placeholder="you@example.com" required style={{ gridColumn: '1 / -1' }} />
            <BL.Input variant="underline" label="Subject" placeholder="How can we help?" required style={{ gridColumn: '1 / -1' }} />
            <label style={{ display: 'block', gridColumn: '1 / -1' }}>
              <span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 10 }}>Message</span>
              <textarea rows={5} placeholder="Tell us a little more…" required style={{
                width: '100%', fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--text-heading)', outline: 'none',
                background: 'transparent', border: 'none', borderBottom: 'var(--border-hairline)', padding: '6px 16px 14px', resize: 'vertical' }}></textarea>
            </label>
          </div>
          <BL.Button type="submit" style={{ marginTop: 30 }}>Send Message</BL.Button>
        </form>

        <aside style={{ width: 380, flex: 'none', display: 'flex', flexDirection: 'column', gap: 26 }}>
          {infoRow(BLIcons.mapPin, 'Visit us', 'Rua Garrett 73, 1200-203 Lisboa')}
          {infoRow(BLIcons.phone, 'Call us', '+351 21 555 0123')}
          {infoRow(BLIcons.mail, 'Email us', 'support@lexisloft.com')}
          <img src="assets/map-san-francisco.png" alt="Map showing the Lexis Loft store location"
            style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: 'var(--border-hairline)', marginTop: 6 }} />
        </aside>
      </div>
    </BLSection>
  );
}

function BLBlogCard({ post, navigate }) {
  const [grad, textColor] = blBlogGrad(post.coverPalette);
  return (
    <article
      onClick={() => navigate('blog-post', { post })}
      style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 150, background: grad, display: 'flex', alignItems: 'flex-end', padding: 18 }}>
        <BL.Chip kind="tag">{post.category}</BL.Chip>
      </div>
      <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{post.date} · {post.readTime} read</div>
        <h3 style={{ font: 'var(--type-h4)', color: 'var(--text-heading)', margin: 0 }}>{post.title}</h3>
        <p style={{ font: 'var(--type-caption)', color: 'var(--text-body)', margin: 0, flex: 1 }}>{post.excerpt}</p>
        <span style={{ font: 'var(--type-label)', fontWeight: 600, color: 'var(--text-link)' }}>Continue reading &raquo;</span>
      </div>
    </article>
  );
}

function BLBlogPage(props) {
  const { navigate } = props;
  return (
    <BLSection style={{ padding: '64px 48px 88px' }}>
      <BL.SectionHeading eyebrow="The journal" title="From the Lexis Loft Journal" lede="Book lists, reading tips, author interviews and community news." level={1} style={{ marginBottom: 52 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        {BLOG_POSTS.map(p => <BLBlogCard key={p.id} post={p} navigate={navigate} />)}
      </div>
    </BLSection>
  );
}

function BLBlogPostPage(props) {
  const { post, navigate } = props;
  const more = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);
  return (
    <div>
      <BLSection style={{ padding: '56px 48px 72px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <BL.Button variant="link" onClick={() => navigate('blog')} style={{ marginBottom: 32 }}>&laquo; Back to the journal</BL.Button>
          <div style={{ marginBottom: 18 }}><BL.Chip kind="tag">{post.category}</BL.Chip></div>
          <h1 style={{ font: 'var(--type-h1)', color: 'var(--text-heading)', margin: '0 0 16px' }}>{post.title}</h1>
          <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)', marginBottom: 40 }}>
            By {post.author} · {post.date} · {post.readTime} read
          </div>
          {post.body.split('\n\n').map((para, i) => (
            <p key={i} style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: '0 0 24px' }}>{para}</p>
          ))}
        </div>
      </BLSection>
      <BLSection tint style={{ padding: '64px 48px 88px' }}>
        <BL.SectionHeading eyebrow="Keep reading" title="More From the Journal" style={{ marginBottom: 40 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {more.map(p => <BLBlogCard key={p.id} post={p} navigate={navigate} />)}
        </div>
      </BLSection>
    </div>
  );
}

Object.assign(window, { BLFAQPage, BLContactPage, BLBlogPage, BLBlogPostPage });
