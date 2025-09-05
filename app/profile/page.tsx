"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Camera,
  MessageSquare,
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Edit3,
  Play,
  CheckCircle,
} from "lucide-react"

// Mock user profile data
const profileData = {
  user: {
    name: "Alex Johnson",
    username: "alexj",
    email: "alex.johnson@email.com",
    avatar: "/placeholder.svg?height=120&width=120",
    bio: "Passionate learner exploring web development and data science. Always excited to learn new technologies and share knowledge with the community.",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    education: "Computer Science, Stanford University",
    occupation: "Software Engineer at TechCorp",
  },
  stats: {
    coursesInProgress: 3,
    coursesCompleted: 12,
    totalHours: 156,
    streak: 15,
    communityPosts: 24,
    helpfulAnswers: 89,
  },
  enrolledCourses: [
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Michael Chen",
      progress: 75,
      thumbnail: "/python-data-science-course-thumbnail.jpg",
      status: "in-progress",
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      progress: 45,
      thumbnail: "/ui-ux-design-course-thumbnail.jpg",
      status: "in-progress",
    },
  ],
  completedCourses: [
    {
      id: 1,
      title: "Complete React Development",
      instructor: "Sarah Johnson",
      thumbnail: "/react-development-course-thumbnail.jpg",
      completedDate: "2 days ago",
      certificate: true,
    },
  ],
  communityActivity: [
    {
      id: 1,
      type: "post",
      title: "Best practices for React state management",
      content: "I've been working with React for a while and wanted to share some insights...",
      likes: 23,
      comments: 8,
      date: "2 days ago",
    },
    {
      id: 2,
      type: "comment",
      title: "Re: How to optimize Python code performance",
      content: "Great question! I've found that using list comprehensions can significantly improve...",
      likes: 12,
      date: "5 days ago",
    },
  ],
  achievements: [
    { id: 1, name: "First Course Completed", icon: "🎓", date: "Jan 2023" },
    { id: 2, name: "Community Helper", icon: "🤝", date: "Mar 2023" },
    { id: 3, name: "Learning Streak", icon: "🔥", date: "Dec 2023" },
    { id: 4, name: "Course Creator", icon: "📚", date: "Nov 2023" },
  ],
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Profile Header */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="relative self-center sm:self-start">
                <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
                  <AvatarImage src={profileData.user.avatar || "/placeholder.svg"} alt={profileData.user.name} />
                  <AvatarFallback className="text-lg sm:text-2xl">
                    {profileData.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 rounded-full w-6 h-6 sm:w-8 sm:h-8 p-0 bg-transparent"
                >
                  <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">{profileData.user.name}</h1>
                    <p className="text-muted-foreground mb-2 text-sm sm:text-base">@{profileData.user.username}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                      {profileData.user.bio}
                    </p>
                  </div>
                  <Button variant="outline" className="gap-2 bg-transparent w-full sm:w-auto">
                    <Edit3 className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-blue-600">{profileData.stats.coursesCompleted}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-green-600">{profileData.stats.totalHours}h</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Learning Time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-orange-600">{profileData.stats.communityPosts}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Posts</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-bold text-purple-600">{profileData.stats.streak}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Day Streak</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="truncate">{profileData.user.location}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>Joined {profileData.user.joinDate}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="truncate">{profileData.user.education}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="truncate">{profileData.user.occupation}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="courses" className="space-y-4 sm:space-y-6">
          <div className="w-full overflow-x-auto">
            <TabsList className="grid w-full grid-cols-4 min-w-[320px]">
              <TabsTrigger value="courses" className="text-xs sm:text-sm">
                Courses
              </TabsTrigger>
              <TabsTrigger value="activity" className="text-xs sm:text-sm">
                Activity
              </TabsTrigger>
              <TabsTrigger value="achievements" className="text-xs sm:text-sm">
                Achievements
              </TabsTrigger>
              <TabsTrigger value="about" className="text-xs sm:text-sm">
                About
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="courses" className="space-y-4 sm:space-y-6">
            {/* Enrolled Courses */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                  Enrolled Courses ({profileData.stats.coursesInProgress})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {profileData.enrolledCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-3 sm:p-4">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-28 sm:h-32 rounded-lg object-cover mb-3"
                      />
                      <h3 className="font-semibold mb-1 text-sm sm:text-base leading-tight">{course.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Progress value={course.progress} className="flex-1 h-2" />
                        <span className="text-xs sm:text-sm font-medium">{course.progress}%</span>
                      </div>
                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm">
                        Continue Learning
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Completed Courses */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  Completed Courses ({profileData.stats.coursesCompleted})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {profileData.completedCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-3 sm:p-4">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-28 sm:h-32 rounded-lg object-cover mb-3"
                      />
                      <h3 className="font-semibold mb-1 text-sm sm:text-base leading-tight">{course.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                      <p className="text-xs text-muted-foreground mb-3">Completed {course.completedDate}</p>
                      {course.certificate && (
                        <Button size="sm" variant="outline" className="w-full bg-transparent text-xs sm:text-sm">
                          View Certificate
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                  Community Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-4">
                  {profileData.communityActivity.map((activity) => (
                    <div key={activity.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-start gap-3">
                        <Badge
                          variant={activity.type === "post" ? "default" : "secondary"}
                          className="text-xs flex-shrink-0"
                        >
                          {activity.type}
                        </Badge>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium mb-1 text-sm sm:text-base leading-tight">{activity.title}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                            {activity.content}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                            <span>{activity.likes} likes</span>
                            {activity.comments && <span>{activity.comments} comments</span>}
                            <span>{activity.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                  Achievements & Badges
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {profileData.achievements.map((achievement) => (
                    <div key={achievement.id} className="text-center p-3 sm:p-4 border rounded-lg">
                      <div className="text-2xl sm:text-4xl mb-2">{achievement.icon}</div>
                      <h3 className="font-medium mb-1 text-xs sm:text-sm leading-tight">{achievement.name}</h3>
                      <p className="text-xs text-muted-foreground">Earned {achievement.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                <div>
                  <h4 className="font-medium mb-2 text-sm sm:text-base">Bio</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{profileData.user.bio}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm sm:text-base">Education</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{profileData.user.education}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm sm:text-base">Current Role</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{profileData.user.occupation}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm sm:text-base">Location</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{profileData.user.location}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
