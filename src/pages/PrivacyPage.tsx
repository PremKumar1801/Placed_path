import { PublicLayout } from "@/components/layout/PublicLayout";

export default function PrivacyPage() {
  return (
    <PublicLayout>
      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: February 10, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">1. Information We Collect</h2>
              <p>We collect information you provide when creating an account, including your name, email address, academic details, and career preferences. We also collect usage data to improve our AI recommendations.</p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
              <p>Your information is used to generate personalized roadmaps, track progress, provide AI mentor insights, and improve our platform. We never sell your personal data to third parties.</p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">3. Data Security</h2>
              <p>We implement industry-standard security measures including encryption, secure authentication, and regular security audits to protect your data.</p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">4. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal data at any time. Contact us at privacy@placement-path.com for any data-related requests.</p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">5. Contact</h2>
              <p>For privacy-related inquiries, reach us at privacy@placement-path.com.</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
