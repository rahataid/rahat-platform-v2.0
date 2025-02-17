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
    return <Projects />;
  }

  // Redirect or show 404 if there is only one segment (e.g., "/projects/el-kenya")
  if (slug.length === 1) {
    // notFound();
    redirect('/projects');
  }

  // Find the matching route
  const match = findRoute(slug, routeConfig);

  const Component = match ? match.component : notFound();

  return <Component slug={slug} routeParams={match.params} />;
}
