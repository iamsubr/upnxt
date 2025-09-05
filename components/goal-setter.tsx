"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Target, Plus, Calendar, Clock, Trophy } from "lucide-react"
import { useState } from "react"

const currentGoals = [
  {
    id: 1,
    title: "Complete Python Data Science Course",
    type: "course",
    target: 100,
    current: 75,
    deadline: "2024-02-15",
    priority: "high",
  },
  {
    id: 2,
    title: "Study 60 minutes daily",
    type: "daily",
    target: 60,
    current: 45,
    deadline: "ongoing",
    priority: "medium",
  },
  {
    id: 3,
    title: "Earn 5 new badges",
    type: "achievement",
    target: 5,
    current: 3,
    deadline: "2024-02-28",
    priority: "low",
  },
]

export function GoalSetter() {
  const [showNewGoal, setShowNewGoal] = useState(false)
  const [newGoal, setNewGoal] = useState({
    title: "",
    type: "",
    target: "",
    deadline: "",
  })

  const handleCreateGoal = () => {
    // In real app, this would save to database
    console.log("Creating goal:", newGoal)
    setShowNewGoal(false)
    setNewGoal({ title: "", type: "", target: "", deadline: "" })
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50"
      case "medium":
        return "text-yellow-600 bg-yellow-50"
      case "low":
        return "text-green-600 bg-green-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "course":
        return <Trophy className="h-4 w-4" />
      case "daily":
        return <Clock className="h-4 w-4" />
      case "achievement":
        return <Target className="h-4 w-4" />
      default:
        return <Target className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Learning Goals
          </CardTitle>
          <Button
            size="sm"
            onClick={() => setShowNewGoal(!showNewGoal)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showNewGoal && (
          <div className="space-y-4 p-4 border rounded-lg mb-4">
            <Input
              placeholder="Goal title..."
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-2">
              <Select value={newGoal.type} onValueChange={(value) => setNewGoal({ ...newGoal, type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Goal type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="course">Course Completion</SelectItem>
                  <SelectItem value="daily">Daily Target</SelectItem>
                  <SelectItem value="achievement">Achievement</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Target value"
                value={newGoal.target}
                onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
              />
            </div>
            <Input
              type="date"
              value={newGoal.deadline}
              onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={handleCreateGoal} disabled={!newGoal.title || !newGoal.type}>
                Create Goal
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowNewGoal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {currentGoals.map((goal) => (
            <div key={goal.id} className="space-y-3 p-4 border rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {getTypeIcon(goal.type)}
                  <h4 className="font-medium text-sm">{goal.title}</h4>
                </div>
                <Badge className={`text-xs ${getPriorityColor(goal.priority)}`}>{goal.priority}</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span>
                    {goal.current} / {goal.target}
                  </span>
                </div>
                <Progress value={(goal.current / goal.target) * 100} className="h-2" />
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Due: {goal.deadline}</span>
                </div>
                <span>{Math.round((goal.current / goal.target) * 100)}% complete</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
