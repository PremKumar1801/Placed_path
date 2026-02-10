import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "Perfect for getting started",
    features: ["Basic AI roadmap", "3 domain trials", "Progress tracking", "Community access", "Weekly tasks"],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    desc: "Most popular for serious learners",
    features: ["Advanced AI roadmap", "Unlimited domain trials", "Placement planner", "Internship planner", "AI mentor insights", "Priority support", "Communication skills module"],
    popular: true,
    cta: "Get Pro",
  },
  {
    name: "Premium",
    price: "₹999",
    period: "/month",
    desc: "For those aiming for the top",
    features: ["Everything in Pro", "1-on-1 AI mentorship", "Resume review & feedback", "Mock interview prep", "Company-specific preparation", "Dedicated support channel", "Early feature access"],
    cta: "Go Premium",
  },
];

export default function PricingPage() {
  return (
    <PublicLayout>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold">Pricing</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Simple, transparent pricing. Start free, upgrade when you're ready.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative ${plan.popular ? "border-primary shadow-lg shadow-primary/10 scale-105" : "border-border/50"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link to="/register">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
