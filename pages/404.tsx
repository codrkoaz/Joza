import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Container, Text, Title } from '@mantine/core';
import Link from 'next/link';
import Bored from '../public/gifs/bored-anime.gif';
import Driving from '../public/gifs/driving.gif';
import Typing from '../public/gifs/typing.gif';
import TrainStation from '../public/gifs/trainstation.gif';

const NotFound: React.FC = () => {
  const [currentBackground, setCurrentBackground] = useState(1);

  useEffect(() => {
    const randomBackground = Math.floor(Math.random() * 4) + 1;
    setCurrentBackground(randomBackground);
  }, []);

  return (
    <>
      <Container className="flex flex-col items-center justify-center w-screen h-screen gap-3 ">
        <Title className="z-10 text-6xl hover:text-slate-200" order={1}>
          Not Found
        </Title>
        <div className="absolute top-0 left-0 w-full h-full ">
          <div
            className={`absolute top-0 left-0 w-screen h-screen z-0 ${
              currentBackground === 1 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 ease-in`}
          >
            <Image src={Typing} width={2000} height={2000} />
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full z-0 ${
            currentBackground === 2 ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 ease-in`}
        >
          <Image
            src={Bored}
            width={2000}
            height={2000}
            className="w-screen h-screen"
          />
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full z-0 ${
            currentBackground === 3 ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 ease-in`}
        >
          <Image
            src={Driving}
            width={2000}
            height={2000}
            className="w-screen h-screen"
          />
        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full z-0 ${
            currentBackground === 4 ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 ease-in`}
        >
          <Image
            src={TrainStation}
            width={2000}
            height={2000}
            className="w-screen h-screen"
          />
        </div>

        <Text
          weight={700}
          color="white"
          className="z-10 text-3xl text-gray-200"
        >
          The page you're looking for somewhere in space.
        </Text>
        <Box className="z-10">
          <Link href="/">
            <button className="p-2 text-black transition border rounded-md bg-slate-500 hover:bg-slate-300">
              Return to home
            </button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
