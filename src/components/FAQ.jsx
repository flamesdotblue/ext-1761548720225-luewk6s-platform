import { useState } from 'react';

const QA = [
  {
    q: 'Can I upgrade my ticket later?',
    a: 'Yes. You can upgrade from General to VIP or Ultra before the event. Your holographic pass updates instantly.'
  },
  {
    q: 'Is there re-entry?',
    a: 'Re-entry is allowed for VIP and Ultra passes. General Admission may re-enter once with staff assistance.'
  },
  {
    q: 'What do I need at the gate?',
    a: 'Bring your digital pass and a valid ID. The glowing barcode on your pass is your admission token.'
  },
  {
    q: 'Are refunds available?',
    a: 'Refunds are available up to 7 days before the event. You may also transfer your pass to another attendee.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">FAQ</h2>
          <p className="mt-3 text-white/70">Quick answers to common questions.</p>
        </div>

        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {QA.map((item, idx) => (
            <div key={idx} className="p-6">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-${idx}`}
              >
                <span className="text-base font-medium">{item.q}</span>
                <span className="ml-4 text-white/50">{open === idx ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-${idx}`}
                className={`overflow-hidden text-white/70 transition-[max-height] duration-300 ${
                  open === idx ? 'max-h-40 mt-3' : 'max-h-0'
                }`}
              >
                <p className="text-sm">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
