import React, { useState } from 'react';
import { districts } from '../data/districts';
import { Link } from 'react-router-dom';

/**
 * RequestArtSpot page
 *
 * Provides a simple form allowing users to propose new art or performance
 * locations. Users pick a district and neighbourhood from the official
 * Berlin administrative divisions and specify the type of art (performance,
 * painting, music or flea market). A short informational paragraph
 * introduces Berlin’s districts and reminds users of the monthly vote
 * limit. The page is intentionally minimal since backend handling of
 * submissions is beyond this task’s scope.
 */
export const RequestArtSpot: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentDistrict = districts.find((d) => d.name === selectedDistrict);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application this would send data to a backend. Here we
    // simply flag the form as submitted and clear selections.
    setSubmitted(true);
    setSelectedDistrict('');
    setSelectedNeighbourhood('');
    setSelectedType('');
  };

  return (
    <div className="px-4 py-6 max-w-3xl mx-auto text-gray-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">Request New Art Spot</h1>
      <p className="mb-4 text-sm text-gray-300">
        Berlin is divided into 12 administrative districts (Bezirke), each consisting of
        multiple neighbourhoods (Kieze). Select the district and neighbourhood where
        you’d like to propose a new art spot and choose the type of art. Each account
        is limited to one request per month.
      </p>
      {submitted && (
        <div className="mb-4 p-3 bg-green-700 text-sm rounded">
          Thank you for your suggestion! Your request has been recorded.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="district" className="block text-sm font-medium mb-1">
            District
          </label>
          <select
            id="district"
            value={selectedDistrict}
            onChange={(e) => {
              setSelectedDistrict(e.target.value);
              setSelectedNeighbourhood('');
            }}
            className="w-full p-2 bg-gray-700 rounded text-gray-200 focus:outline-none"
            required
          >
            <option value="">Select a district…</option>
            {districts.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        {selectedDistrict && (
          <div>
            <label htmlFor="neighbourhood" className="block text-sm font-medium mb-1">
              Neighbourhood
            </label>
            <select
              id="neighbourhood"
              value={selectedNeighbourhood}
              onChange={(e) => setSelectedNeighbourhood(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded text-gray-200 focus:outline-none"
              required
            >
              <option value="">Select a neighbourhood…</option>
              {currentDistrict?.neighbourhoods.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="artType" className="block text-sm font-medium mb-1">
            Art Type
          </label>
          <select
            id="artType"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded text-gray-200 focus:outline-none"
            required
          >
            <option value="">Select art type…</option>
            <option value="Performance">Performance</option>
            <option value="Painting">Painting</option>
            <option value="Music">Music</option>
            <option value="Flea Market">Flea Market</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow"
          disabled={!(selectedDistrict && selectedNeighbourhood && selectedType)}
        >
          Submit Request
        </button>
      </form>
      <div className="mt-6">
        <Link to="/graffiti-map" className="text-blue-400 underline text-sm">
          ← Back to Graffiti Map
        </Link>
      </div>
    </div>
  );
};