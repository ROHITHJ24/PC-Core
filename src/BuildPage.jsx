import React, { useState } from 'react';
import { componentsData } from './data';
import SlotCard from './components/SlotCard';
import StatPanel from './components/StatPanel';

const BuildPage = () => {
  const [selected, setSelected] = useState({
    cpu: null,
    gpu: null,
    ram: null,
    storage: null
  });

  const handleSelect = (type, item) => {
    setSelected(prev => ({ ...prev, [type]: item }));
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white py-12 px-6 font-mono">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl   font-bold text-center text-yellow-500 mb-10">🎮 PC Inventory Builder..</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {Object.entries(componentsData).map(([type, options]) => (
            <SlotCard
              key={type}
              type={type}
              options={options}
              item={selected[type]}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <StatPanel selected={selected} />
      </div>
    </main>
  );
};

export default BuildPage;
