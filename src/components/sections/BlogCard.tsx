import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type PostMeta } from "@/lib/mdx";

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Card className="flex flex-col h-full hover:border-cyan-500/50 transition-colors">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-muted-foreground font-mono">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <CardTitle className="text-base leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-cyan-500 transition-colors">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-4">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs text-muted-foreground hover:text-cyan-500 transition-colors flex items-center gap-1 shrink-0 ml-2"
        >
          Read <ArrowRight className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
