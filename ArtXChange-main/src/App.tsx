import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
// In the original repository these are defined under components/layout.  They
// provide the site’s header/navigation and footer.  If these components
// don’t exist locally they can be stubbed or omitted.
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Core pages imported from the existing codebase.  These imports mirror the
// declarations in the original App.tsx file and allow the router to render
// the appropriate component when a user navigates to a given path.
import { Home } from './pages/Home';
import { Submit } from './pages/Submit';
import { Gallery } from './pages/Gallery';
import { Artists } from './pages/Artists';
import { LEDDisplays } from './pages/LEDDisplays';
import { Guidelines } from './pages/Guidelines';
import { Advertisement } from './pages/Advertisement';
import { Events } from './pages/Events';
import { Newsletter } from './pages/Newsletter';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Accessibility } from './pages/Accessibility';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Enforcement } from './pages/Enforcement';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';

// New pages added for the graffiti experience.  These files were created
// specifically to implement the interactive Graffiti Map and request form.
import { GraffitiMap } from './pages/GraffitiMap';
import { RequestArtSpot } from './pages/RequestArtSpot';

/**
 * The central application component defines routes for every page in the
 * website.  It wraps the routed content with a header and footer to
 * provide consistent navigation and branding across the site.  If new
 * pages are added to the platform they should be imported above and
 * registered in the <Routes> configuration below.  Routes are ordered
 * logically: the home route at '/', followed by secondary pages, then
 * administrative/authentication pages, and finally our new graffiti
 * features.
 */
function App() {
  return (
    <Router>
      {/* Top‑level site header with navigation links */}
      <Header />
      <Routes>
        {/* Primary site pages */}
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/led-displays" element={<LEDDisplays />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/advertisement" element={<Advertisement />} />
        <Route path="/events" element={<Events />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/accessibility" element={<Accessibility />} />

        {/* Authentication and user pages */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/enforcement" element={<Enforcement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

        {/* New graffiti map pages */}
        {/* Displays an interactive map of graffiti murals, skateparks, legal walls,
            hotspots and music spots with category filtering and list view. */}
        <Route path="/graffiti-map" element={<GraffitiMap />} />
        {/* Form allowing users to request new art spots, selecting district,
            neighbourhood and art type.  Only accessible after the map. */}
        <Route path="/request-art-spot" element={<RequestArtSpot />} />
      </Routes>
      {/* Persistent site footer */}
      <Footer />
    </Router>
  );
}

export default App;