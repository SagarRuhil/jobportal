import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Share, Clock, Briefcase, GraduationCap, DollarSign, Users, MapPin } from "lucide-react"
import Image from "next/image"

interface JobListing {
  id: number
  title: string
  company: string
  location: string
  logo: string
  coverImage: string
  skills: string[]
  stipend?: string
  salary?: string
  batch: string
  employmentType: string
  experience: string
  postedTime: string
  status: string
}

interface JobListingLayoutProps {
  title: string
  description: string
  activeTab: string
  listings: JobListing[]
}

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "in", label: "India" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
]

export function JobListingLayout({ title, description, activeTab, listings }: JobListingLayoutProps) {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        {/* Filters Section */}
        <div className="space-y-6">
          <Card className="futuristic-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">Search</h3>
              <Input placeholder="Search by Company or Skills" className="futuristic-input mb-4" />

              <h3 className="text-lg font-semibold mb-4 text-primary">Batch Year</h3>
              <div className="space-y-2 mb-4">
                {[2028, 2027, 2026, 2025, 2024, 2023, 2022, 2021].map((year) => (
                  <div key={year} className="flex items-center space-x-2">
                    <Checkbox id={`year-${year}`} />
                    <label
                      htmlFor={`year-${year}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {year}
                    </label>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-4 text-primary">Employment Type</h3>
              <Select>
                <SelectTrigger className="futuristic-input">
                  <SelectValue placeholder="Choose..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full Time</SelectItem>
                  <SelectItem value="part-time">Part Time</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>

              <h3 className="text-lg font-semibold my-4 text-primary">Country</h3>
              <Select>
                <SelectTrigger className="futuristic-input">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button className="futuristic-button w-full mt-6">Apply Filters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Jobs List Section */}
        <div>
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2 text-gradient">{title}</h1>
            <p className="text-muted-foreground text-lg">{description}</p>
          </div>

          <Tabs defaultValue={activeTab} className="mb-6">
            <TabsList className="grid w-full grid-cols-4 bg-muted rounded-lg p-1">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md transition-all"
              >
                All Jobs
              </TabsTrigger>
              <TabsTrigger
                value="freshers"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md transition-all"
              >
                Freshers Jobs
              </TabsTrigger>
              <TabsTrigger
                value="internships"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md transition-all"
              >
                Internships
              </TabsTrigger>
              <TabsTrigger
                value="experienced"
                className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-md transition-all"
              >
                Experienced Jobs
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-6">
            {listings.map((job) => (
              <Card key={job.id} className="futuristic-card overflow-hidden group">
                <div className="h-48 w-full relative">
                  <Image
                    src={job.coverImage || "/placeholder.svg"}
                    alt={`${job.company} cover`}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white">
                        <Image
                          src={job.logo || "/placeholder.svg"}
                          alt={job.company}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h2 className="text-2xl font-bold text-white">{job.title}</h2>
                        <p className="text-white/90 flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground px-3 py-1">
                      {job.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-secondary text-secondary-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                        <div>
                          <p className="text-sm text-muted-foreground">Stipend/Salary:</p>
                          <p className="font-medium">{job.stipend || job.salary}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                        <div>
                          <p className="text-sm text-muted-foreground">Batch:</p>
                          <p className="font-medium">{job.batch}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-purple-500" />
                        <div>
                          <p className="text-sm text-muted-foreground">Employment Type:</p>
                          <p className="font-medium">{job.employmentType}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-red-500" />
                        <div>
                          <p className="text-sm text-muted-foreground">Location:</p>
                          <p className="font-medium">{job.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Posted {job.postedTime}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="futuristic-button">
                          Apply Now
                        </Button>
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                          <Share className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

