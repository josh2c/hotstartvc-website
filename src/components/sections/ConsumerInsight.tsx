export default function ConsumerInsight() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        {/* Circled number */}
        <div className="mb-12 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground">
            <span className="text-lg font-semibold">1</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          Consumers today, and increasingly in the future, are drawn to products
          and ideas from{" "}
          <span className="consumer-insight-outline italic">
            celebrities they admire
          </span>{" "}
          and feel connected to.
        </h2>
      </div>
    </section>
  );
}
