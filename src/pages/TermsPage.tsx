import { PublicLayout } from "@/components/layout/PublicLayout";

export default function TermsPage() {
  return (
    <PublicLayout>
      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: February 10, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>By accessing and using EngiPath AI, you agree to be bound by these terms. If you do not agree, please do not use our platform.</p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">2. Use of Service</h2>
              <p>EngiPath AI provides AI-generated educational roadmaps and guidance. Our recommendations are advisory and should complement, not replace, academic counseling.</p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">3. User Accounts</h2>
              <p>You are responsible for maintaining the security of your account credentials. Notify us immediately of any unauthorized access.</p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">4. Subscriptions & Payments</h2>
              <p>Paid plans are billed monthly. You may cancel at any time. Refunds are processed according to our refund policy.</p>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-foreground">5. Limitation of Liability</h2>
              <p>EngiPath AI is not liable for career outcomes. Our platform provides guidance based on AI analysis, but success depends on individual effort.</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
