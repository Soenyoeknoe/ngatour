import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Mountain, Sun, Snowflake, Users } from "lucide-react"
import Image from "next/image"

export default function cancelationandrefund() {
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
          <h2 className="text-3xl font-bold text-center mb-16">Cancellation and Refund Policy</h2>
          <div className="grid grid-cols-1 gap-8">
          <section>
              <h2>1. Overview</h2>
              <p>At <strong>[Website Name]</strong>, we strive to ensure customer satisfaction. Please read our cancellation and refund policy carefully. By using our services, you agree to these terms.</p>
          </section>
          
          <section>
              <h2>2. Cancellation Policy</h2>
              <p>2.1. Cancellations can be requested up to <strong>[Insert Timeframe]</strong> before the scheduled service or delivery.</p>
              <p>2.2. To request a cancellation, please contact us at:</p>
              <ul>
                  <li>Email: [Your Email Address]</li>
                  <li>Phone: [Your Phone Number]</li>
              </ul>
              <p>2.3. We reserve the right to refuse cancellations that do not meet the specified criteria.</p>
          </section>
          
          <section>
              <h2>3. Refund Policy</h2>
              <p>3.1. Refunds are only issued for cancellations made within the eligible period and are subject to the following conditions:</p>
              <ul>
                  <li>The service or product has not yet been used or delivered.</li>
                  <li>Refund requests are submitted within <strong>[Insert Timeframe]</strong> of purchase.</li>
              </ul>
              <p>3.2. Approved refunds will be processed through Stripe to the original payment method.</p>
              <p ><i>*Please note: It may take 5-10 business days for the refund to reflect in your account, depending on your bank.</i></p>
          </section>
          
          <section>
              <h2>4. Payments via Stripe</h2>
              <p>All transactions on <strong>[Website Name]</strong> are securely processed through Stripe. Stripe ensures secure payment handling and PCI compliance.</p>
              <p>For more details about Stripe’s policies, visit <a href="https://stripe.com" target="_blank">Stripe.com</a>.</p>
          </section>
          
          <section>
              <h2>5. Non-Refundable Items</h2>
              <p>The following items or services are not eligible for refunds:</p>
              <ul>
                  <li>Downloaded digital products.</li>
                  <li>Services already rendered.</li>
                  <li>Subscription fees after the renewal date.</li>
              </ul>
          </section>
          
          <section>
              <h2>6. Contact Us</h2>
              <p>If you have any questions about our Cancellation and Refund Policy, please contact us:</p>
              <ul>
                  <li>Email: [Your Email Address]</li>
                  <li>Phone: [Your Phone Number]</li>
              </ul>
          </section>
          </div>
        </div>
      </section>

     
    </main>
  )
}
