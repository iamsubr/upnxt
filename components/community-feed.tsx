"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUp, ArrowDown, MessageCircle, Share2, Bookmark, MoreHorizontal, Send } from "lucide-react"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

const posts = [
  {
    id: 1,
    title: "Just completed the React course! Here's what I learned",
    content:
      "After 3 weeks of studying, I finally finished Sarah's React course. The projects were challenging but really helped me understand hooks and state management. Highly recommend for beginners!",
    author: {
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      username: "alexc_dev",
    },
    category: "Course Discussion",
    upvotes: 124,
    downvotes: 3,
    comments: 18,
    timeAgo: "2 hours ago",
    tags: ["react", "javascript", "webdev"],
  },
  {
    id: 2,
    title: "Looking for study buddy for Python Data Science course",
    content:
      "Hey everyone! I'm starting the Python for Data Science course next week. Anyone interested in forming a study group? We could meet weekly to discuss concepts and work on projects together.",
    author: {
      name: "Maria Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
      username: "maria_data",
    },
    category: "Study Groups",
    upvotes: 89,
    downvotes: 1,
    comments: 25,
    timeAgo: "4 hours ago",
    tags: ["python", "datascience", "studygroup"],
  },
  {
    id: 3,
    title: "Free resources for UI/UX beginners",
    content:
      "I've compiled a list of free resources that helped me before taking Emma's UI/UX course:\n\n1. Figma Community files\n2. Design inspiration sites\n3. Color palette generators\n4. Typography guides\n\nHope this helps other beginners!",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=32&width=32",
      username: "designdave",
    },
    category: "Resources",
    upvotes: 256,
    downvotes: 8,
    comments: 42,
    timeAgo: "6 hours ago",
    tags: ["uiux", "design", "resources", "free"],
  },
  {
    id: 4,
    title: "Machine Learning project showcase - Sentiment Analysis",
    content:
      "Just finished building a sentiment analysis tool using what I learned in Prof. Kim's ML course. It analyzes social media posts and determines emotional tone. The model achieved 87% accuracy on test data!",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      username: "sarahml",
    },
    category: "Project Showcase",
    upvotes: 178,
    downvotes: 5,
    comments: 31,
    timeAgo: "8 hours ago",
    tags: ["machinelearning", "python", "nlp", "project"],
  },
  {
    id: 5,
    title: "Question about React hooks - useEffect cleanup",
    content:
      "I'm having trouble understanding when and how to properly clean up useEffect hooks. Can someone explain the best practices for preventing memory leaks?",
    author: {
      name: "Mike Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      username: "mikew_code",
    },
    category: "Help & Support",
    upvotes: 67,
    downvotes: 2,
    comments: 15,
    timeAgo: "12 hours ago",
    tags: ["react", "hooks", "javascript", "help"],
  },
]

const categories = [
  "All Posts",
  "Course Discussion",
  "Study Groups",
  "Resources",
  "Project Showcase",
  "Help & Support",
  "Career Advice",
]

export function CommunityFeed() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts")
  const [votedPosts, setVotedPosts] = useState<{ [key: number]: "up" | "down" | null }>({})
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set())
  const [expandedComments, setExpandedComments] = useState<Set<number>>(new Set())
  const [newComments, setNewComments] = useState<{ [key: number]: string }>({})
  const [postComments, setPostComments] = useState<{
    [key: number]: Array<{
      id: number
      author: string
      content: string
      timeAgo: string
      avatar: string
    }>
  }>({
    1: [
      {
        id: 1,
        author: "John Doe",
        content: "Great insights! I had similar experience with hooks.",
        timeAgo: "1h ago",
        avatar: "/placeholder.svg",
      },
      {
        id: 2,
        author: "Jane Smith",
        content: "Thanks for sharing your journey!",
        timeAgo: "30m ago",
        avatar: "/placeholder.svg",
      },
    ],
  })

  const filteredPosts =
    selectedCategory === "All Posts" ? posts : posts.filter((post) => post.category === selectedCategory)

  const handleVote = (postId: number, voteType: "up" | "down") => {
    setVotedPosts((prev) => ({
      ...prev,
      [postId]: prev[postId] === voteType ? null : voteType,
    }))
  }

  const handleSavePost = (postId: number) => {
    setSavedPosts((prev) => {
      const newSaved = new Set(prev)
      if (newSaved.has(postId)) {
        newSaved.delete(postId)
      } else {
        newSaved.add(postId)
      }
      return newSaved
    })
  }

  const handleToggleComments = (postId: number) => {
    setExpandedComments((prev) => {
      const newExpanded = new Set(prev)
      if (newExpanded.has(postId)) {
        newExpanded.delete(postId)
      } else {
        newExpanded.add(postId)
      }
      return newExpanded
    })
  }

  const handleAddComment = (postId: number) => {
    const commentText = newComments[postId]
    if (!commentText?.trim()) return

    const newComment = {
      id: Date.now(),
      author: "You",
      content: commentText,
      timeAgo: "now",
      avatar: "/placeholder.svg",
    }

    setPostComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }))

    setNewComments((prev) => ({
      ...prev,
      [postId]: "",
    }))
  }

  const handleShare = (post: any) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.content,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(`${post.title}\n\n${post.content}\n\nShared from upnXt`)
      alert("Post copied to clipboard!")
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={`text-xs sm:text-sm ${selectedCategory === category ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-3 sm:space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3 p-4 sm:p-6 sm:pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <Avatar className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-xs sm:text-sm">
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-medium text-xs sm:text-sm truncate">{post.author.name}</span>
                      <div className="flex items-center gap-1 sm:gap-2 text-xs text-muted-foreground">
                        <span className="hidden sm:inline">@{post.author.username}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{post.timeAgo}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs mt-1 w-fit">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="flex-shrink-0 p-1 sm:p-2">
                  <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0 p-4 sm:p-6 sm:pt-0">
              <h3 className="font-semibold text-base sm:text-lg mb-2 text-foreground leading-tight">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed whitespace-pre-line">{post.content}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                {/* Voting */}
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleVote(post.id, "up")}
                    className={`p-1 h-6 w-6 sm:h-8 sm:w-8 ${
                      votedPosts[post.id] === "up"
                        ? "text-orange-500 bg-orange-50 hover:bg-orange-100"
                        : "text-muted-foreground hover:text-orange-500"
                    }`}
                  >
                    <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <span className="text-xs sm:text-sm font-medium min-w-[1.5rem] sm:min-w-[2rem] text-center">
                    {post.upvotes -
                      post.downvotes +
                      (votedPosts[post.id] === "up" ? 1 : votedPosts[post.id] === "down" ? -1 : 0)}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleVote(post.id, "down")}
                    className={`p-1 h-6 w-6 sm:h-8 sm:w-8 ${
                      votedPosts[post.id] === "down"
                        ? "text-blue-500 bg-blue-50 hover:bg-blue-100"
                        : "text-muted-foreground hover:text-blue-500"
                    }`}
                  >
                    <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>

                {/* Comments */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground p-1 sm:p-2 h-6 sm:h-8"
                  onClick={() => handleToggleComments(post.id)}
                >
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="text-xs sm:text-sm">{(postComments[post.id]?.length || 0) + post.comments}</span>
                </Button>

                {/* Share */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground p-1 sm:p-2 h-6 sm:h-8"
                  onClick={() => handleShare(post)}
                >
                  <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span className="text-xs sm:text-sm hidden sm:inline">Share</span>
                </Button>

                {/* Bookmark */}
                <Button
                  variant="ghost"
                  size="sm"
                  className={`ml-auto p-1 sm:p-2 h-6 sm:h-8 ${
                    savedPosts.has(post.id)
                      ? "text-blue-600 hover:text-blue-700"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => handleSavePost(post.id)}
                >
                  <Bookmark className={`h-3 w-3 sm:h-4 sm:w-4 ${savedPosts.has(post.id) ? "fill-current" : ""}`} />
                </Button>
              </div>

              {/* Expandable Comments Section */}
              {expandedComments.has(post.id) && (
                <div className="mt-4 pt-4 border-t">
                  <div className="space-y-3 mb-4">
                    {postComments[post.id]?.map((comment) => (
                      <div key={comment.id} className="flex gap-2 sm:gap-3">
                        <Avatar className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0">
                          <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="text-xs">
                            {comment.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                            <span className="font-medium text-xs sm:text-sm">{comment.author}</span>
                            <span className="text-muted-foreground text-xs">{comment.timeAgo}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Textarea
                      placeholder="Write a comment..."
                      value={newComments[post.id] || ""}
                      onChange={(e) =>
                        setNewComments((prev) => ({
                          ...prev,
                          [post.id]: e.target.value,
                        }))
                      }
                      className="min-h-[60px] resize-none text-sm"
                    />
                    <Button
                      size="sm"
                      onClick={() => handleAddComment(post.id)}
                      disabled={!newComments[post.id]?.trim()}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                    >
                      <Send className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-1" />
                      <span className="hidden sm:inline">Send</span>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="w-full sm:w-auto bg-transparent">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}
