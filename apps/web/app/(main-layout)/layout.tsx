'use client';

import { Nav } from '@/components/nav';
import SideNav from '@/components/side-nav';
import * as React from 'react';

export default function DashboardLayout({
  margin = 'mt-14',
  children,
  hasDefaultHeader = true,
}: {
  margin?: string;
  children: React.ReactNode;
  hasDefaultHeader?: boolean;
}) {
  return (
    <div className="flex">
      <SideNav />
      <div className="w-full h-screen">
        <Nav hasDefaultHeader={hasDefaultHeader} />
        <div className={margin}>{children}</div>
      </div>
    </div>
  );
}
