import { Box, Container } from '@mantine/core';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import KBarCommand from '../../components/KBarCommand';
import Viva from '../../public/viva.png';
import Koazieclrs from '../../public/koazieclrs.png';
const index = () => {
  return (
    <>
      <title>koazie • work</title>
      <KBarCommand />
      <Navbar />
      <div className="flex flex-wrap">
        <h1 className="relative top-0 flex items-center justify-center text-4xl font-bold left-10">
          Work
        </h1>
      </div>
      <Container className="box-border relative flex justify-between max-w-xl gap-4">
        <div className="p-3 ">
          <div>
            <Image src={Viva}/>
            <a
              title="Install vivapb Raycast Extension"
              href="https://www.raycast.com/Codrkoaz/vivapb"
            >
              <img
                src="https://www.raycast.com/Codrkoaz/vivapb/install_button@2x.png?v=1.1"
                width={250}
                height={100}
                alt=""
              ></img>
            </a>
          </div>
        </div>

        <div>
          <div className="p-3 ">
            <Image src={Koazieclrs}/>
          </div>
        </div>
      </Container>
    </>
  );
};

export default index;
