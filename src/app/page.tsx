import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";

export const revalidate = 10; // seconds

export default async function Home() {
  const query = `*[_type == "post"] | order(_createAt asc) {
    summary, title, image, "slug":slug.current
  }`;

  const posts: Post[] = await client.fetch(query);

  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl  dark:shadow-[0_0_2rem] dark:text-light/90 dark:hover:text-maincolor dark:hover:ring-2 dark:hover:ring-maincolor dark:hover:bg-transparent dark:hover:shadow-[0_0_2rem] dark:scroll-m-20  mt-4 shadow-[0_0_2em]  hover:bg-transparent hover:text-maincolor hover:ring-maincolor hover:ring-4 outline-none ">
        Most Recent blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: Post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}
