import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ngatour - Sydney\'s Premier Snowy Mountains Tour Operator',
  description: 'Experience the magic of the Snowy Mountains with our carefully curated tours. From winter sports to summer hiking, we offer unforgettable adventures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full z-50 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="text-2xl font-bold text-white">Ngatour</div>
              <div className="hidden md:flex space-x-8 text-white">
                <a href="#" className="hover:text-white/80">Home</a>
                <a href="#" className="hover:text-white/80">Tours</a>
                <a href="#" className="hover:text-white/80">About</a>
                <a href="#" className="hover:text-white/80">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Ngatour</h3>
                <p className="text-gray-400">
                  Sydney-based tour operator specializing in adventures in New South Wales.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Home</a></li>
                  <li><a href="#" className="hover:text-white">Tours</a></li>
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>241 castlereagh street</li>
                  <li>Sydney, NSW 2000</li>
                  <li>info@ngatour.com</li>
                  <li>+61 2 1234 5678</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Ngatour. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}