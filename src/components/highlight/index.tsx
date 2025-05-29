import React from "react";
interface HighLightTitleProps {
  title: string;
  fontSize?: string;
  cssStyle?: string;
}
const HighLightTitle = ({
  title,
  fontSize = "text-2xl",
  cssStyle = ""
}: HighLightTitleProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2
        className={`font-inter ${fontSize} ${cssStyle} font-bold text-neutral-400`}
      >
        {title}
      </h2>
      <div className='flex flex-row items-center gap-2'>
        <div className='h-[5px] w-24 rounded-full bg-neutral-400'></div>
        <div className='h-[5px] w-10 rounded-full bg-neutral-400'></div>
      </div>
    </div>
  );
};
export default HighLightTitle;
