import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="flex justify-center w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to NextRep
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your AI-powered sales insights dashboard. Revolutionize your sales strategy with cutting-edge AI technology.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-4">
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle>Why Choose NextRep?</CardTitle>
                  <CardDescription>Empower your sales team with AI-driven insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2 text-left">
                    <li>Real-time sales performance analytics</li>
                    <li>AI-powered sales forecasting</li>
                    <li>Personalized customer insights</li>
                    <li>Automated lead scoring and prioritization</li>
                    <li>Intelligent sales strategy recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="space-x-4">
              <Button>Learn More</Button>
              <Button variant="outline">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Boost Sales Performance</CardTitle>
              </CardHeader>
              <CardContent>
                Leverage AI-driven insights to optimize your sales strategies and increase revenue.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Streamline Operations</CardTitle>
              </CardHeader>
              <CardContent>
                Automate routine tasks and focus on high-value activities that drive growth.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data-Driven Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                Make informed decisions based on real-time data and predictive analytics.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;