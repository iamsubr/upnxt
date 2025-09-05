import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ThumbsUp } from "lucide-react"

const reviews = [
  {
    id: 1,
    user: {
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AC",
    },
    rating: 5,
    date: "2 weeks ago",
    content:
      "Excellent course! Sarah explains complex concepts in a very clear and understandable way. The projects are practical and really help solidify the learning.",
    helpful: 24,
  },
  {
    id: 2,
    user: {
      name: "Maria Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MR",
    },
    rating: 5,
    date: "1 month ago",
    content:
      "This course exceeded my expectations. The curriculum is well-structured and the instructor provides great support. Highly recommended for anyone wanting to learn React.",
    helpful: 18,
  },
  {
    id: 3,
    user: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DK",
    },
    rating: 4,
    date: "3 weeks ago",
    content:
      "Great content and examples. The only minor issue is that some videos could be a bit shorter, but overall it's a fantastic learning experience.",
    helpful: 12,
  },
]

interface CourseReviewsProps {
  courseId: number
}

export function CourseReviews({ courseId }: CourseReviewsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Student Reviews</span>
          <Button variant="outline" size="sm">
            Write a Review
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6 last:border-b-0">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={review.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{review.user.initials}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{review.user.name}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{review.content}</p>

                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">Load More Reviews</Button>
        </div>
      </CardContent>
    </Card>
  )
}
