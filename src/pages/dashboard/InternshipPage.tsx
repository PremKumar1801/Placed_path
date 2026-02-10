import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, Calendar, FileText, Target } from "lucide-react";

const checklist = [
  { label: "Complete 2+ projects", done: true },
  { label: "Write project descriptions", done: true },
  { label: "Add skills section", done: false },
  { label: "Include education details", done: true },
  { label: "Get peer review", done: false },
  { label: "Proofread for errors", done: false },
];

const actions = [
  { title: "Apply to 3 summer internships", due: "Mar 1", priority: "High" },
  { title: "Complete React portfolio project", due: "Feb 20", priority: "High" },
  { title: "Update LinkedIn profile", due: "Feb 25", priority: "Medium" },
  { title: "Prepare elevator pitch", due: "Mar 5", priority: "Low" },
];

export default function InternshipPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Internship Planner</h1>
          <p className="text-muted-foreground">Prepare for internship opportunities semester by semester</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Skill Readiness */}
          <Card className="border-border/50 text-center">
            <CardHeader><CardTitle className="text-lg">Skill Readiness</CardTitle></CardHeader>
            <CardContent>
              <div className="relative mx-auto h-32 w-32">
                <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--primary))" strokeWidth="10" strokeDasharray={`${65 * 3.14} ${100 * 3.14}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">65%</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Good progress! Keep building projects.</p>
            </CardContent>
          </Card>

          {/* Resume Readiness */}
          <Card className="border-border/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><FileText className="h-5 w-5" /> Resume Readiness</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {checklist.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <Checkbox checked={item.done} />
                    <span className={`text-sm ${item.done ? "text-muted-foreground line-through" : ""}`}>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Completion</span>
                <span className="font-medium">50%</span>
              </div>
              <Progress value={50} className="mt-1" />
            </CardContent>
          </Card>

          {/* Timeline Alerts */}
          <Card className="border-border/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Calendar className="h-5 w-5" /> Internship Windows</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-lg border border-warning/30 bg-warning/5 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <span className="text-sm font-semibold text-warning">Summer 2026</span>
                </div>
                <p className="text-xs text-muted-foreground">Applications open Mar-Apr. Start preparing now!</p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-medium">Winter 2026</p>
                <p className="text-xs text-muted-foreground">Applications: Sep-Oct 2026</p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-sm font-medium">Summer 2027</p>
                <p className="text-xs text-muted-foreground">Applications: Mar-Apr 2027</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items */}
        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Target className="h-5 w-5" /> Action Items</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {actions.map((a) => (
              <div key={a.title} className="flex items-center justify-between rounded-lg bg-muted p-3">
                <div>
                  <p className="text-sm font-medium">{a.title}</p>
                  <p className="text-xs text-muted-foreground">Due: {a.due}</p>
                </div>
                <Badge variant={a.priority === "High" ? "destructive" : a.priority === "Medium" ? "default" : "secondary"} className="text-xs">
                  {a.priority}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
