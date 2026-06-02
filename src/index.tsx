import { Hono } from 'hono'
import { Layout } from './components/Layout'
import { tokens } from './styles'

const app = new Hono()
const t = tokens

// ── Home / Overview ────────────────────────────────────────────────────────
app.get('/', (c) => {
  return c.html(
    <Layout title="Overview">
      <h1 class="page-title">Design System</h1>
      <p class="page-subtitle">A living document of components, tokens, and patterns.</p>

      <div class="section">
        <h2 class="section-title">Color Palette</h2>
        <div style={`display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:${t.spacing.md}`}>
          {Object.entries(t.colors).map(([name, value]) => (
            <div>
              <div style={`background:${value};height:64px;border-radius:${t.radius.md};border:1px solid ${t.colors.border};margin-bottom:6px`} />
              <div style={`font-size:${t.typography.fontSize.sm};font-weight:${t.typography.fontWeight.medium}`}>{name}</div>
              <div style={`font-size:${t.typography.fontSize.xs};color:${t.colors.textMuted};font-family:monospace`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Typography Scale</h2>
        {Object.entries(t.typography.fontSize).map(([size, px]) => (
          <div style={`font-size:${px};margin-bottom:${t.spacing.sm};display:flex;align-items:baseline;gap:${t.spacing.md}`}>
            <span>The quick brown fox</span>
            <span style={`font-size:${t.typography.fontSize.xs};color:${t.colors.textMuted}`}>{size} / {px}</span>
          </div>
        ))}
      </div>

      <div class="section">
        <h2 class="section-title">Spacing Scale</h2>
        <div style={`display:flex;flex-direction:column;gap:${t.spacing.sm}`}>
          {Object.entries(t.spacing).map(([name, val]) => (
            <div style="display:flex;align-items:center;gap:16px">
              <div style={`width:${val};height:${val};background:${t.colors.primary};border-radius:2px;flex-shrink:0`} />
              <span style={`font-size:${t.typography.fontSize.sm}`}>{name} — {val}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
})

// ── Tokens ──────────────────────────────────────────────────────────────────
app.get('/tokens', (c) => {
  return c.html(
    <Layout title="Tokens">
      <h1 class="page-title">Design Tokens</h1>
      <p class="page-subtitle">Raw values that power every component.</p>

      <div class="section">
        <h2 class="section-title">Colors</h2>
        <div class="code-block">{JSON.stringify(t.colors, null, 2)}</div>
      </div>
      <div class="section">
        <h2 class="section-title">Spacing</h2>
        <div class="code-block">{JSON.stringify(t.spacing, null, 2)}</div>
      </div>
      <div class="section">
        <h2 class="section-title">Typography</h2>
        <div class="code-block">{JSON.stringify(t.typography, null, 2)}</div>
      </div>
      <div class="section">
        <h2 class="section-title">Border Radius</h2>
        <div class="code-block">{JSON.stringify(t.radius, null, 2)}</div>
      </div>
      <div class="section">
        <h2 class="section-title">Shadows</h2>
        <div class="code-block">{JSON.stringify(t.shadow, null, 2)}</div>
      </div>
    </Layout>
  )
})

// ── Button ───────────────────────────────────────────────────────────────────
app.get('/components/button', (c) => {
  const btnBase = `display:inline-flex;align-items:center;justify-content:center;border:none;cursor:pointer;font-family:inherit;font-weight:${t.typography.fontWeight.medium};border-radius:${t.radius.md};transition:opacity 0.15s`
  const variants = [
    { label: 'Primary', style: `background:${t.colors.primary};color:#fff;padding:10px ${t.spacing.lg}` },
    { label: 'Secondary', style: `background:${t.colors.surface};color:${t.colors.text};border:1px solid ${t.colors.border};padding:10px ${t.spacing.lg}` },
    { label: 'Danger', style: `background:${t.colors.danger};color:#fff;padding:10px ${t.spacing.lg}` },
    { label: 'Ghost', style: `background:transparent;color:${t.colors.primary};padding:10px ${t.spacing.lg}` },
  ]
  const sizes = [
    { label: 'Small', style: `background:${t.colors.primary};color:#fff;padding:6px 12px;font-size:${t.typography.fontSize.sm}` },
    { label: 'Medium', style: `background:${t.colors.primary};color:#fff;padding:10px ${t.spacing.lg};font-size:${t.typography.fontSize.base}` },
    { label: 'Large', style: `background:${t.colors.primary};color:#fff;padding:14px ${t.spacing.xl};font-size:${t.typography.fontSize.lg}` },
  ]
  return c.html(
    <Layout title="Button">
      <h1 class="page-title">Button</h1>
      <p class="page-subtitle">Trigger actions and navigate the UI.</p>

      <div class="section">
        <h2 class="section-title">Variants</h2>
        <div class="preview-box">
          {variants.map(v => <button style={`${btnBase};${v.style}`}>{v.label}</button>)}
        </div>
        <div class="code-block">{`<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-ghost">Ghost</button>`}</div>
      </div>

      <div class="section">
        <h2 class="section-title">Sizes</h2>
        <div class="preview-box" style="align-items:center">
          {sizes.map(s => <button style={`${btnBase};${s.style};border-radius:${t.radius.md}`}>{s.label}</button>)}
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">States</h2>
        <div class="preview-box">
          <button style={`${btnBase};background:${t.colors.primary};color:#fff;padding:10px ${t.spacing.lg}`}>Default</button>
          <button style={`${btnBase};background:${t.colors.primaryDark};color:#fff;padding:10px ${t.spacing.lg}`}>Hover</button>
          <button disabled style={`${btnBase};background:${t.colors.border};color:${t.colors.textMuted};padding:10px ${t.spacing.lg};cursor:not-allowed`}>Disabled</button>
        </div>
      </div>
    </Layout>
  )
})

// ── Badge ────────────────────────────────────────────────────────────────────
app.get('/components/badge', (c) => {
  const badgeBase = `display:inline-flex;align-items:center;border-radius:${t.radius.full};font-size:${t.typography.fontSize.xs};font-weight:${t.typography.fontWeight.semibold};padding:2px 10px`
  const variants = [
    { label: 'Default', style: `background:${t.colors.surface};color:${t.colors.text};border:1px solid ${t.colors.border}` },
    { label: 'Primary', style: `background:#EBF2FF;color:${t.colors.primary}` },
    { label: 'Success', style: `background:#D1FAE5;color:#065F46` },
    { label: 'Warning', style: `background:#FEF3C7;color:#92400E` },
    { label: 'Danger', style: `background:#FEE2E2;color:#991B1B` },
  ]
  return c.html(
    <Layout title="Badge">
      <h1 class="page-title">Badge</h1>
      <p class="page-subtitle">Compact labels for status, counts, and categories.</p>
      <div class="section">
        <h2 class="section-title">Variants</h2>
        <div class="preview-box">
          {variants.map(v => <span style={`${badgeBase};${v.style}`}>{v.label}</span>)}
        </div>
        <div class="code-block">{`<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>`}</div>
      </div>
    </Layout>
  )
})

// ── Card ─────────────────────────────────────────────────────────────────────
app.get('/components/card', (c) => {
  return c.html(
    <Layout title="Card">
      <h1 class="page-title">Card</h1>
      <p class="page-subtitle">Surface for grouping related content.</p>
      <div class="section">
        <h2 class="section-title">Default</h2>
        <div class="preview-box" style="flex-direction:column;align-items:stretch">
          <div style={`background:${t.colors.background};border:1px solid ${t.colors.border};border-radius:${t.radius.lg};padding:${t.spacing.xl};box-shadow:${t.shadow.sm}`}>
            <div style={`font-size:${t.typography.fontSize.lg};font-weight:${t.typography.fontWeight.semibold};margin-bottom:${t.spacing.sm}`}>Card Title</div>
            <div style={`color:${t.colors.textMuted};margin-bottom:${t.spacing.md}`}>A flexible container for content, media, and actions.</div>
            <button style={`display:inline-flex;background:${t.colors.primary};color:#fff;border:none;border-radius:${t.radius.md};padding:8px 16px;cursor:pointer;font-family:inherit;font-weight:${t.typography.fontWeight.medium}`}>Action</button>
          </div>
        </div>
        <div class="code-block">{`<div class="card">
  <div class="card-title">Card Title</div>
  <div class="card-body">Content goes here.</div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>`}</div>
      </div>
      <div class="section">
        <h2 class="section-title">Elevated</h2>
        <div class="preview-box">
          {[t.shadow.sm, t.shadow.md, t.shadow.lg].map((shadow, i) => (
            <div style={`background:${t.colors.background};border:1px solid ${t.colors.border};border-radius:${t.radius.lg};padding:${t.spacing.lg};box-shadow:${shadow};flex:1`}>
              <div style={`font-weight:${t.typography.fontWeight.semibold};margin-bottom:${t.spacing.sm}`}>Shadow {['sm','md','lg'][i]}</div>
              <div style={`font-size:${t.typography.fontSize.sm};color:${t.colors.textMuted}`}>{shadow}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
})

// ── Input ─────────────────────────────────────────────────────────────────────
app.get('/components/input', (c) => {
  const inputBase = `width:100%;border:1px solid ${t.colors.border};border-radius:${t.radius.md};padding:10px ${t.spacing.md};font-family:inherit;font-size:${t.typography.fontSize.base};color:${t.colors.text};outline:none;background:${t.colors.background}`
  return c.html(
    <Layout title="Input">
      <h1 class="page-title">Input</h1>
      <p class="page-subtitle">Text fields for user data entry.</p>
      <div class="section">
        <h2 class="section-title">Variants</h2>
        <div class="preview-box" style="flex-direction:column;align-items:stretch;gap:12px">
          <div>
            <label style={`display:block;font-size:${t.typography.fontSize.sm};font-weight:${t.typography.fontWeight.medium};margin-bottom:6px`}>Default</label>
            <input style={inputBase} placeholder="Enter text..." />
          </div>
          <div>
            <label style={`display:block;font-size:${t.typography.fontSize.sm};font-weight:${t.typography.fontWeight.medium};margin-bottom:6px`}>With value</label>
            <input style={inputBase} value="hello@example.com" />
          </div>
          <div>
            <label style={`display:block;font-size:${t.typography.fontSize.sm};font-weight:${t.typography.fontWeight.medium};margin-bottom:6px`}>Error state</label>
            <input style={`${inputBase};border-color:${t.colors.danger}`} value="invalid value" />
            <div style={`font-size:${t.typography.fontSize.sm};color:${t.colors.danger};margin-top:4px`}>This field is required.</div>
          </div>
          <div>
            <label style={`display:block;font-size:${t.typography.fontSize.sm};font-weight:${t.typography.fontWeight.medium};margin-bottom:6px;color:${t.colors.textMuted}`}>Disabled</label>
            <input disabled style={`${inputBase};background:${t.colors.surface};color:${t.colors.textMuted};cursor:not-allowed`} value="Disabled input" />
          </div>
        </div>
        <div class="code-block">{`<input class="input" placeholder="Enter text..." />
<input class="input input-error" value="invalid" />
<input class="input" disabled value="Disabled" />`}</div>
      </div>
    </Layout>
  )
})

export default app
