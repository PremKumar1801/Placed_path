import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Users, Activity, CreditCard, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const userStats = [
  { label: "Total Users", value: "12,450", icon: Users, change: "+245 this week" },
  { label: "Active Today", value: "1,892", icon: Activity, change: "+12% vs yesterday" },
  { label: "Paid Users", value: "3,120", icon: CreditCard, change: "25% conversion" },
  { label: "AI Requests", value: "45,890", icon: BarChart3, change: "3,200 today" },
];

const signupData = [
  { month: "Sep", users: 800 }, { month: "Oct", users: 1200 }, { month: "Nov", users: 1800 },
  { month: "Dec", users: 2400 }, { month: "Jan", users: 3100 }, { month: "Feb", users: 3800 },
];

const planData = [
  { name: "Free", value: 9330, color: "hsl(var(--muted-foreground))" },
  { name: "Pro", value: 2120, color: "hsl(var(--primary))" },
  { name: "Premium", value: 1000, color: "hsl(var(--accent))" },
];

const users = [
  { name: "Priya Sharma", email: "priya@email.com", role: "Student", plan: "Pro", joined: "Jan 15" },
  { name: "Rahul Verma", email: "rahul@email.com", role: "Student", plan: "Free", joined: "Jan 20" },
  { name: "Ananya K", email: "ananya@email.com", role: "Student", plan: "Premium", joined: "Feb 1" },
  { name: "Vikram Singh", email: "vikram@email.com", role: "Admin", plan: "Premium", joined: "Sep 1" },
  { name: "Deepa Nair", email: "deepa@email.com", role: "Student", plan: "Pro", joined: "Feb 5" },
];

const logs = [
  { time: "14:32:01", level: "error", message: "AI request timeout for user #4521" },
  { time: "14:28:45", level: "warn", message: "Rate limit reached for user #3892" },
  { time: "14:25:12", level: "info", message: "New user registered: deepa@email.com" },
  { time: "14:20:00", level: "info", message: "Scheduled roadmap update completed" },
  { time: "14:15:33", level: "error", message: "Payment webhook failed - retry queued" },
];

export default function AdminPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>

        <Tabs defaultValue="dashboard">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="roadmaps">Roadmaps</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {userStats.map((s) => (
                <Card key={s.label} className="border-border/50">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <s.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{s.label}</p>
                        <p className="text-xl font-bold">{s.value}</p>
                        <p className="text-xs text-muted-foreground">{s.change}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-border/50">
                <CardHeader><CardTitle className="text-lg">User Growth</CardTitle></CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={signupData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                      <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardHeader><CardTitle className="text-lg">Subscription Distribution</CardTitle></CardHeader>
                <CardContent className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie data={planData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                        {planData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="mt-6 space-y-4">
            <Input placeholder="Search users..." className="max-w-sm" />
            <Card className="border-border/50">
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full text-sm min-w-[600px]">
                  <thead><tr className="border-b bg-muted/50"><th className="p-3 text-left">Name</th><th className="p-3 text-left">Email</th><th className="p-3 text-left">Role</th><th className="p-3 text-left">Plan</th><th className="p-3 text-left">Joined</th></tr></thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u.email} className="border-b">
                        <td className="p-3 font-medium">{u.name}</td>
                        <td className="p-3 text-muted-foreground">{u.email}</td>
                        <td className="p-3"><Badge variant={u.role === "Admin" ? "destructive" : "secondary"} className="text-xs">{u.role}</Badge></td>
                        <td className="p-3"><Badge variant="outline" className="text-xs">{u.plan}</Badge></td>
                        <td className="p-3 text-muted-foreground">{u.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <Card className="border-border/50">
              <CardHeader><CardTitle>Signups Over Time</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={signupData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                    <Bar dataKey="users" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roadmaps" className="mt-6">
            <Card className="border-border/50">
              <CardHeader><CardTitle>Roadmap Templates</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Web Development", "Data Science", "AI/ML", "Core CS", "Cloud & DevOps", "Embedded Systems"].map((r) => (
                    <div key={r} className="flex items-center justify-between rounded-lg bg-muted p-3">
                      <span className="font-medium">{r}</span>
                      <Badge variant="outline" className="text-xs">Active</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="mt-6">
            <Card className="border-border/50">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <CreditCard className="h-12 w-12 text-muted-foreground/30" />
                <p className="mt-4 text-muted-foreground">Payment integration coming soon</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="mt-6">
            <Card className="border-border/50">
              <CardContent className="p-0 overflow-x-auto">
                <table className="w-full text-sm min-w-[500px]">
                  <thead><tr className="border-b bg-muted/50"><th className="p-3 text-left">Time</th><th className="p-3 text-left">Level</th><th className="p-3 text-left">Message</th></tr></thead>
                  <tbody>
                    {logs.map((log, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-3 font-mono text-xs text-muted-foreground">{log.time}</td>
                        <td className="p-3">
                          <Badge variant={log.level === "error" ? "destructive" : log.level === "warn" ? "default" : "secondary"} className="text-xs">{log.level}</Badge>
                        </td>
                        <td className="p-3 text-muted-foreground">{log.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
