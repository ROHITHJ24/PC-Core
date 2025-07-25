import React, { useState } from 'react';

const componentsList = {
  cpu: [
    { name: 'Intel i5 12400F', price: 15000 },
    { name: 'AMD Ryzen 5 5600', price: 13000 },
    { name: 'Intel i7 13700K', price: 28000 }
  ],
  gpu: [
    { name: 'NVIDIA RTX 4060', price: 30000 },
    { name: 'AMD RX 6750 XT', price: 35000 },
    { name: 'NVIDIA RTX 4070 Ti', price: 60000 }
  ],
  ram: [
    { name: '16GB DDR4 3200MHz', price: 4000 },
    { name: '32GB DDR4 3600MHz', price: 7000 }
  ],
  storage: [
    { name: '1TB HDD', price: 3000 },
    { name: '500GB SSD', price: 4000 },
    { name: '1TB NVMe SSD', price: 7500 }
  ]
};

const BuildPage = () => {
  const [selected, setSelected] = useState({
    cpu: '',
    gpu: '',
    ram: '',
    storage: ''
  });

  const handleChange = (type, value) => {
    setSelected(prev => ({ ...prev, [type]: value }));
  };

  const getTotalPrice = () => {
    let total = 0;
    for (let type in selected) {
      const part = componentsList[type].find(item => item.name === selected[type]);
      if (part) total += part.price;
    }
    return total;
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">🛠️ Build Your PC</h1>

        <div className="space-y-6">
          {Object.entries(componentsList).map(([type, options]) => (
            <div key={type}>
              <label className="block text-lg font-medium capitalize mb-2">{type}</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={selected[type]}
                onChange={(e) => handleChange(type, e.target.value)}
              >
                <option value="">Select {type}</option>
                {options.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.name} - ₹{item.price}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold">🧮 Total Price: ₹{getTotalPrice()}</h2>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default BuildPage;
