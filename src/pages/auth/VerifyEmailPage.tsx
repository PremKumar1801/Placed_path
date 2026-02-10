import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { MailCheck } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border/50 text-center">
        <CardHeader>
          <div className="mb-4 flex justify-center"><Logo /></div>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <MailCheck className="h-8 w-8 text-secondary" />
          </div>
          <CardTitle className="text-2xl">Check your email</CardTitle>
          <CardDescription>We've sent a verification link to your email address. Click the link to verify your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full" asChild>
            <Link to="/login">Back to Sign In</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
