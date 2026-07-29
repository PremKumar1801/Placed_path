import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lightbulb, Send, Target, TrendingUp, BookOpen } from "lucide-react";

const insights = [
  { icon: Target, category: "Career Tips", title: "Start Building Your GitHub Profile", desc: "Recruiters check GitHub early. Push at least 3 projects with clean READMEs before internship season.", color: "text-primary" },
  { icon: TrendingUp, category: "Skill Suggestions", title: "Learn TypeScript Next", desc: "Based on your React progress, TypeScript will significantly boost your employability and code quality.", color: "text-secondary" },
  { icon: BookOpen, category: "Focus Areas", title: "Prioritize System Design Basics", desc: "For your placement timeline, understanding basic system design concepts will give you an edge in interviews.", color: "text-accent" },
  { icon: Target, category: "Career Tips", title: "Network on LinkedIn", desc: "Connect with alumni and engineers at target companies. Referrals account for 40% of tech hires.", color: "text-primary" },
  { icon: TrendingUp, category: "Skill Suggestions", title: "Practice Mock Interviews", desc: "Start doing mock interviews now. It takes about 10 sessions to feel comfortable with the format.", color: "text-secondary" },
  { icon: BookOpen, category: "Focus Areas", title: "Don't Skip Soft Skills", desc: "Communication skills are as important as technical skills. Join your college's debate or toastmasters club.", color: "text-accent" },
];

export default function InsightsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">AI Mentor Insights</h1>
          <p className="text-muted-foreground">Personalized tips and recommendations from your AI mentor</p>
        </div>

        {/* Ask AI */}
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="h-5 w-5 text-primary" />
              <p className="font-semibold">Ask Your AI Mentor</p>
            </div>
            <div className="flex gap-2">
              <Input placeholder="e.g., What should I focus on this week?" className="bg-background" />
              <Button size="icon" aria-label="Send query"><Send className="h-4 w-4" /></Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">AI integration coming soon. This is a preview.</p>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((ins, i) => (
            <Card key={i} className="border-border/50 transition-colors hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <ins.icon className={`h-5 w-5 ${ins.color}`} />
                  <Badge variant="outline" className="text-xs">{ins.category}</Badge>
                </div>
                <h3 className="font-semibold">{ins.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ins.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
