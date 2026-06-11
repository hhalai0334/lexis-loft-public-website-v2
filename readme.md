# Bookland Design System

**Bookland** is a book-store e-commerce website brand ("Book Store Website"). The product is a full storefront: browsing books by category, grid/list catalog views with filtering, book detail pages with reviews, a multi-step checkout, and an about/company page. Fictional company copy places it at 832 Thompson Drive, San Francisco, CA 94107 — `support@bookland.id`.

## Sources

- **Figma file:** "Bookland - Book Store Ecommerce Website UI Design (Preview).fig" (attached to this project). It is the *preview* file of the commercial template — every page is flattened raster slices, no live text/vector layers.
- **Original template:** "Bookland – Book Store Ecommerce Website" by **Peterdraw**, sold on ThemeForest (item 29572818), Envato Elements, TemplateMonster (ID 144005), peterdraw.studio. 10 screens at **1920px design width**, built with free Google Fonts.
- Pages in the file: Homepage v1/v2/v3, Book Grid (± sidebar), Book Lists (± sidebar), Book Detail, Checkout, About.
- Reference renders extracted from the .fig live in `reference/` (footer slices at full resolution; full-page renders were partially blocked by the preview file's raster format — see Caveats in chat).

## CONTENT FUNDAMENTALS

- **Tone:** friendly retail enthusiasm, plain-spoken and benefit-led. Headlines sell the offer directly: *"Special 60% Off — for our student community"*, *"Subscribe our newsletter for newest books updates"*, *"We provide best quality books in market"*.
- **Casing:** Title Case for headings and nav (*"Get in Touch With Us"*, *"Books on Sale"*, *"Our History"*); ALL-CAPS only for tiny meta layers — eyebrows (*BACK TO SCHOOL*), form labels (*FIRST NAME*), genre chips (*BIOGRAPHY · THRILLER · HORROR*).
- **Voice:** first-person-plural brand ("we", "our stores"), second-person customer ("your email", "for our student community").
- **Numbers as proof:** big stat counters — *125,663 Happy Customers, 50,672+ Book Collections, 1,562 Our Stores, 457 Famous Writers*. Prices use **comma decimals**: `$18,78` with a struck-through `$25` beside it.
- **Labels are short verbs/nouns:** *Add to cart, Buy, Subscribe, Refine Search, Reset Filter, Show others, Learn More >>, Continue reading, View more, Already in cart.*
- **Promo chips speak in offers:** *"Get 20% Discount for today"*, *"50% OFF Discount"*, *"Back to school promotion"*, *"See 2+ promos"*.
- **Emoji:** none in the UI. (The only ❤️ is the author credit "Made with ❤ by Peterdraw".)
- Testimonials are casual, lightly imperfect customer quotes (*"Very impresive store. Your book made studying for the ABC certification exams a breeze."*) signed with name + the label *"Book Lovers"*.

## VISUAL FOUNDATIONS

- **Color:** white pages with a deep violet-tinted **ink navy** (`#1b1642`) for all headings and a warm **orange** (`#efa053`) as the single CTA color. Supporting accents are used in strict, narrow roles: vermillion (`#ef6144`) *only* for star ratings; magenta-pink (`#ef3e77`) *only* for counter badges and the dashed stat tiles; green *only* for stock/success; pale **lavender** (`#f0effb`) for quiet secondary actions (wishlist buttons, "Already in cart", pagination chips). Neutrals are violet-tinted grays, never pure gray.
- **Two CTA weights:** orange filled buttons for commerce CTAs (Add to cart on cards/detail, Subscribe, Learn More); **indigo filled** buttons in dense/utility contexts (list rows' Add to cart, Refine Search). Both white bold label, 8px radius.
- **Type:** Poppins everywhere — SemiBold headings (tight 1.2–1.3 leading), Light/Regular body in gray. Eyebrow kickers are uppercase, very wide tracked (~0.35em), gray. The single exception: **testimonial quotes are set in a serif** (PT Serif substitute) — a deliberate "reader's voice" move.
- **Backgrounds:** mostly flat white; alternating sections sit on a faint cool tint (`#f7f7fb`). Two image moments per page max: the purple-overlaid reading photo behind the newsletter band (`assets/newsletter-band.png`) and book covers. Homepage v2 hero adds faint concentric line circles as decoration.
- **Cards:** white, 8–12px radius, *borderless*; elevation appears only on the hovered/active card — a big soft ink-tinted shadow (`0 24px 50px rgba(27,22,66,.12)`). Resting cards are flat.
- **Borders:** 1px hairlines in `#e8e6f0`; dashed borders are a motif for "counted" things (pink dashed stat tiles, dashed divider in payment form).
- **Buttons/hover:** color darkens slightly on hover (orange→`#dd8a38`); no transforms or bounces. Motion is quiet ease-out fades ≤250ms.
- **Forms:** two input species — *flat filled* (search bar, newsletter: light gray/white rounded rect, no border) and *underline-only* (checkout: tiny uppercase gray label above, hairline bottom border, ink value).
- **Corner radii:** 6px chips, 8px buttons/inputs, 12px cards/covers/map, full pills for genre tags and slider value chips.
- **Imagery:** photographic, warm-neutral; the newsletter band photo is washed with an 85% plum overlay so white text always passes. Book covers render as portrait rectangles (~3:4), 8px radius, often with an orange discount badge pinned top-left.
- **Layout:** 1920 canvas, ~1568px content well, generous 120px section rhythm. Sections open with eyebrow → H2 → one-line gray lede, left-aligned. Carousels paginate with orange circle arrows + dots, or bare ←/→ glyph arrows for testimonials.
- **Ratings:** five stars, filled vermillion / empty gray, followed by bold score (`4.0`) and gray "235 Reviews".

## ICONOGRAPHY

- The template uses a consistent **2px-stroke line icon set** (heart, cart, search, location pin, phone, mail, sort, grid/list toggles) — drawn in ink navy in the header, orange in contact/footer rows. No icon font is detectable in the preview file (raster only).
- **In this design system we substitute [Lucide](https://lucide.dev) icons via CDN** — same stroke weight and geometry family. Load: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or copy the SVG inline. **Flagged substitution** — if you have the original icon SVGs, replace them.
- **Filled accent icons** appear in colored chips: orange glyphs on peach squares (zap, shield, thumbs-up, star = value props), pink glyphs in dashed tiles (users, book, store, feather = stats), white-on-navy circles (compass = about cards).
- **Social icons** are full-color brand glyphs (Facebook blue, YouTube red, Twitter blue, LinkedIn blue, Instagram gradient) in a plain row — substitute also via Lucide brand glyphs tinted per-brand.
- Counter badges (pink circle, white number) sit on the top-right of header heart/cart icons.
- No emoji, no unicode-as-icon. Logo mark: a rounded **orange open book**; the wordmark is Poppins SemiBold "**Book**" (ink) + "**land**" (orange) with tiny letterspaced "BOOK STORE WEBSITE" beneath (see `components/navigation/Logo.jsx`).

## INDEX

- `styles.css` — global entry; imports `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`.
- `assets/` — `newsletter-band.png` (plum-overlay reading photo), `map-san-francisco.png` (contact map), cropped from the .fig.
- `reference/` — raw footer renders from the .fig (high-res, for future re-derivation).
- `guidelines/` — foundation specimen cards (Design System tab).
- `components/core/` — Button, Chip, Rating, Price, QuantityStepper, Input, Pagination, SectionHeading, StatusPill.
- `components/commerce/` — BookCover, BookCard, BookListItem, ValueProp, StatCard, TestimonialCard, PaymentMethodCard, CheckoutStepper, PriceRangeFilter.
- `components/navigation/` — Logo, Header, Footer.
- `ui_kits/bookland_web/` — interactive 5-screen recreation (Home, Shop, Detail, Checkout, About); open `index.html`.
- `SKILL.md` — agent-skill entry point.
