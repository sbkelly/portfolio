import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-6">
      <div className="flex w-full items-center justify-center gap-6 px-4">
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80"
          aria-label="GitHub"
        >
          <Image src="/icons/github.png" alt="GitHub" width={28} height={28} />
        </a>

        <a
          href="mailto:youremail@gmail.com"
          className="hover:opacity-80"
          aria-label="Email"
        >
          <Image src="/icons/email.png" alt="Email" width={28} height={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80"
          aria-label="LinkedIn"
        >
          <Image
            src="/icons/linkedin.png"
            alt="LinkedIn"
            width={28}
            height={28}
          />
        </a>
      </div>
    </footer>
  );
}
