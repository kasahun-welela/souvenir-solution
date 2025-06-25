import { SiteHeader } from "@/components/site-header";
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
  Clock,
  CheckSquare,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

// Mock data
const stats = {
  totalRegistered: 45,
  pendingApproval: 8,
  approvedToday: 3,
  rejectedCount: 2,
};

const recentStudents = [
  {
    id: 1,
    name: "Alice Johnson",
    course: "Computer Science",
    status: "pending",
    submittedAt: "2 hours ago",
  },
  {
    id: 2,
    name: "Bob Wilson",
    course: "Business Admin",
    status: "approved",
    submittedAt: "1 day ago",
  },
  {
    id: 3,
    name: "Carol Davis",
    course: "Psychology",
    status: "pending",
    submittedAt: "3 hours ago",
  },
  {
    id: 4,
    name: "David Miller",
    course: "Engineering",
    status: "rejected",
    submittedAt: "2 days ago",
  },
];

function page() {
  return (
    <>
      <SiteHeader title="Dashboard" />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Encoder Dashboard
          </h1>
          <p className="text-gray-600">
            Manage student registrations and submissions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">
                Students Registered
              </CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">
                {stats.totalRegistered}
              </div>
              <p className="text-xs text-blue-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +5 this week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-700">
                Pending Approval
              </CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900">
                {stats.pendingApproval}
              </div>
              <p className="text-xs text-orange-600">Awaiting admin review</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">
                Approved Today
              </CardTitle>
              <CheckSquare className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">
                {stats.approvedToday}
              </div>
              <p className="text-xs text-green-600">Great progress!</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-700">
                Rejected
              </CardTitle>
              <AlertCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-900">
                {stats.rejectedCount}
              </div>
              <p className="text-xs text-red-600">Needs revision</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Manage your student registrations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-start">
                  <Link href="/encoder/register">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Register New Student
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link href="/encoder/students">
                    <Users className="mr-2 h-4 w-4" />
                    View All Students
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Link href="/encoder/students?status=pending">
                    <Clock className="mr-2 h-4 w-4" />
                    Pending Approvals
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Status Summary */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Status Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-800">
                      Pending Review
                    </span>
                    <Badge className="bg-orange-100 text-orange-800">
                      {stats.pendingApproval}
                    </Badge>
                  </div>
                  <p className="text-xs text-orange-600 mt-1">
                    Students awaiting admin approval
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800">
                      Approved
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      {stats.totalRegistered -
                        stats.pendingApproval -
                        stats.rejectedCount}
                    </Badge>
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    Successfully approved students
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Students */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
                <CardDescription>Latest student submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-medium text-gray-900">
                              {student.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {student.course}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          Submitted {student.submittedAt}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="secondary"
                          className={
                            student.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : student.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }
                        >
                          {student.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/encoder/students">View All Students</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
