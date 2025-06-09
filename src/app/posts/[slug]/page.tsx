import { posts } from "@/app/until/mockData/posts";
import Appendix from "@/components/appendix";
import MoreDropdown from "@/components/horizontalCard/MoreDropdown";
import RelatedPosts from "@/components/relatedPosts";
import RelatedTopics from "@/components/relatedTopics";
import { Metadata } from "next";
import Image from "next/image";

// export async function generateMetadata({
//   params
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   console.log("params", params.slug);
//   return { title: "Hello world", description: "Test" };
// }

const mockData = {
  id: "docker-intro-001",
  title: "🚀 Giới thiệu về Docker: Công cụ không thể thiếu cho DevOps",
  author: "Nguyễn Văn Khải",
  date: "2025-06-07",
  thumbnail: "https://example.com/images/docker-thumbnail.jpg",
  tags: ["Docker", "DevOps", "Container"],
  content: `
    <article style="line-height: 1.8; color: #333;">
      <p>Trong thời đại phát triển phần mềm hiện đại, <strong style="color: #0ea5e9;">Docker</strong> đã trở thành công cụ không thể thiếu, giúp lập trình viên và đội DevOps triển khai ứng dụng một cách linh hoạt và hiệu quả hơn bao giờ hết.</p>

      <h2 style="color: #2563eb;">🐳 Docker là gì?</h2>
      <p>Docker là một nền tảng mã nguồn mở giúp bạn đóng gói ứng dụng cùng toàn bộ môi trường chạy (thư viện, cấu hình, v.v.) vào trong một <strong>container</strong>. Nhờ đó, ứng dụng có thể chạy ổn định ở bất cứ đâu.</p>

      <h2 style="color: #2563eb;">💡 Lợi ích khi dùng Docker</h2>
      <ul style="padding-left: 1.2rem;">
        <li>✅ <strong>Portability:</strong> Viết một lần, chạy ở mọi nơi.</li>
        <li>⚡ <strong>Hiệu suất cao:</strong> Tối ưu tài nguyên so với máy ảo.</li>
        <li>🛠️ <strong>Dễ quản lý:</strong> Quản lý môi trường dễ dàng bằng <code>Dockerfile</code> và <code>docker-compose</code>.</li>
      </ul>

      <h2 style="color: #2563eb;">🔧 Cài đặt Docker</h2>
      <p>Tải Docker Desktop tại: 
        <a href="https://www.docker.com/products/docker-desktop/" target="_blank" style="color: #0ea5e9;">docker.com</a>.
        Sau khi cài đặt, bạn có thể kiểm tra Docker bằng lệnh sau:
      </p>
      <pre style="background: #f1f5f9; padding: 10px; border-radius: 6px; color: #0f172a;">
<code>docker --version</code>
      </pre>

      <h2 style="color: #2563eb;">🧪 Ví dụ: Chạy ứng dụng Node.js với Docker</h2>
      <p>Tạo file <code>Dockerfile</code>:</p>
      <pre style="background: #f8fafc; padding: 10px; border-left: 4px solid #0ea5e9; color: #1e293b;">
<code>FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]</code>
      </pre>

      <p>Build và chạy ứng dụng:</p>
      <pre style="background: #f8fafc; padding: 10px; border-left: 4px solid #0ea5e9; color: #1e293b;">
<code>docker build -t my-node-app .
docker run -p 3000:3000 my-node-app</code>
      </pre>

      <h2 style="color: #2563eb;">🔚 Kết luận</h2>
      <p>
        Docker đã thay đổi cách chúng ta phát triển và triển khai phần mềm. Nếu bạn chưa từng sử dụng Docker, hãy bắt đầu từ hôm nay. 
        Nó sẽ giúp bạn tiết kiệm rất nhiều thời gian và tránh được vô số rắc rối khi đưa ứng dụng ra môi trường thực tế.
      </p>

      <p style="font-style: italic; color: #64748b;">
        👉 Hẹn gặp lại ở bài viết tiếp theo: <strong>“Tìm hiểu về Docker Compose”</strong>
      </p>
    </article>
  `
};

const appendixMock = [
  {
    id: "1",
    label: "Giới thiệu Docker",
    children: [
      { id: "1-1", label: "Docker là gì?" },
      { id: "1-2", label: "Lợi ích của Docker" }
    ]
  },
  {
    id: "2",
    label: "Cài đặt Docker",
    children: [
      { id: "2-1", label: "Docker Desktop" },
      { id: "2-2", label: "Kiểm tra phiên bản" }
    ]
  },
  {
    id: "3",
    label: "Ví dụ sử dụng Docker"
  }
];

const PostDetailPage = () => {
  const actions = [
    { label: "📘  Chia sẻ lên Facebook", link: "#" },
    { label: "📧  Chia sẻ tới Email", link: "#" },
    { label: "🔗  Sap chép liên kết", link: "#" }
  ];

  return (
    <div className='mb-12 flex flex-col gap-16'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-10'>
        <div className='col-span-1 p-4 lg:col-span-7'>
          <div className='mb-14 mt-4 flex flex-col gap-8'>
            <div className='relative h-60 w-full overflow-hidden rounded-lg'>
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xrryA1F3ZMLpr8Yrw6SLH0fsjDxSwPCCHQ&s'
                alt='Banner'
                fill
                className='object-cover object-center'
                priority
              />
            </div>
            <div className='flex flex-col gap-6'>
              <h1 className='text-2xl font-bold lg:text-5xl'>
                {mockData.title}
              </h1>
              <div className='grid grid-cols-10 gap-4'>
                <div className='col-span-9'>
                  <p className=''>
                    <strong>Tác giả:</strong> {mockData.author} |{" "}
                    <em>Ngày đăng:</em> {mockData.date}
                  </p>
                </div>
                <div className='col-span-1 flex justify-end'>
                  <MoreDropdown actions={actions} />
                </div>
              </div>
            </div>
          </div>
          <div
            className='prose-lg prose max-w-none'
            dangerouslySetInnerHTML={{ __html: mockData.content }}
          />
        </div>
        <div className='hidden p-4 lg:col-span-3 lg:block'>
          <Appendix data={appendixMock} />
        </div>
      </div>
      <div>
        <RelatedTopics tags={mockData.tags} />
      </div>
      <div>
        <RelatedPosts posts={posts} />
      </div>
    </div>
  );
};

export default PostDetailPage;
