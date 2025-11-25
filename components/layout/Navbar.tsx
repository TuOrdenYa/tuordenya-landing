"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isHeaderPlansOpen, setIsHeaderPlansOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobilePlansOpen, setIsMobilePlansOpen] = useState(false); // acordeón productos en móvil

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePlansOpen(false);
  };

  return (
    <header className="border-b border-slate-800/80 sticky top-0 z-30 backdrop-blur bg-slate-950/90">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Logo TuOrdenYa */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/logo-tuordenya-white.png"
                alt="TuOrdenYa"
                width={140}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm sm:text-base">
                Menús y órdenes para restaurantes
              </span>
            </div>
          </a>
        </div>

        {/* NAV DESKTOP */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#como-funciona" className="hover:text-[#FF6F3C]">
            Cómo funciona
          </a>

          {/* Dropdown de productos en el header (desktop) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsHeaderPlansOpen((open) => !open)}
              className="inline-flex items-center gap-1 hover:text-[#FF6F3C]"
            >
              Nuestros productos
              <span className="text-[10px]">▼</span>
            </button>

            {isHeaderPlansOpen && (
              <div className="absolute left-0 mt-2 w-52 rounded-xl border border-slate-800 bg-slate-900 shadow-lg py-2 text-xs z-40">
                <a
                  href="/light"
                  className="block px-3 py-1.5 hover:bg-slate-800 hover:text-[#FF6F3C]"
                >
                  Light — Menú digital + QR
                </a>
                <a
                  href="/plus"
                  className="block px-3 py-1.5 hover:bg-slate-800 hover:text-[#FF6F3C]"
                >
                  Plus — Pedidos y reportes
                </a>
                <a
                  href="/pro"
                  className="block px-3 py-1.5 hover:bg-slate-800 hover:text-[#FF6F3C]"
                >
                  Pro — Operación completa
                </a>
              </div>
            )}
          </div>

          <a href="#faq" className="hover:text-[#FF6F3C]">
            FAQs
          </a>
        </div>

        {/* ACCIONES DERECHA */}
        <div className="flex items-center gap-3">
          {/* CTA desktop */}
          <a
            href="#contacto"
            className="hidden sm:inline-flex text-xs sm:text-sm px-4 py-2 rounded-full bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors md:inline-flex"
          >
            Agenda una demo
          </a>

          {/* Botón menú móvil */}
          <button
            type="button"
            className="inline-flex items-center justify-center md:hidden h-9 w-9 rounded-full border border-slate-700 text-slate-100"
            onClick={() =>
              setIsMobileMenuOpen((open) => {
                const next = !open;
                if (!next) setIsMobilePlansOpen(false);
                return next;
              })
            }
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* PANEL MENÚ MÓVIL */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2 text-sm">
            <a
              href="#como-funciona"
              className="block py-2 text-slate-100 hover:text-[#FF6F3C]"
              onClick={closeMobileMenu}
            >
              Cómo funciona
            </a>

            {/* Acordeón "Nuestros productos" en móvil */}
            <div className="pt-1">
              <button
                type="button"
                className="w-full flex items-center justify-between py-2 text-slate-100 hover:text-[#FF6F3C]"
                onClick={() => setIsMobilePlansOpen((open) => !open)}
              >
                <span>Nuestros productos</span>
                <span className="text-[10px]">
                  {isMobilePlansOpen ? "▲" : "▼"}
                </span>
              </button>

              {isMobilePlansOpen && (
                <div className="mt-1 space-y-1 text-xs pl-3 border-l border-slate-800">
                  <a
                    href="/light"
                    className="block py-1 text-slate-200 hover:text-[#FF6F3C]"
                    onClick={closeMobileMenu}
                  >
                    Light — Menú digital + QR
                  </a>
                  <a
                    href="/plus"
                    className="block py-1 text-slate-200 hover:text-[#FF6F3C]"
                    onClick={closeMobileMenu}
                  >
                    Plus — Pedidos y reportes
                  </a>
                  <a
                    href="/pro"
                    className="block py-1 text-slate-200 hover:text-[#FF6F3C]"
                    onClick={closeMobileMenu}
                  >
                    Pro — Operación completa
                  </a>
                </div>
              )}
            </div>

            <a
              href="#faq"
              className="block pt-2 pb-1 text-slate-100 hover:text-[#FF6F3C]"
              onClick={closeMobileMenu}
            >
              FAQs
            </a>

            <a
              href="#contacto"
              className="mt-2 inline-flex w-full justify-center text-xs sm:text-sm px-4 py-2.5 rounded-full bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors"
              onClick={closeMobileMenu}
            >
              Agenda una demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
