import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Cpu, Globe, Cog, ArrowRight, Star, Clock } from "lucide-react";
import { useState } from "react";

const domains = [
  { icon: Code, name: "Web Development", status: "active", progress: 42, days: 14, desc: "Full-stack web development with React and Node.js" },
  { icon: Database, name: "Data Science", status: "trial", progress: 20, days: 5, desc: "Python, pandas, visualization, and machine learning basics" },
  { icon: Brain, name: "AI / Machine Learning", status: "available", progress: 0, days: 0, desc: "Neural networks, deep learning, NLP fundamentals" },
  { icon: Cpu, name: "Core CS", status: "available", progress: 0, days: 0, desc: "DSA, OS, DBMS, CN — placement essentials" },
  { icon: Globe, name: "Cloud & DevOps", status: "available", progress: 0, days: 0, desc: "Docker, CI/CD, AWS, infrastructure basics" },
  { icon: Cog, name: "Embedded Systems", status: "available", progress: 0, days: 0, desc: "Microcontrollers, IoT, RTOS, sensor interfacing" },
];

const trialTasks = [
  { day: 1, task: "Set up Python environment & Jupyter", done: true },
  { day: 2, task: "NumPy basics & array operations", done: true },
  { day: 3, task: "Pandas: DataFrames & data cleaning", done: false },
  { day: 4, task: "Data visualization with matplotlib", done: false },
  { day: 5, task: "Mini project: Analyze a dataset", done: false },
];

export default function DomainsPage() {
  const [view, setView] = useState<"grid" | "trial">("grid");

  if (view === "trial") {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Data Science Trial</h1>
              <p className="text-muted-foreground">5-day exploration plan</p>
            </div>
            <Button variant="outline" onClick={() => setView("grid")}>Back to Domains</Button>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Trial Progress</span>
                <span className="text-sm text-muted-foreground">Day 2 of 5</span>
              </div>
              <Progress value={40} />
            </CardContent>
          </Card>

          <div className="space-y-2">
            {trialTasks.map((t) => (
              <Card key={t.day} className={`border-border/50 ${t.done ? "opacity-70" : ""}`}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.day}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${t.done ? "line-through text-muted-foreground" : ""}`}>{t.task}</p>
                  </div>
                  <input type="checkbox" checked={t.done} readOnly className="h-4 w-4 accent-primary" />
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Star className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">AI Recommendation</p>
                  <p className="mt-1 text-sm text-muted-foreground">Based on your progress and engagement, Data Science aligns well with your interests. Consider continuing after the trial.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Domain Exploration</h1>
          <p className="text-muted-foreground">Explore different engineering domains with structured trials</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <Card key={d.name} className={`border-border/50 transition-colors hover:border-primary/30 ${d.status === "active" ? "border-primary/50" : ""}`}>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <d.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant={d.status === "active" ? "default" : d.status === "trial" ? "secondary" : "outline"}>
                    {d.status === "active" ? "Active" : d.status === "trial" ? "In Trial" : "Available"}
                  </Badge>
                </div>
                <h3 className="font-semibold">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
                {d.progress > 0 && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span>{d.progress}% complete</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {d.days} days</span>
                    </div>
                    <Progress value={d.progress} className="h-1.5" />
                  </div>
                )}
                <Button
                  variant={d.status === "available" ? "outline" : "default"}
                  className="mt-4 w-full gap-1"
                  size="sm"
                  onClick={() => d.status === "trial" ? setView("trial") : null}
                >
                  {d.status === "active" ? "Continue" : d.status === "trial" ? "View Trial" : "Start Trial"}
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
