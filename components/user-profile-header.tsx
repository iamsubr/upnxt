import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Globe, Calendar, MessageCircle, Settings, Share2 } from "lucide-react"

interface UserProfileHeaderProps {
  user: any
}

export function UserProfileHeader({ user }: UserProfileHeaderProps) {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarImage src={user.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-2xl">
                {user.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex gap-2">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button size="sm" variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm" variant="outline">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-1">{user.name}</h1>
                <p className="text-lg text-muted-foreground mb-2">@{user.username}</p>
                <p className="text-muted-foreground mb-4 max-w-2xl">{user.bio}</p>
              </div>

              {/* Stats */}
              <div className="flex gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">{user.stats.followers}</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{user.stats.following}</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{user.stats.reputation}</div>
                  <div className="text-sm text-muted-foreground">Reputation</div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              {user.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
              )}
              {user.website && (
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <a href={user.website} className="text-blue-600 hover:underline">
                    {user.website.replace("https://", "")}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {user.joinDate}</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {user.badges.map((badge: any) => (
                <Badge key={badge.id} variant="secondary" className="text-sm">
                  <span className="mr-1">{badge.icon}</span>
                  {badge.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
