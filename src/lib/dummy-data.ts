import { DataCardProps } from "@/components/shared/cards/data-card";
import { SalesCardProps } from "@/components/shared/cards/sales-card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

export const CardData: DataCardProps[] = [{
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign
}, {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users
}, {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard
}, {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity
}];

export const UserSalesData: SalesCardProps[] = [{
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00"
}, {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00"
}, {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00"
}, {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00"
}, {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00"
}];

export const ChartData = [{
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000
}, {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000
}];

export const SalesData = [
    { id: 1, userName: "John Doe", userCompany: "Acme Corp", salePrice: 1000, status: "Completed", date: "2023-05-15" },
    { id: 2, userName: "Jane Smith", userCompany: "TechGiant", salePrice: 1500, status: "Pending", date: "2023-05-16" },
    { id: 3, userName: "Bob Johnson", userCompany: "Innovate Inc", salePrice: 800, status: "Completed", date: "2023-05-17" },
    { id: 4, userName: "Alice Brown", userCompany: "Future Systems", salePrice: 2000, status: "Cancelled", date: "2023-05-18" },
    { id: 5, userName: "Charlie Wilson", userCompany: "Acme Corp", salePrice: 1200, status: "Completed", date: "2023-05-19" },
    { id: 6, userName: "Emily Davis", userCompany: "NextGen Solutions", salePrice: 1800, status: "Pending", date: "2023-06-01" },
    { id: 7, userName: "Michael Green", userCompany: "TechGiant", salePrice: 1400, status: "Completed", date: "2023-06-02" },
    { id: 8, userName: "Olivia Harris", userCompany: "Innovate Inc", salePrice: 950, status: "Cancelled", date: "2023-06-03" },
    { id: 9, userName: "Daniel Lee", userCompany: "Future Systems", salePrice: 1250, status: "Pending", date: "2023-06-04" },
    { id: 10, userName: "Sophia Martinez", userCompany: "Acme Corp", salePrice: 1050, status: "Completed", date: "2023-06-05" },
    { id: 11, userName: "James Anderson", userCompany: "TechGiant", salePrice: 1700, status: "Pending", date: "2023-06-06" },
    { id: 12, userName: "Ella Carter", userCompany: "Innovate Inc", salePrice: 750, status: "Completed", date: "2023-06-07" },
    { id: 13, userName: "William Moore", userCompany: "Future Systems", salePrice: 2200, status: "Cancelled", date: "2023-06-08" },
    { id: 14, userName: "Chloe White", userCompany: "Acme Corp", salePrice: 1350, status: "Completed", date: "2023-06-09" },
    { id: 15, userName: "Benjamin Taylor", userCompany: "NextGen Solutions", salePrice: 2000, status: "Pending", date: "2023-06-10" },
    { id: 16, userName: "Liam Scott", userCompany: "TechGiant", salePrice: 1450, status: "Completed", date: "2023-06-11" },
    { id: 17, userName: "Ava Parker", userCompany: "Innovate Inc", salePrice: 980, status: "Cancelled", date: "2023-06-12" },
    { id: 18, userName: "Ethan Walker", userCompany: "Future Systems", salePrice: 1500, status: "Pending", date: "2023-06-13" },
    { id: 19, userName: "Isabella Young", userCompany: "Acme Corp", salePrice: 1100, status: "Completed", date: "2023-06-14" },
    { id: 20, userName: "Noah Lewis", userCompany: "NextGen Solutions", salePrice: 1750, status: "Pending", date: "2023-06-15" },
    { id: 21, userName: "Lucas Brown", userCompany: "TechGiant", salePrice: 1250, status: "Cancelled", date: "2023-06-16" },
    { id: 22, userName: "Charlotte Adams", userCompany: "Innovate Inc", salePrice: 900, status: "Completed", date: "2023-06-17" },
    { id: 23, userName: "Henry Garcia", userCompany: "Future Systems", salePrice: 1300, status: "Pending", date: "2023-06-18" },
    { id: 24, userName: "Amelia Hall", userCompany: "Acme Corp", salePrice: 1150, status: "Completed", date: "2023-06-19" },
    { id: 25, userName: "Oliver Perez", userCompany: "NextGen Solutions", salePrice: 1800, status: "Pending", date: "2023-06-20" },
    { id: 26, userName: "Emily Turner", userCompany: "TechGiant", salePrice: 1400, status: "Completed", date: "2023-06-21" },
    { id: 27, userName: "Liam Roberts", userCompany: "Innovate Inc", salePrice: 800, status: "Cancelled", date: "2023-06-22" },
    { id: 28, userName: "Sophia Harris", userCompany: "Future Systems", salePrice: 1550, status: "Pending", date: "2023-06-23" },
    { id: 29, userName: "Mason Clark", userCompany: "Acme Corp", salePrice: 1200, status: "Completed", date: "2023-06-24" },
    { id: 30, userName: "Ava Ramirez", userCompany: "NextGen Solutions", salePrice: 2000, status: "Pending", date: "2023-06-25" },
    { id: 31, userName: "Ethan Johnson", userCompany: "TechGiant", salePrice: 1500, status: "Completed", date: "2023-06-26" },
    { id: 32, userName: "Mia Martinez", userCompany: "Innovate Inc", salePrice: 1000, status: "Cancelled", date: "2023-06-27" },
    { id: 33, userName: "William Lewis", userCompany: "Future Systems", salePrice: 1700, status: "Pending", date: "2023-06-28" },
    { id: 34, userName: "James White", userCompany: "Acme Corp", salePrice: 1250, status: "Completed", date: "2023-06-29" },
    { id: 35, userName: "Ella Hill", userCompany: "NextGen Solutions", salePrice: 2100, status: "Pending", date: "2023-06-30" },
    { id: 36, userName: "Alexander Moore", userCompany: "TechGiant", salePrice: 1550, status: "Completed", date: "2023-07-01" },
    { id: 37, userName: "Scarlett Davis", userCompany: "Innovate Inc", salePrice: 850, status: "Cancelled", date: "2023-07-02" },
    { id: 38, userName: "Jackson Brown", userCompany: "Future Systems", salePrice: 1600, status: "Pending", date: "2023-07-03" },
    { id: 39, userName: "Mila Walker", userCompany: "Acme Corp", salePrice: 1300, status: "Completed", date: "2023-07-04" },
    { id: 40, userName: "Harper Young", userCompany: "NextGen Solutions", salePrice: 1900, status: "Pending", date: "2023-07-05" },
];