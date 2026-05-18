import type { Metadata } from "next";
import { BlogCard } from "@/components/sections/BlogCard";
import { getAllPosts } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, tools, and things Sajal Kumar Mishra is building.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog — Sajal Mishra",
    description: "Thoughts on software development, tools, and things Sajal Kumar Mishra is building.",
    url: `${siteConfig.url}/blog/`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-10">
        Writing about things I&apos;m learning, building, and thinking about.
      </p>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg font-medium mb-2">Coming soon</p>
          <p className="text-sm">Posts will appear here once published.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      <p className="text-xs text-muted-foreground mt-12">
        Drop a <code className="font-mono bg-muted px-1.5 py-0.5 rounded">.mdx</code> file in{" "}
        <code className="font-mono bg-muted px-1.5 py-0.5 rounded">content/blog/</code> to publish a new post.
      </p>
    </div>
  );
}
