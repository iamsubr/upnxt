"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Target, Calendar, Clock, Flame } from "lucide-react"
import { useState, useEffect } from "react"
import { LearningAnalytics } from "./learning-analytics"
import { GoalSetter } from "./goal-setter"

interface ProgressTrackerProps {
  userId?: string
  courseId?: string
}

const progressData = {
  dailyGoal: {
    target: 60, // minutes
    completed: 45,
    streak: 15,
  },
  weeklyStats: {
    hoursThisWeek: 8.5,
    targetHours: 10,
    sessionsCompleted: 12,
    averageSessionLength: 42, // minutes
  },
  milestones: [
    { id: 1, title: "Complete 5 lessons", progress: 100, completed: true, reward: "Study Streak Badge" },
    { id: 2, title: "Study for 7 days straight", progress: 100, completed: true, reward: "Consistency Champion" },
    { id: 3, title: "Finish first course", progress: 85, completed: false, reward: "Course Completion Certificate" },
    { id: 4, title: "Join community discussion", progress: 100, completed: true, reward: "Community Member Badge" },
    { id: 5, title: "Help another student", progress: 60, completed: false, reward: "Helper Badge" },
  ],
  recentAchievements: [
    { id: 1, title: "15-Day Streak", icon: "🔥", date: "Today", description: "Studied for 15 consecutive days" },
    { id: 2, title: "React Master", icon: "⚛️", date: "2 days ago", description: "Completed React Development course" },
    {
      id: 3,
      title: "Community Helper",
      icon: "🤝",
      date: "1 week ago",
      description: "Helped 10 students in community",
    },
  ],
}

export function ProgressTracker({ userId, courseId }: ProgressTrackerProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeView, setActiveView] = useState<"overview" | "analytics" | "goals">("overview")

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const dailyProgress = (progressData.dailyGoal.completed / progressData.dailyGoal.target) * 100
  const weeklyProgress = (progressData.weeklyStats.hoursThisWeek / progressData.weeklyStats.targetHours) * 100

  return (
    <div className="space-y-6">
      {/* View Switcher */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-1">
            <Button
              size="sm"
              variant={activeView === "overview" ? "default" : "ghost"}
              onClick={() => setActiveView("overview")}
              className="flex-1 text-xs"
            >
              Overview
            </Button>
            <Button
              size="sm"
              variant={activeView === "analytics" ? "default" : "ghost"}
              onClick={() => setActiveView("analytics")}
              className="flex-1 text-xs"
            >
              Analytics
            </Button>
            <Button
              size="sm"
              variant={activeView === "goals" ? "default" : "ghost"}
              onClick={() => setActiveView("goals")}
              className="flex-1 text-xs"
            >
              Goals
            </Button>
          </div>
        </CardContent>
      </Card>

      {activeView === "overview" && (
        <>
          {/* Daily Goal Tracker */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                Today's Learning Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{progressData.dailyGoal.completed} min</p>
                    <p className="text-sm text-muted-foreground">of {progressData.dailyGoal.target} min goal</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold">{progressData.dailyGoal.streak} day streak</span>
                  </div>
                </div>

                <Progress value={dailyProgress} className="h-3" />

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{Math.round(dailyProgress)}% complete</span>
                  <span className="text-muted-foreground">
                    {progressData.dailyGoal.target - progressData.dailyGoal.completed} min remaining
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                This Week's Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-foreground">{progressData.weeklyStats.hoursThisWeek}h</p>
                  <p className="text-sm text-muted-foreground">Hours Studied</p>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-foreground">{progressData.weeklyStats.sessionsCompleted}</p>
                  <p className="text-sm text-muted-foreground">Sessions</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Weekly Goal Progress</span>
                  <span>{Math.round(weeklyProgress)}%</span>
                </div>
                <Progress value={weeklyProgress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Average session: {progressData.weeklyStats.averageSessionLength} minutes
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Study Session Timer */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Study Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-3xl font-mono font-bold">
                  {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
                <p className="text-sm text-muted-foreground">Current session: 23 minutes</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    Pause Session
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    End Session
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {activeView === "analytics" && <LearningAnalytics />}
      {activeView === "goals" && <GoalSetter />}
    </div>
  )
}
