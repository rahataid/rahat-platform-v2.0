'use client';

import { findRoute } from '@repo/ui/findRoute';
import { routeConfig } from '@repo/ui/routeConfig';
import { useParams, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const params = useParams();
  const slug = (params?.segments as string[]) || [];
  const { menu } = findRoute(slug, routeConfig) || {};

  // If there's no segment ("/projects"), return children directly
  if (slug.length === 0) {
    return <>{children}</>;
  }

  return (
    <div>
      <h4>Project Layout</h4>
      <nav>
        {menu.map((item) => (
          <a key={item.path} href={item.path} style={{ marginRight: '10px' }}>
            {item.name}
          </a>
        ))}
        <p style={{ cursor: 'pointer' }} onClick={() => router.back()}>
          Back
        </p>
      </nav>

      <main>{children}</main>
    </div>
  );
}
