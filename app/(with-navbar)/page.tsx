"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Award, Camera } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Connect & Collaborate",
      description:
        "Easily connect with classmates, faculty, and alumni. Share stories, photos, and achievements in a secure, interactive environment.",
    },
    {
      icon: Award,
      title: "Celebrate Achievements",
      description:
        "Highlight academic, athletic, and personal milestones. Recognize outstanding individuals and memorable moments with digital awards and badges.",
    },
    {
      icon: Camera,
      title: "Preserve Memories",
      description:
        "Upload, organize, and relive your favorite moments. Our platform ensures your memories are safe, accessible, and beautifully presented for years to come.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Souvenir <span className="text-blue-200">Yearbook</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              The modern digital yearbook solution that connects university
              communities, preserves memories, and celebrates achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/login">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-primary hover:bg-white hover:text-blue-600"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Souvenir Solution?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Souvenir Solution is more than just a digital yearbook. It&apos;s
              a platform designed to bring your university community together,
              celebrate milestones, and keep memories alive for years to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-blue-50 rounded-xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for digital yearbooks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline student registration, manage approvals, and create
              beautiful digital memories that last forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Student Management</CardTitle>
                <CardDescription className="text-gray-600 pt-3">
                  Efficient registration and approval workflow for student
                  profiles
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Role-Based Access</CardTitle>
                <CardDescription className="text-gray-600 pt-3">
                  Secure dashboards tailored for admins, encoders, and students
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Digital Memories</CardTitle>
                <CardDescription className="text-gray-600 pt-3">
                  Beautiful photo galleries and social sharing features
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of universities using Souvenir to create amazing
            digital yearbooks.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/login">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
