import HighLightTitle from "@/components/highlight";
import HorizontalCard from "@/components/horizontalCard";
import InputSearch from "@/components/inputSearch";
import Pagination from "@/components/pagination";
import Tabs from "@/components/Tab";

export async function generateStaticParams() {
  const posts = await fetch("https://.../posts").then((res) => res.json());

  return posts.map((post: any) => ({
    slug: post.slug
  }));
}

export default async function PostsPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const totalItems = 100;
  const limit = 10;
  const totalPage = Math.floor(totalItems / limit);
  const mockData = [
    {
      id: 1,
      author: "Hải Doãn",
      title:
        "[HTML – CSS – JS tại F8] Một thời mày mò học, lúc lại được trang web cũ – chia sẻ cùng anh em",
      date: "16",
      readTime: "2",
      readCount: "2",
      thumbnail:
        "https://itech.edu.vn/wp-content/uploads/2022/08/pasted-image-0.png",
      tag: [
        "Javascript",
        "Typescript",
        "ReactJS",
        "Javascript",
        "Typescript",
        "ReactJS"
      ],
      short_describe:
        "Docker là một nền tảng giúp bạn đóng gói ứng dụng và tất cả các thư viện, cấu hình cần thiết vào một container – một môi trường độc lập, nhẹ, có thể chạy được trên bất kỳ hệ thống nào có Docker.Container: Là môi trường chạy ứng dụng, giống như một máy ảo nhẹ,Docker Hub: Kho chứa các image (miễn phí hoặc riêng tư) để tải xuống và chia sẻ."
    },
    {
      id: 2,
      author: "Minh Nguyễn",
      title:
        "[ReactJS] Hành trình từ newbie đến chuyên gia – kinh nghiệm thực tế",

      date: "10",
      readTime: "5",
      readCount: "15",
      thumbnail:
        "https://itech.edu.vn/wp-content/uploads/2022/08/pasted-image-0.png",
      tag: ["Javascript", "Typescript", "ReactJS"],
      short_describe:
        "Docker là một nền tảng giúp bạn đóng gói ứng dụng và tất cả các thư viện, cấu hình cần thiết vào một container – một môi trường độc lập, nhẹ, có thể chạy được trên bất kỳ hệ thống nào có Docker.Container: Là môi trường chạy ứng dụng, giống như một máy ảo nhẹ,Docker Hub: Kho chứa các image (miễn phí hoặc riêng tư) để tải xuống và chia sẻ."
    },
    {
      id: 3,
      author: "Lan Trần",
      title: "[NodeJS] Xây dựng API đơn giản cho dự án cá nhân",
      date: "5",
      readTime: "3",
      readCount: "8",
      thumbnail:
        "https://itech.edu.vn/wp-content/uploads/2022/08/pasted-image-0.png",
      short_describe:
        "Docker là một nền tảng giúp bạn đóng gói ứng dụng và tất cả các thư viện, cấu hình cần thiết vào một container – một môi trường độc lập, nhẹ, có thể chạy được trên bất kỳ hệ thống nào có Docker.Container: Là môi trường chạy ứng dụng, giống như một máy ảo nhẹ,Docker Hub: Kho chứa các image (miễn phí hoặc riêng tư) để tải xuống và chia sẻ.",
      tag: ["Javascript", "Typescript", "ReactJS"]
    },
    {
      id: 4,
      author: "Hùng Phạm",
      title: "[Tailwind CSS] Tối ưu giao diện với các utility class",
      date: "2",
      readTime: "4",
      readCount: "20",
      thumbnail:
        "https://itech.edu.vn/wp-content/uploads/2022/08/pasted-image-0.png",
      tag: ["Javascript", "Typescript", "ReactJS"],
      short_describe:
        "Docker là một nền tảng giúp bạn đóng gói ứng dụng và tất cả các thư viện, cấu hình cần thiết vào một container – một môi trường độc lập, nhẹ, có thể chạy được trên bất kỳ hệ thống nào có Docker.Container: Là môi trường chạy ứng dụng, giống như một máy ảo nhẹ,Docker Hub: Kho chứa các image (miễn phí hoặc riêng tư) để tải xuống và chia sẻ."
    },
    {
      id: 5,
      author: "Thảo Lê",
      title: "[NextJS] Tăng tốc phát triển với SSR và SSG",
      date: "1",
      readTime: "6",
      readCount: "12",
      thumbnail:
        "https://itech.edu.vn/wp-content/uploads/2022/08/pasted-image-0.png",
      tag: ["Javascript", "Typescript", "ReactJS"],
      short_describe:
        "Docker là một nền tảng giúp bạn đóng gói ứng dụng và tất cả các thư viện, cấu hình cần thiết vào một container – một môi trường độc lập, nhẹ, có thể chạy được trên bất kỳ hệ thống nào có Docker.Container: Là môi trường chạy ứng dụng, giống như một máy ảo nhẹ,Docker Hub: Kho chứa các image (miễn phí hoặc riêng tư) để tải xuống và chia sẻ."
    }
  ];

  return (
    <div className='my-8 flex flex-col gap-6'>
      <HighLightTitle title='Tất cả bài viết...' />
      <Tabs />
      <InputSearch />
      <HorizontalCard data={mockData} />
      <Pagination totalPages={totalPage} />
    </div>
  );
}
