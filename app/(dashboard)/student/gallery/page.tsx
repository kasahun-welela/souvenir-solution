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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  Search,
  Download,
  Heart,
  Share2,
  Eye,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock photo gallery data
const photoCategories = [
  "All Photos",
  "University Officials",
  "Campus Life",
  "Graduation",
  "Events",
  "Sports",
  "Clubs & Organizations",
];

const mockPhotos = [
  {
    id: 1,
    title: "University President Address",
    category: "University Officials",
    url: "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description:
      "President Dr. Johnson delivering the opening address at graduation ceremony",
    date: "2024-05-15",
    likes: 45,
    photographer: "University Media Team",
  },
  {
    id: 2,
    title: "Dean of Engineering",
    category: "University Officials",
    url: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "Dean Williams presenting awards to outstanding students",
    date: "2024-05-14",
    likes: 32,
    photographer: "Student Photography Club",
  },
  {
    id: 3,
    title: "Campus Library",
    category: "Campus Life",
    url: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "Students studying in the newly renovated library",
    date: "2024-03-20",
    likes: 28,
    photographer: "Campus Life Team",
  },
  {
    id: 4,
    title: "Graduation Ceremony",
    category: "Graduation",
    url: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "Class of 2024 graduation ceremony at the main auditorium",
    date: "2024-05-16",
    likes: 89,
    photographer: "Official Event Photographer",
  },
  {
    id: 5,
    title: "Student Activities Fair",
    category: "Events",
    url: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description:
      "Annual student activities fair showcasing clubs and organizations",
    date: "2024-02-10",
    likes: 67,
    photographer: "Student Media",
  },
  {
    id: 6,
    title: "Basketball Championship",
    category: "Sports",
    url: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "University Eagles winning the regional championship",
    date: "2024-04-05",
    likes: 134,
    photographer: "Sports Media Team",
  },
];

export default function StudentGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Photos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof mockPhotos)[0] | null
  >(null);
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);

  const filteredPhotos = mockPhotos.filter((photo) => {
    const matchesCategory =
      selectedCategory === "All Photos" || photo.category === selectedCategory;
    const matchesSearch =
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (photoId: number) => {
    setLikedPhotos((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Photo Gallery</h1>
        <p className="text-gray-600">
          Explore memories from your university journey
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Browse Photos</CardTitle>
          <CardDescription>
            Find photos by category or search for specific moments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {photoCategories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <Card
            key={photo.id}
            className="group hover:shadow-lg transition-shadow cursor-pointer pt-0"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
              <Image
                src={photo.url}
                alt={photo.title}
                width={500}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{selectedPhoto?.title}</DialogTitle>
                      <DialogDescription>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {selectedPhoto?.date}
                          </span>
                          <Badge variant="outline">
                            {selectedPhoto?.category}
                          </Badge>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                    {selectedPhoto && (
                      <div className="space-y-4">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            src={selectedPhoto.url}
                            alt={selectedPhoto.title}
                            className="w-full h-full object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="space-y-2">
                          <p className="text-gray-700">
                            {selectedPhoto.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            Photo by: {selectedPhoto.photographer}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleLike(selectedPhoto.id)}
                              className={
                                likedPhotos.includes(selectedPhoto.id)
                                  ? "text-red-600"
                                  : ""
                              }
                            >
                              <Heart
                                className={`h-4 w-4 mr-2 ${
                                  likedPhotos.includes(selectedPhoto.id)
                                    ? "fill-current"
                                    : ""
                                }`}
                              />
                              {selectedPhoto.likes +
                                (likedPhotos.includes(selectedPhoto.id)
                                  ? 1
                                  : 0)}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </Button>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-900 line-clamp-1">
                  {photo.title}
                </h3>
                <Badge variant="outline" className="text-xs">
                  {photo.category}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {photo.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-3 w-3" />
                  {photo.date}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleLike(photo.id)}
                  className={
                    likedPhotos.includes(photo.id)
                      ? "text-red-600"
                      : "text-gray-500"
                  }
                >
                  <Heart
                    className={`h-4 w-4 mr-1 ${
                      likedPhotos.includes(photo.id) ? "fill-current" : ""
                    }`}
                  />
                  {photo.likes + (likedPhotos.includes(photo.id) ? 1 : 0)}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-gray-500">
              No photos found matching your criteria.
            </div>
          </CardContent>
        </Card>
      )}

      {/* Gallery Stats */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Gallery Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {mockPhotos.length}
              </div>
              <div className="text-sm text-gray-600">Total Photos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {photoCategories.length - 1}
              </div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {likedPhotos.length}
              </div>
              <div className="text-sm text-gray-600">Liked Photos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {mockPhotos.reduce((sum, photo) => sum + photo.likes, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Likes</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
