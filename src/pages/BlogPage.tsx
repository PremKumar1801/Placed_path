import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const posts = [
  { title: "How to Choose Your Engineering Specialization", date: "Feb 5, 2026", category: "Career", excerpt: "A guide to exploring domains and finding your engineering passion.", slug: "#" },
  { title: "Top 10 Skills Every CS Student Needs in 2026", date: "Jan 28, 2026", category: "Skills", excerpt: "From DSA to system design — the skills that matter most for placements.", slug: "#" },
  { title: "Internship vs. Placement: What Should You Focus On?", date: "Jan 20, 2026", category: "Planning", excerpt: "Understanding when to aim for internships and when to prepare for placements.", slug: "#" },
  { title: "AI in Education: How Personalized Learning is Changing Engineering", date: "Jan 12, 2026", category: "AI", excerpt: "How AI-powered platforms are helping students learn more effectively.", slug: "#" },
  { title: "Building Your Resume as a 2nd Year Student", date: "Jan 5, 2026", category: "Career", excerpt: "Start early with projects, skills, and experience that recruiters love.", slug: "#" },
  { title: "The Power of Domain Exploration Before Commitment", date: "Dec 28, 2025", category: "Exploration", excerpt: "Why trying multiple domains before specializing leads to better outcomes.", slug: "#" },
];

export default function BlogPage() {
  return (
    <PublicLayout>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tips, guides, and insights for engineering students.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.title} to={post.slug}>
                <Card className="h-full border-border/50 transition-colors hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
