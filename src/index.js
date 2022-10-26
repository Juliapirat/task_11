import React, { useState } from "react";
import { render } from "react-dom";
import useMapbox from "./useMapbox.js";
import "./tailwind.output.css";

function App() {
  const [, setRandom] = useState(Math.random());

  let container = "map";
  let center = [21, 21];
  let zoom;
  let [long = 0, lat = 0] = center;

  useMapbox(container, [long, lat], zoom);
  return (
    <div className="min-h-screen bg-gray-100 ml-100">
      <div className="flex  flex-col items-center justify-center">
        <button
          className="bg-indigo-500 mt-10 mb-10 p-4 w-40 text-white rounded hover:bg-indigo-600 "
          id="rerender"
          onClick={() => setRandom(Math.random())}
        >
          Ререндер!
        </button>
        <div
          className="w-5/6 border-solid border-2 border-indigo-600 rounded-lg"
          id="map"
        ></div>
      </div>
    </div>
  );
}

render(<App />, document.querySelector("#root"));
