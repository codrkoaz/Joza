import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Container, Title } from '@mantine/core';
import Link from 'next/link';
import Bored from '../public/gifs/bored-anime.gif';
import Driving from '../public/gifs/driving.gif';
import Typing from '../public/gifs/typing.gif';
import TrainStation from '../public/gifs/trainstation.gif';

const NotFound: React.FC = () => {
  const [currentBackground] = useState(Math.floor(Math.random() * 4) + 1);

  return (
    <Container className="flex flex-col items-center justify-center w-screen h-screen gap-3">
      <Title className="z-10 text-6xl hover:text-slate-200" order={1}>
        Not Found
      </Title>

      {/* Background Images */}
      {[
        { id: 1, src: Typing, alt: 'Typing' },
        { id: 2, src: Bored, alt: 'Bored' },
        { id: 3, src: Driving, alt: 'Driving' },
        { id: 4, src: TrainStation, alt: 'Train Station' },
      ].map((bg) => (
        <div
          key={bg.id}
          className={`absolute left-0 top-0 z-0 h-full w-full ${
            currentBackground === bg.id ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 ease-in`}
        >
          <Image src={bg.src} layout="fill" objectFit="cover" alt={bg.alt} />
        </div>
      ))}

      {/* Main Content */}
      <p className="z-10 text-3xl text-white">
        The page you&apos;re looking for is somewhere in space.
      </p>
      <Box className="z-10">
        <Link href="/">
          <button className="p-2 text-black transition border rounded-md bg-slate-500 hover:bg-slate-300">
            Return to home
          </button>
        </Link>
      </Box>
      <div className="relative inset-x-0 bottom-0 flex items-center justify-center font-semibold text-md hover:text-zinc-100">
        © {new Date().getFullYear()} Joza Smith. All Rights Reserved.
      </div>
    </Container>
  );
};

export default NotFound;
