import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">HoloTicket Expo 2025</h1>
          <p className="mt-4 text-lg text-white/80 sm:text-xl">
            Step into the future of live entertainment. Secure your spot with a holographic ticketing experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#register"
              className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Register Now
            </a>
            <a
              href="#details"
              className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
