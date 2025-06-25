"use client";

import { useState, useEffect } from "react";
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
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  Share2,
  Bell,
} from "lucide-react";
import Link from "next/link";

// Mock reunion data
const reunionData = {
  title: "Class of 2024 Graduation Reunion",
  date: new Date("2026-06-15T18:00:00"),
  venue: "University Main Hall",
  address: "123 University Ave, Campus City, CA 90210",
  description:
    "Join us for an unforgettable evening celebrating our journey together. Reconnect with classmates, share memories, and create new ones.",
  organizer: "Alumni Relations Office",
  expectedAttendees: 250,
  dresscode: "Semi-formal",
  agenda: [
    { time: "6:00 PM", activity: "Registration & Welcome Reception" },
    { time: "7:00 PM", activity: "Dinner & Networking" },
    { time: "8:30 PM", activity: "Awards & Recognition Ceremony" },
    { time: "9:30 PM", activity: "Dancing & Entertainment" },
    { time: "11:00 PM", activity: "Closing Remarks" },
  ],
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function StudentCountdownPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventPassed, setIsEventPassed] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = reunionData.date.getTime() - now.getTime();

      console.log("difference", difference);
      console.log("reunionData.date", reunionData.date.toISOString());
      console.log("now", now.toISOString());

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsEventPassed(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsEventPassed(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/student">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Profile
            </Link>
          </Button>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Reunion Countdown
        </h1>
        <p className="text-gray-600">
          Get ready for an amazing reunion celebration!
        </p>
      </div>

      {/* Countdown Timer */}
      <Card className="mb-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl text-white">
            {reunionData.title}
          </CardTitle>
          <CardDescription className="text-blue-100 text-lg">
            {formatDate(reunionData.date)} at {formatTime(reunionData.date)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isEventPassed ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">
                  {timeLeft.days}
                </div>
                <div className="text-sm opacity-90">Days</div>
              </div>
              <div className="text-center bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">
                  {timeLeft.hours}
                </div>
                <div className="text-sm opacity-90">Hours</div>
              </div>
              <div className="text-center bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm opacity-90">Minutes</div>
              </div>
              <div className="text-center bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm opacity-90">Seconds</div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl font-bold mb-2">🎉</div>
              <div className="text-2xl font-bold">The reunion has begun!</div>
              <div className="text-blue-100">
                Hope you&apos;re having an amazing time!
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <Bell className="mr-2 h-4 w-4" />
              Set Reminder
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share Event
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Event Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Date & Time
                  </h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      {formatDate(reunionData.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      {formatTime(reunionData.date)}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      {reunionData.venue}
                    </div>
                    <div className="text-gray-600 ml-6">
                      {reunionData.address}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">
                  About the Event
                </h4>
                <p className="text-gray-700">{reunionData.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {reunionData.expectedAttendees}
                  </div>
                  <div className="text-sm text-gray-600">
                    Expected Attendees
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">
                    {reunionData.dresscode}
                  </div>
                  <div className="text-sm text-gray-600">Dress Code</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">Free</div>
                  <div className="text-sm text-gray-600">Admission</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Agenda */}
          <Card>
            <CardHeader>
              <CardTitle>Event Schedule</CardTitle>
              <CardDescription>
                Here&apos;s what to expect during the reunion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reunionData.agenda.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <Badge variant="outline" className="mt-0.5">
                      {item.time}
                    </Badge>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {item.activity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-gray-400" />
                <div>
                  <div className="font-medium">Organizer</div>
                  <div className="text-sm text-gray-600">
                    {reunionData.organizer}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <div>
                  <div className="font-medium">Venue</div>
                  <div className="text-sm text-gray-600">
                    {reunionData.venue}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gray-400" />
                <div>
                  <div className="font-medium">Duration</div>
                  <div className="text-sm text-gray-600">5 hours</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Add to Calendar
              </Button>
              <Button variant="outline" className="w-full">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Share with Friends
              </Button>
            </CardContent>
          </Card>

          {/* Preparation Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Preparation Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>Bring your student ID or confirmation email</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>Dress according to the semi-formal dress code</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>Arrive early for the best networking opportunities</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>Bring business cards if you have them</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
