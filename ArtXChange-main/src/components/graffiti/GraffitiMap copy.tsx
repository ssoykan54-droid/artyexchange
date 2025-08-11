import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { locations, categories, Location, LocationCategory } from '../data/graffitiLocations';

/**
 * Berlin Graffiti Map page
 *
 * This page renders an interactive, stylised map of Berlin on which pins
 * represent various types of art and cultural locations: iconic murals,
 * historical pieces, skateparks, legal walls, hotspots and music spots.
 * Users can filter locations by category using the navigation bar below
 * the headline. Clicking on a pin surfaces a pop‑up with rich details.
 * A list below the map mirrors the filtered set and includes full
 * descriptions, artist/year when available, addresses and links out to
 * Google Maps. At the bottom, a “Request New Art Spot” button leads to a
 * separate page where users can propose new locations.
 */
export const GraffitiMap: React.FC = () => {
  // Filter state. 'all' indicates that every location should be shown.
  const [filter, setFilter] = useState<'all' | LocationCategory>('all');
  // Currently selected location for the pop‑up on the map. null when closed.
  const [selected, setSelected] = useState<Location | null>(null);

  // Compute the list of locations based on the active filter.
  const filteredLocations =
    filter === 'all'
      ? locations
      : locations.filter((loc) => loc.category === filter);

  // Helper for looking up category metadata by id.
  const getCategoryMeta = (id: LocationCategory) =>
    categories.find((c) => c.id === id);

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">Berlin Graffiti Map</h1>
      {/* Category navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => {
            setFilter('all');
            setSelected(null);
          }}
          className={`px-3 py-1 rounded-full text-sm focus:outline-none transition-colors ${
            filter === 'all'
              ? 'bg-gray-700 text-white'
              : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
          }`}
        >
          All Spots ({locations.length})
        </button>
        {categories.map((cat) => {
          const count = locations.filter((loc) => loc.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setSelected(null);
              }}
              className={`px-3 py-1 rounded-full text-sm focus:outline-none transition-colors ${
                filter === cat.id
                  ? `${cat.color} text-white`
                  : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>
      {/* Map container */}
      <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden mb-8">
        {/* Render pins for each filtered location */}
        {filteredLocations.map((loc) => {
          const meta = getCategoryMeta(loc.category);
          return (
            <div
              key={loc.id}
              className={`absolute w-4 h-4 rounded-full cursor-pointer border-2 border-white ${
                meta?.color || 'bg-white'
              }`}
              style={{ left: loc.position.left, top: loc.position.top }}
              title={loc.title}
              onClick={() => setSelected(loc)}
            />
          );
        })}
        {/* Pop‑up card displayed when a location is selected */}
        {selected && (
          <div
            className="absolute left-1/2 bottom-4 transform -translate-x-1/2 bg-gray-900 text-gray-200 p-4 rounded-lg shadow-xl max-w-sm w-11/12 sm:w-auto"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-white">
                  {selected.title}
                </h3>
                <p className="text-xs italic text-gray-400">
                  {getCategoryMeta(selected.category)?.label}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-gray-200"
                aria-label="Close pop up"
              >
                ×
              </button>
            </div>
            {selected.artist && (
              <p className="text-sm mt-1">
                <span className="font-medium">Artist:</span> {selected.artist}
                {selected.year ? ` (${selected.year})` : ''}
              </p>
            )}
            {selected.description && (
              <p className="text-sm mt-1">{selected.description}</p>
            )}
            <p className="text-sm mt-1">
              <span className="font-medium">Address:</span> {selected.address}
            </p>
            <a
              href={selected.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline text-sm mt-1 inline-block"
            >
              Open in Google Maps
            </a>
          </div>
        )}
      </div>
      {/* List section */}
      <div className="space-y-4 mb-8">
        {filteredLocations.map((loc) => {
          const meta = getCategoryMeta(loc.category);
          return (
            <div
              key={loc.id}
              className="p-4 rounded-lg bg-gray-700 shadow flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    {loc.title}
                  </h3>
                  <p className="text-xs italic text-gray-400">
                    {meta?.label}
                  </p>
                </div>
                <span
                  className={`mt-1 ml-4 w-3 h-3 rounded-full ${meta?.color}`}
                ></span>
              </div>
              {loc.artist && (
                <p className="text-sm mt-1">
                  <span className="font-medium">Artist:</span> {loc.artist}
                  {loc.year ? ` (${loc.year})` : ''}
                </p>
              )}
              <p className="text-sm mt-1">{loc.description}</p>
              <p className="text-sm mt-1">
                <span className="font-medium">Address:</span> {loc.address}
              </p>
              <a
                href={loc.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline text-sm mt-1"
              >
                Open in Google Maps
              </a>
            </div>
          );
        })}
      </div>
      {/* Request button */}
      <div className="flex justify-center">
        <Link to="/request-art-spot">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow">
            Request New Art Spot
          </button>
        </Link>
      </div>
    </div>
  );
};