import { content, shared, type Locale } from "@/lib/data";

export default function Footer({ locale }: { locale: Locale }) {
  const c = content[locale];

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-slate-400">
          © {2026} {shared.name}. {c.footer.rights}
        </p>
        <p className="text-sm text-slate-500">{c.footer.madeWith}</p>
      </div>
    </footer>
  );
}
