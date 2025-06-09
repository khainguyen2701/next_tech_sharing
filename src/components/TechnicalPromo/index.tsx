"use client";

import OrbitTechCircle from "../OrbitTechCircle";

const data = [
  {
    title: "HTML size",
    items: [
      {
        label: "Tailwind only",
        size: "110 byte",
        widthPercent: "100%",
        color: "bg-yellow-400"
      },
      {
        label: "Tailwind + daisyUI",
        size: "427 byte",
        widthPercent: "23%",
        color: "bg-green-400"
      }
    ],
    note: "✔ 79% smaller DOM size",
    noteColor: "text-green-600"
  },
  {
    title: "HTML size",
    items: [
      {
        label: "Tailwind only",
        size: "110 byte",
        widthPercent: "100%",
        color: "bg-yellow-400"
      },
      {
        label: "Tailwind + daisyUI",
        size: "427 byte",
        widthPercent: "23%",
        color: "bg-green-400"
      }
    ],
    note: "✔ 79% smaller DOM size",
    noteColor: "text-green-600"
  }
];

const TechPromo = () => {
  return (
    <div className='relative bg-gradient-to-t from-blue-50 to-green-50'>
      <div className='container mx-auto'>
        <div className='container mx-auto flex flex-col items-center justify-between p-10 md:flex-row'>
          <div className='w-full space-y-8 md:w-1/3'>
            {data.map((block, index) => (
              <div
                key={index}
                className='mb-6 rounded-lg border border-dashed border-gray-400 p-4'
              >
                <h3 className='text-lg font-semibold text-gray-800'>
                  {block.title}
                </h3>
                {block.items.map(({ label, size, widthPercent, color }, i) => (
                  <div key={i} className='mt-4'>
                    <div className='flex justify-between text-sm text-gray-600'>
                      <span>{label}</span>
                      <span>{size}</span>
                    </div>
                    <div className='mt-1 h-3 w-full rounded-full bg-gray-200'>
                      <div
                        className={`h-3 rounded-full ${color}`}
                        style={{ width: widthPercent }}
                      ></div>
                    </div>
                  </div>
                ))}
                <p className={`mt-2 text-sm ${block.noteColor}`}>
                  {block.note}
                </p>
              </div>
            ))}
          </div>

          <div className='mt-6 w-full text-center md:ml-10 md:mt-0 md:w-2/3 md:text-left'>
            <h1 className='text-2xl font-bold text-gray-900 md:text-5xl lg:text-6xl'>
              Tại đây, bạn sẽ tìm thấy những kiến thức hữu ích được chia sẻ một
              cách cô đọng và dễ hiểu
            </h1>
            <p className='mt-4 max-w-md text-gray-600'>
              từ mẹo lập trình, kinh nghiệm thực chiến đến các công cụ hỗ trợ
              phát triển nhanh và hiệu quả hơn. Mục tiêu là giúp bạn tiết kiệm
              thời gian, nâng cao kỹ năng và xây dựng sản phẩm chất lượng hơn
              mỗi ngày..
            </p>
            <button className='mt-6 rounded-full border-2 border-gray-300 px-6 py-2 font-semibold text-gray-700 transition hover:bg-gray-100'>
              Khám phá ngay →
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
