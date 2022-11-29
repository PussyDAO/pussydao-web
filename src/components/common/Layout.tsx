import { FC } from 'react';
import { Navbar, Footer } from '.';

const Layout: FC = ({ children }) => {
  return (
    <div className='h-screen w-screen absolute p-0 m-0 flex flex-col justify-between'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
