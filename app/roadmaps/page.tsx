import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Code, Database, Layout, Smartphone, BarChartIcon as ChartBar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const roadmaps = [
  {
    id: 1,
    title: "Frontend Developer",
    icon: Layout,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    description: "Master the art of creating beautiful and interactive user interfaces",
    topics: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    difficulty: "Beginner",
    duration: "6 months",
    category: "Web Development",
    jobs: [
      { title: "Junior Frontend Developer", company: "TechCorp", location: "New York, USA" },
      { title: "React Developer", company: "WebSolutions", location: "London, UK" },
      { title: "UI Engineer", company: "DesignHub", location: "Berlin, Germany" },
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Dive deep into server-side programming and database management",
    topics: ["Node.js", "Python", "SQL", "APIs", "System Design"],
    difficulty: "Intermediate",
    duration: "8 months",
    category: "Web Development",
    jobs: [
      { title: "Backend Engineer", company: "DataSystems", location: "San Francisco, USA" },
      { title: "Python Developer", company: "CloudTech", location: "Toronto, Canada" },
      { title: "API Specialist", company: "ConnectCorp", location: "Sydney, Australia" },
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    icon: Code,
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Become a versatile developer proficient in both frontend and backend",
    topics: ["Frontend", "Backend", "DevOps", "Databases", "Testing"],
    difficulty: "Advanced",
    duration: "12 months",
    category: "Web Development",
    jobs: [
      { title: "Full Stack Developer", company: "TechGiants", location: "Seattle, USA" },
      { title: "MERN Stack Developer", company: "WebPros", location: "Amsterdam, Netherlands" },
      { title: "Software Engineer", company: "InnovateTech", location: "Stockholm, Sweden" },
    ],
  },
  {
    id: 4,
    title: "Mobile App Developer",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Build cutting-edge mobile applications for iOS and Android platforms",
    topics: ["Swift", "Kotlin", "React Native", "Flutter", "Mobile UX"],
    difficulty: "Intermediate",
    duration: "9 months",
    category: "Mobile Development",
    jobs: [
      { title: "iOS Developer", company: "AppMakers", location: "Cupertino, USA" },
      { title: "Android Engineer", company: "MobileTech", location: "Seoul, South Korea" },
      { title: "React Native Developer", company: "CrossPlatform", location: "Bangalore, India" },
    ],
  },
  {
    id: 5,
    title: "Data Scientist",
    icon: ChartBar,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Harness the power of data to drive insights and decision-making",
    topics: ["Python", "R", "Machine Learning", "Statistics", "Big Data"],
    difficulty: "Advanced",
    duration: "12 months",
    category: "Data Science",
    jobs: [
      { title: "Data Scientist", company: "AnalyticsPro", location: "Boston, USA" },
      { title: "Machine Learning Engineer", company: "AI Solutions", location: "Munich, Germany" },
      { title: "Big Data Analyst", company: "DataCorp", location: "Singapore" },
    ],
  },
]

export default function RoadmapsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Developer Roadmaps
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Embark on your journey to become a successful developer with our expertly crafted learning paths.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="flex justify-center p-1 space-x-1 rounded-xl bg-blue-100 dark:bg-gray-800">
          {["all", "web", "mobile", "data"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="px-6 py-3 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-sm"
            >
              {tab === "all" ? "All Roadmaps" : `${tab.charAt(0).toUpperCase() + tab.slice(1)} Development`}
            </TabsTrigger>
          ))}
        </TabsList>
        {["all", "web", "mobile", "data"].map((tab) => (
          <TabsContent key={tab} value={tab}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roadmaps
                .filter((roadmap) => tab === "all" || roadmap.category.toLowerCase().includes(tab))
                .map((roadmap) => (
                  <Card
                    key={roadmap.id}
                    className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={roadmap.image || "/placeholder.svg"}
                        alt={roadmap.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:from-black/20 group-hover:to-black/80 transition-all duration-300" />
                      <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md">
                        <roadmap.icon className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {roadmap.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{roadmap.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {roadmap.topics.map((topic) => (
                          <Badge
                            key={topic}
                            variant="secondary"
                            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-green-500" />
                            <span>{roadmap.difficulty}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-purple-500" />
                            <span>{roadmap.duration}</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Related Jobs:</h4>
                          <ul className="space-y-1">
                            {roadmap.jobs.map((job, index) => (
                              <li key={index} className="text-sm">
                                <Link href="#" className="hover:text-blue-600 transition-colors">
                                  {job.title} - {job.company}, {job.location}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0"
                          >
                            {roadmap.category}
                          </Badge>
                          <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                            Explore
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
        >
          View All Roadmaps
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}

