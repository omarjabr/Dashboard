import {
  ArrowLeft,
  Calculator,
  CreditCard,
  FileBarChart,
  FileText,
  Plus,
  Receipt,
} from "lucide-react";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ClientReceiptTemplate } from "./ClientReceiptTemplate";
import { InvoiceTemplate } from "./InvoiceTemplate";
import { ReceiptTemplate } from "./ReceiptTemplate";
import { StatementTemplate } from "./StatementTemplate";
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
import { SidebarTrigger } from "./ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const revenueData = [
  { month: "Jan", revenue: 45000, expenses: 32000, profit: 13000 },
  { month: "Feb", revenue: 52000, expenses: 35000, profit: 17000 },
  { month: "Mar", revenue: 48000, expenses: 31000, profit: 17000 },
  { month: "Apr", revenue: 61000, expenses: 42000, profit: 19000 },
  { month: "May", revenue: 55000, expenses: 38000, profit: 17000 },
  { month: "Jun", revenue: 67000, expenses: 45000, profit: 22000 },
];

const invoices = [
  {
    id: "INV-001",
    client: "Tech Corp Ltd",
    amount: "$5,200.00",
    status: "Paid",
    dueDate: "2024-01-15",
  },
  {
    id: "INV-002",
    client: "StartupXYZ",
    amount: "$3,500.00",
    status: "Pending",
    dueDate: "2024-01-20",
  },
  {
    id: "INV-003",
    client: "Design Co",
    amount: "$2,800.00",
    status: "Overdue",
    dueDate: "2024-01-10",
  },
  {
    id: "INV-004",
    client: "Marketing Inc",
    amount: "$4,200.00",
    status: "Draft",
    dueDate: "2024-01-25",
  },
];

const taxReports = [
  {
    period: "Q4 2023",
    type: "VAT Return",
    amount: "$2,450.00",
    status: "Submitted",
  },
  { period: "Q1 2024", type: "Income Tax", amount: "$8,750.00", status: "Due" },
  {
    period: "Q1 2024",
    type: "Payroll Tax",
    amount: "$3,200.00",
    status: "Paid",
  },
];

const chartConfig = {
  revenue: { label: "Revenue", color: "#26A395" },
  expenses: { label: "Expenses", color: "#0E9EA9" },
  profit: { label: "Profit", color: "#11254A" },
};

export function AccountingContent() {
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);

  if (activeTemplate) {
    return (
      <div className="flex flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => setActiveTemplate(null)}
              className="text-[#26A395] hover:bg-[#26A395]/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Accounting
            </Button>
          </div>
        </header>
        <div className="flex-1 overflow-auto">
          {activeTemplate === "invoice" && <InvoiceTemplate />}
          {activeTemplate === "receipt" && <ReceiptTemplate />}
          {activeTemplate === "statement" && <StatementTemplate />}
          {activeTemplate === "clientReceipt" && <ClientReceiptTemplate />}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-[#11254A]" />
          <div>
            <h1 className="text-[#11254A] text-xl font-medium">
              Accounting & Tax
            </h1>
            <p className="text-[#11254A]/70 text-sm">
              Manage your finances and tax obligations
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#26A395] text-[#26A395] hover:bg-[#26A395] hover:text-white"
          >
            <FileText className="h-4 w-4 mr-2" />
            New Invoice
          </Button>
          <Button className="bg-[#26A395] hover:bg-[#26A395]/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* Financial Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#26A395]">$67,000</div>
              <p className="text-xs text-muted-foreground">
                +22% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Outstanding Invoices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0E9EA9]">$6,300</div>
              <p className="text-xs text-muted-foreground">
                2 invoices pending
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Tax Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#11254A]">$8,750</div>
              <p className="text-xs text-muted-foreground">Due in 15 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Financial Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Profit & Loss</CardTitle>
              <CardDescription>Monthly financial performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stackId="1"
                      stroke="#26A395"
                      fill="#26A395"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      stackId="2"
                      stroke="#0E9EA9"
                      fill="#0E9EA9"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Monthly Profit</CardTitle>
              <CardDescription>Net profit breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="profit"
                      fill="#11254A"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Document Templates */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#11254A]">Document Templates</CardTitle>
            <CardDescription>
              Generate professional business documents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <Button
                variant="outline"
                className="h-20 border-[#26A395] text-[#26A395] hover:bg-[#26A395] hover:text-white flex-col space-y-2"
                onClick={() => setActiveTemplate("invoice")}
              >
                <FileText className="h-6 w-6" />
                <span>Invoice</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 border-[#0E9EA9] text-[#0E9EA9] hover:bg-[#0E9EA9] hover:text-white flex-col space-y-2"
                onClick={() => setActiveTemplate("receipt")}
              >
                <Receipt className="h-6 w-6" />
                <span>Receipt</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 border-[#11254A] text-[#11254A] hover:bg-[#11254A] hover:text-white flex-col space-y-2"
                onClick={() => setActiveTemplate("statement")}
              >
                <FileBarChart className="h-6 w-6" />
                <span>Statement</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 border-[#26A395] text-[#26A395] hover:bg-[#26A395] hover:text-white flex-col space-y-2"
                onClick={() => setActiveTemplate("clientReceipt")}
              >
                <CreditCard className="h-6 w-6" />
                <span>Client Receipt</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Invoices and Tax Reports */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Recent Invoices</CardTitle>
              <CardDescription>Latest billing activity</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">
                        {invoice.id}
                      </TableCell>
                      <TableCell>{invoice.client}</TableCell>
                      <TableCell className="text-[#26A395]">
                        {invoice.amount}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            invoice.status === "Paid"
                              ? "default"
                              : invoice.status === "Overdue"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Tax Reports</CardTitle>
              <CardDescription>Tax obligations and submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {taxReports.map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Calculator className="h-5 w-5 text-[#26A395]" />
                      <div>
                        <p className="font-medium text-[#11254A]">
                          {report.type}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {report.period}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#11254A]">
                        {report.amount}
                      </p>
                      <Badge
                        variant={
                          report.status === "Paid"
                            ? "default"
                            : report.status === "Due"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
