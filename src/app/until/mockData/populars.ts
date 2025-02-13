import { TrendingTopic } from "@/app/_lib/type/popular.type";

export const popularPosts: TrendingTopic[] = [
  {
    id: 1,
    title: "Next.js 14 chính thức ra mắt",
    slug: "nextjs-14-chinh-thuc-ra-mat",
    short_description:
      "Next.js 14 mang đến cải tiến về hiệu suất, React Server Components nâng cao, và hỗ trợ Turbopack nhanh hơn.",
    image:
      "https://media.licdn.com/dms/image/C4D12AQE1jg9NZRb7nQ/article-cover_image-shrink_720_1280/0/1614211171969?e=2147483647&v=beta&t=DGeMF__APoZHobzBd7h491-eftA3eGp7EB-LKWfywXc",
    category: "Công nghệ",
    views: 25000,
    mentions: 1200
  },
  {
    id: 2,
    title: "AI đạt bước tiến mới trong năm 2025",
    slug: "ai-buoc-tien-2025",
    short_description:
      "Công nghệ AI tiếp tục phát triển với mô hình GPT-5, giúp cải thiện tự động hóa và sáng tạo nội dung.",
    image:
      "https://cdn.vietnam.vn/wp-content/uploads/2024/12/Trend-cong-nghe-2025.webp.webp",
    category: "Trí tuệ nhân tạo",
    views: 18000,
    mentions: 950
  },
  {
    id: 3,
    title: "Bitcoin vượt mốc 100,000 USD",
    slug: "bitcoin-100k-usd",
    short_description:
      "Giá Bitcoin chính thức vượt 100,000 USD, đánh dấu cột mốc lịch sử trong thị trường tiền điện tử.",
    image:
      "https://danviet.mediacdn.vn/296231569849192448/2024/12/5/photo-1733369004888-17333690055901189091458.png",
    category: "Tài chính",
    views: 30000,
    mentions: 2000
  }
];
