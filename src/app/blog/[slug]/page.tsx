import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 10; // seconds


export async function generateStaticParams() {
  const query = `*[_type == "post"]{
  "slug": slug.current
}`;

  const slugs = await client.fetch(query);
  const slugRoutes: string[] = slugs.map((slug: { slug: string }) => slug.slug);
  return slugRoutes.map((slug: string) => ({ slug }));
}

console.log('Sanity Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "post" && slug.current == "${slug}"] {
    title, summary, image, content,
    author->{bio, image, name}
  } [0]`;

  const post = await client.fetch(query);

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-bgcolor dark:text-light">
        {post?.title}
      </h1>

      {/* Featured Image */}
      {post?.image && (
        <Image
          src={urlFor(post.image).url()}
          width={500}
          height={500}
          alt={post.title || "Featured Image"}
          className="rounded w-full"
        />
      )}

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-maincolor">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80 mt-2">
          {post?.summary}
        </p>
      </section>

      {/* Author Section */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        {post?.author?.image && (
          <Image
            src={urlFor(post.author.image).url()}
            width={200}
            height={200}
            alt={post.author.name || "Author"}
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
        )}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-maincolor">
            {post?.author?.name}
          </h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post?.author?.bio}
          </p>
        </div>
      </section>

      {/* Main Blog Content */}
      <section
        className="text-lg leading-normal text-dark/80 dark:text-light/80 
    prose-h4:text-maincolor prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-maincolor prose-strong:text-bgcolor dark:prose-strong:text-light prose-h3:text-bgcolor prose-h3:text-3xl prose-h3:font-extrabold prose-h3:dark:text-light"
      >
        <PortableText value={post?.content} />
      </section>
    </article>
  );
}
