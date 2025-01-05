import React from 'react';
import Image from 'next/image';

export function Header() {
  return (
    <header className="w-full max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex items-center justify-between relative mb-10 mt-1 md:-mt-4 z-10">
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo-transparent.png"
          alt="Wolfbit Logo"
          width={150}
          height={150}
          className="rounded-xl"
        />
      </div>
      <nav className="flex gap-4">
        <a href="#contact" className="text-[#E3E3E3] hover:text-[#B4B4B4] transition-colors duration-300">Contact</a>
        <a href="#blog" className="text-[#E3E3E3] hover:text-[#B4B4B4] transition-colors duration-300">Blog</a>
      </nav>
    </header>
  );
}
