import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  CheckCircle,
  Flame,
  Star,
  ArrowRight,
  Lightbulb,
  Compass,
  GraduationCap,
} from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Progress", value: "42%", color: "text-primary" },
  { icon: CheckCircle, label: "Tasks Done", value: "28/67", color: "text-secondary" },
  { icon: Flame, label: "Streak", value: "12 days", color: "text-warning" },
  { icon: Star, label: "Skill Level", value: "Intermediate", color: "text-accent" },
];

const milestones = [
  { title: "Complete React fundamentals", due: "Feb 15", status: "In Progress" },
  { title: "Build portfolio project", due: "Feb 28", status: "Upcoming" },
  { title: "DSA: Linked Lists & Trees", due: "Mar 5", status: "Upcoming" },
  { title: "Apply to 3 internships", due: "Mar 15", status: "Upcoming" },
];

const insights = [
  { title: "Focus on React Hooks", desc: "Based on your progress, mastering hooks will accelerate your web dev skills.", category: "Skill Tip" },
  { title: "Internship Window Opening", desc: "Companies start hiring for summer internships in March. Start preparing now.", category: "Career Alert" },
  { title: "Practice DSA Daily", desc: "Solve at least 2 problems daily to build consistency before placements.", category: "Focus Area" },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground">Here's your progress overview.</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="border-border/50">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="text-xl font-bold">{s.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Roadmap Snapshot */}
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Current Roadmap: Web Development</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/roadmap">View Full Roadmap <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Semester 4 Progress</span>
                <span className="font-medium">42%</span>
              </div>
              <Progress value={42} />
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">Current Phase</p>
                  <p className="font-semibold">React & State Management</p>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">Next Milestone</p>
                  <p className="font-semibold">Portfolio Project</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Milestones */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {milestones.map((m) => (
                  <div key={m.title} className="flex items-center justify-between rounded-lg bg-muted p-3">
                    <div>
                      <p className="text-sm font-medium">{m.title}</p>
                      <p className="text-xs text-muted-foreground">Due: {m.due}</p>
                    </div>
                    <Badge variant={m.status === "In Progress" ? "default" : "secondary"} className="text-xs">
                      {m.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">AI Mentor Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {insights.map((ins) => (
                  <div key={ins.title} className="rounded-lg border border-border/50 p-3">
                    <div className="mb-1 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-warning" />
                      <Badge variant="outline" className="text-xs">{ins.category}</Badge>
                    </div>
                    <p className="text-sm font-medium">{ins.title}</p>
                    <p className="text-xs text-muted-foreground">{ins.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-3 sm:grid-cols-3">
          <Button variant="outline" className="h-auto gap-2 p-4" asChild>
            <Link to="/roadmap">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Continue Learning</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto gap-2 p-4" asChild>
            <Link to="/domains">
              <Compass className="h-5 w-5 text-accent" />
              <span>Explore Domains</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto gap-2 p-4" asChild>
            <Link to="/placement">
              <GraduationCap className="h-5 w-5 text-secondary" />
              <span>Placement Readiness</span>
            </Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
