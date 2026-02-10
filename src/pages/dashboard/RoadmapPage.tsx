import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, AlertTriangle, Zap } from "lucide-react";
import { useState } from "react";

const semesters = [
  {
    name: "Semester 3",
    progress: 100,
    weeks: [
      { week: "Week 1-2", tasks: [
        { title: "HTML & CSS Fundamentals", done: true, flag: null },
        { title: "JavaScript Basics", done: true, flag: null },
      ]},
      { week: "Week 3-4", tasks: [
        { title: "React Introduction", done: true, flag: null },
        { title: "Component Patterns", done: true, flag: null },
      ]},
    ],
  },
  {
    name: "Semester 4 (Current)",
    progress: 42,
    weeks: [
      { week: "Week 1-2", tasks: [
        { title: "React Hooks Deep Dive", done: true, flag: "focus" },
        { title: "State Management (Zustand)", done: true, flag: null },
      ]},
      { week: "Week 3-4", tasks: [
        { title: "API Integration & TanStack Query", done: false, flag: "focus" },
        { title: "Authentication Patterns", done: false, flag: null },
      ]},
      { week: "Week 5-6", tasks: [
        { title: "Testing with Vitest", done: false, flag: null },
        { title: "Build Portfolio Project", done: false, flag: "focus" },
        { title: "Social Media Clone (avoid now)", done: false, flag: "avoid" },
      ]},
    ],
  },
  {
    name: "Semester 5",
    progress: 0,
    weeks: [
      { week: "Week 1-4", tasks: [
        { title: "Node.js & Express", done: false, flag: null },
        { title: "Database Design", done: false, flag: null },
      ]},
      { week: "Week 5-8", tasks: [
        { title: "Full-Stack Project", done: false, flag: null },
        { title: "Deployment & CI/CD", done: false, flag: null },
      ]},
    ],
  },
];

export default function RoadmapPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">My Roadmap</h1>
          <p className="text-muted-foreground">Web Development · Semester-wise breakdown</p>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="progress">In Progress</TabsTrigger>
            <TabsTrigger value="done">Completed</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-6">
            {semesters.map((sem) => (
              <Card key={sem.name} className="border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{sem.name}</CardTitle>
                    <span className="text-sm font-medium text-muted-foreground">{sem.progress}%</span>
                  </div>
                  <Progress value={sem.progress} className="mt-2" />
                </CardHeader>
                <CardContent className="space-y-2">
                  {sem.weeks.map((week) => (
                    <Collapsible key={week.week} defaultOpen={sem.progress > 0 && sem.progress < 100}>
                      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-muted p-3 text-sm font-medium hover:bg-muted/80">
                        {week.week}
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 pl-4">
                        {week.tasks.map((task) => (
                          <div key={task.title} className="flex items-center gap-3 rounded-lg p-2">
                            <input type="checkbox" checked={task.done} readOnly className="h-4 w-4 rounded border-border accent-primary" />
                            <span className={`flex-1 text-sm ${task.done ? "text-muted-foreground line-through" : ""}`}>
                              {task.title}
                            </span>
                            {task.flag === "focus" && (
                              <Badge className="gap-1 bg-primary/10 text-primary text-xs">
                                <Zap className="h-3 w-3" /> Focus Now
                              </Badge>
                            )}
                            {task.flag === "avoid" && (
                              <Badge variant="destructive" className="gap-1 text-xs">
                                <AlertTriangle className="h-3 w-3" /> Avoid Now
                              </Badge>
                            )}
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="progress"><p className="mt-6 text-muted-foreground">Showing in-progress items only.</p></TabsContent>
          <TabsContent value="done"><p className="mt-6 text-muted-foreground">Showing completed items only.</p></TabsContent>
          <TabsContent value="upcoming"><p className="mt-6 text-muted-foreground">Showing upcoming items only.</p></TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
