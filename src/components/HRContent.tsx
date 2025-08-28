import React from "react";

import { Calendar, Clock, Plus, Users } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
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

const payrollData = [
  { month: "Jan", salary: 45000, benefits: 8000, taxes: 12000 },
  { month: "Feb", salary: 47000, benefits: 8200, taxes: 12500 },
  { month: "Mar", salary: 46000, benefits: 8100, taxes: 12200 },
  { month: "Apr", salary: 48000, benefits: 8400, taxes: 12800 },
  { month: "May", salary: 49000, benefits: 8500, taxes: 13000 },
  { month: "Jun", salary: 51000, benefits: 8700, taxes: 13500 },
];

const employees = [
  {
    id: "EMP-001",
    name: "John Smith",
    department: "Engineering",
    position: "Senior Developer",
    salary: "$85,000",
    status: "Active",
  },
  {
    id: "EMP-002",
    name: "Sarah Johnson",
    department: "Design",
    position: "UI/UX Designer",
    salary: "$70,000",
    status: "Active",
  },
  {
    id: "EMP-003",
    name: "Mike Davis",
    department: "Marketing",
    position: "Marketing Manager",
    salary: "$75,000",
    status: "Active",
  },
  {
    id: "EMP-004",
    name: "Lisa Chen",
    department: "Sales",
    position: "Sales Representative",
    salary: "$60,000",
    status: "Leave",
  },
];

const timeOff = [
  {
    employee: "John Smith",
    type: "Vacation",
    dates: "Jan 15-19",
    days: 5,
    status: "Approved",
  },
  {
    employee: "Sarah Johnson",
    type: "Sick Leave",
    dates: "Jan 22",
    days: 1,
    status: "Approved",
  },
  {
    employee: "Mike Davis",
    type: "Personal",
    dates: "Jan 25-26",
    days: 2,
    status: "Pending",
  },
  {
    employee: "Lisa Chen",
    type: "Maternity",
    dates: "Feb 1-Mar 15",
    days: 42,
    status: "Approved",
  },
];

const departments = [
  { name: "Engineering", employees: 8, budget: 680000, utilization: 85 },
  { name: "Design", employees: 4, budget: 280000, utilization: 90 },
  { name: "Marketing", employees: 3, budget: 225000, utilization: 78 },
  { name: "Sales", employees: 5, budget: 300000, utilization: 92 },
];

const chartConfig = {
  salary: { label: "Salary", color: "#26A395" },
  benefits: { label: "Benefits", color: "#0E9EA9" },
  taxes: { label: "Taxes", color: "#11254A" },
};

export function HRContent() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6 bg-card">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-[#11254A]" />
          <div>
            <h1 className="text-[#11254A] text-xl font-medium">HR & Payroll</h1>
            <p className="text-[#11254A]/70 text-sm">
              Manage employees and payroll operations
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-[#26A395] text-[#26A395] hover:bg-[#26A395] hover:text-white"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Time Off
          </Button>
          <Button className="bg-[#26A395] hover:bg-[#26A395]/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-6">
        {/* HR Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Employees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#26A395]">24</div>
              <p className="text-xs text-muted-foreground">+2 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Monthly Payroll
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0E9EA9]">$73,200</div>
              <p className="text-xs text-muted-foreground">
                Including benefits
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Salary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#11254A]">$72,500</div>
              <p className="text-xs text-muted-foreground">
                +5% from last year
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Turnover Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#26A395]">8.5%</div>
              <p className="text-xs text-muted-foreground">
                Below industry avg
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Payroll Breakdown
              </CardTitle>
              <CardDescription>Monthly payroll costs</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={payrollData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="salary"
                      fill="#26A395"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar
                      dataKey="benefits"
                      fill="#0E9EA9"
                      radius={[0, 0, 0, 0]}
                    />
                    <Bar dataKey="taxes" fill="#11254A" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Department Utilization
              </CardTitle>
              <CardDescription>Team performance and budget</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#11254A] font-medium">
                        {dept.name}
                      </span>
                      <span className="text-muted-foreground">
                        {dept.employees} employees
                      </span>
                    </div>
                    <Progress value={dept.utilization} className="h-2" />
                    <div className="flex justify-between text-xs">
                      <span className="text-[#26A395]">
                        {dept.utilization}% utilization
                      </span>
                      <span className="text-muted-foreground">
                        ${dept.budget.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Employees and Time Off */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#11254A]">
                Employee Directory
              </CardTitle>
              <CardDescription>Current team members</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-[#26A395]" />
                          <div>
                            <p className="font-medium text-[#11254A]">
                              {employee.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {employee.salary}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            employee.status === "Active"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {employee.status}
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
                Time Off Requests
              </CardTitle>
              <CardDescription>Recent leave applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeOff.map((request, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#26A395]" />
                      <div>
                        <p className="font-medium text-[#11254A]">
                          {request.employee}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {request.type} - {request.dates}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#11254A]">
                        {request.days} days
                      </p>
                      <Badge
                        variant={
                          request.status === "Approved"
                            ? "default"
                            : request.status === "Pending"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {request.status}
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
