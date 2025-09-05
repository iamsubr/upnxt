"use client"

import { Header } from "@/components/header"
import { CommunityFeed } from "@/components/community-feed"
import { CommunitySidebar } from "@/components/community-sidebar"
import { CreatePostButton } from "@/components/create-post-button"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function CommunityPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Feed */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Community</h1>
                <p className="text-sm sm:text-base text-muted-foreground">Connect, share, and learn together</p>
              </div>

              <div className="flex items-center gap-2">
                <CreatePostButton />

                {/* Mobile Sidebar Toggle */}
                <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-80 p-0">
                    <div className="p-4">
                      <CommunitySidebar />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            <CommunityFeed />
          </div>

          {/* Desktop Sidebar */}
          <div className="w-80 hidden lg:block flex-shrink-0">
            <CommunitySidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
