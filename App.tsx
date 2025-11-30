import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ContactForm } from "./components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ContactForm />
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 SolarWien. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
