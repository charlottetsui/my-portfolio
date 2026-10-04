import WorkCard from "./WorkCard";
import works from "@/features/work/content/works";

export default function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="w-full scroll-mt-28">
      <h2 id="work-heading" className="sr-only">Selected work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 items-start">
        {works.map((w, index) => (
          <div key={w.id} className="w-full">
            <WorkCard
              image={w.image}
              title={w.title}
              href={w.href}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
