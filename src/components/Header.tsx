"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import translations from "@/data/translations";

export default function Header() {
  const { theme, toggleTheme, lang, toggleLang } = useApp();
  const t = translations[lang].nav;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[#7c3aed] transition-colors hover:text-[#6d28d9] dark:text-[#b026ff] dark:drop-shadow-[0_0_6px_#b026ff] dark:hover:drop-shadow-[0_0_10px_#b026ff]"
        >
          Thiago Sosenke
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="text-sm text-neutral-600 transition-colors hover:text-[#7c3aed] dark:text-neutral-400 dark:hover:text-[#b026ff] dark:hover:drop-shadow-[0_0_6px_#b026ff]"
              >
                {t.home}
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-sm text-neutral-600 transition-colors hover:text-[#7c3aed] dark:text-neutral-400 dark:hover:text-[#b026ff] dark:hover:drop-shadow-[0_0_6px_#b026ff]"
              >
                {t.projects}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm text-neutral-600 transition-colors hover:text-[#7c3aed] dark:text-neutral-400 dark:hover:text-[#b026ff] dark:hover:drop-shadow-[0_0_6px_#b026ff]"
              >
                {t.about}
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-lg border border-neutral-200 p-2 text-neutral-600 transition-colors hover:text-[#7c3aed] dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-[#b026ff]"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="rounded-lg border border-neutral-200 px-2 py-1.5 text-xs font-semibold text-neutral-600 transition-colors hover:text-[#7c3aed] dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-[#b026ff]"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
