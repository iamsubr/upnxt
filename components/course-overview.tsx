import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, Users, Award, CheckCircle } from "lucide-react"

interface CourseOverviewProps {
  course: any
}

export function CourseOverview({ course }: CourseOverviewProps) {
  return (
    <div className="space-y-8">
      {/* Course Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-blue-600 text-white">{course.category}</Badge>
          <Badge variant="outline">{course.level}</Badge>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">{course.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{course.description}</p>

        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
            <span>({course.totalRatings.toLocaleString()} ratings)</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration} total</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
          <Avatar className="h-12 w-12">
            <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {course.instructor.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Instructor: {course.instructor.name}</p>
            <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
            <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
              <span>{course.instructor.rating} ⭐ instructor rating</span>
              <span>{course.instructor.students.toLocaleString()} students</span>
              <span>{course.instructor.courses} courses</span>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            What you'll learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {course.whatYouLearn.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Course Description */}
      <Card>
        <CardHeader>
          <CardTitle>About this course</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{course.longDescription}</p>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {course.requirements.map((req: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
