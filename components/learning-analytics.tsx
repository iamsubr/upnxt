"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, BarChart3, Award } from "lucide-react"

const analyticsData = {
  learningVelocity: {
    thisWeek: 8.5,
    lastWeek: 6.2,
    trend: "up",
  },
  focusTime: {
    average: 42, // minutes per session
    longest: 78,
    shortest: 15,
    optimal: 45,
  },
  skillProgress: [
    { skill: "React", level: 85, growth: "+12%" },
    { skill: "Python", level: 72, growth: "+8%" },
    { skill: "UI/UX", level: 58, growth: "+15%" },
    { skill: "Machine Learning", level: 34, growth: "+22%" },
  ],
  weeklyPattern: [
    { day: "Mon", hours: 2.1 },
    { day: "Tue", hours: 1.8 },
    { day: "Wed", hours: 2.3 },
    { day: "Thu", hours: 1.5 },
    { day: "Fri", hours: 0.8 },
    { day: "Sat", hours: 0 },
    { day: "Sun", hours: 0 },
  ],
}

export function LearningAnalytics() {
  return (
    <div className="space-y-6">
      {/* Learning Velocity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Learning Velocity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">This week</span>
              <span className="font-semibold">{analyticsData.learningVelocity.thisWeek}h</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Last week</span>
              <span className="font-semibold">{analyticsData.learningVelocity.lastWeek}h</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-green-600">
                +
                {(
                  ((analyticsData.learningVelocity.thisWeek - analyticsData.learningVelocity.lastWeek) /
                    analyticsData.learningVelocity.lastWeek) *
                  100
                ).toFixed(0)}
                %
              </Badge>
              <span className="text-sm text-muted-foreground">improvement</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Focus Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            Focus Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Average session</span>
              <span className="font-medium">{analyticsData.focusTime.average} min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Longest session</span>
              <span className="font-medium">{analyticsData.focusTime.longest} min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Optimal range</span>
              <span className="font-medium">{analyticsData.focusTime.optimal} min</span>
            </div>
            <Progress
              value={(analyticsData.focusTime.average / analyticsData.focusTime.optimal) * 100}
              className="h-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Skill Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-600" />
            Skill Development
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsData.skillProgress.map((skill) => (
              <div key={skill.skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{skill.skill}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs text-green-600">
                      {skill.growth}
                    </Badge>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Pattern */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-orange-600" />
            Weekly Pattern
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {analyticsData.weeklyPattern.map((day) => (
              <div key={day.day} className="flex items-center gap-3">
                <span className="text-xs font-medium w-8">{day.day}</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all"
                    style={{ width: `${(day.hours / 3) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-8">{day.hours}h</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
