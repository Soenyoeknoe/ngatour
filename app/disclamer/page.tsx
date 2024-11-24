import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Mountain, Sun, Snowflake, Users } from "lucide-react"
import Image from "next/image"

export default function disclamer() {
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
          <h2 className="text-3xl font-bold text-center mb-16">Disclamer</h2>
          <div className="grid grid-cols-1  gap-8">
          <section>
              <h2>1. General Information</h2>
              <p>The information provided on <strong>[Website Name]</strong> is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no guarantees about the completeness, reliability, or accuracy of the information.</p>
          </section>
          
          <section>
              <h2>2. External Links</h2>
              <p>Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, or completeness of any information on these external sites.</p>
          </section>
          
          <section>
              <h2>3. Professional Advice</h2>
              <p>The content on this site does not constitute professional advice. Always seek the guidance of qualified professionals for specific advice related to legal, financial, medical, or other matters.</p>
          </section>
          
          <section>
              <h2>4. Limitation of Liability</h2>
              <p>Under no circumstances shall <strong>[Website Name]</strong>, its owners, or affiliates be held liable for any direct, indirect, or consequential loss or damage arising out of the use or inability to use this website or reliance on any information provided herein.</p>
          </section>
          
          <section>
              <h2>5. Changes to this Disclaimer</h2>
              <p>We reserve the right to update or change this Disclaimer at any time. It is your responsibility to check this page periodically for updates.</p>
          </section>
          
          <section>
              <h2>6. Contact Us</h2>
              <p>If you have any questions about this Disclaimer, please contact us:</p>
              <ul>
                  <li><strong>Email:</strong> [Your Email Address]</li>
                  <li><strong>Phone:</strong> [Your Phone Number]</li>
              </ul>
          </section>
          </div>
        </div>
      </section>

     
    </main>
  )
}
