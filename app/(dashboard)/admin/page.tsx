"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  UserPlus,
  CheckSquare,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";
import Link from "next/link";

// Mock data
const stats = {
  totalStudents: 1247,
  pendingApprovals: 23,
  activeEncoders: 8,
  approvedToday: 15,
};

const recentActivity = [
  {
    id: 1,
    action: "Student approved",
    student: "Alice Johnson",
    time: "2 minutes ago",
  },
  {
    id: 2,
    action: "New encoder created",
    encoder: "Prof. Smith",
    time: "1 hour ago",
  },
  {
    id: 3,
    action: "Student rejected",
    student: "Bob Wilson",
    time: "3 hours ago",
  },
  { id: 4, action: "Bulk approval", count: 12, time: "5 hours ago" },
];

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Monitor and manage your yearbook system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">
              {stats.totalStudents}
            </div>
            <p className="text-xs text-blue-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">
              Pending Approvals
            </CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">
              {stats.pendingApprovals}
            </div>
            <p className="text-xs text-orange-600">Requires attention</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">
              Active Encoders
            </CardTitle>
            <UserPlus className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">
              {stats.activeEncoders}
            </div>
            <p className="text-xs text-green-600">Currently working</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">
              Approved Today
            </CardTitle>
            <Award className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">
              {stats.approvedToday}
            </div>
            <p className="text-xs text-purple-600">Great progress!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your yearbook system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full justify-start">
                <Link href="/admin/students">
                  <CheckSquare className="mr-2 h-4 w-4" />
                  Review Student Approvals
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link href="/admin/encoders/create">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create New Encoder
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link href="/admin/encoders">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Encoders
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions in your system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {activity.action}
                        {activity.student && (
                          <span className="text-blue-600 ml-1">
                            {activity.student}
                          </span>
                        )}
                        {activity.encoder && (
                          <span className="text-green-600 ml-1">
                            {activity.encoder}
                          </span>
                        )}
                        {activity.count && (
                          <span className="text-purple-600 ml-1">
                            ({activity.count} students)
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                    <Badge variant="secondary">
                      {activity.action.includes("approved")
                        ? "Approved"
                        : activity.action.includes("rejected")
                        ? "Rejected"
                        : activity.action.includes("created")
                        ? "Created"
                        : "Action"}
                    </Badge>
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
