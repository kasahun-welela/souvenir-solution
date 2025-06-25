"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Search, UserPlus, Edit, Trash2, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface Encoder {
  id: string;
  name: string;
  email: string;
  phone: string;
  university: string;
  department: string;
  status: "active" | "inactive";
  studentsCount: number;
  createdAt: Date;
}

// Mock encoder data
const mockEncoders: Encoder[] = [
  {
    id: "1",
    name: "Abebe Kebede ",
    email: "abebe@university.edu",
    phone: "+1234567890",
    university: "University of Excellence",
    department: "Computer Science",
    status: "active",
    studentsCount: 45,
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    email: "michael@university.edu",
    phone: "+1234567891",
    university: "University of Excellence",
    department: "Business Administration",
    status: "active",
    studentsCount: 32,
    createdAt: new Date("2024-01-05"),
  },
  {
    id: "3",
    name: "Prof. Emily Davis",
    email: "emily@university.edu",
    phone: "+1234567892",
    university: "University of Excellence",
    department: "Psychology",
    status: "inactive",
    studentsCount: 18,
    createdAt: new Date("2024-01-10"),
  },
];

export default function AdminEncodersPage() {
  const [encoders, setEncoders] = useState<Encoder[]>(mockEncoders);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEncoders = encoders.filter(
    (encoder) =>
      encoder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      encoder.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      encoder.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleEncoderStatus = (encoderId: string) => {
    setEncoders((prev) =>
      prev.map((encoder) =>
        encoder.id === encoderId
          ? {
              ...encoder,
              status: encoder.status === "active" ? "inactive" : "active",
            }
          : encoder
      )
    );
    toast.success("Encoder status updated successfully!");
  };

  const deleteEncoder = (encoderId: string) => {
    setEncoders((prev) => prev.filter((encoder) => encoder.id !== encoderId));
    toast.success("Encoder deleted successfully!");
  };

  const getStatusBadge = (status: Encoder["status"]) => {
    return status === "active" ? (
      <Badge className="bg-green-100 text-green-800">Active</Badge>
    ) : (
      <Badge variant="secondary" className="bg-gray-100 text-gray-800">
        Inactive
      </Badge>
    );
  };

  const totalStudents = encoders.reduce(
    (sum, encoder) => sum + encoder.studentsCount,
    0
  );
  const activeEncoders = encoders.filter((e) => e.status === "active").length;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Manage Encoders
            </h1>
            <p className="text-gray-600">Oversee your data encoding team</p>
          </div>
          <Button asChild>
            <Link href="/admin/encoders/create">
              <UserPlus className="mr-2 h-4 w-4" />
              Create New Encoder
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Encoders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{encoders.length}</div>
            <p className="text-xs text-muted-foreground">
              {activeEncoders} active, {encoders.length - activeEncoders}{" "}
              inactive
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Students Managed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents}</div>
            <p className="text-xs text-muted-foreground">Across all encoders</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Load</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(totalStudents / activeEncoders)}
            </div>
            <p className="text-xs text-muted-foreground">
              Students per active encoder
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Encoder List</CardTitle>
          <CardDescription>
            Manage your data encoding team members
          </CardDescription>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search encoders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Encoder</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEncoders.map((encoder) => (
                <TableRow key={encoder.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          {encoder.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{encoder.name}</div>
                        <div className="text-sm text-gray-500">
                          {encoder.university}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{encoder.department}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-3 w-3 text-gray-400" />
                        {encoder.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-3 w-3 text-gray-400" />
                        {encoder.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{encoder.studentsCount}</Badge>
                  </TableCell>
                  <TableCell>{getStatusBadge(encoder.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant={
                          encoder.status === "active"
                            ? "destructive"
                            : "default"
                        }
                        onClick={() => toggleEncoderStatus(encoder.id)}
                      >
                        {encoder.status === "active"
                          ? "Deactivate"
                          : "Activate"}
                      </Button>

                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Encoder</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete {encoder.name}?
                              This action cannot be undone. All students
                              assigned to this encoder will need to be
                              reassigned.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteEncoder(encoder.id)}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredEncoders.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No encoders found matching your search.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
