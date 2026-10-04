import PageTransition from "@/components/motion/PageTransition";

type CaseStudyProps = {
  title: string;
  product: "sas" | "centible" | "campusnav";
  hero: React.ReactNode;
  children: React.ReactNode;
};

export default function CaseStudy({ title, product, hero, children }: CaseStudyProps) {
  return (
    <PageTransition>
      <article className={`case-study case-study-${product}`}>
        {hero}
        <header className="case-page-heading">
          <h1>{title}</h1>
        </header>
        {children}
      </article>
    </PageTransition>
  );
}
