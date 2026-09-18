import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LetterIntro from './pages/LetterIntro';
import PartyView from './pages/PartyView';
import CityView from './pages/CityView';
import Pantheon from './pages/Pantheon';
import FactionView from './pages/FactionView';
import RulesView from './pages/RulesView';

function App() {
  const [activePage, setActivePage] = useState('intro');

  return (
    <div className="min-h-screen bg-parchment text-text-dark flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1">
        {activePage === 'intro' && <LetterIntro />}
        {activePage === 'party' && <PartyView />}
        {activePage === 'cities' && <CityView />}
        {activePage === 'factions' && <FactionView />}
        {activePage === 'pantheon' && <Pantheon />}
        {activePage === 'rules' && <RulesView />}
      </main>
    </div>
  );
}

export default App;