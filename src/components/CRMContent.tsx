import React from "react";

import { Plus, User } from "lucide-react";
import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Progress } from "./ui/progress";
import { SidebarTrigger } from "./ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const salesData = [
  { month: "Jan", leads: 45, customers: 12, revenue: 25000 },
  { month: "Feb", leads: 52, customers: 18, revenue: 32000 },
  { month: "Mar", leads: 48, customers: 15, revenue: 28000 },
  { month: "Apr", leads: 61, customers: 22, revenue: 45000 },
  { month: "May", leads: 55, customers: 19, revenue: 38000 },
  { month: "Jun", leads: 67, customers: 24, revenue: 52000 },
];

const customers = [
  {
    id: "CUST-001",
    name: "John Smith",
    company: "Tech Corp",
    email: "john@techcorp.com",
    status: "Active",
    value: "$15,000",
  },
  {
    id: "CUST-002",
    name: "Sarah Johnson",
    company: "Design Co",
    email: "sarah@designco.com",
    status: "Lead",
    value: "$8,500",
  },
  {
    id: "CUST-003",
    name: "Mike Davis",
    company: "StartupXYZ",
    email: "mike@startup.com",
    status: "Active",
    value: "$22,000",
  },
  {
    id: "CUST-004",
    name: "Lisa Chen",
    company: "Marketing Inc",
    email: "lisa@marketing.com",
    status: "Prospect",
    value: "$12,000",
  },
];

const pipeline = [
  { stage: "Prospecting", deals: 15, value: 75000 },
  { stage: "Qualification", deals: 8, value: 120000 },
  { stage: "Proposal", deals: 5, value: 85000 },
  { stage: "Negotiation", deals: 3, value: 65000 },
  { stage: "Closed Won", deals: 12, value: 180000 },
];

const leadSources = [
  { name: "Website", value: 35, color: "#26A395" },
  { name: "Referrals", value: 25, color: "#0E9EA9" },
  { name: "Social Media", value: 20, color: "#11254A" },
  { name: "Email", value: 15, color: "#F1F2F4" },
  { name: "Other", value: 5, color: "#26A395" },
];

const chartConfig = {
  leads: { label: "Leads", color: "#26A395" },
  customers: { label: "Customers", color: "#0E9EA9" },
  revenue: { label: "Revenue", color: "#11254A" },
};

export function CRMContent() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-[#11254A]" />
          <div>
            <h1 className="text-[#11254A] text-xl font-medium">
              Customer Relationship Management
            </h1>
            <p className="text-[#11254A]/70 text-sm">
              Manage customers and sales pipeline
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#26A395] text-[#26A395] hover:bg-[#26A395] hover:text-white"
          >
            <User className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
          <Button className="bg-[#26A395] hover:bg-[#26A395]/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Deal
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* CRM Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Customers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#26A395]">1,247</div>
              <p className="text-xs text-muted-foreground">+12% this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0E9EA9]">67</div>
              <p className="text-xs text-muted-foreground">+8% this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pipeline Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#11254A]">$525K</div>
              <p className="text-xs text-muted-foreground">43 open deals</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Conversion Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#26A395]">24.8%</div>
              <p className="text-xs text-muted-foreground">+2.1% improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Sales Performance
              </CardTitle>
              <CardDescription>Monthly leads and conversions</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="leads"
                      stroke="#26A395"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="customers"
                      stroke="#0E9EA9"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Lead Sources</CardTitle>
              <CardDescription>Where your leads come from</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={leadSources}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {leadSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Pipeline and Customers */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Sales Pipeline</CardTitle>
              <CardDescription>Current deal stages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pipeline.map((stage, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#11254A] font-medium">
                        {stage.stage}
                      </span>
                      <span className="text-muted-foreground">
                        {stage.deals} deals
                      </span>
                    </div>
                    <Progress
                      value={(stage.value / 200000) * 100}
                      className="h-2"
                    />
                    <div className="text-right text-sm text-[#26A395] font-medium">
                      ${stage.value.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Recent Customers</CardTitle>
              <CardDescription>Latest customer activity</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-[#26A395]" />
                          <div>
                            <p className="font-medium text-[#11254A]">
                              {customer.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {customer.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{customer.company}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            customer.status === "Active"
                              ? "default"
                              : customer.status === "Lead"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-[#26A395] font-medium">
                        {customer.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
