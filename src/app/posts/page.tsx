import HighLightTitle from "@/components/highlight";
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
  return (
    <div className='container mx-auto my-8 flex flex-col gap-8'>
      <HighLightTitle title='Tất cả bài viết...' />
      <Tabs />
    </div>
  );
}
