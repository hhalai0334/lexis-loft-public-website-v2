// ── Lexis Loft · Bookland Edition · Auth pages ──────────────────────────────
function BLAuthShell({ title, lede, children }) {
  return (
    <div style={{ background: 'var(--surface-tint)', padding: '88px 48px' }}>
      <div style={{ maxWidth: 470, margin: '0 auto', background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', padding: '48px 44px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}><LLLogo /></div>
        <h2 style={{ font: 'var(--type-h3)', color: 'var(--text-heading)', textAlign: 'center', margin: '0 0 8px' }}>{title}</h2>
        <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', textAlign: 'center', margin: '0 0 34px' }}>{lede}</p>
        {children}
      </div>
    </div>
  );
}

function BLLoginPage(props) {
  const { setIsLoggedIn, navigate, loginReturn, setLoginReturn, showToast } = props;
  const submit = e => {
    e.preventDefault();
    setIsLoggedIn(true);
    showToast('Welcome back to Lexis Loft!');
    if (loginReturn) { navigate(loginReturn.page, loginReturn.data); setLoginReturn(null); }
    else navigate('account');
  };
  return (
    <BLAuthShell title="Sign In to Your Account" lede="Borrowing, holds and your wishlist are waiting for you.">
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        <BL.Input variant="underline" label="Email address" type="email" placeholder="you@example.com" required />
        <BL.Input variant="underline" label="Password" type="password" placeholder="••••••••" required />
        <BL.Button type="submit" fullWidth size="lg">Sign In</BL.Button>
      </form>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        <BL.Button variant="link" onClick={() => navigate('forgot-password')} style={{ fontSize: 13 }}>Forgot Password?</BL.Button>
        <BL.Button variant="link" onClick={() => navigate('register')} style={{ fontSize: 13 }}>Create an Account &raquo;</BL.Button>
      </div>
    </BLAuthShell>
  );
}

function BLRegisterPage(props) {
  const { setIsLoggedIn, navigate, loginReturn, setLoginReturn, showToast } = props;
  const submit = e => {
    e.preventDefault();
    setIsLoggedIn(true);
    showToast('Account created — welcome to Lexis Loft!');
    if (loginReturn) { navigate(loginReturn.page, loginReturn.data); setLoginReturn(null); }
    else navigate('account');
  };
  return (
    <BLAuthShell title="Create Your Account" lede="Join free to borrow books, place holds and build your wishlist.">
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <BL.Input variant="underline" label="First name" placeholder="Alexandra" required />
          <BL.Input variant="underline" label="Last name" placeholder="Mitchell" required />
        </div>
        <BL.Input variant="underline" label="Email address" type="email" placeholder="you@example.com" required />
        <BL.Input variant="underline" label="Password" type="password" placeholder="At least 8 characters" required />
        <BL.Button type="submit" fullWidth size="lg">Create Account</BL.Button>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
        <BL.Button variant="link" onClick={() => navigate('login')} style={{ fontSize: 13 }}>Already a member? Sign In &raquo;</BL.Button>
      </div>
    </BLAuthShell>
  );
}

function BLForgotPasswordPage(props) {
  const { navigate, showToast } = props;
  const submit = e => {
    e.preventDefault();
    showToast('Reset link sent — check your inbox.');
    navigate('login');
  };
  return (
    <BLAuthShell title="Reset Your Password" lede="Enter the email on your account and we'll send a secure reset link.">
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        <BL.Input variant="underline" label="Email address" type="email" placeholder="you@example.com" required />
        <BL.Button type="submit" fullWidth size="lg">Send Reset Link</BL.Button>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
        <BL.Button variant="link" onClick={() => navigate('login')} style={{ fontSize: 13 }}>&laquo; Back to Sign In</BL.Button>
      </div>
    </BLAuthShell>
  );
}

Object.assign(window, { BLLoginPage, BLRegisterPage, BLForgotPasswordPage });
