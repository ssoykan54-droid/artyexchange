// Districts and neighbourhoods for Berlin used on the RequestArtSpot page.
// This data mirrors the content from the provided "DISTRICTS AND NEIGBORHOODS
// IN BERLIN" PDF, summarised into an easy to consume structure.

export interface District {
  name: string;
  neighbourhoods: string[];
}

export const districts: District[] = [
  {
    name: 'Mitte',
    neighbourhoods: [
      'Mitte',
      'Prenzlauer Berg',
      'Wedding',
      'Gesundbrunnen',
      'Moabit',
      'Tiergarten'
    ]
  },
  {
    name: 'Friedrichshain‑Kreuzberg',
    neighbourhoods: ['Friedrichshain', 'Kreuzberg']
  },
  {
    name: 'Pankow',
    neighbourhoods: ['Pankow', 'Weißensee', 'Blankenburg', 'Niederschönhausen']
  },
  {
    name: 'Charlottenburg‑Wilmersdorf',
    neighbourhoods: ['Charlottenburg', 'Wilmersdorf', 'Schmargendorf', 'Westend']
  },
  {
    name: 'Spandau',
    neighbourhoods: ['Spandau', 'Staaken', 'Kladow']
  },
  {
    name: 'Steglitz‑Zehlendorf',
    neighbourhoods: ['Steglitz', 'Zehlendorf', 'Dahlem', 'Wannsee']
  },
  {
    name: 'Tempelhof‑Schöneberg',
    neighbourhoods: ['Tempelhof', 'Schöneberg', 'Lichtenrade']
  },
  {
    name: 'Neukölln',
    neighbourhoods: ['Neukölln', 'Britz', 'Rudow']
  },
  {
    name: 'Treptow‑Köpenick',
    neighbourhoods: ['Köpenick', 'Treptow', 'Plänterwald']
  },
  {
    name: 'Marzahn‑Hellersdorf',
    neighbourhoods: ['Marzahn', 'Hellersdorf']
  },
  {
    name: 'Lichtenberg',
    neighbourhoods: ['Lichtenberg', 'Fennpfuhl', 'Rummelsburg']
  },
  {
    name: 'Reinickendorf',
    neighbourhoods: ['Reinickendorf', 'Tegel', 'Heiligensee']
  }
];