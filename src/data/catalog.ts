import { categories, brands, type Category } from "./site";

export type CatalogCategory = Category & { slug: string };

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const catalog: CatalogCategory[] = categories.map((c) => ({ ...c, slug: slugify(c.name) }));

export function findCategory(slug: string) {
  return catalog.find((c) => c.slug === slug);
}

export const featuredSlugs = [
  "ceramics",
  "sanitary-ware",
  "electrical",
  "plumbing-and-sanitary",
  "hardware-and-tools",
  "power-tools",
];

export const featuredCategories = featuredSlugs
  .map((s) => findCategory(s))
  .filter(Boolean) as CatalogCategory[];

export const homeCategoryNames = [
  "Ceramics",
  "Sanitary Ware",
  "Plumbing & Sanitary",
  "Electrical",
  "Lighting",
  "Hardware & Tools",
  "Power Tools",
  "Steel",
  "Cement",
  "Timber & Plywood",
  "Paints",
  "Flooring",
];

export const homeCategories = homeCategoryNames
  .map((n) => catalog.find((c) => c.name === n))
  .filter(Boolean) as CatalogCategory[];

/** Brands from the ABM profile, grouped by the categories they relate to. */
export const brandCategories: Record<string, string[]> = {
  Ceramics: ["RAK Ceramics"],
  Flooring: ["RAK Ceramics"],
  "Sanitary Ware": ["RAK Ceramics", "Kludi RAK", "GROHE", "Ariston"],
  "Plumbing & Sanitary": ["RAKtherm", "Hepworth", "Aquatherm", "National Plastic", "ESPA"],
  Paints: ["National Paints"],
  "Hardware & Tools": ["Makita", "DeWALT", "Bosch", "Stanley"],
  "Power Tools": ["Makita", "DeWALT", "Bosch"],
  "Welding & Cutting": ["Bosch", "Stanley"],
  "Cleaning Equipment": ["Kärcher"],
  "Safety Wear": ["Vaultex"],
  Cement: ["Weber", "Fosroc", "Henkel"],
};

export function brandsForCategory(name: string) {
  return brandCategories[name] ?? [];
}

export const allBrands = [...brands].sort((a, b) => a.localeCompare(b));
