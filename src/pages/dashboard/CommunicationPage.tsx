import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageSquare, BookOpen, Mic, Presentation } from "lucide-react";

const weeklyTasks = [
  { task: "Read 1 article aloud (5 min)", done: true, day: "Mon" },
  { task: "Write a short email in English", done: true, day: "Tue" },
  { task: "Practice self-introduction (2 min)", done: false, day: "Wed" },
  { task: "Listen to a tech podcast episode", done: false, day: "Thu" },
  { task: "Give a 3-min presentation to a friend", done: false, day: "Fri" },
];

const englishTips = [
  "Read technical blogs daily to improve vocabulary",
  "Watch English tech talks with subtitles",
  "Practice thinking in English for 10 minutes daily",
  "Record yourself speaking and listen back",
  "Join an English conversation group or club",
];

const interviewTips = [
  "Use the STAR method for behavioral questions",
  "Practice explaining your projects in under 2 minutes",
  "Prepare 5 questions to ask the interviewer",
  "Work on your body language and eye contact",
  "Do at least 2 mock interviews per week",
];

const presentationChecklist = [
  { item: "Structure: Intro, Body, Conclusion", done: true },
  { item: "Visual aids: Clean slides, minimal text", done: true },
  { item: "Practice: Run through 3+ times", done: false },
  { item: "Timing: Stay within time limit", done: false },
  { item: "Q&A: Prepare for likely questions", done: false },
  { item: "Confidence: Record and review yourself", done: false },
];

export default function CommunicationPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Communication Skills</h1>
          <p className="text-muted-foreground">Build your communication, interview, and presentation abilities</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><MessageSquare className="h-5 w-5" /> Weekly Tasks</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {weeklyTasks.map((t) => (
                <div key={t.task} className="flex items-center gap-3">
                  <Checkbox checked={t.done} />
                  <div className="flex-1">
                    <p className={`text-sm ${t.done ? "line-through text-muted-foreground" : ""}`}>{t.task}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">{t.day}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><BookOpen className="h-5 w-5" /> English Improvement</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {englishTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Mic className="h-5 w-5" /> Interview Readiness</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {interviewTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Presentation className="h-5 w-5" /> Presentation Practice</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {presentationChecklist.map((item) => (
                <div key={item.item} className="flex items-center gap-2">
                  <Checkbox checked={item.done} />
                  <span className={`text-sm ${item.done ? "line-through text-muted-foreground" : ""}`}>{item.item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
