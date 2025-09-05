"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Play, FileText, HelpCircle } from "lucide-react"
import { useState } from "react"

interface CourseSidebarProps {
  course: any
  currentLesson: any
  onLessonSelect: (lesson: any) => void
  isMobile?: boolean
}

export function CourseSidebar({ course, currentLesson, onLessonSelect, isMobile = false }: CourseSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<number[]>([1])

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const totalLessons = course.curriculum.reduce((acc: number, section: any) => acc + section.lessons.length, 0)
  const completedLessons = course.curriculum.reduce(
    (acc: number, section: any) => acc + section.lessons.filter((lesson: any) => lesson.completed).length,
    0,
  )
  const progressPercentage = (completedLessons / totalLessons) * 100

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />
      case "quiz":
        return <HelpCircle className="h-4 w-4" />
      case "exercise":
        return <FileText className="h-4 w-4" />
      default:
        return <Play className="h-4 w-4" />
    }
  }

  const containerClass = isMobile
    ? "h-full w-full bg-card overflow-y-auto"
    : "fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-card border-l overflow-y-auto"

  return (
    <div className={containerClass}>
      <div className="p-4 border-b">
        <h3 className="font-semibold text-base sm:text-lg mb-2">Course Content</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
            <span>
              {completedLessons} of {totalLessons} lessons completed
            </span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>

      <div className="p-4">
        {course.curriculum.map((section: any) => (
          <div key={section.id} className="mb-4">
            <Button
              variant="ghost"
              className="w-full justify-between p-2 h-auto text-left"
              onClick={() => toggleSection(section.id)}
            >
              <span className="font-medium text-sm sm:text-base">{section.title}</span>
              <span className="text-xs text-muted-foreground">{section.lessons.length} lessons</span>
            </Button>

            {expandedSections.includes(section.id) && (
              <div className="ml-2 mt-2 space-y-1">
                {section.lessons.map((lesson: any) => (
                  <Button
                    key={lesson.id}
                    variant={currentLesson.id === lesson.id ? "secondary" : "ghost"}
                    className="w-full justify-start p-2 h-auto text-left"
                    onClick={() => onLessonSelect(lesson)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex items-center gap-2">
                        {lesson.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          getLessonIcon(lesson.type)
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium truncate">{lesson.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {lesson.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
