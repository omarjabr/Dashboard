import { CreditCard, Package, Plus } from "lucide-react";
import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
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
  { day: "Mon", sales: 2400, transactions: 45, avg: 53 },
  { day: "Tue", sales: 2800, transactions: 52, avg: 54 },
  { day: "Wed", sales: 3200, transactions: 58, avg: 55 },
  { day: "Thu", sales: 2900, transactions: 51, avg: 57 },
  { day: "Fri", sales: 4200, transactions: 72, avg: 58 },
  { day: "Sat", sales: 5100, transactions: 89, avg: 57 },
  { day: "Sun", sales: 3800, transactions: 64, avg: 59 },
];

const topProducts = [
  {
    name: "Fresh Sandwiches",
    sold: 89,
    revenue: 135,
    stock: 23,
    category: "Food",
  },
  {
    name: "Artisan Pastries",
    sold: 98,
    revenue: 147,
    stock: 34,
    category: "Food",
  },
  {
    name: "Organic Tea",
    sold: 76,
    revenue: 114,
    stock: 67,
    category: "Beverages",
  },
  {
    name: "Premium Coffee",
    sold: 145,
    revenue: 217,
    stock: 89,
    category: "Beverages",
  },
];

const recentTransactions = [
  {
    id: "TXN-2401",
    time: "14:32",
    items: 3,
    total: "$24.50",
    payment: "Card",
    customer: "Walk-in",
  },
  {
    id: "TXN-2402",
    time: "14:28",
    items: 1,
    total: "$15.00",
    payment: "Cash",
    customer: "John D.",
  },
  {
    id: "TXN-2403",
    time: "14:25",
    items: 5,
    total: "$47.25",
    payment: "Card",
    customer: "Sarah M.",
  },
  {
    id: "TXN-2404",
    time: "14:20",
    items: 2,
    total: "$18.75",
    payment: "Digital",
    customer: "Mike R.",
  },
];

const inventory = [
  { item: "Coffee Beans", current: 89, target: 100, status: "Good" },
  { item: "Milk", current: 23, target: 50, status: "Low" },
  { item: "Pastries", current: 34, target: 60, status: "Medium" },
  { item: "Tea Bags", current: 67, target: 80, status: "Good" },
  { item: "Sandwiches", current: 12, target: 30, status: "Critical" },
];

const chartConfig = {
  sales: { label: "Sales", color: "#26A395" },
  transactions: { label: "Transactions", color: "#0E9EA9" },
  avg: { label: "Average", color: "#11254A" },
  revenue: {
    label: "Revenue",
    color: "#0E9EA9",
    format: (value: number) => `$${value}`,
  },
  sold: { label: "Sold", color: "#26A395" },
  stock: { label: "Stock", color: "#11254A" },
};

export function POSContent() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-[#11254A]" />
          <div>
            <h1 className="text-[#11254A] text-xl font-medium">
              Point of Sale
            </h1>
            <p className="text-[#11254A]/70 text-sm">
              Sales transactions and inventory management
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#26A395] text-[#26A395] hover:bg-[#26A395] hover:text-white"
          >
            <Package className="h-4 w-4 mr-2" />
            Manage Inventory
          </Button>
          <Button className="bg-[#26A395] hover:bg-[#26A395]/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Sale
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* POS Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Today's Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#26A395]">$3,847</div>
              <p className="text-xs text-muted-foreground">
                +18% from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0E9EA9]">67</div>
              <p className="text-xs text-muted-foreground">
                +12% from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Sale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#11254A]">$57.42</div>
              <p className="text-xs text-muted-foreground">+5% improvement</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Items Sold
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#26A395]">234</div>
              <p className="text-xs text-muted-foreground">
                Across all categories
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Weekly Sales Performance
              </CardTitle>
              <CardDescription>
                Daily sales and transaction volume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="sales"
                      stackId="1"
                      stroke="#26A395"
                      fill="#26A395"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Product Performance
              </CardTitle>
              <CardDescription>Top selling items this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topProducts}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    {/* format revenue to currency */}

                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="sold" fill="#26A395" />
                    <Bar dataKey="revenue" fill="#0E9EA9" />
                    <Bar dataKey="stock" fill="#11254A" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Products and Recent Transactions */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">Top Products</CardTitle>
              <CardDescription>Best performing items</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Sold</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Stock</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-[#26A395]" />
                          <div>
                            <p className="font-medium text-[#11254A]">
                              {product.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {product.category}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{product.sold}</TableCell>
                      <TableCell className="text-[#26A395] font-medium">
                        ${product.revenue}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            product.stock > 50
                              ? "default"
                              : product.stock > 25
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {product.stock}
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
              <CardTitle className="text-[#11254A]">
                Recent Transactions
              </CardTitle>
              <CardDescription>Latest sales activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-[#26A395]" />
                      <div>
                        <p className="font-medium text-[#11254A]">
                          {transaction.id}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.time} - {transaction.customer}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#26A395]">
                        {transaction.total}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {transaction.items} items - {transaction.payment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#11254A]">Inventory Status</CardTitle>
            <CardDescription>Current stock levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {inventory.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#11254A] font-medium">
                      {item.item}
                    </span>
                    <span className="text-muted-foreground">
                      {item.current}/{item.target}
                    </span>
                  </div>
                  <Progress
                    value={(item.current / item.target) * 100}
                    className="h-2"
                  />
                  <div className="text-right">
                    <Badge
                      variant={
                        item.status === "Good"
                          ? "default"
                          : item.status === "Medium"
                          ? "secondary"
                          : item.status === "Low"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
