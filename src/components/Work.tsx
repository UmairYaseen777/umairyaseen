import { PROJECTS } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  return (
    <section
      id="work"
      className="container-x max-w-7xl mx-auto py-16 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 reveal">
        <div className="md:col-span-3">
          <span className="label-mono">§ 01 — Selected Work</span>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display h-section font-light tracking-tight mt-3 md:mt-0 text-ink">
            A small set of <span className="italic">things</span> I'm proud of.
          </h2>
          <p className="text-sm sm:text-base text-muted mt-4 sm:mt-6 max-w-lg">
            Sample case studies showcasing the kind of work I produce —
            interfaces that prioritise clarity, performance, and a sense of
            <em className="font-display italic">considered</em> design.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-14 md:gap-y-16">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
