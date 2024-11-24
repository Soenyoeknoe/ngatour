import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Mountain, Sun, Snowflake, Users } from "lucide-react"
import Image from "next/image"

export default function termsandcons() {
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
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Ngatour?</h2>
          <div className="grid grid-cols-1 gap-8">
          <section>
            <h2>1. Use of the Website</h2>
            <p>1.1. You must be at least <strong>14</strong> years old to use this site.</p>
            <p>1.2. You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of others.</p>
            <p>1.3. We reserve the right to terminate your access to the site if you violate these terms.</p>
          </section>
          
          <section>
              <h2>2. Intellectual Property</h2>
              <p>2.1. All content, logos, images, and designs on this site are the property of <strong>[Website Name]</strong> or our licensors.</p>
              <p>2.2. You may not reproduce, distribute, or use our content without prior written permission.</p>
          </section>
          
          <section>
              <h2>3. User Accounts</h2>
              <p>3.1. If you create an account, you are responsible for maintaining its confidentiality and for all activities under your account.</p>
              <p>3.2. You agree to provide accurate and current information when registering.</p>
          </section>
          
          <section>
              <h2>4. Limitation of Liability</h2>
              <p>4.1. <strong>[Website Name]</strong> is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website.</p>
              <p>4.2. We make no guarantees that the website will always be available or free from errors.</p>
          </section>
          
          <section>
              <h2>5. Third-Party Links</h2>
              <p>5.1. Our website may contain links to third-party websites. We are not responsible for their content or policies. Use them at your own risk.</p>
          </section>
          
          <section>
              <h2>6. Modifications to Terms</h2>
              <p>6.1. We reserve the right to update these Terms and Conditions at any time. Changes will be effective upon posting.</p>
              <p>6.2. Continued use of the website after changes are posted signifies your acceptance of the new terms.</p>
          </section>
          
          <section>
              <h2>7. Governing Law</h2>
              <p>7.1. These terms are governed by the laws of <strong>[Your Country/Region]</strong>. Disputes will be subject to the jurisdiction of the courts in <strong>[Your Location]</strong>.</p>
          </section>
          
          <section>
              <h2>8. Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
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
