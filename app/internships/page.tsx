import { JobListingLayout } from "@/components/job-listing-layout"

const internshipListings = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "Tech Innovators",
    location: "Remote",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    skills: ["JavaScript", "React", "Node.js", "Git"],
    stipend: "₹25,000/month",
    batch: "2025, 2024",
    employmentType: "Internship",
    experience: "0 - 1 year",
    postedTime: "1 day ago",
    status: "Open",
  },
  {
    id: 2,
    title: "Data Analytics Intern",
    company: "DataCrunch Co.",
    location: "Bangalore, India",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    skills: ["Python", "SQL", "Excel", "Data Visualization"],
    stipend: "₹20,000/month",
    batch: "2025, 2024",
    employmentType: "Internship",
    experience: "0 - 1 year",
    postedTime: "2 days ago",
    status: "Actively hiring",
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Creative Designs Ltd.",
    location: "Mumbai, India",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    stipend: "₹18,000/month",
    batch: "2025, 2024",
    employmentType: "Internship",
    experience: "0 - 1 year",
    postedTime: "3 days ago",
    status: "Open",
  },
  {
    id: 4,
    title: "Marketing Intern",
    company: "Global Brands Inc.",
    location: "Delhi, India",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    skills: ["Social Media Marketing", "Content Creation", "SEO", "Analytics"],
    stipend: "₹15,000/month",
    batch: "2025, 2024",
    employmentType: "Internship",
    experience: "0 - 1 year",
    postedTime: "4 days ago",
    status: "Open",
  },
  {
    id: 5,
    title: "Machine Learning Intern",
    company: "AI Solutions Pvt. Ltd.",
    location: "Hyderabad, India",
    logo: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Natural Language Processing"],
    stipend: "₹30,000/month",
    batch: "2024, 2023",
    employmentType: "Internship",
    experience: "0 - 1 year",
    postedTime: "1 week ago",
    status: "Actively hiring",
  },
]

export default function InternshipsPage() {
  return (
    <JobListingLayout
      title="Kickstart Your Career with Exciting Internships"
      description="Gain hands-on experience and learn from industry experts with our diverse range of internship opportunities. Perfect for students and recent graduates looking to make their mark in the professional world."
      activeTab="internships"
      listings={internshipListings}
    />
  )
}

