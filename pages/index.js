import React from 'react';
import { Header } from '../components/Header';

export default function Home() {

  return (
    <div className="min-h-screen bg-[#121212] p-4 md:p-8 lg:p-12 flex flex-col items-center">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <Header />
        <main>
          <section className="hero-section text-[#E3E3E3] mb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to WOLFBIT</h1>
            <p className="text-lg md:text-xl mb-6">Showcasing all my iOS / macOS apps and my steam game in development.</p>
            <div className="app-game-section flex flex-col md:flex-row gap-4">
              <div className="app-section bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Apps</h2>
                <p className="text-[#B4B4B4]">Explore my iOS and macOS apps.</p>
              </div>
              <div className="game-section bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Games</h2>
                <p className="text-[#B4B4B4]">Check out my steam game in development.</p>
              </div>
            </div>
          </section>
          <section className="app-game-list text-[#E3E3E3]">
            <h2 className="text-3xl font-bold mb-4">All Apps and Games</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">App 1</li>
              <li className="mb-2">App 2</li>
              <li className="mb-2">Game 1</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
