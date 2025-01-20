import gallery1 from "@/public/galerry1.webp";
import ItemChildrenGallery from "./ItemChildren";
import GalleryItems from "./Items";

const data = [
  {
    category: "Fashion",
    title: "What's In Trend In Women's Fashion Summer?",
    description:
      "You can customize the view Blog posts with a simple mouse click...",
    author: "Robert",
    date: "20 Nov 2022",
    image: gallery1.src,
    type: "large",
    children: []
  },
  {
    category: "Travel",
    title: "Traveling Makes You More Interesting",
    author: "Robert",
    date: "20 Nov 2022",
    image: gallery1.src,
    type: "small",
    children: [
      {
        category: "Food",
        title: "Top 10 Healthy Food",
        author: "Robert",
        date: "20 Nov 2022",
        image: gallery1.src,
        type: "small"
      },
      {
        category: "Business",
        title: "What Makes a Leader?",
        author: "Robert",
        date: "20 Nov 2022",
        image: gallery1.src,
        type: "small"
      }
    ]
  }
];

const MasonryGridGallery = () => {
  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      {data.map((item, index) => {
        const isLargeCard = index === 0;

        return (
          <div className='h-[360px] sm:h-[420px] lg:h-[540px]' key={index}>
            {item?.children.length === 0 ? (
              <GalleryItems item={item} isLargeCard={isLargeCard} />
            ) : (
              <ItemChildrenGallery item={item} isLargeCard={isLargeCard} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MasonryGridGallery;
