import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Heart } from "lucide-react";

const team = [
  { name: "Alex Johnson", role: "Founder & CEO", bio: "Former engineer at Google. Passionate about democratizing education." },
  { name: "Priya Sharma", role: "Head of Product", bio: "EdTech veteran with 10+ years in personalized learning platforms." },
  { name: "Rahul Verma", role: "Lead AI Engineer", bio: "ML researcher focused on adaptive learning and recommendation systems." },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold">About EngiPath AI</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're on a mission to give every engineering student clarity, structure, and confidence.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", desc: "To guide every engineering student from confusion to career clarity using AI-powered personalization." },
              { icon: Heart, title: "Our Values", desc: "Student-first thinking, transparency, and belief that everyone deserves a clear path forward." },
              { icon: Users, title: "Our Impact", desc: "10,000+ students guided, 500+ internships landed, 200+ placements facilitated." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-3xl">
            <h2 className="text-center text-2xl font-bold">Meet the Team</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name} className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
