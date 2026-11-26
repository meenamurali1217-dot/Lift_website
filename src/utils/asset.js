/**
 * Helper to resolve public assets correctly on both local dev (root /)
 * and GitHub Pages subpaths (/Lift_website/).
 */
export function asset(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const clean = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${clean}`;
}
