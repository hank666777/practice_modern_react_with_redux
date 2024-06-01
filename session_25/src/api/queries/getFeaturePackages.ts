import type { PackageDetails } from '../types/packageDetails';

/**
 * <pre>
 * all capital letters, this is a sign to other engineers in any way.
 * I should say they shouldn't be changing it with code
 * </pre>
 */
const FEATURE_PACKAGES = [
  'react', 'typescript', 'esbuild', 'vite'
];

export async function getFeaturedPackages() {
  const promises = FEATURE_PACKAGES.map(async (name) => {
    const res = await fetch(`https://registry.npmjs.org/${name}`);
    return res.json();
  })

  return await Promise.all(promises) as PackageDetails[];
}