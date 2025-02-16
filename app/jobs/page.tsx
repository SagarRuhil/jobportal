import { JobListingLayout } from "@/components/job-listing-layout"

const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    skills: ["React", "TypeScript", "GraphQL", "Webpack", "Jest"],
    salary: "$120,000 - $160,000",
    batch: "2023, 2022",
    employmentType: "Full Time",
    experience: "5+ years",
    postedTime: "2 days ago",
    status: "Actively hiring",
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "AI Innovations",
    location: "New York, NY",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Data Visualization"],
    salary: "$100,000 - $140,000",
    batch: "2024, 2023",
    employmentType: "Full Time",
    experience: "3-5 years",
    postedTime: "1 week ago",
    status: "Open",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Remote",
    logo: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    salary: "$110,000 - $150,000",
    batch: "2023, 2022",
    employmentType: "Full Time",
    experience: "4+ years",
    postedTime: "3 days ago",
    status: "Urgent hiring",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    company: "Creative Designs Inc.",
    location: "Los Angeles, CA",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping"],
    salary: "$90,000 - $130,000",
    batch: "2024, 2023",
    employmentType: "Full Time",
    experience: "3+ years",
    postedTime: "5 days ago",
    status: "Open",
  },
  {
    id: 5,
    title: "Blockchain Developer",
    company: "CryptoTech",
    location: "Miami, FL",
    logo: "https://images.unsplash.com/photo-1621501103780-2e446ce9be24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "DApps"],
    salary: "$130,000 - $180,000",
    batch: "2023, 2022",
    employmentType: "Full Time",
    experience: "4+ years",
    postedTime: "1 day ago",
    status: "Actively hiring",
  },
]

export default function JobsPage() {
  return (
    <JobListingLayout
      title="Explore Exciting Career Opportunities"
      description="Discover a world of possibilities with our curated job listings. From cutting-edge tech roles to creative positions, find the perfect match for your skills and aspirations."
      activeTab="all"
      listings={jobListings}
    />
  )
}

