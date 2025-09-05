"use client"

import { Header } from "@/components/header"
import { CoursePlayer } from "@/components/course-player"
import { CourseSidebar } from "@/components/course-sidebar"
import { CourseOverview } from "@/components/course-overview"
import { CourseReviews } from "@/components/course-reviews"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { Sheet, SheetContent } from "@/components/ui/sheet"

// Mock course data - in real app this would come from API/database
const courseData = {
  id: 1,
  title: "Complete React Development",
  instructor: {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Senior Frontend Developer with 8+ years experience at top tech companies",
    rating: 4.9,
    students: 45000,
    courses: 12,
  },
  description:
    "Master React from basics to advanced concepts. Build real-world projects and learn industry best practices.",
  longDescription:
    "This comprehensive React course takes you from beginner to advanced developer. You'll learn modern React concepts including hooks, context, state management, and performance optimization. Build 5 real-world projects including an e-commerce site, social media app, and dashboard.",
  rating: 4.9,
  totalRatings: 8547,
  students: 12500,
  duration: "24 hours",
  level: "Beginner",
  price: 89,
  originalPrice: 149,
  category: "Web Development",
  thumbnail: "/react-development-course-thumbnail.jpg",
  whatYouLearn: [
    "Build modern React applications from scratch",
    "Master React Hooks and functional components",
    "Implement state management with Context API and Redux",
    "Create responsive and accessible user interfaces",
    "Deploy React apps to production",
    "Write clean, maintainable code following best practices",
  ],
  requirements: [
    "Basic knowledge of HTML, CSS, and JavaScript",
    "Familiarity with ES6+ features",
    "A computer with internet connection",
    "Code editor (VS Code recommended)",
  ],
  curriculum: [
    {
      id: 1,
      title: "Getting Started with React",
      lessons: [
        { id: 1, title: "Introduction to React", duration: "12:34", type: "video", completed: true },
        { id: 2, title: "Setting up Development Environment", duration: "18:45", type: "video", completed: true },
        { id: 3, title: "Your First React Component", duration: "15:22", type: "video", completed: false },
        { id: 4, title: "Quiz: React Basics", duration: "5:00", type: "quiz", completed: false },
      ],
    },
    {
      id: 2,
      title: "Components and JSX",
      lessons: [
        { id: 5, title: "Understanding JSX", duration: "20:15", type: "video", completed: false },
        { id: 6, title: "Props and Component Communication", duration: "25:30", type: "video", completed: false },
        { id: 7, title: "Conditional Rendering", duration: "16:45", type: "video", completed: false },
        { id: 8, title: "Practice: Building a Card Component", duration: "30:00", type: "exercise", completed: false },
      ],
    },
    {
      id: 3,
      title: "State and Event Handling",
      lessons: [
        { id: 9, title: "Introduction to State", duration: "22:10", type: "video", completed: false },
        { id: 10, title: "Event Handling in React", duration: "18:30", type: "video", completed: false },
        { id: 11, title: "Forms and Controlled Components", duration: "28:15", type: "video", completed: false },
      ],
    },
  ],
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const [currentLesson, setCurrentLesson] = useState(courseData.curriculum[0].lessons[0])
  const [showSidebar, setShowSidebar] = useState(true)
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleEnrollment = () => {
    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    setIsEnrolled(true)
    setShowPayment(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {!isEnrolled ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="aspect-video bg-gray-900 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 opacity-70" />
                  <p className="text-base sm:text-lg">Course Preview</p>
                </div>
              </div>
              <CourseOverview course={courseData} />
              <CourseReviews courseId={courseData.id} />
            </div>

            <div className="lg:col-span-1 order-1 lg:order-2">
              <Card className="lg:sticky lg:top-6">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl sm:text-3xl font-bold">${courseData.price}</span>
                      <span className="text-base sm:text-lg text-muted-foreground line-through">
                        ${courseData.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">
                      Save ${courseData.originalPrice - courseData.price}
                    </p>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4" onClick={handleEnrollment}>
                    Enroll Now
                  </Button>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{courseData.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>
                      <span>{courseData.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students:</span>
                      <span>{courseData.students.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificate:</span>
                      <span>Yes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row">
          <div className={`flex-1 transition-all duration-300 ${showSidebar ? "lg:mr-80" : ""}`}>
            <CoursePlayer
              lesson={currentLesson}
              course={courseData}
              onToggleSidebar={() => setShowSidebar(!showSidebar)}
              onMobileToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            />

            <div className="p-4 sm:p-6">
              <CourseOverview course={courseData} />
              <CourseReviews courseId={courseData.id} />
            </div>
          </div>

          {/* Desktop Sidebar */}
          {showSidebar && (
            <div className="hidden lg:block">
              <CourseSidebar course={courseData} currentLesson={currentLesson} onLessonSelect={setCurrentLesson} />
            </div>
          )}

          {/* Mobile Sidebar */}
          <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <CourseSidebar
                course={courseData}
                currentLesson={currentLesson}
                onLessonSelect={(lesson) => {
                  setCurrentLesson(lesson)
                  setIsMobileSidebarOpen(false)
                }}
                isMobile={true}
              />
            </SheetContent>
          </Sheet>
        </div>
      )}

      {showPayment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Complete Your Enrollment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">{courseData.title}</h3>
                <p className="text-xl sm:text-2xl font-bold">${courseData.price}</p>
              </div>

              <div className="space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handlePaymentSuccess}>
                  Pay with Stripe
                </Button>
                <Button variant="outline" className="w-full bg-transparent" onClick={handlePaymentSuccess}>
                  Pay with PayPal
                </Button>
                <Button variant="outline" className="w-full bg-transparent" onClick={handlePaymentSuccess}>
                  Pay with Razorpay
                </Button>
              </div>

              <Button variant="ghost" className="w-full" onClick={() => setShowPayment(false)}>
                Cancel
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
