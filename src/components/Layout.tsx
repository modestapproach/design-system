import { globalCSS, tokens } from '../styles'

const t = tokens

const navLinks = [
  { href: '/', label: 'Overview' },
  { href: '/tokens', label: 'Tokens' },
  { href: '/components/button', label: 'Button' },
  { href: '/components/badge', label: 'Badge' },
  { href: '/components/card', label: 'Card' },
  { href: '/components/input', label: 'Input' },
]

export function Layout({ children, title }: { children: any; title?: string }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} — Design System` : 'Design System'}</title>
        <style>{globalCSS}</style>
        <style>{`
          .shell { display: flex; min-height: 100vh; }
          .sidebar {
            width: 240px; flex-shrink: 0;
            background: ${t.colors.surface};
            border-right: 1px solid ${t.colors.border};
            padding: ${t.spacing.xl} 0;
            position: sticky; top: 0; height: 100vh; overflow-y: auto;
          }
          .sidebar-logo {
            padding: 0 ${t.spacing.lg} ${t.spacing.lg};
            font-size: ${t.typography.fontSize.lg};
            font-weight: ${t.typography.fontWeight.bold};
            color: ${t.colors.text};
            border-bottom: 1px solid ${t.colors.border};
            margin-bottom: ${t.spacing.md};
          }
          .sidebar-section {
            padding: ${t.spacing.sm} ${t.spacing.lg};
            font-size: ${t.typography.fontSize.xs};
            font-weight: ${t.typography.fontWeight.semibold};
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: ${t.colors.textMuted};
            margin-top: ${t.spacing.md};
          }
          .sidebar a {
            display: block;
            padding: ${t.spacing.sm} ${t.spacing.lg};
            color: ${t.colors.textMuted};
            font-size: ${t.typography.fontSize.sm};
            border-radius: 0;
            transition: color 0.15s, background 0.15s;
          }
          .sidebar a:hover { color: ${t.colors.text}; background: ${t.colors.border}; text-decoration: none; }
          .sidebar a.active { color: ${t.colors.primary}; background: #EBF2FF; font-weight: ${t.typography.fontWeight.medium}; }
          .main { flex: 1; padding: ${t.spacing['2xl']} ${t.spacing['3xl']}; max-width: 900px; }
          .page-title {
            font-size: ${t.typography.fontSize['3xl']};
            font-weight: ${t.typography.fontWeight.bold};
            margin-bottom: ${t.spacing.sm};
          }
          .page-subtitle { color: ${t.colors.textMuted}; margin-bottom: ${t.spacing['2xl']}; }
          .section { margin-bottom: ${t.spacing['3xl']}; }
          .section-title {
            font-size: ${t.typography.fontSize.xl};
            font-weight: ${t.typography.fontWeight.semibold};
            margin-bottom: ${t.spacing.md};
            padding-bottom: ${t.spacing.sm};
            border-bottom: 1px solid ${t.colors.border};
          }
          .preview-box {
            border: 1px solid ${t.colors.border};
            border-radius: ${t.radius.md};
            padding: ${t.spacing.xl};
            margin-bottom: ${t.spacing.sm};
            display: flex; gap: ${t.spacing.md}; flex-wrap: wrap; align-items: center;
          }
          .code-block {
            background: ${t.colors.surface};
            border: 1px solid ${t.colors.border};
            border-radius: ${t.radius.md};
            padding: ${t.spacing.md};
            margin-bottom: ${t.spacing.lg};
            font-family: 'SF Mono', 'Fira Code', monospace;
            font-size: ${t.typography.fontSize.sm};
            overflow-x: auto;
            white-space: pre;
          }
        `}</style>
      </head>
      <body>
        <div class="shell">
          <nav class="sidebar">
            <div class="sidebar-logo">🎨 Design System</div>
            <div class="sidebar-section">Foundation</div>
            <a href="/">Overview</a>
            <a href="/tokens">Tokens</a>
            <div class="sidebar-section">Components</div>
            <a href="/components/button">Button</a>
            <a href="/components/badge">Badge</a>
            <a href="/components/card">Card</a>
            <a href="/components/input">Input</a>
          </nav>
          <main class="main">{children}</main>
        </div>
      </body>
    </html>
  )
}
