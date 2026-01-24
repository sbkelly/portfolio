"use client";

import * as React from "react";
import Image from "next/image";

export type PageKey = "about" | "projects" | "resume";

const NAV_ITEMS = [
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "resume", label: "Resume" },
] as const;

type HeaderProps = {
  activePage: PageKey;
  onNavigate: (page: PageKey) => void;
};

export function Header({ activePage, onNavigate }: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  const handleNavigate = (page: PageKey) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="flex w-full justify-between px-4 py-3">
        <button
          type="button"
          onClick={() => handleNavigate("about")}
          className="flex items-center gap-2 rounded-md p-1 hover:opacity-80"
          aria-label="Go to About"
        >
          <Image
            src="/icons/sk.png"
            alt="SK Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
        </button>

        <nav className="hidden items-center gap-2 sm:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === activePage;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleNavigate(item.key)}
                className={[
                  "rounded-md px-3 py-2 text-sm text-black",
                  "hover:bg-black/5",
                  isActive ? "bg-black/10" : "",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 hover:bg-black/5"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative h-5 w-6">
              <span
                className={[
                  "absolute top-1 left-0 block h-0.5 w-6 bg-black transition",
                  open ? "translate-y-2 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute top-2.5 left-0 block h-0.5 w-6 bg-black transition",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute top-4 left-0 block h-0.5 w-6 bg-black transition",
                  open ? "-translate-y-2 -rotate-45" : "",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open ? (
        <div id="mobile-menu" className="sm:hidden">
          <nav
            className="mx-auto w-full max-w-5xl px-4 pb-4"
            aria-label="Mobile"
          >
            <div className="mt-2 rounded-md border border-black/10 bg-white/90 p-2 backdrop-blur">
              {NAV_ITEMS.map((item) => {
                const isActive = item.key === activePage;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleNavigate(item.key)}
                    className={[
                      "w-full rounded-md px-3 py-2 text-left text-sm text-black",
                      "hover:bg-black/5",
                      isActive ? "bg-black/10" : "",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
