"use client"

import { Header } from "@/components/header"
import { UserProfileHeader } from "@/components/user-profile-header"
import { UserProfileTabs } from "@/components/user-profile-tabs"

// Mock user data - in real app this would come from API/database
const userData = {
  id: 1,
  name: "Alex Chen",
  username: "alexc_dev",
  email: "alex@example.com",
  avatar: "/placeholder.svg?height=120&width=120",
  bio: "Full-stack developer passionate about React and machine learning. Always learning something new!",
  location: "San Francisco, CA",
  website: "https://alexchen.dev",
  joinDate: "January 2023",
  stats: {
    coursesCompleted: 12,
    coursesInProgress: 3,
    totalLearningHours: 156,
    communityPosts: 28,
    reputation: 1923,
    followers: 245,
    following: 89,
    streak: 15,
  },
  badges: [
    { id: 1, name: "Early Adopter", icon: "🚀", description: "Joined in the first month" },
    { id: 2, name: "React Master", icon: "⚛️", description: "Completed all React courses" },
    { id: 3, name: "Community Helper", icon: "🤝", description: "Helped 50+ students" },
    { id: 4, name: "Streak Champion", icon: "🔥", description: "15-day learning streak" },
  ],
  enrolledCourses: [
    {
      id: 1,
      title: "Complete React Development",
      instructor: "Sarah Johnson",
      progress: 100,
      completed: true,
      thumbnail: "/react-development-course-thumbnail.jpg",
      completedDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Michael Chen",
      progress: 75,
      completed: false,
      thumbnail: "/python-data-science-course-thumbnail.jpg",
      lastAccessed: "2024-01-20",
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Emma Rodriguez",
      progress: 45,
      completed: false,
      thumbnail: "/ui-ux-design-course-thumbnail.jpg",
      lastAccessed: "2024-01-18",
    },
  ],
  recentActivity: [
    {
      id: 1,
      type: "course_completed",
      title: "Completed React Development course",
      date: "2 days ago",
      icon: "🎓",
    },
    {
      id: 2,
      type: "post_created",
      title: "Posted about React hooks best practices",
      date: "3 days ago",
      icon: "📝",
    },
    {
      id: 3,
      type: "comment_added",
      title: "Helped someone with JavaScript debugging",
      date: "5 days ago",
      icon: "💬",
    },
    {
      id: 4,
      type: "badge_earned",
      title: "Earned 'Community Helper' badge",
      date: "1 week ago",
      icon: "🏆",
    },
  ],
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <UserProfileHeader user={userData} />
        <UserProfileTabs user={userData} />
      </div>
    </div>
  )
}
