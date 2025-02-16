import { JobListingLayout } from "@/components/job-listing-layout"

const fresherListings = [
  {
    id: 1,
    title: "Junior Software Engineer",
    company: "TechStart Inc.",
    location: "Bangalore, India",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    salary: "₹5-8 LPA",
    batch: "2024, 2023",
    employmentType: "Full Time",
    experience: "0 - 1 year",
    postedTime: "2 days ago",
    status: "Open",
  },
  {
    id: 2,
    title: "Associate Data Analyst",
    company: "DataInsights Co.",
    location: "Hyderabad, India",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    skills: ["Python", "SQL", "Excel", "Power BI"],
    salary: "₹4-6 LPA",
    batch: "2024, 2023",
    employmentType: "Full Time",
    experience: "0 - 1 year",
    postedTime: "1 week ago",
    status: "Actively hiring",
  },
  {
    id: 3,
    title: "Graduate Trainee - Marketing",
    company: "BrandBoost Marketing",
    location: "Mumbai, India",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    skills: ["Digital Marketing", "Social Media", "Content Creation", "SEO"],
    salary: "₹3.5-5 LPA",
    batch: "2024, 2023",
    employmentType: "Full Time",
    experience: "0 - 1 year",
    postedTime: "3 days ago",
    status: "Open",
  },
  {
    id: 4,
    title: "Junior UX Designer",
    company: "InnoDesign Solutions",
    location: "Pune, India",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
    salary: "₹4.5-7 LPA",
    batch: "2024, 2023",
    employmentType: "Full Time",
    experience: "0 - 1 year",
    postedTime: "5 days ago",
    status: "Open",
  },
  {
    id: 5,
    title: "Associate Cloud Engineer",
    company: "CloudTech Innovations",
    location: "Chennai, India",
    logo: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    skills: ["AWS", "Azure", "Docker", "Linux", "Networking"],
    salary: "₹6-9 LPA",
    batch: "2024, 2023",
    employmentType: "Full Time",
    experience: "0 - 1 year",
    postedTime: "1 day ago",
    status: "Urgent hiring",
  },
]

export default function FresherJobsPage() {
  return (
    <JobListingLayout
      title="Launch Your Career: Fresher Jobs"
      description="Embark on your professional journey with exciting opportunities tailored for fresh graduates. Discover roles that don't require prior experience and take the first step towards a successful career."
      activeTab="freshers"
      listings={fresherListings}
    />
  )
}

