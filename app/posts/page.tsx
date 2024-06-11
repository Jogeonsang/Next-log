import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Post } from "~types/post";
import { getAllPosts } from "~utils/posts";
import i18nConfig from "../../next-i18next.config";

const getPosts = async (): Promise<Post[]> => {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || i18nConfig.defaultLocale;

  const posts = getAllPosts(lang);

  return posts;
};

const Article = async () => {
  const posts = await getPosts();

  return (
    <section className="flex pt-12 pb-14 w-[900px] m-auto">
      <ul className="flex flex-col gap-y-20">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="group transition-transform ease-in-out duration-200 "
          >
            <Link
              href={`/posts/${post.slug}`}
              className="flex items-center gap-x-12"
            >
              {post.metadata.thumbnail && (
                <Image
                  src={`/posts/${post.slug}/${post?.metadata.thumbnail ?? ""}`}
                  alt={`${post.slug} thumbnail`}
                  width={240}
                  height={240}
                  className="rounded-[14px] object-cover group-hover:-translate-y-1 transition-transform ease-in-out duration-200"
                  style={{ width: "240px", height: "240px" }}
                />
              )}
              <div className="flex flex-col">
                <span className="text-4xl font-bold mb-3  transition-colors duration-300 ease-in-out group-hover:text-blue">
                  {post.metadata.title}
                </span>
                <span className="text-lg mb-2.5">
                  {post.metadata.description}
                </span>
                <span className="text-sm text-slate-400">
                  {post.metadata.date}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Article;
