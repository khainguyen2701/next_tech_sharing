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
      <div className='flex items-center gap-4'>
        <h2
          className={`font-inter ${fontSize} ${cssStyle} font-bold text-neutral-400`}
        >
          {title}
        </h2>
        <div className='flex-1 rounded-md border-4 border-t border-neutral-200'></div>
      </div>
    </div>
  );
};
export default HighLightTitle;
