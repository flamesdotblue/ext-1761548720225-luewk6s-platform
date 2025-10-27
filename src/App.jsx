import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <main className="relative z-10">
        <EventDetails />
        <RegistrationForm />
        <FAQ />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} HoloTicket Expo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
