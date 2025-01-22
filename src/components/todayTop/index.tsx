import React from "react";
import HighLightTitle from "../highlight";
import MainCard from "../card/MainCard";

const cardHighLights = [1, 2, 3, 4, 5, 6, 7, 8];

const TodayTopHighlight = () => {
  return (
    <div className='flex flex-col gap-8'>
      <HighLightTitle title="Today's Top Highlights" />
      <div className='grid grid-cols-6 gap-12'>
        <div className='border[#777777] col-span-4 border'>
          <div className='grid grid-cols-2 gap-6 p-[30px]'>
            {cardHighLights.map((card, idx) => (
              <div key={idx}>
                <MainCard item={{}} />
              </div>
            ))}
          </div>
        </div>
        <div className='border[#777777] col-span-2 col-start-5 border'>
          <div className='p-[30px]'>123</div>
        </div>
      </div>
    </div>
  );
};

export default TodayTopHighlight;
