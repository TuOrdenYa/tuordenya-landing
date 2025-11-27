import setLeadSource from "../lib/leadSource";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 py-6 text-[11px] text-slate-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between gap-3">
        <p>
          © {new Date().getFullYear()} TuOrdenYa. Todos los derechos
          reservados.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#productos" className="hover:text-[#FF6F3C]">
            Productos
          </a>
          <a href="#faq" className="hover:text-[#FF6F3C]">
            FAQs
          </a>
          <a href="#contacto" className="hover:text-[#FF6F3C]" onClick={() => setLeadSource("footer_contact")}>
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
