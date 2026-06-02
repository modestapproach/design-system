export const runtime = "edge";

const tokenGroups = [
  {
    name: "Colors",
    tokens: [
      { token: "--color-primary", value: "#2563eb" },
      { token: "--color-primary-dark", value: "#1d4ed8" },
      { token: "--color-secondary", value: "#6b7280" },
      { token: "--color-success", value: "#10b981" },
      { token: "--color-warning", value: "#f59e0b" },
      { token: "--color-danger", value: "#ef4444" },
      { token: "--color-surface", value: "#f9fafb" },
      { token: "--color-border", value: "#e5e7eb" },
      { token: "--color-text", value: "#111827" },
      { token: "--color-text-muted", value: "#6b7280" },
    ],
  },
  {
    name: "Spacing",
    tokens: [
      { token: "--space-1", value: "4px" },
      { token: "--space-2", value: "8px" },
      { token: "--space-3", value: "12px" },
      { token: "--space-4", value: "16px" },
      { token: "--space-6", value: "24px" },
      { token: "--space-8", value: "32px" },
      { token: "--space-12", value: "48px" },
      { token: "--space-16", value: "64px" },
    ],
  },
  {
    name: "Border Radius",
    tokens: [
      { token: "--radius-sm", value: "4px" },
      { token: "--radius-md", value: "8px" },
      { token: "--radius-lg", value: "12px" },
      { token: "--radius-full", value: "9999px" },
    ],
  },
  {
    name: "Shadows",
    tokens: [
      { token: "--shadow-sm", value: "0 1px 2px rgba(0,0,0,0.05)" },
      { token: "--shadow-md", value: "0 4px 6px rgba(0,0,0,0.07)" },
      { token: "--shadow-lg", value: "0 10px 15px rgba(0,0,0,0.10)" },
    ],
  },
];

export default function TokensPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tokens</h1>
        <p className="text-lg text-gray-500">
          Raw CSS custom properties powering every component.
        </p>
      </div>
      <div className="space-y-10">
        {tokenGroups.map((group) => (
          <section key={group.name}>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
              {group.name}
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold uppercase tracking-wider text-gray-400 border-b border-gray-100">
                  <th className="pb-2 pr-8">Token</th>
                  <th className="pb-2">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {group.tokens.map((t) => (
                  <tr key={t.token}>
                    <td className="py-2.5 pr-8">
                      <code className="font-mono text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded text-xs">
                        {t.token}
                      </code>
                    </td>
                    <td className="py-2.5 font-mono text-gray-600 text-xs">{t.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </div>
  );
}
