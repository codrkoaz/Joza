import { Container } from "@mantine/core";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import KBarCommand from "../../components/KBarCommand";
const index = () => {
  return (
    <>
      <Head>
        <title>koazie • work</title>
      </Head>
      <KBarCommand />
      <Navbar />
      <Container className="box-border relative h-screen max-w-xl">
        <div>
          <h1>Work</h1>
        </div>
      </Container>
    </>
  );
};

export default index;
