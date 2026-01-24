"use client";

import * as React from "react";
import { Header, type PageKey } from "~/components/Header";
import { Footer } from "~/components/Footer";
import AboutSection from "~/components/About";
import ProjectsSection from "~/components/Projects";
import ResumeSection from "~/components/Resume";

export default function HomePage() {
  const [page, setPage] = React.useState<PageKey>("about");

  return (
    <main className="no-scrollbar relative flex min-h-screen flex-col bg-white text-black">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Header activePage={page} onNavigate={setPage} />

      <div className="relative flex w-full flex-1 flex-col items-center">
        {page === "about" ? <AboutSection /> : null}
        {page === "projects" ? <ProjectsSection /> : null}
        {page === "resume" ? <ResumeSection /> : null}
      </div>

      <Footer />
    </main>
  );
}
