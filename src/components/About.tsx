import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full px-4 py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-sm font-medium text-black/60 md:text-base">
              Sales Engineer • Full-Stack Developer
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-black md:text-5xl">
              Stephen Kelly
            </h1>

            {/* Mobile Photo (shows only on small screens) */}
            <div className="mt-6 flex justify-center md:hidden">
              <div className="relative h-[360px] w-[300px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
                <Image
                  src="/icons/steve.jpeg"
                  alt="Stephen Kelly headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
              I’m pursuing a{" "}
              <span className="font-semibold text-black">Sales Engineer</span>{" "}
              role where I can combine strong technical skills with proven
              closing experience. I completed the{" "}
              <span className="font-semibold text-black">
                University of Texas Web Development Bootcamp
              </span>{" "}
              and I’ve built full-stack apps (Next.js / TypeScript / MongoDB).
              I’ve also carried a quota—generating{" "}
              <span className="font-semibold text-black">
                $2.1M+ in revenue
              </span>{" "}
              and ranking as a top performer as an Account Executive.
            </p>

            {/* Proof points */}
            <div className="mt-8 max-w-xl rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur md:p-6">
              <p className="text-sm font-semibold text-black md:text-base">
                Highlights
              </p>

              <ul className="mt-3 space-y-2 text-sm text-black/75 md:text-base">
                <li>
                  • #1 Sales Rep (2020) —{" "}
                  <span className="font-medium text-black">$466K</span> revenue,
                  55% above goal (Inter Miami CF Project)
                </li>
                <li>
                  • #2 Sales Rep (2019) —{" "}
                  <span className="font-medium text-black">$1.67M</span>{" "}
                  revenue, 535 new accounts
                </li>
                <li>
                  • Full-stack projects: React/Next.js, Node, MongoDB, auth,
                  APIs
                </li>
                <li>• Fluent in Spanish</li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 md:text-base"
              >
                View Resume
              </a>

              <a
                href="mailto:sbk13@my.fsu.edu"
                className="rounded-md border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-black/5 md:text-base"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-black/5 md:text-base"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Photo (shows only on md+) */}
          <div className="hidden justify-center md:flex md:justify-end">
            <div className="relative h-[460px] w-[380px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <Image
                src="/icons/steve.jpeg"
                alt="Stephen Kelly headshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
