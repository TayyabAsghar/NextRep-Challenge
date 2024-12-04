import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export type DataCardProps = {
    label: string;
    amount: string;
    icon: LucideIcon;
    description: string;
};

const DataCard = (props: DataCardProps) => {
    return (
        <Card>
            <CardContent className="flex w-full flex-col p-5 gap-3">
                <section className="flex justify-between gap-2">
                    <p className="text-sm font-bold">{props.label}</p>
                    <props.icon className="h-4 w-4 text-secondary-foreground" />
                </section>
                <section className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold">{props.amount}</h2>
                    <p className="text-xs text-muted-foreground">{props.description}</p>
                </section>
            </CardContent>
        </Card>
    );
};

export default DataCard;