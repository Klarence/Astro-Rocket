/**
 * Navigation Configuration
 *
 * Defines which pages appear in the site navigation and their display order.
 * Astro handles routing via the filesystem — this only controls nav menus.
 */

export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/about', order: 1 },
  { label: 'ROI Calculator', href: '/roi-calculator', order: 2 },
  { label: 'Team', href: '/team', order: 3 },
  { label: 'Privacy & Security', href: '/privacy', order: 4 },
  {
    label: 'Trust Center',
    href: 'https://app.vanta.com/elorahq.com/trust/3o0xy0fhz2io3h82sywucb',
    order: 5,
  },
];

/**
 * Get navigation items sorted by order
 */
export function getNavItems(): NavItem[] {
  return [...navItems].sort((a, b) => a.order - b.order);
}
