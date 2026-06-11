/* @ds-bundle: {"format":3,"namespace":"BooklandDesignSystem_962317","components":[{"name":"BookCard","sourcePath":"components/commerce/BookCard.jsx"},{"name":"BookCover","sourcePath":"components/commerce/BookCover.jsx"},{"name":"BookListItem","sourcePath":"components/commerce/BookListItem.jsx"},{"name":"PaymentMethodCard","sourcePath":"components/commerce/PaymentMethodCard.jsx"},{"name":"CheckoutStepper","sourcePath":"components/commerce/PaymentMethodCard.jsx"},{"name":"PriceRangeFilter","sourcePath":"components/commerce/PriceRangeFilter.jsx"},{"name":"TestimonialCard","sourcePath":"components/commerce/TestimonialCard.jsx"},{"name":"ValueProp","sourcePath":"components/commerce/ValueProp.jsx"},{"name":"StatCard","sourcePath":"components/commerce/ValueProp.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Pagination","sourcePath":"components/core/Pagination.jsx"},{"name":"Price","sourcePath":"components/core/Price.jsx"},{"name":"QuantityStepper","sourcePath":"components/core/QuantityStepper.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"Logo","sourcePath":"components/navigation/Logo.jsx"}],"sourceHashes":{"components/commerce/BookCard.jsx":"a69bb4430d47","components/commerce/BookCover.jsx":"b4a7febc4fcf","components/commerce/BookListItem.jsx":"39d4663c19f5","components/commerce/PaymentMethodCard.jsx":"e4d9a372e4f6","components/commerce/PriceRangeFilter.jsx":"6efe24ecd024","components/commerce/TestimonialCard.jsx":"993e49d6be4f","components/commerce/ValueProp.jsx":"ceaaa25ed755","components/core/Button.jsx":"e966df1e8dc6","components/core/Chip.jsx":"bb55d0f46065","components/core/Input.jsx":"221cb7b0b419","components/core/Pagination.jsx":"ac7d3e7291e6","components/core/Price.jsx":"6ec76a373077","components/core/QuantityStepper.jsx":"43dcdbae269a","components/core/Rating.jsx":"68030bda6725","components/core/SectionHeading.jsx":"8a974ff63a05","components/core/StatusPill.jsx":"c898513bd615","components/navigation/Footer.jsx":"1d8a3f6fa539","components/navigation/Header.jsx":"7dcd6dd75341","components/navigation/Logo.jsx":"acb51b54c84d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BooklandDesignSystem_962317 = window.BooklandDesignSystem_962317 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/BookCover.jsx
try { (() => {
const PALETTES = {
  navy: {
    bg: 'linear-gradient(160deg, #241d56, #14102f)',
    text: '#e8e3d2',
    frame: true
  },
  forest: {
    bg: 'linear-gradient(160deg, #1e4d3b, #0e2a1f)',
    text: '#f2ead8',
    frame: false
  },
  yellow: {
    bg: 'linear-gradient(160deg, #f4d343, #e3b92e)',
    text: '#221d10',
    frame: false
  },
  plum: {
    bg: 'linear-gradient(160deg, #4d3360, #271433)',
    text: '#f0e4ef',
    frame: false
  },
  charcoal: {
    bg: 'linear-gradient(160deg, #33323b, #131217)',
    text: '#f3f1ea',
    frame: true
  },
  cream: {
    bg: 'linear-gradient(160deg, #f4ecdc, #e4d6bc)',
    text: '#3a2c18',
    frame: false
  }
};

/** PLACEHOLDER book cover (the template's real cover photos are licensed and
 * not shipped). Renders a typographic 3:4 cover in brand-adjacent palettes,
 * with optional orange discount badge. Swap for real art via `image`. */
function BookCover({
  title,
  author = null,
  palette = 'navy',
  image = null,
  discount = null,
  width = 220,
  style
}) {
  const p = PALETTES[palette] || PALETTES.navy;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width,
      aspectRatio: '3 / 4',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: image ? `url(${image}) center / cover` : p.bg,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      flex: 'none',
      ...style
    }
  }, !image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: p.frame ? '7%' : '10%',
      border: p.frame ? `1px solid ${p.text}55` : 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '8%',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-quote)',
      fontWeight: 700,
      fontSize: Math.max(13, width * 0.085),
      lineHeight: 1.25,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: p.text
    }
  }, title), author && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: Math.max(9, width * 0.045),
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: p.text,
      opacity: 0.75
    }
  }, author)), discount && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      background: 'var(--bl-orange-500)',
      color: '#fff',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)'
    }
  }, discount));
}
Object.assign(__ds_scope, { BookCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/BookCover.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PaymentMethodCard.jsx
try { (() => {
/** Checkout payment-method tile: outlined square with brand glyph + label.
 * Selected = peach fill with orange checked box top-right. */
function PaymentMethodCard({
  icon,
  label,
  selected = false,
  onSelect = () => {},
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onSelect,
    style: {
      position: 'relative',
      width: 148,
      height: 110,
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      cursor: 'pointer',
      background: selected ? 'var(--surface-selected)' : 'var(--surface-card)',
      border: selected ? '1px solid transparent' : 'var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      transition: 'background var(--duration-fast) var(--ease-out)',
      ...style
    }
  }, selected && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 18,
      height: 18,
      borderRadius: 4,
      background: 'var(--bl-orange-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bl-ink-900)',
      display: 'inline-flex'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, label));
}

/** Checkout progress stepper: completed steps are orange check circles with
 * ink labels; upcoming are hollow gray circles with muted labels. */
function CheckoutStepper({
  steps = [],
  current = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      ...style
    }
  }, steps.map((label, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 2,
      minWidth: 60,
      margin: '0 18px',
      background: i <= current ? 'linear-gradient(90deg, var(--bl-orange-500), var(--bl-gray-200))' : 'var(--bl-gray-200)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: i <= current ? 'var(--bl-orange-500)' : '#fff',
      border: i <= current ? 'none' : '2px solid var(--bl-gray-200)'
    }
  }, i <= current && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontWeight: i <= current ? 600 : 500,
      color: i <= current ? 'var(--text-heading)' : 'var(--text-muted)'
    }
  }, label)))));
}
Object.assign(__ds_scope, { PaymentMethodCard, CheckoutStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PaymentMethodCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ValueProp.jsx
try { (() => {
/** Value-prop unit: orange glyph on a peach rounded square, ink title,
 * small gray copy. (Quick Delivery / Secure Payment / Best Quality / Return Guarantee) */
function ValueProp({
  icon,
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 240,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: 14,
      background: 'var(--bl-peach-100)',
      color: 'var(--bl-orange-500)',
      marginBottom: 18
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontWeight: 600,
      color: 'var(--text-heading)',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, children));
}

/** Stat tile: pink glyph in a pink-dashed rounded square, big ink number,
 * gray label. (125,663 Happy Customers …) */
function StatCard({
  icon,
  value,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 84,
      height: 84,
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-dashed-stat)',
      color: 'var(--bl-pink-300)',
      marginBottom: 20
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--text-heading)',
      marginBottom: 6
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { ValueProp, StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ValueProp.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: '#fff',
    border: 'none',
    hoverBackground: 'var(--action-primary-hover)'
  },
  dark: {
    background: 'var(--action-dark)',
    color: '#fff',
    border: 'none',
    hoverBackground: 'var(--action-dark-hover)'
  },
  quiet: {
    background: 'var(--bl-lavender-200)',
    color: 'var(--bl-indigo-700)',
    border: 'none',
    hoverBackground: 'var(--bl-lavender-100)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-heading)',
    border: '1px solid var(--border-default)',
    hoverBackground: 'var(--surface-tint)'
  },
  subtle: {
    background: 'var(--surface-tint)',
    color: 'var(--text-muted)',
    border: 'none',
    hoverBackground: 'var(--bl-gray-200)'
  },
  link: {
    background: 'transparent',
    color: 'var(--text-link)',
    border: 'none',
    hoverBackground: 'transparent',
    padding: 0
  }
};
const SIZES = {
  sm: {
    padding: '10px 18px',
    fontSize: 13
  },
  md: {
    padding: '14px 26px',
    fontSize: 15
  },
  lg: {
    padding: '18px 36px',
    fontSize: 16
  }
};

/** Bookland button. Orange `primary` for commerce CTAs, `dark` indigo for
 * utility contexts, `quiet` lavender for already-done states, `outline`,
 * `subtle` gray, and `link` (orange text, e.g. "Learn More >>"). */
function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  children,
  disabled = false,
  fullWidth = false,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: v.padding !== undefined ? v.padding : s.padding,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'default' : 'pointer',
      border: v.border,
      background: hover && !disabled ? v.hoverBackground : v.background,
      color: v.color,
      opacity: disabled ? 0.45 : 1,
      width: fullWidth ? '100%' : undefined,
      transition: 'background var(--duration-fast) var(--ease-out)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bookland chips & pills.
 * kind="genre"  — outlined pill, tiny uppercase ink label (BIOGRAPHY)
 * kind="promo"  — outlined rounded-rect offer chip, orange or pink text
 * kind="tag"    — filled orange rounded-rect (detail-page Tags row)
 * kind="muted"  — filled gray chip ("See 2+ promos")
 * kind="value"  — lavender pill (price-slider values, $145) */
function Chip({
  kind = 'genre',
  color = 'orange',
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-ui)',
    whiteSpace: 'nowrap'
  };
  const kinds = {
    genre: {
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-heading)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: 'var(--chip-tracking)',
      textTransform: 'uppercase'
    },
    promo: {
      padding: '7px 12px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${color === 'pink' ? 'var(--bl-pink-500)' : 'var(--bl-orange-500)'}`,
      color: color === 'pink' ? 'var(--bl-pink-500)' : 'var(--bl-orange-500)',
      fontSize: 12,
      fontWeight: 500
    },
    tag: {
      padding: '7px 14px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bl-orange-500)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 500
    },
    muted: {
      padding: '7px 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-tint)',
      color: 'var(--text-muted)',
      fontSize: 12,
      fontWeight: 500
    },
    value: {
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bl-lavender-100)',
      color: 'var(--bl-indigo-700)',
      fontSize: 12,
      fontWeight: 600
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...(kinds[kind] || kinds.genre),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PriceRangeFilter.jsx
try { (() => {
/** Sidebar "Price Range" filter: dual-handle indigo slider, lavender value
 * chips, Refine Search (dark) + Reset Filter (subtle). Cosmetic-interactive. */
function PriceRangeFilter({
  min = 0,
  max = 500,
  low = 145,
  high = 430,
  onRefine = () => {},
  onReset = () => {},
  style
}) {
  const [lo, setLo] = React.useState(low);
  const [hi, setHi] = React.useState(high);
  const pct = v => (v - min) / (max - min) * 100;
  const track = React.useRef(null);
  const drag = which => e => {
    e.preventDefault();
    const move = ev => {
      const r = track.current.getBoundingClientRect();
      const x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
      const v = Math.round(min + Math.min(1, Math.max(0, x / r.width)) * (max - min));
      if (which === 'lo') setLo(Math.min(v, hi - 10));else setHi(Math.max(v, lo + 10));
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move);
    window.addEventListener('touchend', up);
  };
  const handle = (v, which) => /*#__PURE__*/React.createElement("span", {
    onMouseDown: drag(which),
    onTouchStart: drag(which),
    style: {
      position: 'absolute',
      left: `calc(${pct(v)}% - 9px)`,
      top: -7,
      width: 18,
      height: 18,
      borderRadius: '50%',
      cursor: 'grab',
      background: 'var(--bl-indigo-700)',
      boxShadow: '0 2px 6px rgba(27,22,66,0.3)'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-hairline)',
      padding: '20px 20px 24px',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      fontSize: 16,
      color: 'var(--text-heading)'
    }
  }, "Price Range"), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--bl-ink-900)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m18 15-6-6-6 6"
  }))), /*#__PURE__*/React.createElement("div", {
    ref: track,
    style: {
      position: 'relative',
      height: 4,
      borderRadius: 2,
      background: 'var(--bl-lavender-200)',
      margin: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      borderRadius: 2,
      left: `${pct(lo)}%`,
      right: `${100 - pct(hi)}%`,
      background: 'var(--bl-indigo-700)'
    }
  }), handle(lo, 'lo'), handle(hi, 'hi')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    kind: "value"
  }, "$", lo), /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    kind: "value"
  }, "$", hi))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "dark",
    size: "sm",
    onClick: () => onRefine([lo, hi])
  }, "Refine Search"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "subtle",
    size: "sm",
    onClick: () => {
      setLo(low);
      setHi(high);
      onReset();
    }
  }, "Reset Filter")));
}
Object.assign(__ds_scope, { PriceRangeFilter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceRangeFilter.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Bookland inputs.
 * variant="filled"    — flat light-gray rounded field (header search, with icon slot)
 * variant="underline" — checkout style: tiny uppercase gray label, hairline bottom border
 * variant="newsletter"— white pill-ish field used on the plum band */
function Input({
  variant = 'filled',
  label = null,
  icon = null,
  style,
  inputStyle,
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-ui)',
    fontSize: 14,
    color: 'var(--text-heading)',
    outline: 'none',
    width: '100%',
    background: 'transparent',
    border: 'none'
  };
  if (variant === 'underline') {
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'block',
        ...style
      }
    }, label && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        display: 'block',
        marginBottom: 10
      }
    }, label), /*#__PURE__*/React.createElement("input", _extends({
      style: {
        ...base,
        padding: '6px 16px 14px',
        borderBottom: 'var(--border-hairline)',
        ...inputStyle
      }
    }, rest)));
  }
  const filled = variant === 'newsletter';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: filled ? '#fff' : 'var(--surface-tint)',
      borderRadius: 'var(--radius-md)',
      padding: filled ? '20px 24px' : '14px 18px',
      width: '100%',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    style: {
      ...base,
      ...inputStyle
    }
  }, rest)), icon);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Pagination.jsx
try { (() => {
/** Catalog pagination: Previous / numbered chips / Next. Active page is a
 * filled indigo square chip. */
function Pagination({
  pages = 3,
  current = 1,
  onChange = () => {}
}) {
  const chip = active => ({
    minWidth: 44,
    height: 44,
    padding: '0 14px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-ui)',
    fontSize: 14,
    fontWeight: 600,
    background: active ? 'var(--action-dark)' : 'var(--bl-lavender-100)',
    color: active ? '#fff' : 'var(--bl-indigo-700)',
    transition: 'background var(--duration-fast) var(--ease-out)'
  });
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: chip(false),
    disabled: current <= 1,
    onClick: () => onChange(current - 1)
  }, "\u2039\xA0\xA0Previous"), Array.from({
    length: pages
  }, (_, i) => i + 1).map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    style: chip(p === current),
    onClick: () => onChange(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    style: chip(false),
    disabled: current >= pages,
    onClick: () => onChange(current + 1)
  }, "Next\xA0\xA0\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/core/Price.jsx
try { (() => {
/** Bookland price lockup — bold ink price with comma decimals ("$18,78"),
 * optional struck-through old price and orange discount badge ("2%"). */
function Price({
  value,
  oldValue = null,
  discount = null,
  size = 'md',
  style
}) {
  const sizes = {
    sm: 16,
    md: 20,
    lg: 32
  };
  const fs = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: fs,
      color: 'var(--text-heading)'
    }
  }, value), oldValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 400,
      fontSize: Math.round(fs * 0.72),
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, oldValue), discount && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 12,
      color: '#fff',
      background: 'var(--bl-orange-500)',
      borderRadius: 'var(--radius-sm)',
      padding: '4px 10px'
    }
  }, discount));
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Price.jsx", error: String((e && e.message) || e) }); }

// components/commerce/BookCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CartGlyph = () => /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "21",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "19",
  cy: "21",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
}));

/** Catalog grid card: cover, uppercase title, genre pills, gray excerpt,
 * author, orange Add-to-cart + price. Flat at rest; soft shadow on hover. */
function BookCard({
  title,
  author,
  genres = [],
  excerpt,
  price,
  oldPrice = null,
  cover = {},
  inCart = false,
  onAddToCart = () => {},
  width = 312,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transition: 'box-shadow var(--duration-base) var(--ease-out)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BookCover, _extends({}, cover, {
    title: cover.title || title,
    author: cover.author || author,
    width: width,
    style: {
      borderRadius: 0,
      aspectRatio: '3 / 2.05'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-heading)',
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: '0.02em'
    }
  }, title), genres.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, genres.map(g => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: g,
    kind: "genre"
  }, g))), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, excerpt), author && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-heading)'
    }
  }, author), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: inCart ? 'quiet' : 'primary',
    icon: /*#__PURE__*/React.createElement(CartGlyph, null),
    onClick: onAddToCart
  }, inCart ? 'Already in cart' : 'Add to cart'), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    value: price,
    oldValue: oldPrice
  }))));
}
Object.assign(__ds_scope, { BookCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/BookCard.jsx", error: String((e && e.message) || e) }); }

// components/core/QuantityStepper.jsx
try { (() => {
/** Quantity stepper from the book-detail page: bordered box, orange − / +,
 * ink count between. Controlled or uncontrolled. */
function QuantityStepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 99,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const qty = value !== undefined ? value : internal;
  const set = n => {
    const next = Math.min(max, Math.max(min, n));
    if (value === undefined) setInternal(next);
    if (onChange) onChange(next);
  };
  const btn = {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: 'var(--bl-orange-500)',
    fontFamily: 'var(--font-ui)',
    fontSize: 20,
    fontWeight: 500,
    width: 40,
    height: 48,
    lineHeight: 1
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => set(qty - 1),
    "aria-label": "Decrease"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontWeight: 600,
      color: 'var(--text-heading)',
      minWidth: 32,
      textAlign: 'center'
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => set(qty + 1),
    "aria-label": "Increase"
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
const Star = ({
  filled
}) => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: filled ? 'var(--accent-rating)' : 'var(--bl-gray-200)'
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l2.9 6.26L21.5 9.2l-4.75 4.4 1.15 6.55L12 16.9l-5.9 3.25 1.15-6.55L2.5 9.2l6.6-.94L12 2z"
}));

/** Vermillion star rating row. Optionally shows bold score and gray review count:
 * "★★★★☆ 4.0 · 235 Reviews". */
function Rating({
  value = 4,
  score = null,
  reviews = null,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    filled: i <= Math.round(value)
  }))), score !== null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontWeight: 600,
      color: 'var(--text-heading)',
      marginLeft: 8
    }
  }, score), reviews !== null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginLeft: 8
    }
  }, reviews, " Reviews"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/commerce/BookListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CartGlyph = () => /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "21",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "19",
  cy: "21",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
}));
const HeartGlyph = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
}));

/** List-view row card: cover left; category line, title, rating, excerpt,
 * promo chips, byline columns; indigo Add-to-cart + lavender heart right. */
function BookListItem({
  title,
  author,
  publisher = 'Printarea Studios',
  year = '2019',
  categories = 'Adventure, Science, Comedy',
  excerpt,
  price,
  oldPrice = null,
  rating = 4,
  reviews = 235,
  promos = [],
  cover = {},
  inCart = false,
  onAddToCart = () => {},
  style
}) {
  const [hover, setHover] = React.useState(false);
  const meta = (label, value) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, value));
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      gap: 28,
      padding: 24,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BookCover, _extends({}, cover, {
    title: cover.title || title,
    width: 148
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, categories), /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    score: Number(rating).toFixed(1),
    reviews: reviews
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h4)',
      fontSize: 20,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Price, {
    value: price,
    oldValue: oldPrice
  }), promos.map((p, i) => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: i,
    kind: p.kind || 'promo',
    color: p.color
  }, p.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36
    }
  }, author && meta('Writen by', author), publisher && meta('Publisher', publisher), year && meta('Year', year)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: inCart ? 'quiet' : 'dark',
    size: "sm",
    icon: /*#__PURE__*/React.createElement(CartGlyph, null),
    onClick: onAddToCart
  }, inCart ? 'Already in cart' : 'Add to cart'), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "quiet",
    size: "sm",
    "aria-label": "Save to wishlist",
    style: {
      padding: '10px 12px',
      color: 'var(--bl-indigo-700)'
    }
  }, /*#__PURE__*/React.createElement(HeartGlyph, null))))));
}
Object.assign(__ds_scope, { BookListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/BookListItem.jsx", error: String((e && e.message) || e) }); }

// components/commerce/TestimonialCard.jsx
try { (() => {
/** Testimonial carousel card — the one place Bookland uses a serif. Stars,
 * serif quote, avatar + name + "Book Lovers". Active card carries the lift shadow. */
function TestimonialCard({
  quote,
  name,
  role = 'Book Lovers',
  stars = 5,
  avatar = null,
  active = false,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      width: 300,
      padding: '36px 28px 30px',
      margin: 0,
      textAlign: 'center',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: active ? 'var(--shadow-card-hover)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: stars
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      font: 'var(--type-quote)',
      color: 'var(--bl-ink-900)',
      margin: '18px 0 26px'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: 'flex-start',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      flex: 'none',
      background: avatar ? `url(${avatar}) center / cover` : 'linear-gradient(140deg, var(--bl-lavender-200), var(--bl-gray-400))'
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-label)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Section opener: optional wide-tracked uppercase eyebrow, ink SemiBold
 * heading, optional one-line gray lede. Left-aligned (brand default) or centered. */
function SectionHeading({
  eyebrow = null,
  title,
  lede = null,
  align = 'left',
  level = 2,
  style
}) {
  const fonts = {
    1: 'var(--type-h1)',
    2: 'var(--type-h2)',
    3: 'var(--type-h3)'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: align,
      maxWidth: 720,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--eyebrow-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: fonts[level] || fonts[2],
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: '14px 0 0'
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
/** Detail-page status pills: "⚡ FREE SHIPPING" (outlined, ink text, orange
 * icon) and "✓ IN STOCKS" (outlined, green). */
function StatusPill({
  tone = 'info',
  icon = null,
  children,
  style
}) {
  const colors = {
    info: {
      text: 'var(--text-heading)',
      icon: 'var(--bl-orange-500)'
    },
    success: {
      text: 'var(--bl-green-500)',
      icon: 'var(--bl-green-500)'
    }
  };
  const c = colors[tone] || colors.info;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      borderRadius: 'var(--radius-md)',
      border: 'var(--border-hairline)',
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: c.text,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.icon,
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Logo.jsx
try { (() => {
/** Bookland logo: orange open-book mark + "Book"(ink)/"land"(orange) wordmark
 * with tiny letterspaced "BOOK STORE WEBSITE" beneath. Mark is a substitute
 * glyph (original is raster-only in the preview file). */
function Logo({
  size = 'md',
  tagline = true,
  onDark = false,
  style
}) {
  const s = size === 'sm' ? 0.8 : size === 'lg' ? 1.25 : 1;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12 * s,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 40 * s,
    height: 36 * s,
    viewBox: "0 0 44 40",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 6.5C17.5 3.6 12.6 2.4 7.2 2.9c-1.5.1-2.7 1.4-2.7 2.9v24.4c0 1.7 1.5 3 3.2 2.9 4.6-.3 9.6.8 13.3 3.4V6.5Z",
    fill: "var(--bl-orange-500)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 6.5c3.5-2.9 8.4-4.1 13.8-3.6 1.5.1 2.7 1.4 2.7 2.9v24.4c0 1.7-1.5 3-3.2 2.9-4.6-.3-9.6.8-13.3 3.4V6.5Z",
    fill: "var(--bl-orange-400)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 7v29",
    stroke: "#fff",
    strokeWidth: "1.6"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2 * s
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 24 * s,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: onDark ? '#fff' : 'var(--bl-ink-900)'
    }
  }, "Book"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bl-orange-500)'
    }
  }, "land")), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 400,
      fontSize: 8.5 * s,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: onDark ? 'rgba(255,255,255,0.75)' : 'var(--text-muted)'
    }
  }, "Book Store Website")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Logo.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const CATEGORIES = [['Architecture', 'Art', 'Action', 'Biography & Autobiography', 'Body, Mind & Spirit'], ['Business & Economics', 'Children Fiction', 'Children Non-Fiction', 'Comics & Graphic Novels', 'Cooking'], ['Crafts & Hobbies', 'Design', 'Drama', 'Education', 'Family & Relationships']];
const SOCIALS = [{
  label: 'Facebook',
  color: '#1877f2',
  d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
}, {
  label: 'YouTube',
  color: '#ff0000',
  d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17 M10 15l5-3-5-3z'
}, {
  label: 'Twitter',
  color: '#1da1f2',
  d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'
}, {
  label: 'LinkedIn',
  color: '#0a66c2',
  d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M6 9H2v12h4z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
}, {
  label: 'Instagram',
  color: '#e4405f',
  d: 'M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z M17.5 6.5h.01'
}];

/** Site footer: plum newsletter band (photo asset), "+ Books categories"
 * columns, logo + blurb + colored social glyphs, copyright bar.
 * `assetsBase` = relative path to the design-system root (where assets/ lives). */
function Footer({
  assetsBase = '../..',
  onSubscribe = () => {},
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-page)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `var(--bl-plum-overlay) url(${assetsBase}/assets/newsletter-band.png) center / cover`,
      backgroundBlendMode: 'multiply',
      padding: '72px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      color: '#fff',
      margin: 0,
      maxWidth: 460
    }
  }, "Subscribe our newsletter for newest books updates"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubscribe();
    },
    style: {
      display: 'flex',
      flex: 1,
      minWidth: 380,
      maxWidth: 620,
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    variant: "newsletter",
    placeholder: "Type your email here",
    style: {
      borderRadius: 0,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    style: {
      borderRadius: 0,
      letterSpacing: '0.06em'
    }
  }, "SUBSCRIBE")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '64px 48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontWeight: 600,
      color: 'var(--text-heading)',
      marginBottom: 28
    }
  }, "+ Books categories"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '18px 32px',
      marginBottom: 56
    }
  }, CATEGORIES.map((col, ci) => /*#__PURE__*/React.createElement("ul", {
    key: ci,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, col.map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, c)))))), /*#__PURE__*/React.createElement(__ds_scope.Logo, null), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      maxWidth: 420,
      margin: '20px 0 28px'
    }
  }, "Bookland is a Book Store Ecommerce Website Template by Peterdraw lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      paddingBottom: 40
    }
  }, SOCIALS.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: "#",
    "aria-label": s.label,
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: s.color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: s.d
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '22px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      font: 'var(--type-caption)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Bookland Book Store Ecommerce Website"), /*#__PURE__*/React.createElement("span", null, "\xA9 2020 All Rights Reserved"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
const I = {
  search: /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--bl-indigo-700)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  heart: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--bl-ink-900)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
  })),
  cart: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--bl-ink-900)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
  })),
  chevron: /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--bl-gray-400)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))
};
function Badged({
  icon,
  count,
  label,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": label,
    style: {
      position: 'relative',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 6,
      display: 'inline-flex'
    }
  }, icon, count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -4,
      minWidth: 18,
      height: 18,
      padding: '0 4px',
      borderRadius: 9,
      background: 'var(--accent-badge)',
      color: '#fff',
      fontFamily: 'var(--font-ui)',
      fontSize: 10,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, count));
}

/** Bookland site header: logo · "Menus ▾" + search field on a tinted strip ·
 * wishlist/cart with pink count badges · avatar account menu. */
function Header({
  wishlistCount = 21,
  cartCount = 5,
  userName = 'Brian',
  userEmail = 'briancorner@gmail.com',
  onLogoClick = () => {},
  onSearch = () => {},
  onCartClick = () => {},
  menuLabel = 'Menus',
  onMenuClick = () => {},
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      height: 'var(--header-h)',
      padding: '0 48px',
      background: 'var(--surface-page)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onLogoClick,
    style: {
      cursor: 'pointer',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 640,
      display: 'flex',
      alignItems: 'center',
      background: 'var(--surface-tint)',
      borderRadius: 'var(--radius-md)',
      padding: '4px 4px 4px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenuClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '12px 20px',
      font: 'var(--type-label)',
      fontWeight: 600,
      color: 'var(--text-heading)',
      borderRight: 'var(--border-hairline)'
    }
  }, menuLabel, " ", I.chevron), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    placeholder: "Search books here",
    icon: I.search,
    style: {
      background: 'transparent',
      padding: '10px 16px'
    },
    onKeyDown: e => e.key === 'Enter' && onSearch(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginLeft: 'auto',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Badged, {
    icon: I.heart,
    count: wishlistCount,
    label: "Wishlist"
  }), /*#__PURE__*/React.createElement(Badged, {
    icon: I.cart,
    count: cartCount,
    label: "Cart",
    onClick: onCartClick
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'linear-gradient(140deg, var(--bl-indigo-600), var(--bl-ink-900))',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 16
    }
  }, userName.charAt(0)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-label)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, userName), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, userEmail)), I.chevron)));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BookCard = __ds_scope.BookCard;

__ds_ns.BookCover = __ds_scope.BookCover;

__ds_ns.BookListItem = __ds_scope.BookListItem;

__ds_ns.PaymentMethodCard = __ds_scope.PaymentMethodCard;

__ds_ns.CheckoutStepper = __ds_scope.CheckoutStepper;

__ds_ns.PriceRangeFilter = __ds_scope.PriceRangeFilter;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.ValueProp = __ds_scope.ValueProp;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Logo = __ds_scope.Logo;

})();
