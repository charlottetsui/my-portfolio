import WorkCard from "./WorkCard";
import works from "../data/works";
import PageTransition from "./PageTransition";

export default function WorkSection() {
  return (
    <PageTransition>
      <section id="work" className="w-full my-8 max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24  items-start">
          {works.map((w) => (
            <div key={w.id} className="w-full">
              <WorkCard
                image={w.image}
                title={w.title}
                description={w.description}
                href={w.href}
              />
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
