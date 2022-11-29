import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
    <div className='flex h-24'>
      <div className='w-full'>
        <ul className='h-full flex justify-evenly items-center text-xl font-body'>
          <li>
            <Link href='/terms'>
              <a>Terms of Service</a>
            </Link>
          </li>
          <li>
            <Link href='/privacy'>
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <span>&copy; Highly Liquid {new Date().getFullYear()}</span>
          </li>
        </ul>
      </div>

      {/* <div className='w-1/2 h-full -mt-10'>
        <Link href='/mint'>
          <a>
            <div className='bg-pink-700 rounded-l-full h-full p-2 pr-0 text-3xl'>
              <div className='bg-pink-700 border border-white border-r-0 rounded-l-full h-full pl-40 flex items-center text-4xl font-body'>
                <div>Pre-Mint Now</div>
              </div>
            </div>
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default Footer;
