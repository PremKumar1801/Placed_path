import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard } from "lucide-react";

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Billing</h1>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2"><CreditCard className="h-5 w-5" /> Current Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">Free Plan</p>
                <p className="text-sm text-muted-foreground">Basic features with limited AI access</p>
              </div>
              <Badge variant="secondary">Active</Badge>
            </div>
            <div className="mt-6 flex gap-3">
              <Button>Upgrade to Pro</Button>
              <Button variant="outline">Upgrade to Premium</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader><CardTitle className="text-lg">Payment History</CardTitle></CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CreditCard className="h-12 w-12 text-muted-foreground/30" />
              <p className="mt-4 text-muted-foreground">No payment history yet</p>
              <p className="text-sm text-muted-foreground">Your payment history will appear here after upgrading.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
