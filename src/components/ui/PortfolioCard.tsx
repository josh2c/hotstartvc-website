import Image from "next/image";
import type { PortfolioCompany } from "@/lib/portfolio-data";

interface PortfolioCardProps {
  company: PortfolioCompany;
}

export default function PortfolioCard({ company }: PortfolioCardProps) {
  return (
    <article
      className="relative w-[280px] shrink-0 overflow-hidden rounded-2xl md:w-[360px] md:rounded-3xl lg:w-[400px]"
      style={{ aspectRatio: "3 / 4" }}
    >
      {/* Image or placeholder */}
      {company.image ? (
        <Image
          src={company.image}
          alt={company.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 400px"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-foreground/20"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, rgba(${company.accentColor}, 0.9) 0%, rgba(${company.accentColor}, 0.4) 40%, transparent 70%)`,
        }}
      />

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
          {company.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-white/80 md:text-base">
          {company.founder}
        </p>
      </div>
    </article>
  );
}
