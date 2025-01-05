import React from 'react';
import { Header } from '../components/Header';

export default function Home() {

  return (
    <div className="min-h-screen bg-[#121212] p-4 md:p-8 lg:p-12 flex flex-col items-center">
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <Header />
        <main>

        </main>
      </div>
    </div>
  );
}