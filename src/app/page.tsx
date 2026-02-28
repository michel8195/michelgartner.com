export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-24 pb-16">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold mb-6">
          M
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Michel Gartner</h1>
        <p className="mt-2 text-lg text-[var(--muted)]">
          ML Engineer @ MercadoLibre
        </p>
        <p className="mt-3 text-[var(--muted)] max-w-md text-center">
          Building things with data and code. Based in Buenos Aires.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="https://linkedin.com/in/michelgartner"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-[var(--card-border)] hover:bg-[var(--card-bg)] transition text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/michel8195"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-[var(--card-border)] hover:bg-[var(--card-bg)] transition text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Dashboards */}
      <section className="px-6 py-12 max-w-3xl mx-auto w-full">
        <h2 className="text-xl font-semibold mb-6">Dashboards</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <DashboardCard
            emoji="🏥"
            title="Salud"
            desc="Health tracking"
            href="https://salud.michelgartner.com"
            badge="Private"
          />
          <DashboardCard
            emoji="💰"
            title="Finanzas"
            desc="Financial overview"
            href="https://finanzas.michelgartner.com"
            badge="Private"
          />
          <DashboardCard
            emoji="🏠"
            title="Deptos"
            desc="Real estate"
            href="#"
            badge="Coming soon"
            disabled
          />
        </div>
      </section>

      {/* Blog */}
      <section className="px-6 py-12 max-w-3xl mx-auto w-full">
        <h2 className="text-xl font-semibold mb-2">Blog</h2>
        <p className="text-[var(--muted)]">Coming soon — stay tuned.</p>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center text-sm text-[var(--muted)]">
        Built with ☕ and AI
      </footer>
    </main>
  );
}

function DashboardCard({
  emoji,
  title,
  desc,
  href,
  badge,
  disabled,
}: {
  emoji: string;
  title: string;
  desc: string;
  href: string;
  badge: string;
  disabled?: boolean;
}) {
  const content = (
    <div
      className={`rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 transition ${
        disabled ? "opacity-60" : "hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      <div className="text-2xl mb-2">{emoji}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-[var(--muted)] mt-1">{desc}</p>
      <span className="inline-block mt-3 text-xs px-2 py-0.5 rounded-full bg-gray-100 text-[var(--muted)]">
        {badge}
      </span>
    </div>
  );

  if (disabled) return content;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
