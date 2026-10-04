import PageTransition from "@/components/motion/PageTransition";
import WorkSection from "@/features/work/components/WorkSection";
import Introduction from "@/features/home/components/Introduction";

export default function HomePage() {
  return (
    <PageTransition>
      <main className="flex flex-col text-gray-900">
        <Introduction />
        <WorkSection />
      </main>
    </PageTransition>
  );
}
