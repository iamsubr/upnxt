"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, Star, Users, Play, Search } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Complete React Development",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 12500,
    duration: "24 hours",
    level: "Beginner",
    price: "$89",
    thumbnail: "/react-development-course-thumbnail.jpg",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Dr. Michael Chen",
    rating: 4.8,
    students: 8900,
    duration: "18 hours",
    level: "Intermediate",
    price: "$79",
    thumbnail: "/python-data-science-course-thumbnail.jpg",
    category: "Data Science",
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Emma Rodriguez",
    rating: 4.9,
    students: 15600,
    duration: "32 hours",
    level: "All Levels",
    price: "$99",
    thumbnail: "/ui-ux-design-course-thumbnail.jpg",
    category: "Design",
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    instructor: "Prof. David Kim",
    rating: 4.7,
    students: 6700,
    duration: "28 hours",
    level: "Advanced",
    price: "$129",
    thumbnail: "/placeholder-k7bgo.png",
    category: "AI & ML",
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    instructor: "Lisa Thompson",
    rating: 4.8,
    students: 9200,
    duration: "16 hours",
    level: "Beginner",
    price: "$69",
    thumbnail: "/placeholder-ltc1v.png",
    category: "Marketing",
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    instructor: "James Wilson",
    rating: 4.9,
    students: 7800,
    duration: "35 hours",
    level: "Intermediate",
    price: "$149",
    thumbnail: "/placeholder-j09q3.png",
    category: "Cloud Computing",
  },
]

const trendingCourses = courses.slice(0, 4)
const newCourses = [
  {
    id: 7,
    title: "Advanced JavaScript Patterns",
    instructor: "Alex Turner",
    rating: 4.8,
    students: 3200,
    duration: "20 hours",
    level: "Advanced",
    price: "$119",
    thumbnail: "/placeholder-k7bgo.png",
    category: "Web Development",
  },
  {
    id: 8,
    title: "Blockchain Development",
    instructor: "Maria Santos",
    rating: 4.7,
    students: 2800,
    duration: "30 hours",
    level: "Intermediate",
    price: "$159",
    thumbnail: "/placeholder-ltc1v.png",
    category: "Blockchain",
  },
  {
    id: 9,
    title: "Mobile App Design",
    instructor: "Kevin Park",
    rating: 4.9,
    students: 4100,
    duration: "22 hours",
    level: "Beginner",
    price: "$79",
    thumbnail: "/placeholder-j09q3.png",
    category: "Design",
  },
  {
    id: 10,
    title: "DevOps Fundamentals",
    instructor: "Rachel Green",
    rating: 4.6,
    students: 1900,
    duration: "26 hours",
    level: "Intermediate",
    price: "$139",
    thumbnail: "/placeholder-k7bgo.png",
    category: "DevOps",
  },
]

const categories = [
  "All",
  "Web Development",
  "Data Science",
  "Design",
  "AI & ML",
  "Marketing",
  "Cloud Computing",
  "Blockchain",
  "DevOps",
]

function CourseCard({ course }: { course: any }) {
  return (
    <Link href={`/course/${course.id}`}>
      <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
        <div className="relative">
          <img
            src={course.thumbnail || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-40 sm:h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Button
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-gray-100"
            >
              <Play className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>
          <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-600 text-white text-xs">
            {course.category}
          </Badge>
        </div>

        <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-base sm:text-lg mb-2 text-foreground line-clamp-2">{course.title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3">by {course.instructor}</p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{course.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <Badge variant="secondary" className="text-xs">
              {course.level}
            </Badge>
            <span className="font-bold text-base sm:text-lg text-foreground">{course.price}</span>
          </div>
        </CardContent>

        <CardFooter className="p-3 sm:p-4 pt-0">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">Enroll Now</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

function CourseSection({ title, subtitle, courses }: { title: string; subtitle: string; courses: any[] }) {
  return (
    <section className="mb-12 sm:mb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-sm sm:text-base text-muted-foreground">{subtitle}</p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto bg-transparent">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export function CourseGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const filteredTrendingCourses = trendingCourses.filter((course) => {
    const matchesSearch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesSearch
  })

  const filteredNewCourses = newCourses.filter((course) => {
    const matchesSearch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesSearch
  })

  return (
    <div className="py-12 sm:py-16 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="w-full lg:w-auto">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Course Library</h1>
              <p className="text-sm sm:text-base text-muted-foreground">Discover courses that match your interests</p>
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses, instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`text-xs sm:text-sm ${selectedCategory === category ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {searchQuery ? (
          <section>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Found {filteredCourses.length + filteredTrendingCourses.length + filteredNewCourses.length} courses
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {[...filteredTrendingCourses, ...filteredNewCourses, ...filteredCourses]
                .filter((course, index, self) => index === self.findIndex((c) => c.id === course.id))
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>

            {filteredCourses.length + filteredTrendingCourses.length + filteredNewCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No courses found matching your search.</p>
                <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </section>
        ) : (
          <>
            <CourseSection title="Trending Now" subtitle="Most popular courses this week" courses={trendingCourses} />
            <CourseSection title="New Releases" subtitle="Fresh content from expert instructors" courses={newCourses} />

            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {selectedCategory === "All" ? "All Courses" : `${selectedCategory} Courses`}
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {selectedCategory === "All"
                      ? "Explore our complete course library"
                      : `Discover ${selectedCategory.toLowerCase()} courses`}
                  </p>
                </div>
                <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                  View All Courses
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
