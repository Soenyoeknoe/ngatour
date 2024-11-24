import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Mountain, Sun, Snowflake, Users } from "lucide-react"
import Image from "next/image"

export default function contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh]">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Snowy Mountains"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">
              Got any questions?
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Feel Free to reach out to us.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                View Tours
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Ngatour?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mountain className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Expert Local Guides</h3>
                <p className="text-center text-muted-foreground">
                  Our experienced guides know every peak and valley of the Snowy Mountains.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Small Groups</h3>
                <p className="text-center text-muted-foreground">
                  Intimate tour groups ensure personalized attention and better experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Year-Round Tours</h3>
                <p className="text-center text-muted-foreground">
                  Experience the beauty of the Snowy Mountains in every season.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     
    </main>
  )
}
