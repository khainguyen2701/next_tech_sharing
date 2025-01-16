import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";

const headerLink = [
  {
    id: "header-1",
    title: "Home",
    url: "/"
  },
  { id: "header-2", title: "Feature", url: "/feature" },
  { id: "header-3", title: "Marketing", url: "/marketing" }
];

const HeaderMainLayout = () => {
  return (
    <header className='sticky start-0 top-0 w-full border-b border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-900'>
      <nav className='container mx-auto'>
        <div className='flex max-w-screen-xl flex-wrap items-center justify-between py-4'>
          <Link
            href='/'
            className='font-montserrat flex items-center text-3xl font-semibold text-cyan-700'
          >
            Technical Sharing
          </Link>
          <div className='flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
            <div className='group flex items-center justify-center gap-2 text-xl font-medium text-cyan-700'>
              <AiOutlineLogin className='transition duration-300 group-hover:text-cyan-500' />
              <Link
                href='/login'
                className='font-inter relative text-cyan-700 transition duration-300 group-hover:text-cyan-500'
              >
                Login
                <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </Link>
            </div>
          </div>
          <div
            className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
            id='navbar-sticky'
          >
            <div className='font-inter flex flex-col gap-10 text-base font-medium md:flex-row md:gap-8 md:text-lg'>
              {headerLink.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='group flex items-center justify-center gap-2 text-xl font-medium text-cyan-700'
                  >
                    <Link
                      href={item.url}
                      className='font-inter relative text-cyan-700 transition duration-300 group-hover:text-cyan-500'
                    >
                      {item.title}
                      <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full'></span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMainLayout;
