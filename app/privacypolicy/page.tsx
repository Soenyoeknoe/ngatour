import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Mountain, Sun, Snowflake, Users } from "lucide-react"
import Image from "next/image"

export default function privacypolicy() {
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
              Discover the Magic of<br />the Snowy Mountains
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Sydney-based tour operator specializing in unforgettable Snowy Mountains adventures 
              and seasonal day tours.
            </p>
            
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Privacy Policy</h2>
          <div className="grid grid-cols-1  gap-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use [Website Name]. By accessing our site, you agree to this policy.
            <br></br><br></br>
            Data We Collect: [Types of data collected].<br></br><br></br>
            Usage of Data: [Purposes for data usage].<br></br><br></br>
            Third-Party Sharing: We do/do not share your data with third parties.<br></br><br></br>
            Your Rights: You can request data access, updates, or deletion by contacting us.<br></br><br></br>
            Cookies: We use cookies to improve user experience. You can manage cookie settings in your browser.<br></br><br></br>
            For more details, please contact us at [email/phone].
          </div>
        </div>
      </section>

     
    </main>
  )
}
