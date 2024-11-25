import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Mountain, Sun, Snowflake, Users, Leaf, Sprout } from "lucide-react"
import Image from "next/image"
import { tours } from "@/lib/toursData"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl h-full flex flex-col justify-center font-bold ">Airport Transfer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <p className=" text-muted-foreground">
              DD-MM-YY
            </p>
            <Button size="lg" className="bg-gray-200 text-black border-black hover:text-white/90">
              Book
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <p className=" text-muted-foreground">
              DD-MM-YY
            </p>
            <Button size="lg" className="bg-gray-200 text-black border-black hover:text-white/90">
              Book
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl h-full flex flex-col justify-center font-bold ">Offers for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Sprout className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Spring Tours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className=" text-muted-foreground">
                    DD-MM-YY
                  </p>
                  <Button size="lg" className="bg-gray-100 text-black border-black hover:text-white/90">
                    Book
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className=" text-muted-foreground">
                    DD-MM-YY
                  </p>
                  <Button size="lg" className="bg-gray-100 text-black border-black hover:text-white/90">
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Sun className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Summer Tours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className=" text-muted-foreground">
                    DD-MM-YY
                  </p>
                  <Button size="lg" className="bg-gray-100 text-black border-black hover:text-white/90">
                    Book
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className=" text-muted-foreground">
                    DD-MM-YY
                  </p>
                  <Button size="lg" className="bg-gray-100 text-black border-black hover:text-white/90">
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Fall Tours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className=" text-muted-foreground">
                    DD-MM-YY
                  </p>
                  <Button size="lg" className="bg-gray-100 text-black border-black hover:text-white/90">
                    Book
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className=" text-muted-foreground">
                    DD-MM-YY
                  </p>
                  <Button size="lg" className="bg-gray-100 text-black border-black hover:text-white/90">
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Snowflake className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Snow Tours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className=" text-muted-foreground">
                    DD-MM-YY
                  </p>
                  <Button size="lg" className="bg-gray-100 text-black border-black hover:text-white/90">
                    Book
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className=" text-muted-foreground">
                    DD-MM-YY
                  </p>
                  <Button size="lg" className="bg-gray-100 text-black border-black hover:text-white/90">
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Popular Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.title} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {tour.season === 'winter' ? (
                      <Snowflake className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Sun className="w-5 h-5 text-yellow-500" />
                    )}
                    <span className="text-sm font-medium capitalize">{tour.season} Tour</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{tour.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${tour.price}</span>
                    <Button>Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.title} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {tour.season === 'winter' ? (
                      <Snowflake className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Sun className="w-5 h-5 text-yellow-500" />
                    )}
                    <span className="text-sm font-medium capitalize">{tour.season} Tour</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{tour.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${tour.price}</span>
                    <Button>Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
