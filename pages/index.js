import React from "react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] p-4 md:p-8 lg:p-12 flex flex-col items-center">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <Header />
        <main>

          <section className="hero-section text-[#E3E3E3] mb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              CONTEXTS
            </h1>
            <p className="text-lg md:text-xl mb-6">A GTD focused task-list app built in swift</p>
          </section>

          <section className="app-game-list text-[#E3E3E3]">
            <h2 className="text-3xl font-bold mb-4">Apps</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">Contexts</li>
              <li className="mb-2">Rainbow</li>
            </ul>
          </section>
          <section className="app-game-list text-[#E3E3E3]">
            <h2 className="text-3xl font-bold mb-4">Games</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">Lightward</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
