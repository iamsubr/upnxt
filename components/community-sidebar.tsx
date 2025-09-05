import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, Users, Calendar, Award } from "lucide-react"

const trendingTopics = [
  { tag: "react", posts: 156 },
  { tag: "python", posts: 134 },
  { tag: "javascript", posts: 128 },
  { tag: "machinelearning", posts: 89 },
  { tag: "uiux", posts: 76 },
]

const activeUsers = [
  {
    name: "Sarah Johnson",
    username: "sarahml",
    avatar: "/placeholder.svg?height=32&width=32",
    reputation: 2847,
    badge: "Expert",
  },
  {
    name: "Alex Chen",
    username: "alexc_dev",
    avatar: "/placeholder.svg?height=32&width=32",
    reputation: 1923,
    badge: "Contributor",
  },
  {
    name: "Maria Rodriguez",
    username: "maria_data",
    avatar: "/placeholder.svg?height=32&width=32",
    reputation: 1456,
    badge: "Helper",
  },
]

const upcomingEvents = [
  {
    title: "React Study Group",
    date: "Tomorrow, 7 PM",
    participants: 12,
  },
  {
    title: "ML Project Showcase",
    date: "Friday, 6 PM",
    participants: 28,
  },
  {
    title: "Design Critique Session",
    date: "Saturday, 3 PM",
    participants: 15,
  },
]

export function CommunitySidebar() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Community Stats */}
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">Community Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
              <span className="text-xs sm:text-sm">Active Members</span>
            </div>
            <span className="font-semibold text-sm sm:text-base">12,847</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
              <span className="text-xs sm:text-sm">Posts Today</span>
            </div>
            <span className="font-semibold text-sm sm:text-base">156</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600" />
              <span className="text-xs sm:text-sm">Top Contributors</span>
            </div>
            <span className="font-semibold text-sm sm:text-base">847</span>
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-2 sm:space-y-3">
            {trendingTopics.map((topic, index) => (
              <div key={topic.tag} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">#{index + 1}</span>
                  <Badge variant="secondary" className="text-xs">
                    #{topic.tag}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Contributors */}
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">Top Contributors</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-3 sm:space-y-4">
            {activeUsers.map((user) => (
              <div key={user.username} className="flex items-center gap-2 sm:gap-3">
                <Avatar className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs sm:text-sm">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium truncate">{user.name}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {user.badge}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{user.reputation} rep</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-3 sm:space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-xs sm:text-sm font-medium leading-tight">{event.title}</h4>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{event.date}</span>
                  <span>{event.participants} joining</span>
                </div>
                <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
                  Join Event
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
