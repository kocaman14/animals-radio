"use client";

import { useState } from "react";

const wilds = [
  {
    name: "Moose",
    src: "EOJJEnarhXw",
    id: 1,
  },
  {
    name: "Snail",
    src: "i9qDijE0vyk",
    id: 2,
  },
  {
    name: "Cat",
    src: "NsMKvVdEPkw",
    id: 3,
  },
  {
    name: "Spider",
    src: "T9XhdKntcos",
    id: 4,
  },
];

export default function Home() {
  const handleChange = (setPicture, e, setUrl) => {
    const selectedName = e.target.value;
    setPicture(selectedName);
    const truePicture = wilds.find((wild) => wild.name === selectedName);
    setUrl(`https://www.youtube.com/embed/${truePicture.src}`);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <Animals wild={wilds} handleChange={handleChange} />
    </div>
  );
}

function Animals({ wild, handleChange }) {
  const [picture, setPicture] = useState(null);
  const [url, setUrl] = useState(null);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Project 6: Video Player</h1>
      <div className="mb-4">
        {wild.map((wilds) => (
          <label key={wilds.id} className="block mb-2">
            <input
              type="radio"
              name="wilds"
              value={wilds.name}
              onChange={(e) => handleChange(setPicture, e, setUrl)}
              className="mr-2 leading-tight"
            />
            <span className="text-lg">{wilds.name}</span>
          </label>
        ))}
      </div>
      {url && (
        <iframe
          width="100%"
          height="315"
          src={url}
          alt={picture}
          title="YouTube video player"
          frameBorder="0"
          className="rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
