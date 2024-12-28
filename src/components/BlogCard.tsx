import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: Post }) {
  // Safely extract the image URL
  const imageUrl = post.image ? urlFor(post.image)?.url() : null;

  return (
    <section className="flex flex-col justify-between h-[480px] rounded-lg bg-light/90 dark:bg-dark/40 group hover:ring-4  transition-transform ease-out duration-700 hover:ring-maincolor hover:scale-[1.02] hover:shadow-[0_0_2rem] hover:shadow-maincolor dark:shadow-[0_0_3rem] dark:hover:shadow-maincolor text-dark font-semibold mt-4 shadow-[0_0_2em]  hover:bg-transparent hover:text-maincolor">
      {/* Image Section */}
      <div className="relative max-h-76 flex-1">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title || "Blog Image"}
            fill
            className="object-cover rounded-t"
          />
        ) : (
          <div className="h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-t">
            <span className="text-gray-500 dark:text-gray-400">
              No Image Available
            </span>
          </div>
        )}
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gap-4 p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {post.title}
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          {post.summary || "No summary available"}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="block px-4 py-1 text-center bg-maincolor rounded text-dark font-semibold mt-4 shadow-[0_0_2em] hover:ring-maincolor hover:ring-2 hover:bg-transparent hover:text-maincolor transition-all duration-500"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
