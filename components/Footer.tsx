import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-slate-400">
          © {2026} {personal.name}. Vse pravice pridržane.
        </p>
        <p className="text-sm text-slate-500">
          Izdelano z Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
