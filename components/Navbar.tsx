import { Container, Group, Menu } from '@mantine/core';
import Link from 'next/link';
import Switcher from './ThemeSwitcher';
import Logo from './logo';
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconBrandGithub,
  IconDots,
} from '@tabler/icons';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Container className="flex items-center max-w-2xl gap-3 pt-3 pl-1 pr-10 backdrop-blur-sm ">
        <div className="flex items-center shrink-0">
          <Logo />
        </div>

        <Group className="flex flex-row items-center p-2 font-bold xs:hidden">
          <Link href="/Work">
            <a
              className={`p-2 hover:underline flex items-center underline-offset-4 decoration-2
                ${
                  router.pathname == '/Work'
                    ? 'bg-orange-400 text-zinc-900 underline-offset-4 decoration-2 underline rounded-sm'
                    : ''
                }
              `}
            >
              Work
            </a>
          </Link>
          <Link href="/Skills">
            <a
              className={`p-2 hover:underline underline-offset-4 items-center flex decoration-2
                ${
                  router.pathname == '/Skills'
                    ? 'text-zinc-900 bg-orange-400 underline-offset-4 decoration-2 underline rounded-sm'
                    : ''
                }
              `}
            >
              Skills
            </a>
          </Link>

          <div className="hover:underline decoration-2 underline-offset-4">
            <a
              href="https://github.com/codrkoaz/joza"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2"
            >
              Source
              <IconBrandGithub size={20} />
            </a>
          </div>
        </Group>

        <div className="flex items-center justify-end flex-auto gap-3 p-1 break-words">
          <div className="p-1 border-2 rounded-md cursor-pointer">
            <Switcher />
          </div>

          <div className="relative hidden cursor-pointer xs:flex">
            <Menu trigger="hover" openDelay={100}>
              <Menu.Target>
                <div className="flex items-center justify-center">
                  <div className="p-1 font-bold border-2 rounded-md ">
                    <IconDots stroke={2} />
                  </div>
                </div>
              </Menu.Target>
              <Menu.Dropdown className="w-full rounded-md">
                <Menu.Item className="flex justify-center p-2 hover:bg-gray-500 active:bg-orange-400">
                  <Link
                    href="/Work"
                    className="block text-black hover:text-white"
                  >
                    Work
                  </Link>
                </Menu.Item>
                <Menu.Item className="flex justify-center p-2 hover:bg-gray-500">
                  <Link
                    href="/Skills"
                    className="block text-black hover:text-white"
                  >
                    Skills
                  </Link>
                </Menu.Item>
                <Menu.Item className="flex justify-center p-2 hover:bg-gray-500">
                  <a
                    href="https://www.github.com/codrkoaz"
                    target="_blank"
                    rel="noopener"
                  >
                    Source
                  </a>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
