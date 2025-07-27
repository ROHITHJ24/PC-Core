import React, { useState } from 'react';
import SlotCard from './Components/SlotCard';
import { componentsData } from './data';

const BuildPage = () => {
  const [selectedItems, setSelectedItems] = useState([]); // cart
  const [currentView, setCurrentView] = useState('cpu'); // tab selection

  const handleAddToBuild = (item) => {
    // Simply add the item without checking for duplicates
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-zinc-900 text-white">
      {/* Sidebar */}
      <div className="w-full md:w-[20%] border-b-2 md:border-b-0 md:border-r-2 border-zinc-700 p-4">
        {Object.keys(componentsData).map((category) => (
          <button
            key={category}
            onClick={() => setCurrentView(category)}
            className={`block w-full my-2 py-2 px-4 rounded ${
              currentView === category ? 'bg-yellow-500 text-black' : 'bg-zinc-800'
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Items List */}
      <div className="w-full md:w-[60%] grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 overflow-y-auto h-full">
        {componentsData[currentView]?.map((item) => (
          <div key={item.id} className="bg-zinc-800 p-3 rounded shadow-md">
         <img
  src={item.image}
  alt={item.name}
  className="w-[150px] h-[150px] object-cover rounded mx-auto"
/>

            <h3 className="mt-2 text-lg">{item.name}</h3>
            <p className="text-sm text-zinc-400">{item.description}</p>
            <button
              onClick={() => handleAddToBuild(item)}
              className="mt-2 w-full bg-yellow-500 text-black py-1 rounded hover:bg-yellow-400"
            >
              Add to Build
            </button>
          </div>
        ))}
      </div>

      {/* Cart/Build Section */}
      <div className="w-full md:w-[20%] bg-zinc-950 p-4 border-t-2 md:border-t-0 md:border-l-2 border-zinc-700">
        <h2 className="text-xl mb-4 border-b border-zinc-600 pb-2">Build Summary</h2>
        {selectedItems.length === 0 ? (
          <p className="text-zinc-400">No components added.</p>
        ) : (
          selectedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="mb-3 bg-zinc-800 p-2 rounded">
              <p className="text-sm">{item.name}</p>
            </div>
          ))
        )}
        {selectedItems.length > 0 && (
          <button className="mt-4 w-full bg-green-500 text-black py-2 rounded hover:bg-green-400">
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default BuildPage;
