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
    </header>
  );
}