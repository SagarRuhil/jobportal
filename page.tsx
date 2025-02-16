import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, BookOpen, TrendingUp, Laptop, Building2, Search, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Career background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Unlock Your Potential with CareerHub</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your one-stop platform for career guidance, job alerts, and learning resources.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Opportunities
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Why Choose CareerHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Career Growth", description: "Find roles that match your ambition" },
              { icon: Laptop, title: "Skill Up", description: "Enhance your skills with our resources" },
              { icon: Building2, title: "Internships", description: "Kickstart your career" },
              { icon: Search, title: "Job Listings", description: "Discover your next opportunity" },
            ].map((feature, index) => (
              <Card key={index} className="card-hover-effect">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-8">
              CareerHub is an initiative focused on providing free career guidance, job alerts, resume tips, and
              learning resources. We believe education should be free and accessible to everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" className="gap-2">
                <Briefcase className="w-4 h-4" />
                Join Community
              </Button>
              <Button variant="secondary" className="gap-2">
                <GraduationCap className="w-4 h-4" />
                Career Resources
              </Button>
              <Button variant="secondary" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Learning Paths
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Explore Our Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Roadmaps",
                items: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
                image:
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Resources",
                items: ["Interview Questions", "Data Structures & Algorithms", "Resume Templates"],
                image:
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Latest Articles",
                items: ["How to Get Hired as a Fresher", "Top Tech Skills in 2024", "Guide to Remote Work"],
                image:
                  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
            ].map((section, index) => (
              <Card key={index} className="overflow-hidden card-hover-effect">
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link href="#" className="text-primary hover:underline">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="mt-4 w-full justify-between">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

