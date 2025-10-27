import { useMemo, useState } from 'react';

const TICKETS = [
  { id: 'general', label: 'General Admission', price: 39 },
  { id: 'vip', label: 'VIP Pass', price: 99 },
  { id: 'ultra', label: 'Ultra Holo Pass', price: 159 },
];

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', ticket: 'general', agree: false });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const selectedPrice = useMemo(() => {
    const t = TICKETS.find((t) => t.id === form.ticket);
    return t ? t.price : 0;
  }, [form.ticket]);

  const total = selectedPrice;

  function onChange(e) {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ loading: false, success: false, error: '' });

    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid name and email.' });
      return;
    }
    if (!form.agree) {
      setStatus({ loading: false, success: false, error: 'Please accept the terms to continue.' });
      return;
    }

    try {
      setStatus({ loading: true, success: false, error: '' });
      await new Promise((r) => setTimeout(r, 900));
      setStatus({ loading: false, success: true, error: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Something went wrong. Please try again.' });
    }
  }

  return (
    <section id="register" className="relative w-full bg-gradient-to-b from-black via-black to-black py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Register</h2>
          <p className="mt-3 text-white/70">
            Lock in your holographic access. Receive a unique, scannable pass with live updates and perks.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Instant mobile pass with animated barcode
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
              Priority entry lanes for VIP and Ultra
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-fuchsia-400" />
              Access to AR lounges and merch drops
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={onChange}
                className="mt-2 w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-white/30"
                placeholder="Alex Quantum"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                className="mt-2 w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-white/30"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="ticket" className="block text-sm font-medium text-white">
                Ticket Type
              </label>
              <select
                id="ticket"
                name="ticket"
                value={form.ticket}
                onChange={onChange}
                className="mt-2 w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-white/30"
              >
                {TICKETS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label} — ${t.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4">
              <div>
                <p className="text-sm text-white/70">Total</p>
                <p className="text-xl font-semibold">${total}</p>
              </div>
              <div className="text-right text-xs text-white/50">Taxes included</div>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={form.agree}
                onChange={onChange}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-black text-white focus:ring-transparent"
              />
              <label htmlFor="agree" className="text-sm text-white/80">
                I agree to the terms and privacy policy.
              </label>
            </div>

            {status.error && (
              <div className="rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                {status.error}
              </div>
            )}
            {status.success && (
              <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
                Registration successful! Check your email for your holographic pass.
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.loading ? 'Processing…' : 'Complete Registration'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
