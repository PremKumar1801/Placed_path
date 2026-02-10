import { PublicLayout } from "@/components/layout/PublicLayout";
import { UserPlus, Settings, Map, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Create Your Account", desc: "Sign up with email or Google. It takes less than a minute." },
  { icon: Settings, title: "Set Your Profile", desc: "Tell us your branch, year, interests, skill level, and career goals through our guided onboarding." },
  { icon: Map, title: "Get Your AI Roadmap", desc: "Our AI analyzes your profile and generates a personalized semester-wise learning roadmap." },
  { icon: Rocket, title: "Learn, Track & Achieve", desc: "Follow your roadmap, complete tasks, explore domains, and prepare for internships and placements." },
];

export default function HowItWorksPage() {
  return (
    <PublicLayout>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold">How It Works</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Four simple steps to transform your engineering journey.
            </p>
          </div>
          <div className="relative mx-auto mt-16 max-w-2xl">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-px" />
            {steps.map((step, i) => (
              <div key={i} className="relative mb-12 flex items-start gap-6 md:even:flex-row-reverse md:even:text-right">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="pt-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Step {i + 1}</p>
                  <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
