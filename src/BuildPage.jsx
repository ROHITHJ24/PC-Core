import { useState } from "react";
import { motion } from "framer-motion";

export default function BuildPage() {
  const components = [
    {
      id: 1,
      name: "Processor (CPU)",
      description: "The brain of your PC, handles instructions and overall performance.",
      cost: 250,
    },
    {
      id: 2,
      name: "Graphics Card (GPU)",
      description: "Handles rendering, gaming, and visual performance.",
      cost: 500,
    },
    {
      id: 3,
      name: "Motherboard",
      description: "Connects all components together and enables communication.",
      cost: 150,
    },
    {
      id: 4,
      name: "Memory (RAM)",
      description: "Short-term memory that supports multitasking and speed.",
      cost: 120,
    },
    {
      id: 5,
      name: "Storage (SSD/HDD)",
      description: "Stores your operating system, games, and files.",
      cost: 100,
    },
    {
      id: 6,
      name: "Power Supply (PSU)",
      description: "Powers all the hardware components reliably.",
      cost: 80,
    },
    {
      id: 7,
      name: "Cabinet",
      description: "Houses all your PC components with airflow and design.",
      cost: 90,
    },
  ];

  const [selectedComponents, setSelectedComponents] = useState([]);

  const handleSelect = (component) => {
    if (selectedComponents.includes(component)) {
      setSelectedComponents(selectedComponents.filter((c) => c !== component));
    } else {
      setSelectedComponents([...selectedComponents, component]);
    }
  };

  const totalCost = selectedComponents.reduce((acc, name) => {
    const comp = components.find((c) => c.name === name);
    return acc + (comp?.cost || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-green-400 animate-fade-in">
        ⚙️ BuildPage - Customize Your Dream Rig
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <motion.div
            key={component.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: component.id * 0.1 }}
            className={`cursor-pointer bg-[#1a1a1a] p-6 rounded-2xl shadow-md border border-gray-800 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 ${
              selectedComponents.includes(component.name)
                ? "border-green-500 bg-green-900/30"
                : ""
            }`}
            onClick={() => handleSelect(component.name)}
          >
            <h2 className="text-2xl font-bold mb-2 text-green-300">
              {component.name}
            </h2>
            <p className="text-gray-400 mb-2">{component.description}</p>
            <p className="text-sm text-yellow-400 font-semibold mb-2">
              Cost: ${component.cost}
            </p>
            <div className="flex gap-2">
              <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-lg text-sm font-semibold">
                {selectedComponents.includes(component.name) ? "Remove" : "Add"}
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg text-sm font-semibold">
                Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-green-300 mb-4">
          🧪 Selected Components
        </h2>
        {selectedComponents.length === 0 ? (
          <p className="text-gray-500">No components selected yet.</p>
        ) : (
          <ul className="list-disc list-inside space-y-2 mb-4">
            {selectedComponents.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}
        <p className="text-lg font-semibold text-yellow-400">
          💰 Total Cost: ${totalCost}
        </p>
      </motion.div>
    </div>
  );
}
