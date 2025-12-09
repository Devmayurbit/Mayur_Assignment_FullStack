import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ClientsSection from "./components/ClientsSection.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <ProjectsSection />
        <ClientsSection />
        <section
          id="contact"
          className="py-16 bg-slate-100/80 border-y border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <ContactForm />
            <Newsletter />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
