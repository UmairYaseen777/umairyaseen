import type { Project } from "../data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="proj-card reveal group"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="cursor-pointer overflow-hidden bg-paper aspect-[4/3] mb-4 sm:mb-5 relative rounded-sm">
        <div
          className="proj-img absolute inset-0 flex items-center justify-center p-4 sm:p-6"
          style={{ background: project.bg }}
        >
          <img src={project.image} alt="Project Images" />
        </div>
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 font-mono text-[10px] sm:text-xs bg-white/90 backdrop-blur px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-ink">
          0{index + 1}
        </div>
      </div>

      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl sm:text-2xl font-normal mb-1 text-ink">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted">{project.tagline}</p>
        </div>
        <div className="font-mono text-[10px] sm:text-[11px] text-muted text-right shrink-0 pt-1">
          {project.year}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <span
            key={t}
            className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-1.5 sm:px-2 py-0.5 border border-line rounded text-ink-soft"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <a
          href={project.websiteUrl}
          target="_blank"
          className="
  font-mono
    inline-flex items-center justify-center
    rounded-xl
    border border-black
    bg-white
    px-4 py-2
    text-xs font-normal uppercase
    text-black
    shadow-md
    transition-all duration-300
    hover:bg-black
    hover:text-white
    hover:scale-105
    hover:tracking-[0.2em]
  "
        >
          View Project
        </a>
      </div>
    </div>
  );
}
