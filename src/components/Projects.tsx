import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A clean personal portfolio with a responsive layout, smooth UI, and simple navigation.",
      icon: "/icons/sk.png",
      frameworks: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/YOUR_USERNAME/portfolio",
      live: "https://portfolio.vercel.app",
    },
    {
      title: "More",
      description:
        "Track workouts, sets, reps, and progress with a simple dashboard and clean design.",
      icon: "/icons/more.png",
      frameworks: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "tRPC",
        "Prisma",
        "MongoDB",
        "NextAuth.js",
        "React Query",
        "Zod",
        "Pusher",
      ],
      github: "https://github.com/YOUR_USERNAME/workout-tracker",
      live: "https://workout-tracker.vercel.app",
    },
    {
      title: "ByteChess",
      description:
        "A notes app with AI summarization, tagging, and search to organize your thoughts faster.",
      icon: "/icons/bc.png",
      frameworks: ["tRPC", "Zod", "Auth.js"],
      github: "https://github.com/YOUR_USERNAME/ai-notes",
      live: "https://ai-notes.vercel.app",
    },
    {
      title: "Chicobot",
      description:
        "A notes app with AI summarization, tagging, and search to organize your thoughts faster.",
      icon: "/icons/3.png",
      frameworks: ["tRPC", "Zod", "Auth.js"],
      github: "https://github.com/YOUR_USERNAME/ai-notes",
      live: "https://ai-notes.vercel.app",
    },
  ] as const;

  return (
    <section className="no-scrollbar w-full px-4 py-10">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-black">Projects</h1>
          <p className="text-black/70">
            Here are a few projects I’ve built — code and live demos.
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex min-h-[230px] flex-col justify-between rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* Top */}
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-white">
                  <Image
                    src={p.icon}
                    alt={`${p.title} icon`}
                    width={56}
                    height={56}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-black">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-black/70">
                    {p.description}
                  </p>

                  {/* Frameworks */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.frameworks.map((fw) => (
                      <span
                        key={fw}
                        className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/80"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-black hover:bg-black/5"
                >
                  <Image
                    src="/icons/github.png"
                    alt="GitHub"
                    width={18}
                    height={18}
                  />
                  GitHub
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-sm text-white hover:opacity-90"
                >
                  Live <span aria-hidden>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* space to help it "fill" nicely */}
        <div className="h-10 md:h-16" />
      </div>
    </section>
  );
}
