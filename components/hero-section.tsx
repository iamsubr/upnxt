import { Button } from "@/components/ui/button"
import { Play, Star, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20 text-white"
      style={{
        background: "linear-gradient(to right, #2563eb, #1e40af)",
        backgroundColor: "#2563eb",
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance text-white leading-tight">
            Learn Skills That Matter for Your Future
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white text-pretty max-w-3xl mx-auto lg:mx-0 opacity-90">
            Join thousands of learners mastering in-demand skills through our interactive courses and supportive
            community.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 font-semibold w-full sm:w-auto"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Learning Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold w-full sm:w-auto bg-transparent"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
            >
              Browse Courses
            </Button>
          </div>

          <div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 text-white"
            style={{ color: "#ffffff" }}
          >
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-sm sm:text-base" style={{ color: "#ffffff" }}>
                4.8/5
              </span>
              <span className="text-sm sm:text-base opacity-80" style={{ color: "#ffffff" }}>
                Average Rating
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 opacity-80" style={{ color: "#ffffff" }} />
              <span className="font-semibold text-sm sm:text-base" style={{ color: "#ffffff" }}>
                50K+
              </span>
              <span className="text-sm sm:text-base opacity-80" style={{ color: "#ffffff" }}>
                Active Learners
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm sm:text-base" style={{ color: "#ffffff" }}>
                200+
              </span>
              <span className="text-sm sm:text-base opacity-80" style={{ color: "#ffffff" }}>
                Expert-Led Courses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
