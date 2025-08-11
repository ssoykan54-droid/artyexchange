// This file contains curated data for Berlin graffiti map, skateparks, legal walls,
// hotspots and music performance locations. Each location includes metadata
// used to populate the interactive map, list view and marker pop‑ups on the
// GraffitiMap page. Category names should remain consistent with the
// filtering UI. Approximate positions (left/top) are expressed as CSS
// percentages relative to the map container and can be fine‑tuned later.

export type LocationCategory =
  | 'iconic'
  | 'historical'
  | 'skatepark'
  | 'legal-wall'
  | 'hotspot'
  | 'music-spot';

export interface Location {
  id: string;
  title: string;
  category: LocationCategory;
  artist?: string;
  year?: number;
  description: string;
  address: string;
  /**
   * CSS positioning for markers on the simplified map. Values are strings
   * such as '45%' and '35%'. These positions roughly correspond to
   * lat/long locations within Berlin on a stylised map. They can be
   * adjusted without breaking the data contract.
   */
  position: { left: string; top: string };
  /**
   * Prebuilt Google Maps link for external navigation. This field makes
   * pop‑ups more informative and allows users to open the location in
   * Google Maps directly.
   */
  googleMapsLink: string;
}

/**
 * Category metadata used for rendering the filtering navigation on the
 * GraffitiMap page. The `color` property corresponds to Tailwind CSS
 * background classes to distinguish markers and badges. Keep the `id`
 * values aligned with the LocationCategory union above.
 */
export const categories = [
  { id: 'iconic', label: 'Iconic Murals', color: 'bg-red-500' },
  { id: 'historical', label: 'Historical Murals', color: 'bg-orange-500' },
  { id: 'skatepark', label: 'Skateparks', color: 'bg-green-500' },
  { id: 'legal-wall', label: 'Legal Walls', color: 'bg-blue-500' },
  { id: 'hotspot', label: 'Hotspots', color: 'bg-purple-500' },
  { id: 'music-spot', label: 'Music Spots', color: 'bg-yellow-500' }
] as const;

/**
 * Primary dataset of map locations. Descriptions and addresses were
 * synthesised from the provided PDFs including Famous Graffiti Murals in
 * Berlin, Interactive Map Full Locations and Descriptions, and Music
 * Hotspots in Berlin. Coordinates were converted to approximate
 * percentages for use on a stylised Berlin map. Artists and years are
 * included when applicable. Google Maps links use latitude and longitude
 * values derived from the source material where available.
 */
export const locations: Location[] = [
  // Iconic murals
  {
    id: 'cosmonaut',
    title: 'Astronaut / Cosmonaut',
    category: 'iconic',
    artist: 'Victor Ash',
    year: 2007,
    description:
      'Largest stencil of a floating astronaut; references the Cold‑War space race.',
    address: 'Mariannenstraße, Kreuzberg',
    position: { left: '35%', top: '40%' },
    googleMapsLink: 'https://maps.google.com/?q=52.4996,13.4232'
  },
  {
    id: 'pink-man',
    title: 'Pink Man (Leviathan)',
    category: 'iconic',
    artist: 'Blu',
    year: 2007,
    description:
      'Five‑storey pink giant formed by many bodies; warns against conformity and fascism.',
    address: 'Oberbaumbrücke, Kreuzberg',
    position: { left: '65%', top: '45%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5009,13.4450'
  },
  {
    id: 'yellow-man',
    title: 'Yellow Man',
    category: 'iconic',
    artist: 'Os Gêmeos',
    year: 2005,
    description:
      'Colourful yellow‑skinned figure based on the artists’ dream; signature heads painted on Oppelner Str.',
    address: 'Oppelner Straße 3, Kreuzberg',
    position: { left: '40%', top: '55%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5001,13.4408'
  },
  {
    id: 'world-balloon',
    title: 'World Balloon',
    category: 'iconic',
    artist: 'Jadore Tong',
    year: 2012,
    description:
      'Elephant holding a globe; ribbons carry words like “Peace” and “Unity”, bringing optimism.',
    address: 'Wilhelmstraße 7, Kreuzberg',
    position: { left: '50%', top: '60%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5012,13.3900'
  },
  {
    id: 'rainbow-house',
    title: 'Rainbow House',
    category: 'historical',
    artist: 'Community project',
    year: 1990,
    description:
      'A massive rainbow project across two towers; a symbol of late 1990s optimism in Herzbergstraße.',
    address: 'Möllendorffstraße / Herzbergstraße, Lichtenberg',
    position: { left: '55%', top: '30%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5235,13.4838'
  },
  {
    id: 'give-hand',
    title: 'Give a Hand to Those Who Have Fallen',
    category: 'historical',
    artist: 'Collin van der Sluij',
    year: 2018,
    description:
      'Oversized boy shielding a chained elephant; message “As Long As You Are Standing, Give a Hand to Those Who Have Fallen”.',
    address: 'Stromstraße 36, Moabit',
    position: { left: '30%', top: '65%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5315,13.3428'
  },
  {
    id: 'starling',
    title: 'The Starling',
    category: 'iconic',
    artist: 'Js & Super A',
    year: 2016,
    description:
      'Intricate blue bird mural mixing natural beauty with urban complexity.',
    address: 'Neheimer Straße 6, Berlin',
    position: { left: '25%', top: '70%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5772,13.2758'
  },

  // Skateparks
  {
    id: 'warschauer-skatepark',
    title: 'Skatepark at Warschauer Brücke (RAW‑Gelände)',
    category: 'skatepark',
    description: 'Full of graffiti; cultural hotspot on the RAW site near Warschauer Straße.',
    address: 'Revaler Straße 99, 10245 Berlin',
    position: { left: '20%', top: '40%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5032,13.4530'
  },
  {
    id: 'skatehalle-berlin',
    title: 'Skatehalle Berlin',
    category: 'skatepark',
    description: 'Indoor skatepark that often has legal pieces on outside walls.',
    address: 'Revaler Straße 99, 10245 Berlin',
    position: { left: '22%', top: '42%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5034,13.4540'
  },
  {
    id: 'dogshit-spot',
    title: 'Dogshit Spot (Hasenheide)',
    category: 'skatepark',
    description: 'Raw, very DIY skatepark with graffiti all around.',
    address: 'Columbiadamm 184, 10965 Berlin',
    position: { left: '18%', top: '50%' },
    googleMapsLink: 'https://maps.google.com/?q=52.4880,13.3940'
  },
  {
    id: 'gleisdreieck-skatepark',
    title: 'Skatepark Gleisdreieck',
    category: 'skatepark',
    description: 'Clean park with a mural‑friendly vibe near the Gleisdreieck park.',
    address: 'Möckernstraße 26, 10963 Berlin',
    position: { left: '25%', top: '58%' },
    googleMapsLink: 'https://maps.google.com/?q=52.4990,13.3790'
  },

  // Legal Walls
  {
    id: 'mauerpark-wall',
    title: 'Legal Mauerpark Wall',
    category: 'legal-wall',
    description: 'Famous legal wall for artists in Mauerpark.',
    address: 'Gleimstraße 55, 10437 Berlin',
    position: { left: '75%', top: '40%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5430,13.4020'
  },
  {
    id: 'yaam-wall',
    title: 'YAAM Berlin Wall',
    category: 'legal-wall',
    description: 'Community spot near Schillingbrücke with events, music and painting.',
    address: 'An der Schillingbrücke 3, 10243 Berlin',
    position: { left: '78%', top: '45%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5100,13.4280'
  },
  {
    id: 'schoenhauser-tunnel',
    title: 'Schönhauser Allee Tunnel',
    category: 'legal-wall',
    description: 'Tunnel underpass known for murals and allowed painting zones near S‑Bahnhof Schönhauser Allee.',
    address: 'Schönhauser Allee Tunnel, Berlin',
    position: { left: '65%', top: '25%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5439,13.4132'
  },
  {
    id: 'hallesches-wall',
    title: 'Hallesches Tor Wall',
    category: 'legal-wall',
    description: 'Legally allowed graffiti wall in sections near Tempelhofer and Hallesches Ufer.',
    address: 'Tempelhofer Ufer / Hallesches Ufer corner, 10963 Berlin',
    position: { left: '70%', top: '55%' },
    googleMapsLink: 'https://maps.google.com/?q=52.4985,13.3840'
  },

  // Hotspots
  {
    id: 'teufelsberg',
    title: 'Teufelsberg',
    category: 'hotspot',
    description: 'Abandoned Cold War NSA spy station turned graffiti paradise.',
    address: 'Teufelsseechaussee 10, 14193 Berlin',
    position: { left: '80%', top: '20%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5079,13.2469'
  },
  {
    id: 'oberbaum-hotspot',
    title: 'Oberbaum Bridge Hotspot',
    category: 'hotspot',
    description: 'Iconic bridge frequently covered in new graffiti.',
    address: 'Oberbaumbrücke, 10243 Berlin',
    position: { left: '60%', top: '60%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5025,13.4466'
  },
  {
    id: 'urban-spree',
    title: 'Urban Spree',
    category: 'hotspot',
    description: 'Art venue with exterior wall paintings; murals by famous artists.',
    address: 'Revaler Straße 99, 10245 Berlin',
    position: { left: '62%', top: '62%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5038,13.4545'
  },
  {
    id: 'tacheles-ruins',
    title: 'Tacheles Ruins',
    category: 'hotspot',
    description: 'Former art house with a legal wall; very popular and constantly changing.',
    address: 'Oranienburger Straße 54‑56, 10117 Berlin',
    position: { left: '55%', top: '65%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5250,13.3889'
  },

  // Music Spots
  {
    id: 'music-oberbaum',
    title: 'Oberbaumbrücke Music Spot',
    category: 'music-spot',
    description: 'Drum circles, guitarists and DJs gather at sunset.',
    address: 'Oberbaumbrücke, 10243 Berlin',
    position: { left: '60%', top: '63%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5025,13.4466'
  },
  {
    id: 'admiralbruecke',
    title: 'Admiralbrücke',
    category: 'music-spot',
    description: 'Cozy acoustic gigs at night; locals often bring beers.',
    address: 'Admiralbrücke, Kreuzberg',
    position: { left: '58%', top: '65%' },
    googleMapsLink: 'https://maps.google.com/?q=52.4933,13.4319'
  },
  {
    id: 'yaam-beach',
    title: 'YAAM Beach',
    category: 'music-spot',
    description: 'Reggae and dancehall live sessions on the Spree riverbank.',
    address: 'An der Schillingbrücke 3, 10243 Berlin',
    position: { left: '70%', top: '42%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5100,13.4280'
  },
  {
    id: 'mauerpark-flohmarkt',
    title: 'Mauerpark Flohmarkt',
    category: 'music-spot',
    description: 'Famous Sunday flea market with live crowd singing, buskers and DJs spinning vinyl.',
    address: 'Bernauer Straße 63‑64, Prenzlauer Berg',
    position: { left: '76%', top: '38%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5434,13.4027'
  },
  {
    id: 'raw-flohmarkt',
    title: 'RAW Flohmarkt',
    category: 'music-spot',
    description: 'Gritty Sunday market with drum circles, electronic buskers and punk acts near the skate park.',
    address: 'RAW‑Gelände, Revaler Straße 99, Friedrichshain',
    position: { left: '22%', top: '44%' },
    googleMapsLink: 'https://maps.google.com/?q=52.5034,13.4542'
  }
];