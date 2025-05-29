"use client";

import OrbitTechCircle from "../OrbitTechCircle";

const TechPromo = () => {
  return (
    <div className='relative bg-gradient-to-t from-blue-50 to-green-50'>
      <div className='container mx-auto'>
        <div className='container mx-auto flex flex-col items-center justify-between p-10 md:flex-row'>
          <div className='w-full space-y-8 md:w-1/3'>
            {[1, 2].map((item) => (
              <div
                key={item}
                className='rounded-lg border border-dashed border-gray-400 p-4'
              >
                <h3 className='font-inconsolata text-lg font-semibold text-gray-800'>
                  HTML size
                </h3>
                <div className='mt-2'>
                  <div className='flex justify-between text-sm text-gray-600'>
                    <span className='font-inconsolata'>Tailwind only</span>
                    <span className='font-inconsolata'>110 byte</span>
                  </div>
                  <div className='mt-1 h-3 w-full rounded-full bg-gray-200'>
                    <div
                      className='h-3 rounded-full bg-yellow-400'
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className='mt-2'>
                  <div className='flex justify-between text-sm text-gray-600'>
                    <span className='font-inconsolata'>Tailwind + daisyUI</span>
                    <span className='font-inconsolata'>427 byte</span>
                  </div>
                  <div className='mt-1 h-3 w-full rounded-full bg-gray-200'>
                    <div
                      className='h-3 rounded-full bg-green-400'
                      style={{ width: "23%" }}
                    ></div>
                  </div>
                </div>
                <p className='mt-2 font-inconsolata text-sm text-green-600'>
                  ✔ 79% smaller DOM size
                </p>
              </div>
            ))}
          </div>

          <div className='mt-6 w-full text-center md:ml-10 md:mt-0 md:w-2/3 md:text-left'>
            <h1 className='font-inconsolata text-8xl font-bold text-gray-900 md:text-5xl'>
              Fewer class names
              <br />
              Faster development
              <br />
              Smaller file size
            </h1>
            <p className='mt-4 max-w-md font-inconsolata text-gray-600'>
              With daisyUI, you write 88% fewer class names. And your HTML size
              will be about 79% smaller.
            </p>
            <button className='mt-6 rounded-full border-2 border-gray-300 px-6 py-2 font-inconsolata font-semibold text-gray-700 transition hover:bg-gray-100'>
              Get started →
            </button>
          </div>
        </div>
        <OrbitTechCircle />
      </div>
      <div
        className='pointer-events-none absolute bottom-0 left-0 right-0'
        style={{
          height: "100px",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))"
        }}
      />
    </div>
  );
};

export default TechPromo;
