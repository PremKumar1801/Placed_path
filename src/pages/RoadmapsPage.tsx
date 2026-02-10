import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Database, Cpu, Brain, Globe, Cog } from "lucide-react";

const roadmaps = [
  { icon: Code, title: "Web Development", level: "Beginner → Advanced", semesters: 4, desc: "HTML/CSS, JavaScript, React, Node.js, databases, deployment, and more.", tags: ["Frontend", "Backend", "Full-Stack"] },
  { icon: Database, title: "Data Science", level: "Beginner → Advanced", semesters: 4, desc: "Python, statistics, pandas, machine learning, data visualization, and projects.", tags: ["Python", "ML", "Analytics"] },
  { icon: Brain, title: "AI / Machine Learning", level: "Intermediate → Advanced", semesters: 3, desc: "Linear algebra, neural networks, deep learning, NLP, computer vision.", tags: ["Deep Learning", "NLP", "CV"] },
  { icon: Cpu, title: "Core CS Fundamentals", level: "Beginner → Advanced", semesters: 4, desc: "DSA, OS, DBMS, CN, system design — everything for placements.", tags: ["DSA", "System Design", "Placements"] },
  { icon: Globe, title: "Cloud & DevOps", level: "Beginner → Intermediate", semesters: 2, desc: "Linux, Docker, CI/CD, AWS basics, monitoring, and infrastructure.", tags: ["AWS", "Docker", "CI/CD"] },
  { icon: Cog, title: "Embedded Systems", level: "Beginner → Intermediate", semesters: 3, desc: "Microcontrollers, RTOS, IoT, sensor interfacing, and embedded C.", tags: ["IoT", "Embedded C", "Hardware"] },
];

export default function RoadmapsPage() {
  return (
    <PublicLayout>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold">Sample Roadmaps</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore AI-generated roadmaps across popular engineering domains.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roadmaps.map((r) => (
              <Card key={r.title} className="border-border/50 transition-colors hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <r.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{r.level} · {r.semesters} semesters</p>
                  <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/register">Get Your Personalized Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
