import { ReactNode } from 'react';
import { Route } from './routeConfig';

export function findRoute(
  slug: string[],
  routes: Route[],
): { component?: () => ReactNode; menu: { name: string; path: string }[] } {
  let currentRoutes = routes;
  let menu: { name: string; path: string }[] = [];
  let matchedComponent: (() => ReactNode) | undefined;

  let pathSoFar = '/projects'; // Base path

  for (const segment of slug) {
    const foundRoute = currentRoutes.find(
      (route) => route.path === segment || route.path.startsWith(':'),
    );

    if (!foundRoute) break;

    pathSoFar += `/${segment}`;

    // If it's the last matched route, store the component
    if (foundRoute.component) {
      matchedComponent = foundRoute.component;
    }

    // Extract menu from children routes
    if (foundRoute.children) {
      menu = foundRoute.children
        .filter((child) => !child.path.startsWith(':')) // Ignore dynamic segments in menu
        .map((child) => ({
          name: child.path.charAt(0).toUpperCase() + child.path.slice(1), // Capitalize first letter
          path: `${pathSoFar}/${child.path}`,
        }));

      currentRoutes = foundRoute.children; // Move to next level
    }
  }

  return { component: matchedComponent, menu };
}
