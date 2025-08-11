export interface GraffitiMural {
  id: string;
  title: string;
  artist: string;
  year: string;
  medium: string;
  location: string;
  address: string;
  coordinates: { lat: number; lng: number };
  type: 'iconic' | 'historical' | 'skatepark' | 'legal-wall' | 'hotspot';
  culturalBackground: string;
  imageUrl: string;
  isIconic?: boolean;
}

export const berlinGraffitiMurals: GraffitiMural[] = [
  // Iconic Murals
  {
    id: '1',
    title: 'My God, Help Me to Survive This Deadly Love',
    artist: 'Dmitri Vrubel',
    year: '1990',
    medium: 'Spray paint on concrete',
    location: 'East Side Gallery',
    address: 'Mühlenstraße, 10243 Berlin',
    coordinates: { lat: 52.5058, lng: 13.4394 },
    type: 'iconic',
    culturalBackground: 'Famous mural depicting the kiss between Leonid Brezhnev and Erich Honecker. One of the most photographed sections of the Berlin Wall.',
    imageUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
    isIconic: true
  },
  {
    id: '2',
    title: 'Test the Rest',
    artist: 'Birgit Kinder',
    year: '1990',
    medium: 'Spray paint on concrete',
    location: 'East Side Gallery',
    address: 'Mühlenstraße, 10243 Berlin',
    coordinates: { lat: 52.5055, lng: 13.4390 },
    type: 'iconic',
    culturalBackground: 'Depicts a Trabant car breaking through the wall, symbolizing the breakthrough to freedom and the end of division.',
    imageUrl: 'https://images.pexels.com/photos/1070968/pexels-photo-1070968.jpeg?auto=compress&cs=tinysrgb&w=800',
    isIconic: true
  },
  {
    id: '3',
    title: 'The Wall Jumper',
    artist: 'Gabriel Heimler',
    year: '1989',
    medium: 'Spray paint and stencils',
    location: 'East Side Gallery',
    address: 'Mühlenstraße, 10243 Berlin',
    coordinates: { lat: 52.5061, lng: 13.4398 },
    type: 'iconic',
    culturalBackground: 'Shows a figure leaping over the wall, representing the desire for freedom and the courage of those who attempted to escape.',
    imageUrl: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    isIconic: true
  },
  {
    id: '4',
    title: 'Astronaut Cosmonaut',
    artist: 'Victor Ash',
    year: '2007',
    medium: 'Spray paint on building wall',
    location: 'Kreuzberg',
    address: 'Mariannenstraße 2, 10997 Berlin',
    coordinates: { lat: 52.5017, lng: 13.4067 },
    type: 'iconic',
    culturalBackground: 'Large-scale mural of an astronaut that has become an iconic symbol of Berlin street art, representing exploration and dreams.',
    imageUrl: 'https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?auto=compress&cs=tinysrgb&w=800',
    isIconic: true
  },
  {
    id: '5',
    title: 'Yellow Man',
    artist: 'Os Gêmeos',
    year: '2005',
    medium: 'Spray paint and mixed media',
    location: 'Schöneberg',
    address: 'Bülowstraße 7, 10783 Berlin',
    coordinates: { lat: 52.4991, lng: 13.3668 },
    type: 'iconic',
    culturalBackground: 'Created by Brazilian twin artists, this vibrant yellow figure represents the international influence on Berlin\'s street art scene.',
    imageUrl: 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=800',
    isIconic: true
  },

  // Historical Murals
  {
    id: '6',
    title: 'Checkpoint Charlie Mural',
    artist: 'Various Artists',
    year: '1975',
    medium: 'Paint and mixed media',
    location: 'Mitte',
    address: 'Friedrichstraße 43-45, 10117 Berlin',
    coordinates: { lat: 52.5074, lng: 13.3903 },
    type: 'historical',
    culturalBackground: 'Historic crossing point between East and West Berlin, featuring murals that documented the division and hope for reunification.',
    imageUrl: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    title: 'Potsdamer Platz Wall Remnants',
    artist: 'Unknown Artists',
    year: '1980',
    medium: 'Spray paint on concrete',
    location: 'Mitte',
    address: 'Potsdamer Platz, 10785 Berlin',
    coordinates: { lat: 52.5096, lng: 13.3760 },
    type: 'historical',
    culturalBackground: 'Remaining sections of the Berlin Wall with original graffiti from the 1980s, preserved as historical monuments.',
    imageUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '8',
    title: 'Brandenburg Gate Graffiti',
    artist: 'Various Artists',
    year: '1985',
    medium: 'Spray paint and markers',
    location: 'Mitte',
    address: 'Pariser Platz, 10117 Berlin',
    coordinates: { lat: 52.5163, lng: 13.3777 },
    type: 'historical',
    culturalBackground: 'Historical graffiti near Brandenburg Gate from the Cold War era, representing messages of protest and hope.',
    imageUrl: 'https://images.pexels.com/photos/1070968/pexels-photo-1070968.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '9',
    title: 'Bernauer Straße Memorial Wall',
    artist: 'Memorial Artists',
    year: '1982',
    medium: 'Paint and installations',
    location: 'Mitte',
    address: 'Bernauer Straße 111, 13355 Berlin',
    coordinates: { lat: 52.5351, lng: 13.3890 },
    type: 'historical',
    culturalBackground: 'Memorial site with preserved wall sections and historical graffiti documenting escape attempts and family separations.',
    imageUrl: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '10',
    title: 'Oberbaum Bridge Murals',
    artist: 'Various Artists',
    year: '1990',
    medium: 'Spray paint and stencils',
    location: 'Friedrichshain',
    address: 'Oberbaumbrücke, 10243 Berlin',
    coordinates: { lat: 52.5018, lng: 13.4456 },
    type: 'historical',
    culturalBackground: 'Historic bridge connecting East and West Berlin, featuring murals celebrating reunification and cultural exchange.',
    imageUrl: 'https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Skateparks
  {
    id: '11',
    title: 'Mellowpark Skatepark',
    artist: 'Various Street Artists',
    year: '2005',
    medium: 'Spray paint on concrete',
    location: 'Köpenick',
    address: 'An der Wuhlheide 250, 12459 Berlin',
    coordinates: { lat: 52.4789, lng: 13.5731 },
    type: 'skatepark',
    culturalBackground: 'One of Europe\'s largest skateparks featuring extensive graffiti art by local and international artists. A hub for street culture and urban art.',
    imageUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '12',
    title: 'Skatehalle Berlin',
    artist: 'Community Artists',
    year: '2010',
    medium: 'Spray paint on concrete',
    location: 'Wedding',
    address: 'Revaler Str. 99, 10245 Berlin',
    coordinates: { lat: 52.5145, lng: 13.4531 },
    type: 'skatepark',
    culturalBackground: 'Indoor skate facility with rotating graffiti exhibitions and legal painting areas for emerging artists.',
    imageUrl: 'https://images.pexels.com/photos/1070968/pexels-photo-1070968.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Legal Walls / Painting Spots
  {
    id: '13',
    title: 'Mauerpark Legal Wall',
    artist: 'Open Community',
    year: '2009',
    medium: 'Spray paint and stencils',
    location: 'Prenzlauer Berg',
    address: 'Gleimstraße 55, 10437 Berlin',
    coordinates: { lat: 52.5416, lng: 13.4026 },
    type: 'legal-wall',
    culturalBackground: 'Popular legal graffiti wall where artists can paint freely. Changes weekly with new artwork from local and visiting artists.',
    imageUrl: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '14',
    title: 'Teufelsberg Legal Spot',
    artist: 'Various Artists',
    year: '2012',
    medium: 'Spray paint on abandoned structures',
    location: 'Grunewald',
    address: 'Teufelsseechaussee 10, 14193 Berlin',
    coordinates: { lat: 52.4970, lng: 13.2416 },
    type: 'legal-wall',
    culturalBackground: 'Former NSA listening station turned into legal graffiti area. Historic Cold War site now serves as canvas for contemporary street art.',
    imageUrl: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '15',
    title: 'Warschauer Brücke Legal Zone',
    artist: 'Community Artists',
    year: '2008',
    medium: 'Spray paint and markers',
    location: 'Friedrichshain',
    address: 'Warschauer Str., 10243 Berlin',
    coordinates: { lat: 52.5058, lng: 13.4394 },
    type: 'legal-wall',
    culturalBackground: 'Bridge underpass designated as legal painting area. Connects East Side Gallery with Friedrichshain street art scene.',
    imageUrl: 'https://images.pexels.com/photos/1070968/pexels-photo-1070968.jpeg?auto=compress&cs=tinysrgb&w=800'
  },

  // Street Artist Hotspots
  {
    id: '16',
    title: 'RAW Gelände',
    artist: 'Street Art Collective',
    year: '2007',
    medium: 'Mixed media and installations',
    location: 'Friedrichshain',
    address: 'Revaler Str. 99, 10245 Berlin',
    coordinates: { lat: 52.5145, lng: 13.4531 },
    type: 'hotspot',
    culturalBackground: 'Former railway repair yard transformed into cultural center. Major hotspot for street artists, featuring constantly evolving murals and installations.',
    imageUrl: 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '17',
    title: 'Holzmarkt Area',
    artist: 'Urban Art Collective',
    year: '2014',
    medium: 'Large-scale murals',
    location: 'Friedrichshain',
    address: 'Holzmarktstraße 25, 10243 Berlin',
    coordinates: { lat: 52.5125, lng: 13.4235 },
    type: 'hotspot',
    culturalBackground: 'Alternative cultural space along the Spree River. Known for experimental street art and community-driven artistic projects.',
    imageUrl: 'https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '18',
    title: 'Boxhagener Platz Area',
    artist: 'Local Street Artists',
    year: '2011',
    medium: 'Stencils and wheat paste',
    location: 'Friedrichshain',
    address: 'Boxhagener Platz, 10245 Berlin',
    coordinates: { lat: 52.5089, lng: 13.4531 },
    type: 'hotspot',
    culturalBackground: 'Vibrant neighborhood square surrounded by buildings featuring diverse street art styles. Popular gathering spot for local artists.',
    imageUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];