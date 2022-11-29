import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ConnectWalletButton } from '.';
import TwitterIcon from './TwitterIcon';

const NavLink: FC = ({ children }) => (
  <div className='bg-pink-600 px-3 py-2 mx-2 rounded-lg h-10 flex justify-center items-center'>
    {children}
  </div>
);

const Navbar: FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-24 w-full flex justify-between items-center px-5 text-xl'>
        <Link href='/'>
          <a>
            <div className='h-full w-auto pt-3'>
              <Image
                src='/pussy-dao-logo.png'
                alt='Pussy DAO Logo'
                height='82'
                width='270'
              />
            </div>
          </a>
        </Link>

        <div className='lg:hidden'>
          <ConnectWalletButton />
        </div>

        <ul className='hidden lg:flex'>
          <li>
            <Link href='/about'>
              <a>
                <NavLink>About</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/statement'>
              <a>
                <NavLink>Artist Statement</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/faq'>
              <a>
                <NavLink>FAQ</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/press'>
              <a>
                <NavLink>Press</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <a href='https://twitter.com/0xpussydao' target='_blank'>
              <NavLink>
                <TwitterIcon className='h-5 w-5 fill-white' />
              </NavLink>
            </a>
          </li>
          <li>
            <ConnectWalletButton />
          </li>
        </ul>
      </div>

      <ul className='flex lg:hidden m-auto'>
        <li>
          <Link href='/about'>
            <a>
              <NavLink>About</NavLink>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/statement'>
            <a>
              <NavLink>Artist Statement</NavLink>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/faq'>
            <a>
              <NavLink>FAQ</NavLink>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/press'>
            <a>
              <NavLink>Press</NavLink>
            </a>
          </Link>
        </li>
        <li>
          <a href='https://twitter.com/0xpussydao' target='_blank'>
            <NavLink>
              <TwitterIcon className='h-5 w-5 fill-white' />
            </NavLink>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
