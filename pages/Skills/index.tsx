import React from 'react';
import KBarCommand from '../../components/KBarCommand';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import { Container, Group } from '@mantine/core';

const Skills = () => {
  return (
    <>
      <title>koazie • skills</title>
      <KBarCommand />
      <Navbar />
      <div className="flex flex-wrap">
        <h1 className="relative top-0 flex items-center justify-center text-4xl font-bold left-10">
          Skills
        </h1>
      </div>
      <Container className="relative flex items-center gap-8 mx-auto inset-1 top-40 sm:flex-wrap">
        <Group className="p-8 box-border flex flex-column items-center justify-evenly h-[50vh] border-2 leading-6 z-2 font-sans relative rounded-lg border-zinc-800 bg-zinc-800/40">
          <h2 className="font-mono text-2xl font-bold">Frontend Developer</h2>
          <div className="absolute flex flex-row items-center justify-center gap-2">
            <img src="/assets/images/github.png" alt="github" />
            <img src="/assets/images/git.png" alt="git" />
            <img src="/assets/images/firebase.png" alt="firebase" />
            <img src="/assets/images/react.png" alt="react" />
          </div>
          <p className="flex items-center justify-center font-mono">
            I love breaking and creating ideas that can benefit me and the
            companies I work for.
          </p>
        </Group>
        <Group className="p-8 border-zinc-800 box-border flex flex-column items-center justify-center h-[50vh] border-2 leading-6 bg-zinc-800/40 z-2 font-sans rounded-lg ">
          <h2 className="font-sans text-2xl font-bold">Digital Designer</h2>
          <div className="absolute flex flex-row items-center justify-center gap-2">
            <img src="/assets/images/figma.png" alt="figma" />
            <img src="/assets/images/illustrator.png" alt="illustrator" />
            <img src="/assets/images/photoshop.png" alt="photoshop" />
            <img src="/assets/images/affinity.png" alt="designer" />
          </div>
          <p className="flex items-center justify-center font-sans">
            I love creating designs that speaks without saying anything to get
            the point across. Keep it clean, simple and minimal.
          </p>
        </Group>
      </Container>
    </>
  );
};

export default Skills;
