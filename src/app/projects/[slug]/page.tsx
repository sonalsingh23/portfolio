import { getProject, projects } from "@/lib/profile";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Sonal Kumari`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return <ProjectDetail project={project} nextSlug={next.slug} nextTitle={next.title} />;
}
