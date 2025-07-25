import React from 'react';

const SlotCard = ({ type, item, onSelect, options }) => {
  return (
    <div className="bg-zinc-800 border-2 border-yellow-600 p-4 rounded-lg shadow-lg w-full max-w-xs">
      <h2 className="text-yellow-400 text-xl font-bold capitalize mb-3">{type}</h2>
      <div className="h-24 flex items-center justify-center border border-yellow-500 rounded bg-zinc-900">
        {item ? (
          <span className="text-4xl">{item.icon}</span>
        ) : (
          <span className="text-gray-500">Empty Slot</span>
        )}
      </div>
      <select
        className="w-full mt-3 p-2 bg-zinc-700 text-white rounded border border-yellow-600"
        onChange={(e) => {
          const selectedItem = options.find(opt => opt.name === e.target.value);
          onSelect(type, selectedItem);
        }}
        value={item?.name || ''}
      >
        <option value="">Select {type}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.name}>
            {opt.name} - ₹{opt.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SlotCard;
