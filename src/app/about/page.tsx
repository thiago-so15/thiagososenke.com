import type { Metadata } from "next";
import AboutSections from "@/components/AboutSections";

export const metadata: Metadata = {
  title: "Sobre mi",
  description:
    "Conoce mas sobre Thiago Sosenke, emprendedor digital y desarrollador web.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:pt-32">
      <AboutSections />
    </section>
  );
}
