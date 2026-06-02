export const tokens = {
  colors: {
    primary: '#0066FF',
    primaryDark: '#0052CC',
    secondary: '#6B7280',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    border: '#E5E7EB',
    text: '#111827',
    textMuted: '#6B7280',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.07)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
  },
};

export const globalCSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: ${tokens.typography.fontFamily};
    font-size: ${tokens.typography.fontSize.base};
    color: ${tokens.colors.text};
    background: ${tokens.colors.background};
    line-height: ${tokens.typography.lineHeight.normal};
  }
  a { color: ${tokens.colors.primary}; text-decoration: none; }
  a:hover { text-decoration: underline; }
  code, pre {
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: ${tokens.typography.fontSize.sm};
    background: ${tokens.colors.surface};
    border-radius: ${tokens.radius.sm};
  }
  code { padding: 2px 6px; }
  pre { padding: ${tokens.spacing.md}; overflow-x: auto; }
`;
