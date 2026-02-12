"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import translations from "@/data/translations";

export default function AboutSections() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { lang } = useApp();
  const t = translations[lang].about;

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
        {t.title}
      </h1>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.sections.map((section) => {
          const isOpen = openId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => setOpenId(isOpen ? null : section.id)}
              className="cursor-pointer rounded-xl border border-neutral-200 bg-white p-6 text-left transition-all hover:border-[#7c3aed] hover:shadow-[0_0_12px_#7c3aed40] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-[#39ff14] dark:hover:shadow-[0_0_15px_#39ff14]"
            >
              <h2 className="text-lg font-semibold text-[#7c3aed] dark:text-[#b026ff] dark:drop-shadow-[0_0_4px_#b026ff]">
                {section.title}
              </h2>
              <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                {section.subtitle}
              </p>
              {isOpen && (
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {section.content}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
