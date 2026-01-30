import Image from "next/image";

const stats = [
  {
    value: "$50M+",
    label: "Capital deployed",
    sublabel: "Across early-stage deals",
    color: "bg-accent-blue",
    textColor: "text-white",
    rotation: "-rotate-6",
  },
  {
    value: null,
    label: null,
    sublabel: null,
    color: "bg-gray-200",
    textColor: "",
    rotation: "-rotate-2",
    isImage: true,
    imageSrc: "/aurezzi.avif",
    imageAlt: "Aurezzi — celebrity-founded brand",
  },
  {
    value: "40+",
    label: "Companies backed",
    sublabel: "From seed to Series A",
    color: "bg-accent-green",
    textColor: "text-foreground",
    rotation: "rotate-3",
  },
  {
    value: null,
    label: null,
    sublabel: null,
    color: "bg-gray-200",
    textColor: "",
    rotation: "rotate-6",
    isImage: true,
    imageSrc: "/de-soi.webp",
    imageAlt: "De Soi — celebrity-founded brand",
  },
];

export default function StatsCards() {
  return (
    <section className="overflow-hidden px-6 pt-8 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${stat.color} ${stat.rotation} flex aspect-[3/4] w-1/4 min-w-[180px] flex-col justify-between rounded-2xl p-5 shadow-lg transition-transform hover:scale-105 md:min-w-[220px] md:rounded-3xl md:p-7`}
            >
              {stat.isImage ? (
                <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl">
                  <Image
                    src={stat.imageSrc!}
                    alt={stat.imageAlt!}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <>
                  <span
                    className={`${stat.textColor} text-4xl font-extrabold md:text-5xl lg:text-6xl`}
                  >
                    {stat.value}
                  </span>
                  <div>
                    <p
                      className={`${stat.textColor} text-base font-bold md:text-lg`}
                    >
                      {stat.label}
                    </p>
                    <p
                      className={`${stat.textColor} mt-0.5 text-sm opacity-70`}
                    >
                      {stat.sublabel}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
