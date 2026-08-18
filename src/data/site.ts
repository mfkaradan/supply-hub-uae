import ceramics from "@/assets/cat-ceramics.jpg";
import sanitary from "@/assets/cat-sanitary.jpg";
import plumbing from "@/assets/cat-plumbing.jpg";
import electrical from "@/assets/cat-electrical.jpg";
import tools from "@/assets/cat-tools.jpg";
import steel from "@/assets/cat-steel.jpg";
import paints from "@/assets/cat-paints.jpg";
import timber from "@/assets/cat-timber.jpg";
import safety from "@/assets/cat-safety.jpg";

import switchGear from "@/assets/switch-gear.png";
import lighting from "@/assets/lighting.jpeg";
import homeAutomation from "@/assets/home-automation.jpeg";
import powerTools from "@/assets/power-tools.jpeg";
import weldingCutting from "@/assets/welding-cutting.jpeg";
import cement from "@/assets/cement.jpeg";
import flooring from "@/assets/flooring.jpeg";
import kitchens from "@/assets/kitchens.jpeg";
import cleaningEquipment from "@/assets/cleaning-equipment.jpeg";
import generalConsumables from "@/assets/General-consumables.jpeg";
import marine from "@/assets/Marine.jpeg";

// Brand logos
import brand3M from "@/assets/brands/3M.webp";
import abb from "@/assets/brands/ABB.webp";
import albatros from "@/assets/brands/albatros.webp";
import bosch from "@/assets/brands/Bosch.webp";
import cosmoplast from "@/assets/brands/Cosmoplast.webp";
import decoduct from "@/assets/brands/Decoduct.webp";
import dewalt from "@/assets/brands/DeWalt.webp";
import ducab from "@/assets/brands/Ducab.webp";
import fujcab from "@/assets/brands/Fujcab.webp";
import grohe from "@/assets/brands/Grohe.webp";
import henkel from "@/assets/brands/Henkel.webp";
import hikoki from "@/assets/brands/Hikoki.webp";
import kludiRak from "@/assets/brands/KLUDI-RAK.webp";
import knipex from "@/assets/brands/Knipex.webp";
import makita from "@/assets/brands/makita.webp";
import mustang from "@/assets/brands/Mustang.webp";
import panasonic from "@/assets/brands/Panasonic.webp";
import polycon from "@/assets/brands/Polycon.webp";
import puma from "@/assets/brands/Puma.webp";
import rakCeramics from "@/assets/brands/RAK-Ceramics.webp";
import rexton from "@/assets/brands/Rexton.webp";
import stanley from "@/assets/brands/Stanley.webp";
import teka from "@/assets/brands/Teka.webp";
import tileOfSpain from "@/assets/brands/tile-of-spain-usa-logo.webp";
import tramontina from "@/assets/brands/Tramontina.webp";

export type Category = {
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    name: "Ceramics",
    description: "Wall and floor tiles for residential, commercial and fit-out projects.",
    image: ceramics,
  },
  {
    name: "Sanitary Ware",
    description: "Basins, WCs, mixers and bathroom fittings from recognised brands.",
    image: sanitary,
  },
  {
    name: "Plumbing & Sanitary",
    description: "Pipes, fittings, valves and water systems for every installation.",
    image: plumbing,
  },
  {
    name: "Electrical",
    description: "Cables, accessories and installation essentials for site works.",
    image: electrical,
  },
  {
    name: "Switch & Gears",
    description: "Switchgear, distribution and control components for safe power.",
    image: switchGear,
  },
  {
    name: "Lighting",
    description: "Indoor, outdoor and site lighting solutions for all applications.",
    image: lighting,
  },
  {
    name: "Home Automation",
    description: "Smart control products for modern residential and commercial spaces.",
    image: homeAutomation,
  },
  {
    name: "Hardware & Tools",
    description: "Hand tools, fixings and hardware for daily site requirements.",
    image: tools,
  },
  {
    name: "Power Tools",
    description: "Professional power tools and accessories for demanding work.",
    image: powerTools,
  },
  {
    name: "Welding & Cutting",
    description: "Welding equipment, consumables and cutting accessories.",
    image: weldingCutting,
  },
  {
    name: "Steel",
    description: "Reinforcement and structural steel supply for construction works.",
    image: steel,
  },
  {
    name: "Cement",
    description: "Cement and related building products for structural applications.",
    image: cement,
  },
  {
    name: "Timber & Plywood",
    description: "Plywood, boards and timber for formwork, joinery and interiors.",
    image: timber,
  },
  {
    name: "Paints",
    description: "Interior, exterior and protective coatings with related accessories.",
    image: paints,
  },
  {
    name: "Flooring",
    description: "Flooring materials and finishing products for varied environments.",
    image: flooring,
  },
  {
    name: "Kitchens",
    description: "Kitchen fittings and supporting products for residential projects.",
    image: kitchens,
  },
  {
    name: "Safety Wear",
    description: "PPE including helmets, gloves, footwear and high-visibility clothing.",
    image: safety,
  },
  {
    name: "Cleaning Equipment",
    description: "Cleaning machines and equipment for sites and facilities.",
    image: cleaningEquipment,
  },
  {
    name: "General Consumables",
    description: "Everyday consumables that keep site work moving without delays.",
    image: generalConsumables,
  },
  {
    name: "Marine",
    description: "Marine-related supplies and equipment for specialised requirements.",
    image: marine,
  },
];

export const brands = [
  "RAK Ceramics",
  "Kludi RAK",
  "RAKtherm",
  "GROHE",
  "National Paints",
  "Makita",
  "DeWALT",
  "Kärcher",
  "Bosch",
  "Stanley",
  "Weber",
  "Vaultex",
  "Henkel",
  "Ariston",
  "Fosroc",
  "Hepworth",
  "Aquatherm",
  "National Plastic",
  "ESPA",
];
export const brandLogos = [
  rakCeramics,
  kludiRak,
  makita,
  dewalt,
  knipex,
  grohe,
  tramontina,
  albatros,
  panasonic,
  hikoki,
  stanley,
  bosch,
  puma,
  fujcab,
  cosmoplast,
  abb,
  tileOfSpain,
  ducab,
  decoduct,
  mustang,
  henkel,
  polycon,
  rexton,
  brand3M,
  teka,
];