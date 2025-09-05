"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Volume2, Maximize, Menu, CheckCircle, Clock, BarChart3 } from "lucide-react"
import { useState, useEffect } from "react"

interface CoursePlayerProps {
  lesson: any
  course: any
  onToggleSidebar: () => void
  onMobileToggleSidebar?: () => void
}

export function CoursePlayer({ lesson, course, onToggleSidebar, onMobileToggleSidebar }: CoursePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [sessionTime, setSessionTime] = useState(0)
  const [videoProgress, setVideoProgress] = useState(25) // Mock progress

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setSessionTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleMarkComplete = () => {
    // In real app, this would update the database and trigger progress calculations
    console.log("Lesson completed:", lesson.id, "Session time:", sessionTime)
  }

  return (
    <div className="bg-black text-white">
      {/* Video Player */}
      <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Video Placeholder */}
        <div className="text-center px-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-1" />
          </div>
          <p className="text-base sm:text-lg font-medium">{lesson.title}</p>
          <p className="text-sm sm:text-base text-gray-300">{lesson.duration}</p>
        </div>

        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 rounded-lg px-2 sm:px-3 py-1 flex items-center gap-2">
          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="text-xs sm:text-sm font-mono">{formatTime(sessionTime)}</span>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/20 p-1 sm:p-2"
              >
                {isPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5" />}
              </Button>
              <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm">0:00 / {lesson.duration}</span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-1 sm:p-2 hidden sm:flex">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onMobileToggleSidebar || onToggleSidebar}
                className="text-white hover:bg-white/20 p-1 sm:p-2 lg:hidden"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleSidebar}
                className="text-white hover:bg-white/20 p-1 sm:p-2 hidden lg:flex"
              >
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-1 sm:p-2 hidden sm:flex">
                <Maximize className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-600 h-1 rounded-full mt-2">
            <div
              className="bg-blue-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${videoProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Lesson Info */}
      <div className="p-4 sm:p-6 bg-gray-900">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">{lesson.title}</h1>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">Part of: {course.title}</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <Badge variant="secondary" className="text-xs sm:text-sm">
                {lesson.type}
              </Badge>
              <span className="text-xs sm:text-sm text-gray-400">{lesson.duration}</span>
              {lesson.completed && (
                <div className="flex items-center gap-1 text-green-400">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">Completed</span>
                </div>
              )}
              {sessionTime > 0 && (
                <div className="flex items-center gap-1 text-blue-400">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">Session: {formatTime(sessionTime)}</span>
                </div>
              )}
            </div>
          </div>

          <Button
            className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto text-sm sm:text-base"
            onClick={handleMarkComplete}
          >
            {lesson.completed ? "Mark as Incomplete" : "Mark as Complete"}
          </Button>
        </div>
      </div>
    </div>
  )
}
