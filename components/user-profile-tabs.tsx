"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Trophy, Activity, Clock, CheckCircle, Play, Calendar, TrendingUp, Target, Flame } from "lucide-react"

interface UserProfileTabsProps {
  user: any
}

export function UserProfileTabs({ user }: UserProfileTabsProps) {
  return (
    <Tabs defaultValue="overview" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="courses">Courses</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="achievements">Achievements</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Learning Stats */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.stats.coursesCompleted}</p>
                  <p className="text-sm text-muted-foreground">Courses Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.stats.totalLearningHours}h</p>
                  <p className="text-sm text-muted-foreground">Learning Hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Flame className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.stats.streak}</p>
                  <p className="text-sm text-muted-foreground">Day Streak</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Trophy className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{user.stats.communityPosts}</p>
                  <p className="text-sm text-muted-foreground">Community Posts</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Learning */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Current Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.enrolledCourses
                .filter((course: any) => !course.completed)
                .map((course: any) => (
                  <div key={course.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{course.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                      <div className="flex items-center gap-2">
                        <Progress value={course.progress} className="flex-1 h-2" />
                        <span className="text-sm font-medium">{course.progress}%</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </Button>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.recentActivity.slice(0, 5).map((activity: any) => (
                <div key={activity.id} className="flex items-center gap-3">
                  <div className="text-lg">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="courses" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Completed Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Completed Courses ({user.enrolledCourses.filter((c: any) => c.completed).length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.enrolledCourses
                  .filter((course: any) => course.completed)
                  .map((course: any) => (
                    <div key={course.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{course.title}</h4>
                        <p className="text-xs text-muted-foreground">Completed {course.completedDate}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        100%
                      </Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* In Progress Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-blue-600" />
                In Progress ({user.enrolledCourses.filter((c: any) => !c.completed).length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.enrolledCourses
                  .filter((course: any) => !course.completed)
                  .map((course: any) => (
                    <div key={course.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{course.title}</h4>
                        <p className="text-xs text-muted-foreground">Last accessed {course.lastAccessed}</p>
                        <Progress value={course.progress} className="mt-1 h-1" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {course.progress}%
                      </Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="activity" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Learning Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.recentActivity.map((activity: any) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{activity.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="achievements" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {user.badges.map((badge: any) => (
            <Card key={badge.id} className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="font-semibold mb-2">{badge.name}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </CardContent>
            </Card>
          ))}

          {/* Locked Achievements */}
          <Card className="text-center opacity-50">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Course Creator</h3>
              <p className="text-sm text-muted-foreground">Create your first course</p>
            </CardContent>
          </Card>

          <Card className="text-center opacity-50">
            <CardContent className="p-6">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Mentor</h3>
              <p className="text-sm text-muted-foreground">Help 100+ students</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
