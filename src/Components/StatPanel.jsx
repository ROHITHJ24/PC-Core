import React from 'react';

const StatPanel = ({ selected }) => {
  const total = Object.values(selected).reduce((sum, item) => item ? sum + item.price : sum, 0);

  return (
    <div className="bg-zinc-900 text-white p-6 rounded-lg border border-yellow-600 shadow-lg">
      <h2 className="text-2xl text-yellow-400 mb-4">🧾 Build Summary</h2>
      <ul className="space-y-2 mb-4">
        {Object.entries(selected).map(([type, item]) => (
          <li key={type} className="capitalize">
            <strong>{type}:</strong> {item ? item.name : 'None'} {item ? ` - ₹${item.price}` : ''}
          </li>
        ))}
      </ul>
      <div className="text-xl font-bold text-green-400">💰 Total: ₹{total}</div>
    </div>
  );
};

export default StatPanel;
