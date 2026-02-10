import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const tasks = [
  { title: "Complete React Hooks tutorial", domain: "Web Dev", priority: "High", due: "Feb 12", done: false },
  { title: "Solve 5 LeetCode problems", domain: "Core CS", priority: "Medium", due: "Feb 13", done: false },
  { title: "Read about REST API design", domain: "Web Dev", priority: "Low", due: "Feb 14", done: false },
  { title: "Practice SQL queries", domain: "Data Science", priority: "High", due: "Feb 15", done: false },
  { title: "Build a to-do app component", domain: "Web Dev", priority: "Medium", due: "Feb 10", done: true },
  { title: "NumPy array exercises", domain: "Data Science", priority: "Low", due: "Feb 9", done: true },
];

const weeklyData = [
  { week: "W1", tasks: 5 }, { week: "W2", tasks: 8 }, { week: "W3", tasks: 6 },
  { week: "W4", tasks: 10 }, { week: "W5", tasks: 7 }, { week: "W6", tasks: 9 },
];

const skillData = [
  { month: "Oct", score: 20 }, { month: "Nov", score: 35 }, { month: "Dec", score: 45 },
  { month: "Jan", score: 58 }, { month: "Feb", score: 65 },
];

export default function TasksPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Tasks & Progress</h1>
            <p className="text-muted-foreground">Track your daily tasks and skill growth</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-warning/10 px-4 py-2">
            <Flame className="h-5 w-5 text-warning" />
            <span className="font-bold text-warning">12 day streak!</span>
          </div>
        </div>

        <Tabs defaultValue="tasks">
          <TabsList>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="tasks" className="mt-6 space-y-2">
            {tasks.map((t, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="flex items-center gap-4 p-4">
                  <input type="checkbox" checked={t.done} readOnly className="h-4 w-4 accent-primary" />
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${t.done ? "line-through text-muted-foreground" : ""}`}>{t.title}</p>
                    <p className="text-xs text-muted-foreground">Due: {t.due}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">{t.domain}</Badge>
                  <Badge
                    variant={t.priority === "High" ? "destructive" : t.priority === "Medium" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {t.priority}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="progress" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-border/50">
                <CardHeader><CardTitle className="text-lg">Tasks Completed per Week</CardTitle></CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                      <Bar dataKey="tasks" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader><CardTitle className="text-lg">Skill Growth Over Time</CardTitle></CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={skillData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                      <Line type="monotone" dataKey="score" stroke="hsl(var(--secondary))" strokeWidth={2} dot={{ fill: "hsl(var(--secondary))" }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
