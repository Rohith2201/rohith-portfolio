import Link from "next/link";

type BreadcrumbsProps = {
  current: string;
  parent?: { label: string; href: string };
};

export function Breadcrumbs({ current, parent }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="breadcrumb-shell flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-current/50"
    >
      <Link href="/" className="transition-colors hover:text-[#e25b38]">
        Home
      </Link>
      <span aria-hidden="true">/</span>
      {parent && (
        <>
          <Link
            href={parent.href}
            className="transition-colors hover:text-[#e25b38]"
          >
            {parent.label}
          </Link>
          <span aria-hidden="true">/</span>
        </>
      )}
      <span className="text-current/75">{current}</span>
    </nav>
  );
}
