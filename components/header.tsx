"use client"

import { Button } from "@/components/ui/button"
import { Search, User, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Mock search data - in real app this would come from API
const searchData = {
  courses: [
    {
      id: 1,
      title: "Complete React Development",
      instructor: "Sarah Johnson",
      category: "Web Development",
      type: "course",
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Michael Chen",
      category: "Data Science",
      type: "course",
    },
    { id: 3, title: "UI/UX Design Masterclass", instructor: "Emma Rodriguez", category: "Design", type: "course" },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      instructor: "Prof. David Kim",
      category: "AI & ML",
      type: "course",
    },
  ],
  instructors: [
    { id: 1, name: "Sarah Johnson", expertise: "React, JavaScript", courses: 12, type: "instructor" },
    { id: 2, name: "Dr. Michael Chen", expertise: "Python, Data Science", courses: 8, type: "instructor" },
    { id: 3, name: "Emma Rodriguez", expertise: "UI/UX Design", courses: 15, type: "instructor" },
    { id: 4, name: "Prof. David Kim", expertise: "Machine Learning, AI", courses: 6, type: "instructor" },
  ],
  categories: [
    { id: 1, name: "Web Development", courseCount: 45, type: "category" },
    { id: 2, name: "Data Science", courseCount: 32, type: "category" },
    { id: 3, name: "Design", courseCount: 28, type: "category" },
    { id: 4, name: "AI & ML", courseCount: 19, type: "category" },
  ],
}

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase()

      const courseResults = searchData.courses.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query),
      )

      const instructorResults = searchData.instructors.filter(
        (instructor) =>
          instructor.name.toLowerCase().includes(query) || instructor.expertise.toLowerCase().includes(query),
      )

      const categoryResults = searchData.categories.filter((category) => category.name.toLowerCase().includes(query))

      setSearchResults([...courseResults, ...instructorResults, ...categoryResults])
      setShowResults(true)
    } else {
      setSearchResults([])
      setShowResults(false)
    }
  }, [searchQuery])

  const handleSearchSelect = (result: any) => {
    setSearchQuery("")
    setShowResults(false)
    // In real app, navigate to the selected item
    console.log("Selected:", result)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-foreground">
              upn<span className="text-blue-600">X</span>t
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Community
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Profile
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden lg:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 w-64 xl:w-80 relative">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses, instructors, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-sm flex-1 text-foreground placeholder:text-muted-foreground"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-4 w-4"
                onClick={() => {
                  setSearchQuery("")
                  setShowResults(false)
                }}
              >
                <X className="h-3 w-3" />
              </Button>
            )}

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <Card className="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto z-50">
                <CardContent className="p-2">
                  {searchResults.map((result, index) => (
                    <div
                      key={`${result.type}-${result.id || index}`}
                      className="p-3 hover:bg-muted rounded-lg cursor-pointer transition-colors"
                      onClick={() => handleSearchSelect(result)}
                    >
                      {result.type === "course" && (
                        <div>
                          <div className="font-medium text-sm">{result.title}</div>
                          <div className="text-xs text-muted-foreground">
                            by {result.instructor} • {result.category}
                          </div>
                        </div>
                      )}
                      {result.type === "instructor" && (
                        <div>
                          <div className="font-medium text-sm">{result.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Instructor • {result.expertise} • {result.courses} courses
                          </div>
                        </div>
                      )}
                      {result.type === "category" && (
                        <div>
                          <div className="font-medium text-sm">{result.name}</div>
                          <div className="text-xs text-muted-foreground">Category • {result.courseCount} courses</div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          <Button variant="ghost" size="sm" className="lg:hidden">
            <Search className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4" />
            <span className="ml-2">Login</span>
          </Button>

          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:flex">
            Signup
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-6">
                {/* Mobile Search */}
                <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 relative">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm flex-1 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="text-lg font-medium text-foreground hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Courses
                  </Link>
                  <Link
                    href="/community"
                    className="text-lg font-medium text-foreground hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Community
                  </Link>
                  <Link
                    href="/profile"
                    className="text-lg font-medium text-foreground hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                </nav>

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col gap-3 pt-6 border-t">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Signup</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
