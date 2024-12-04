'use client';

import { useState } from 'react';
import { SalesData } from '@/lib/dummy-data';
import { Input } from "@/components/ui/input";
import DataTable from '@/components/shared/data-table/data-table';

const columns = [
    { accessorKey: "userName", header: "Name" },
    { accessorKey: "userCompany", header: "Company" },
    { accessorKey: "salePrice", header: "Sale" },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "date", header: "Date" },
];

const Page = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSales = SalesData.filter(sale =>
        sale.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sale.userCompany.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mb-4">
            <h1 className="text-2xl font-bold mb-4">Sales Data</h1>
            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Search by name or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
            </div>
            <DataTable data={filteredSales} columns={columns} />
        </div>
    );
};

export default Page;