import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

export const MainView: FC = ({ children }) => {
  return (
    <div className='relative w-full my-16 lg:my-0'>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-center items-center'>
        <div
          className={classNames(
            'relative overflow-clip scale-50 md:scale-125 md:-mb-12'
          )}
          style={{ height: '585px', width: '585px' }}
        >
          <Image src='/nft-reflect.png' layout='fill' quality={100} priority />
        </div>
        <div className='xl:w-10' />
        <div className='w-10/12 max-w-md text-left flex flex-col justify-center bg-pink-600 py-12 px-14 rounded-lg mb-16 lg:mb-0'>
          {children}
        </div>
      </div>
    </div>
  );
};
