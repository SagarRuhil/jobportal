import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CareerHub - Your Futuristic Career Growth Platform",
  description: "Discover cutting-edge job opportunities and resources for your career growth",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-primary">CareerHub</span>
            </Link>
            <MainNav />
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="futuristic-button">Register</Button>
              </Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 text-gray-600 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">For Job Seekers</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Browse Jobs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Salary Guide
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">For Employers</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Post a Job
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Hiring Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} CareerHub. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <LinkedIn className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

