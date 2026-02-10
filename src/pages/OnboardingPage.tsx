import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Check, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

const branches = ["Computer Science", "Information Technology", "Electronics", "Electrical", "Mechanical", "Civil", "Chemical", "Biotech"];
const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const interests = ["Web Development", "Data Science", "AI / Machine Learning", "Mobile Development", "Cloud & DevOps", "Cybersecurity", "Core CS (DSA/OS/DBMS)", "Embedded Systems", "Blockchain", "Game Development"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const goals = ["Land an Internship", "Prepare for Placements", "Explore & Discover"];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ year: "", branch: "", interests: [] as string[], level: "", goal: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const toggleInterest = (interest: string) => {
    setData((d) => ({
      ...d,
      interests: d.interests.includes(interest)
        ? d.interests.filter((i) => i !== interest)
        : [...d.interests, interest],
    }));
  };

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(5);
    }, 3000);
  };

  const canNext = () => {
    if (step === 0) return data.year && data.branch;
    if (step === 1) return data.interests.length > 0;
    if (step === 2) return data.level;
    if (step === 3) return data.goal;
    return true;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg border-border/50">
        <CardHeader className="text-center">
          <div className="mb-2 flex justify-center"><Logo /></div>
          {step < 5 && <Progress value={progress} className="mt-4" />}
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <div className="space-y-6">
              <div className="text-center">
                <CardTitle className="text-xl">Academic Info</CardTitle>
                <CardDescription>Select your year and branch</CardDescription>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Year</p>
                <div className="flex flex-wrap gap-2">
                  {years.map((y) => (
                    <Badge key={y} variant={data.year === y ? "default" : "outline"} className="cursor-pointer px-3 py-1.5" onClick={() => setData({ ...data, year: y })}>{y}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Branch</p>
                <div className="flex flex-wrap gap-2">
                  {branches.map((b) => (
                    <Badge key={b} variant={data.branch === b ? "default" : "outline"} className="cursor-pointer px-3 py-1.5" onClick={() => setData({ ...data, branch: b })}>{b}</Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <CardTitle className="text-xl">Your Interests</CardTitle>
                <CardDescription>Select topics that excite you</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <Badge key={i} variant={data.interests.includes(i) ? "default" : "outline"} className="cursor-pointer px-3 py-1.5" onClick={() => toggleInterest(i)}>
                    {data.interests.includes(i) && <Check className="mr-1 h-3 w-3" />}
                    {i}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <CardTitle className="text-xl">Skill Level</CardTitle>
                <CardDescription>How would you rate your current skills?</CardDescription>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {levels.map((l) => (
                  <Card key={l} className={`cursor-pointer border-2 transition-colors ${data.level === l ? "border-primary" : "border-border/50"}`} onClick={() => setData({ ...data, level: l })}>
                    <CardContent className="px-8 py-4 text-center">
                      <p className="font-semibold">{l}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <CardTitle className="text-xl">Career Goal</CardTitle>
                <CardDescription>What are you aiming for right now?</CardDescription>
              </div>
              <div className="space-y-3">
                {goals.map((g) => (
                  <Card key={g} className={`cursor-pointer border-2 transition-colors ${data.goal === g ? "border-primary" : "border-border/50"}`} onClick={() => setData({ ...data, goal: g })}>
                    <CardContent className="p-4">
                      <p className="font-semibold">{g}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 4 && !loading && (
            <div className="space-y-6 text-center">
              <CardTitle className="text-xl">Ready to Generate</CardTitle>
              <CardDescription>We'll create a personalized roadmap based on your profile.</CardDescription>
              <div className="rounded-lg bg-muted p-4 text-left text-sm">
                <p><strong>Year:</strong> {data.year}</p>
                <p><strong>Branch:</strong> {data.branch}</p>
                <p><strong>Interests:</strong> {data.interests.join(", ")}</p>
                <p><strong>Level:</strong> {data.level}</p>
                <p><strong>Goal:</strong> {data.goal}</p>
              </div>
              <Button onClick={handleGenerate} className="gap-2">
                Generate My Roadmap <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 4 && loading && (
            <div className="flex flex-col items-center gap-4 py-12">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-lg font-semibold">Generating your roadmap...</p>
              <p className="text-sm text-muted-foreground">Our AI is crafting a personalized plan just for you</p>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Check className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-xl">Your Roadmap is Ready!</CardTitle>
              <CardDescription>We've created a personalized semester-wise roadmap based on your profile. Head to your dashboard to start your journey.</CardDescription>
              <Button onClick={() => navigate("/dashboard")} className="gap-2">
                Go to Dashboard <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {step < 4 && (
            <div className="mt-8 flex justify-between">
              <Button variant="ghost" onClick={() => setStep(step - 1)} disabled={step === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={() => setStep(step + 1)} disabled={!canNext()}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
