export default function EventDetails() {
  return (
    <section id="details" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Event Details</h2>
          <p className="mt-3 text-white/70">
            A one-day immersive showcase of futuristic ticketing, interactive media, and live performances. Experience
            holographic access, instant upgrades, and personalized content streams.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="When" content="July 12, 2025 • 10:00 AM – 8:00 PM" />
          <Card title="Where" content="NeoCity Arts Complex, Hall C • 221 Orbit Ave, Sector 7" />
          <Card
            title="Experience"
            content="Holographic 'Admit One' passes, glowing barcode gates, AR lounges, and live DJ performances."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, content }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{content}</p>
    </div>
  );
}
