import React from "react";

function App() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg underline font-bold mt-4 text-blue-500">
        Tailwind makes styling easy!
      </p>
      <div className="bg-gray-200 p-4 m-4">Background color demonstration</div>
      <div className="bg-blue-200 p-4 m-4 rounded-lg">
        Border rounded corners
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-200 p-4">Column 1</div>
        <div className="bg-yellow-200 p-4">Column 2</div>
        <div className="bg-red-200 p-4">Column 3</div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4 flex-col">
        <div className="bg-purple-200 p-4">Flex Item 1</div>
        <div className="bg-pink-200 p-4">Flex Item 2</div>
        <div className="bg-indigo-200 p-4">Flex Item 3</div>
      </div>
      <table className="table-auto mt-4 w-full border-2 border-gray-400">
        <thead className="bg-gray-300">
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          <tr>
            <td className="border border-gray-400 p-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border border-gray-400 p-2">Malcolm Lockyer</td>
            <td className="border border-gray-400 p-2">1961</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Witchy Woman</td>
            <td className="border border-gray-400 p-2">The Eagles</td>
            <td className="border border-gray-400 p-2">1972</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Shining Star</td>
            <td className="border border-gray-400 p-2">
              Earth, Wind, and Fire
            </td>
            <td className="border border-gray-400 p-2">1975</td>
          </tr>
        </tbody>
      </table>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
        Click me!
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ml-4 mt-4 rounded
       transition duration-300 ease-in-out transform hover:scale-110"
      >
        Hover me!
      </button>
      <div className="max-w-sm bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-xl font-bold mb-2">Tailwind Card</h2>
        <p className="text-gray-600">
          This is a simple card component built with Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Read More
        </button>
      </div>

      {/* Responsive Design */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gray-200 p-4">Responsive Item 1</div>

        <div className="bg-gray-200 p-4">Responsive Item 2</div>

        <div className="bg-gray-200 p-4">Responsive Item 3</div>

        <div className="bg-gray-200 p-4">Responsive Item 4</div>
      </div>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
        Scale on different screens
      </p>
      <p className="sm:text-amber-300 md:text-green-300 lg:text-blue-300">
        Resize the screen to see changes!
      </p>
    </div>
  );
}

export default App;
