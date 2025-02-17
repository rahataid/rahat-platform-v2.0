'use client';

import { findRoute } from '@repo/ui/findRoute';
import Projects from '@repo/ui/projects';
import { routeConfig } from '@repo/ui/routeConfig';
import { notFound, redirect, useParams } from 'next/navigation';

export default function DynamicCatchAllPage() {
  const params = useParams();
  const slug: string[] = (params?.segments as string[]) || [];

  // Handle "/projects" separately (empty slug)
  if (slug.length === 0) {
    return <Projects />; // Render a landing page for projects
  }

  // Redirect or show 404 if there is only one segment (e.g., "/projects/el-kenya")
  if (slug.length === 1) {
    // notFound();
    redirect('/projects'); // Or redirect("/projects") if you want to send them back
  }

  // Find the matching route
  const match = findRoute(slug, routeConfig);

  // If no match is found, use the NotFound component.
  const Component = match ? match.component : notFound();

  return <Component slug={slug} routeParams={match.params} />;
}
