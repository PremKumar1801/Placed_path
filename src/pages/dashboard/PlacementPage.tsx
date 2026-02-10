import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building2, Calendar, Target, Users } from "lucide-react";

const phases = [
  { name: "Foundation", status: "done", desc: "DSA basics, core CS, resume ready" },
  { name: "Intermediate", status: "current", desc: "Advanced DSA, system design intro, mock interviews" },
  { name: "Advanced", status: "upcoming", desc: "Company-specific prep, HR rounds, negotiation" },
  { name: "Final Sprint", status: "upcoming", desc: "Daily practice, mock sessions, confidence building" },
];

const companies = [
  { name: "TCS", type: "Mass", readiness: 75 },
  { name: "Infosys", type: "Mass", readiness: 70 },
  { name: "Wipro", type: "Mass", readiness: 68 },
  { name: "Amazon", type: "Dream", readiness: 35 },
  { name: "Google", type: "Super Dream", readiness: 20 },
  { name: "Microsoft", type: "Dream", readiness: 30 },
];

const interviews = [
  { date: "Feb 15", type: "Technical Round", focus: "DSA - Arrays & Strings" },
  { date: "Feb 22", type: "System Design", focus: "URL Shortener" },
  { date: "Mar 1", type: "HR Round", focus: "Behavioral questions" },
];

export default function PlacementPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Placement Planner</h1>
          <p className="text-muted-foreground">Phase-wise preparation for campus placements</p>
        </div>

        {/* Readiness Score */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-border/50 text-center">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">Overall Readiness</p>
              <p className="text-3xl font-bold text-primary">52%</p>
              <Progress value={52} className="mt-2" />
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">DSA Score</p>
              <p className="text-3xl font-bold text-secondary">68%</p>
              <Progress value={68} className="mt-2" />
            </CardContent>
          </Card>
          <Card className="border-border/50 text-center">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">Mock Interviews</p>
              <p className="text-3xl font-bold text-accent">3/10</p>
              <Progress value={30} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Phases */}
        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg">Preparation Phases</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {phases.map((p) => (
                <div key={p.name} className="flex items-center gap-4 rounded-lg bg-muted p-4">
                  <div className={`h-3 w-3 rounded-full ${p.status === "done" ? "bg-secondary" : p.status === "current" ? "bg-primary animate-pulse" : "bg-border"}`} />
                  <div className="flex-1">
                    <p className="font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                  <Badge variant={p.status === "done" ? "secondary" : p.status === "current" ? "default" : "outline"} className="text-xs">
                    {p.status === "done" ? "Completed" : p.status === "current" ? "In Progress" : "Upcoming"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Company Cards */}
          <Card className="border-border/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Building2 className="h-5 w-5" /> Company Readiness</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {companies.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <span className="w-20 text-sm font-medium">{c.name}</span>
                  <Badge variant="outline" className="text-xs w-24 justify-center">{c.type}</Badge>
                  <div className="flex-1"><Progress value={c.readiness} className="h-2" /></div>
                  <span className="w-10 text-right text-xs text-muted-foreground">{c.readiness}%</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Mock Interviews */}
          <Card className="border-border/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Users className="h-5 w-5" /> Mock Interview Schedule</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {interviews.map((int) => (
                <div key={int.date} className="rounded-lg bg-muted p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{int.type}</span>
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {int.date}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Focus: {int.focus}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
