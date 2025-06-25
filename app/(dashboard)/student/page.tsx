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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Camera,
  Share2,
  Timer,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";
import Link from "next/link";

// Mock student profile data
const studentProfile = {
  name: "John Student",
  email: "student@university.edu",
  phone: "+1234567890",
  avatar:
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  course: "Computer Science",
  year: "2024",
  bio: "Passionate Computer Science student with interests in AI, machine learning, and software development. Active member of the coding club and volunteer tutor.",
  university: "University of Excellence",
  department: "College of Engineering",
  gpa: "3.85",
  achievements: [
    "Dean's List - Fall 2023",
    "Hackathon Winner - Spring 2023",
    "Outstanding Student Award",
    "Programming Contest - 2nd Place",
  ],
  interests: [
    "Artificial Intelligence",
    "Web Development",
    "Mobile Apps",
    "Open Source",
  ],
  location: "San Francisco, CA",
  joinDate: "August 2020",
};

// Mock reunion data
const reunionData = {
  date: new Date("2024-06-15T18:00:00"),
  venue: "University Main Hall",
  description: "Class of 2024 Graduation Reunion",
};

export default function StudentPage() {
  // Calculate countdown
  const getTimeUntilReunion = () => {
    const now = new Date();
    const diff = reunionData.date.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const timeLeft = getTimeUntilReunion();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">
          Welcome to your digital yearbook profile
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center pb-4">
              <div className="relative inline-block">
                <Avatar className="h-32 w-32 mx-auto">
                  <AvatarImage
                    src={studentProfile.avatar}
                    alt={studentProfile.name}
                  />
                  <AvatarFallback className="text-2xl">
                    {studentProfile.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="mt-4">{studentProfile.name}</CardTitle>
              <CardDescription>
                {studentProfile.course} • Class of {studentProfile.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>{studentProfile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{studentProfile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>{studentProfile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>Joined {studentProfile.joinDate}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {studentProfile.gpa}
                    </div>
                    <div className="text-xs text-gray-500">GPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {timeLeft.days}
                    </div>
                    <div className="text-xs text-gray-500">Days to Reunion</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full justify-start">
                <Link href="/student/gallery">
                  <Camera className="mr-2 h-4 w-4" />
                  Photo Gallery
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link href="/student/countdown">
                  <Timer className="mr-2 h-4 w-4" />
                  Reunion Countdown
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link href="/student/share">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Profile
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio Section */}
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {studentProfile.bio}
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                <Edit className="mr-2 h-4 w-4" />
                Edit Bio
              </Button>
            </CardContent>
          </Card>

          {/* Academic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Program Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">Course:</span>{" "}
                      {studentProfile.course}
                    </div>
                    <div>
                      <span className="text-gray-500">University:</span>{" "}
                      {studentProfile.university}
                    </div>
                    <div>
                      <span className="text-gray-500">Department:</span>{" "}
                      {studentProfile.department}
                    </div>
                    <div>
                      <span className="text-gray-500">Graduation Year:</span>{" "}
                      {studentProfile.year}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {studentProfile.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements & Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {studentProfile.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
                  >
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-900">{achievement}</span>
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
