import { Box, Container } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../components/Main';
import Layout from '../components/Layout/layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
          <title>codrkoaz • home </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Joza Smith's homepage" />
        <meta name="author" content="Joza Smith" />
        <meta name="author" content="codrkoaz" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Joza Smith" />
        <meta name="og:title" content="Joza Smith" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <Container>
          <AboutMe />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
