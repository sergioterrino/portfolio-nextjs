export const getImagePath = (path: string): string => {
  // En GitHub Pages, siempre usar el basePath
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    return `/portfolio-nextjs${path}`;
  }
  // En localhost, usar la ruta directa
  return path;
};
