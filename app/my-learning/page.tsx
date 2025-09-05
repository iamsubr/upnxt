"use client"

import { Header } from "@/components/header"
import { ProgressTracker } from "@/components/progress-tracker"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Play, Clock, CheckCircle, BookOpen, Target, Calendar } from "lucide-react"

// Mock user learning data
const learningData = {
  stats: {
    coursesInProgress: 3,
    coursesCompleted: 12,
    totalHours: 156,
    streak: 15,
  },
  inProgressCourses: [
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Michael Chen",
      progress: 75,
      thumbnail: "/python-data-science-course-thumbnail.jpg",
      lastAccessed: "2 hours ago",
      nextLesson: "Data Visualization with Matplotlib",
      timeRemaining: "6 hours",
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      progress: 45,
      thumbnail: "/ui-ux-design-course-thumbnail.jpg",
      lastAccessed: "1 day ago",
      nextLesson: "User Research Methods",
      timeRemaining: "18 hours",
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      instructor: "Prof. David Kim",
      progress: 20,
      thumbnail: "/placeholder-k7bgo.png",
      lastAccessed: "3 days ago",
      nextLesson: "Linear Regression Basics",
      timeRemaining: "22 hours",
    },
  ],
  recentlyCompleted: [
    {
      id: 1,
      title: "Complete React Development",
      instructor: "Sarah Johnson",
      thumbnail: "/react-development-course-thumbnail.jpg",
      completedDate: "2 days ago",
      certificate: true,
    },
  ],
}

export default function MyLearningPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Learning</h1>
          <p className="text-muted-foreground">Track your progress and continue your learning journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Learning Content */}
          <div className="lg:col-span-3">
            {/* Learning Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Play className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{learningData.stats.coursesInProgress}</p>
                      <p className="text-sm text-muted-foreground">In Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{learningData.stats.coursesCompleted}</p>
                      <p className="text-sm text-muted-foreground">Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{learningData.stats.totalHours}h</p>
                      <p className="text-sm text-muted-foreground">Total Hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Target className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{learningData.stats.streak}</p>
                      <p className="text-sm text-muted-foreground">Day Streak</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Continue Learning - existing course cards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Continue Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningData.inProgressCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Progress value={course.progress} className="flex-1 h-2" />
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Next: {course.nextLesson}</span>
                          <span>• {course.timeRemaining} remaining</span>
                          <span>• Last accessed {course.lastAccessed}</span>
                        </div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recently Completed */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Recently Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningData.recentlyCompleted.map((course) => (
                    <div key={course.id} className="p-4 border rounded-lg">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-32 rounded-lg object-cover mb-3"
                      />
                      <h3 className="font-semibold mb-1">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>Completed {course.completedDate}</span>
                      </div>
                      {course.certificate && (
                        <Button size="sm" variant="outline" className="w-full bg-transparent">
                          View Certificate
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Tracking Sidebar */}
          <div className="lg:col-span-1">
            <ProgressTracker />
          </div>
        </div>
      </div>
    </div>
  )
}
