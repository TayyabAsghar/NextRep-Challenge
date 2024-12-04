import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import BarChart from "@/components/shared/bar-chart";
import { Card, CardContent } from "@/components/ui/card";
import DataCard from "@/components/shared/cards/data-card";
import { CardData, UserSalesData } from "@/lib/dummy-data";
import SalesCard from "@/components/shared/cards/sales-card";

const Page = async () => {
    const user = await currentUser();

    if (!user) redirect('/sign-in');

    return (
        <div className="flex flex-col gap-5  w-full">
            <div>
                <h1 className="text-2xl font-semibold">Welcome back, {user.firstName}</h1>
                <p className="text-muted-foreground mt-1">Here&apos;s what&apos;s happening with your accounts</p>
            </div>
            <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                {CardData.map((data, index) => (
                    <DataCard
                        key={index}
                        icon={data.icon}
                        label={data.label}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
            </section>
            <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
                <Card>
                    <CardContent>
                        <p className="p-4 font-semibold">Overview</p>
                        <BarChart />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="flex flex-col justify-between gap-4 py-4">
                        <section>
                            <p className="font-semibold">Recent Sales</p>
                            <p className="text-sm text-muted-foreground">
                                You made 265 sales this month.
                            </p>
                        </section>
                        {UserSalesData.map((sales, index) => (
                            <SalesCard
                                key={index}
                                name={sales.name}
                                email={sales.email}
                                saleAmount={sales.saleAmount}
                            />
                        ))}
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default Page;