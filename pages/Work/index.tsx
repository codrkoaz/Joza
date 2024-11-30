import { Box, Container } from '@mantine/core';
import Navbar from '../../components/Navbar';
import KBarCommand from '../../components/KBarCommand';
const Index = () => {
  return (
    <>
      <head>koazie • work</head>
      <KBarCommand />
      <Navbar />
      <div className="flex flex-wrap">
        <h1 className="relative top-0 flex items-center justify-center text-4xl font-bold left-10">
          Work
        </h1>
      </div>
      <Container
        classNames={{
          root: 'box-border relative flex justify-between max-w-xl gap-4',
        }}
      >
        <div className="p-3 ">
          <div>
            <a
              title="Install Vivapb Raycast Extension"
              href="https://www.raycast.com/Codrkoaz/vivapb"
            >
              <img
                src="https://www.raycast.com/Codrkoaz/vivapb/install_button@2x.png?v=1.1"
                width={250}
                height={100}
                alt="Install Raycast Extension"
              />
            </a>
          </div>
        </div>

        <div>
          <div className="p-3 "></div>
        </div>
      </Container>
    </>
  );
};

export default Index;
