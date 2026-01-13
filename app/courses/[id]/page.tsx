"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CourseDetail() {
  const params = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'eligibility' | 'fees'>('overview');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const courses = [
    {
      id: 1,
      title: "Master of Business Administration (MBA)",
      shortTitle: "MBA",
      category: "business",
      university: "Amity University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Premier MBA program designed to develop business leaders with global perspective and strategic thinking.",
      fullDescription: "One of the biggest challenges being faced by business managers around the globe today, is establishing a business plan that is cost conservative and also delivers optimum results. This is where the MBA program gives your career an edge. One of our most sought after distance learning PG programs, this two year program delivers a sound understanding of the principles of management ready to be practically applied in the corporate world. The progressive curriculum, constantly updated to keep in tandem with today's times, explores contemporary management techniques and offers an understanding of business at a domestic and global level. Over a period of two years of distance learning with lectures on the weekends, young professionals like you will explore the exciting field of business management and its related fields of finance, marketing, human resources, and the most critical vertical of them all – operations. This MBA program will help you master the art and science of identifying business opportunities and crafting strategies that talk to them in their language.",
      highlights: [
        "Understand various disciplines of management and integrated business communication",
        "Understand the concepts of finance, marketing, and operations",
        "Understand segmentation, targeting, positioning and differentiation",
        "Understand the concepts of global business strategy",
        "Understand customer relationship management"
      ],
      rating: 4.9,
      students: "3K+",
      programStructure: [
        {
          semester: "Semester-1",
          subjects: [
            { name: "Management Theory and Practice", credits: 4 },
            { name: "Organizational Behavior", credits: 4 },
            { name: "Business Economics", credits: 4 },
            { name: "Corporate Social Responsibility", credits: 4 },
            { name: "Information Systems for Managers", credits: 4 },
            { name: "Business Communication", credits: 4 }
          ]
        },
        {
          semester: "Semester-2",
          subjects: [
            { name: "Marketing Management", credits: 4 },
            { name: "Financial Accounting & Analysis", credits: 4 },
            { name: "Essentials of HRM", credits: 4 },
            { name: "Strategic Management", credits: 4 },
            { name: "Business Statistics", credits: 4 },
            { name: "Business Law", credits: 4 }
          ]
        },
        {
          semester: "Semester-3",
          subjects: [
            { name: "Brand Management", credits: 4 },
            { name: "Consumer Behavior", credits: 4 },
            { name: "Marketing Strategy", credits: 4 },
            { name: "Customer Relationship Management", credits: 4 },
            { name: "Sales Management", credits: 4 },
            { name: "International Marketing", credits: 4 }
          ]
        },
        {
          semester: "Semester-4",
          subjects: [
            { name: "B2B Marketing", credits: 4 },
            { name: "Services Marketing", credits: 4 },
            { name: "Integrated Marketing Communications", credits: 4 },
            { name: "Marketing Research", credits: 4 },
            { name: "Business: Ethics, Governance & Risk", credits: 4 },
            { name: "Project", credits: 4 }
          ]
        }
      ],
      eligibility: "Bachelor's Degree (10+2+3) in any discipline from any recognized University. OR An Equivalent degree recognized by Association of India Universities (AIU) with Minimum 50% marks at Graduation level.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 2,99,000/-",
          pro: "INR 2,99,000/-"
        },
        annualFee: {
          prime: "INR 1,49,500/-",
          pro: "INR 1,49,500/-"
        },
        semesterFee: {
          prime: "INR 74,750/-",
          pro: "INR 74,750/-"
        },
        semesters: 4,
        note: "Students can choose from two lecture delivery modes: Pro & Prime. Prime: The Prime delivery mode allows students to view recorded lectures only. Pro: The Pro mode allows students to access live-interactive lectures as well as view recorded lectures. Please note: The above-mentioned fee structure is subject to change at the discretion of the University. In addition, Students need to pay an examination fee of Rs 600/- per subject."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 2,
      title: "Online MBA",
      shortTitle: "Online MBA",
      category: "business",
      university: "Manipal University Jaipur",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Flexible online MBA program perfect for working professionals seeking career advancement.",
      fullDescription: "The Online MBA program is designed for working professionals who want to advance their careers without interrupting their work. This flexible program offers the same quality education as on-campus programs with the convenience of online learning. Students can access lectures, assignments, and resources from anywhere at any time.",
      highlights: [
        "Flexible learning schedule",
        "Access to recorded and live lectures",
        "Industry-relevant curriculum",
        "Networking opportunities",
        "Career support and placement assistance"
      ],
      rating: 4.6,
      students: "2.5K+",
      programStructure: [
        {
          semester: "Semester-1",
          subjects: [
            { name: "Management Principles", credits: 4 },
            { name: "Business Economics", credits: 4 },
            { name: "Financial Accounting", credits: 4 },
            { name: "Marketing Management", credits: 4 },
            { name: "Organizational Behavior", credits: 4 }
          ]
        },
        {
          semester: "Semester-2",
          subjects: [
            { name: "Operations Management", credits: 4 },
            { name: "Human Resource Management", credits: 4 },
            { name: "Financial Management", credits: 4 },
            { name: "Strategic Management", credits: 4 },
            { name: "Business Research Methods", credits: 4 }
          ]
        }
      ],
      eligibility: "Bachelor's degree in any discipline with minimum 50% marks from a recognized university. Work experience preferred but not mandatory.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 1,75,000/-",
          pro: "INR 1,75,000/-"
        },
        annualFee: {
          prime: "INR 87,500/-",
          pro: "INR 87,500/-"
        },
        semesterFee: {
          prime: "INR 43,750/-",
          pro: "INR 43,750/-"
        },
        semesters: 4,
        note: "Online learning platform access included. EMI options available."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 3,
      title: "Online BBA",
      shortTitle: "Online BBA",
      category: "business",
      university: "Amity University",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Comprehensive Bachelor of Business Administration program designed to develop business acumen and management skills.",
      fullDescription: "The Online BBA program is a comprehensive undergraduate program designed to provide students with a strong foundation in business administration and management principles. This three-year program covers various aspects of business including marketing, finance, human resources, operations, and strategic management. Students will gain practical knowledge through case studies, projects, and industry interactions.",
      highlights: [
        "Strong foundation in business administration principles",
        "Industry-relevant curriculum with practical applications",
        "Flexible online learning format",
        "Career support and placement assistance",
        "Access to recorded and live lectures"
      ],
      rating: 4.7,
      students: "2K+",
      programStructure: [
        {
          semester: "Year 1",
          subjects: [
            { name: "Principles of Management", credits: 4 },
            { name: "Business Economics", credits: 4 },
            { name: "Financial Accounting", credits: 4 },
            { name: "Business Communication", credits: 3 },
            { name: "Business Mathematics", credits: 3 }
          ]
        },
        {
          semester: "Year 2",
          subjects: [
            { name: "Marketing Management", credits: 4 },
            { name: "Human Resource Management", credits: 4 },
            { name: "Financial Management", credits: 4 },
            { name: "Operations Management", credits: 4 }
          ]
        },
        {
          semester: "Year 3",
          subjects: [
            { name: "Strategic Management", credits: 4 },
            { name: "International Business", credits: 4 },
            { name: "Business Ethics", credits: 3 },
            { name: "Project Work", credits: 4 }
          ]
        }
      ],
      eligibility: "10+2 in any stream with minimum 50% marks from a recognized board.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 1,65,000/-",
          pro: "INR 1,65,000/-"
        },
        annualFee: {
          prime: "INR 55,000/-",
          pro: "INR 55,000/-"
        },
        semesterFee: {
          prime: "INR 27,500/-",
          pro: "INR 27,500/-"
        },
        semesters: 6,
        note: "Online learning platform access included. EMI options available."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 4,
      title: "Online MCA",
      shortTitle: "Online MCA",
      category: "technology",
      university: "Amity University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Master of Computer Applications program designed for IT professionals seeking advanced technical skills.",
      fullDescription: "The Online MCA program is designed for IT professionals and graduates who want to advance their careers in computer applications and software development. This two-year program covers advanced topics in computer science, software engineering, database management, web technologies, and emerging technologies. Students will work on real-world projects and gain hands-on experience with industry-standard tools and technologies.",
      highlights: [
        "Advanced computer applications and software development",
        "Industry-relevant curriculum with hands-on projects",
        "Expert faculty with industry experience",
        "Career support and placement assistance",
        "Access to latest technologies and tools"
      ],
      rating: 4.8,
      students: "1.5K+",
      programStructure: [
        {
          semester: "Semester-1",
          subjects: [
            { name: "Advanced Data Structures", credits: 4 },
            { name: "Database Management Systems", credits: 4 },
            { name: "Object-Oriented Programming", credits: 4 },
            { name: "Computer Networks", credits: 4 }
          ]
        },
        {
          semester: "Semester-2",
          subjects: [
            { name: "Web Technologies", credits: 4 },
            { name: "Software Engineering", credits: 4 },
            { name: "Operating Systems", credits: 4 },
            { name: "Cloud Computing", credits: 4 }
          ]
        }
      ],
      eligibility: "Bachelor's degree in any discipline with Mathematics at 10+2 level or graduation level, with minimum 50% marks from a recognized university.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 1,70,000/-",
          pro: "INR 1,70,000/-"
        },
        annualFee: {
          prime: "INR 85,000/-",
          pro: "INR 85,000/-"
        },
        semesterFee: {
          prime: "INR 42,500/-",
          pro: "INR 42,500/-"
        },
        semesters: 4,
        note: "Online learning platform access included. EMI options available."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 5,
      title: "Online BCA",
      shortTitle: "Online BCA",
      category: "technology",
      university: "Amity University",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Bachelor of Computer Applications program providing comprehensive knowledge in computer science and applications.",
      fullDescription: "The Online BCA program is a comprehensive undergraduate program designed to provide students with a strong foundation in computer science and applications. This three-year program covers programming languages, database management, web development, software engineering, and computer networks. Students will gain practical skills through hands-on projects and industry internships.",
      highlights: [
        "Strong foundation in computer science and applications",
        "Hands-on programming and development experience",
        "Industry-relevant curriculum",
        "Career support and placement assistance",
        "Access to latest technologies and development tools"
      ],
      rating: 4.7,
      students: "2.5K+",
      programStructure: [
        {
          semester: "Year 1",
          subjects: [
            { name: "Programming Fundamentals", credits: 4 },
            { name: "Data Structures", credits: 4 },
            { name: "Database Management", credits: 4 },
            { name: "Computer Networks", credits: 3 }
          ]
        },
        {
          semester: "Year 2",
          subjects: [
            { name: "Object-Oriented Programming", credits: 4 },
            { name: "Web Development", credits: 4 },
            { name: "Software Engineering", credits: 4 },
            { name: "Operating Systems", credits: 3 }
          ]
        },
        {
          semester: "Year 3",
          subjects: [
            { name: "Mobile Application Development", credits: 4 },
            { name: "Cloud Computing", credits: 4 },
            { name: "Project Work", credits: 4 }
          ]
        }
      ],
      eligibility: "10+2 in any stream with Mathematics as a subject, with minimum 50% marks from a recognized board.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 1,50,000/-",
          pro: "INR 1,50,000/-"
        },
        annualFee: {
          prime: "INR 50,000/-",
          pro: "INR 50,000/-"
        },
        semesterFee: {
          prime: "INR 25,000/-",
          pro: "INR 25,000/-"
        },
        semesters: 6,
        note: "Online learning platform access included. EMI options available."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 6,
      title: "Online M.Com",
      shortTitle: "Online M.Com",
      category: "commerce",
      university: "Amity University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Master of Commerce program designed to develop expertise in commerce, finance, and accounting.",
      fullDescription: "The Online M.Com program is designed for commerce graduates who want to advance their careers in finance, accounting, taxation, and business management. This two-year program covers advanced topics in accounting, financial management, taxation, business law, and economics. Students will gain practical knowledge through case studies and industry projects.",
      highlights: [
        "Advanced knowledge in commerce and finance",
        "Industry-relevant curriculum with practical applications",
        "Expert faculty with industry experience",
        "Career support and placement assistance",
        "Flexible online learning format"
      ],
      rating: 4.6,
      students: "1K+",
      programStructure: [
        {
          semester: "Semester-1",
          subjects: [
            { name: "Advanced Accounting", credits: 4 },
            { name: "Financial Management", credits: 4 },
            { name: "Business Economics", credits: 4 },
            { name: "Business Law", credits: 3 }
          ]
        },
        {
          semester: "Semester-2",
          subjects: [
            { name: "Taxation", credits: 4 },
            { name: "Auditing", credits: 4 },
            { name: "Corporate Finance", credits: 4 },
            { name: "Research Methods", credits: 3 }
          ]
        }
      ],
      eligibility: "Bachelor's degree in Commerce or related field with minimum 50% marks from a recognized university.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 1,20,000/-",
          pro: "INR 1,20,000/-"
        },
        annualFee: {
          prime: "INR 60,000/-",
          pro: "INR 60,000/-"
        },
        semesterFee: {
          prime: "INR 30,000/-",
          pro: "INR 30,000/-"
        },
        semesters: 4,
        note: "Online learning platform access included. EMI options available."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 7,
      title: "Online B.Com",
      shortTitle: "Online B.Com",
      category: "commerce",
      university: "Amity University",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Bachelor of Commerce program providing comprehensive knowledge in commerce, accounting, and business.",
      fullDescription: "The Online B.Com program is a comprehensive undergraduate program designed to provide students with a strong foundation in commerce, accounting, finance, and business management. This three-year program covers various aspects of commerce including financial accounting, cost accounting, taxation, business law, economics, and management principles.",
      highlights: [
        "Strong foundation in commerce and accounting",
        "Industry-relevant curriculum",
        "Flexible online learning format",
        "Career support and placement assistance",
        "Practical knowledge through case studies"
      ],
      rating: 4.7,
      students: "3K+",
      programStructure: [
        {
          semester: "Year 1",
          subjects: [
            { name: "Financial Accounting", credits: 4 },
            { name: "Business Economics", credits: 4 },
            { name: "Business Mathematics", credits: 3 },
            { name: "Business Communication", credits: 3 }
          ]
        },
        {
          semester: "Year 2",
          subjects: [
            { name: "Cost Accounting", credits: 4 },
            { name: "Taxation", credits: 4 },
            { name: "Business Law", credits: 3 },
            { name: "Management Principles", credits: 3 }
          ]
        },
        {
          semester: "Year 3",
          subjects: [
            { name: "Auditing", credits: 4 },
            { name: "Corporate Finance", credits: 4 },
            { name: "Project Work", credits: 4 }
          ]
        }
      ],
      eligibility: "10+2 in any stream with minimum 50% marks from a recognized board.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 99,000/-",
          pro: "INR 99,000/-"
        },
        annualFee: {
          prime: "INR 33,000/-",
          pro: "INR 33,000/-"
        },
        semesterFee: {
          prime: "INR 16,500/-",
          pro: "INR 16,500/-"
        },
        semesters: 6,
        note: "Online learning platform access included. EMI options available."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 8,
      title: "Online MA",
      shortTitle: "Online MA",
      category: "arts",
      university: "Amity University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Master of Arts program offering specialization in various humanities and social science disciplines.",
      fullDescription: "The Online MA program is designed for graduates who want to pursue advanced studies in humanities and social sciences. This two-year program offers specializations in various disciplines including English, History, Political Science, Sociology, and Psychology. Students will develop critical thinking, research skills, and analytical abilities through comprehensive coursework and research projects.",
      highlights: [
        "Advanced knowledge in humanities and social sciences",
        "Multiple specialization options",
        "Research-oriented curriculum",
        "Expert faculty with academic excellence",
        "Flexible online learning format"
      ],
      rating: 4.6,
      students: "800+",
      programStructure: [
        {
          semester: "Semester-1",
          subjects: [
            { name: "Research Methodology", credits: 4 },
            { name: "Core Subject 1", credits: 4 },
            { name: "Core Subject 2", credits: 4 },
            { name: "Elective 1", credits: 3 }
          ]
        },
        {
          semester: "Semester-2",
          subjects: [
            { name: "Core Subject 3", credits: 4 },
            { name: "Core Subject 4", credits: 4 },
            { name: "Elective 2", credits: 3 },
            { name: "Dissertation", credits: 4 }
          ]
        }
      ],
      eligibility: "Bachelor's degree in any discipline with minimum 50% marks from a recognized university.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 1,30,000/-",
          pro: "INR 1,30,000/-"
        },
        annualFee: {
          prime: "INR 65,000/-",
          pro: "INR 65,000/-"
        },
        semesterFee: {
          prime: "INR 32,500/-",
          pro: "INR 32,500/-"
        },
        semesters: 4,
        note: "Online learning platform access included. EMI options available."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 9,
      title: "Online MBA",
      shortTitle: "Online MBA",
      category: "business",
      university: "Manipal University Jaipur",
      duration: "2 Years",
      level: "Postgraduate",
      description: "UGC-recognized online MBA program with NAAC A++ accreditation, offering flexible learning for working professionals.",
      fullDescription: "The Online MBA program from Manipal University Jaipur is designed for working professionals who want to advance their careers without interrupting their work. This UGC-recognized program offers 13 career-focused specializations including Digital Marketing, Analytics, Supply Chain, International Business, IT and FinTech. Students can choose super or dual specialization options and benefit from Manipal University Jaipur's prestigious global alumni network.",
      highlights: [
        "UGC-recognized and NAAC A++ accredited",
        "13 career-focused specializations available",
        "Super or dual specialization options",
        "Global networking and alumni access",
        "100% online learning with campus immersion events"
      ],
      rating: 4.8,
      students: "2K+",
      programStructure: [
        {
          semester: "Semester-1",
          subjects: [
            { name: "Management Theory and Practice", credits: 4 },
            { name: "Organizational Behavior", credits: 4 },
            { name: "Business Economics", credits: 4 },
            { name: "Financial Accounting", credits: 4 }
          ]
        },
        {
          semester: "Semester-2",
          subjects: [
            { name: "Marketing Management", credits: 4 },
            { name: "Human Resource Management", credits: 4 },
            { name: "Operations Management", credits: 4 },
            { name: "Strategic Management", credits: 4 }
          ]
        }
      ],
      eligibility: "Bachelor's degree in any discipline with minimum 50% marks from a recognized university. Work experience preferred but not mandatory.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 1,75,000/-",
          pro: "INR 1,75,000/-"
        },
        annualFee: {
          prime: "INR 87,500/-",
          pro: "INR 87,500/-"
        },
        semesterFee: {
          prime: "INR 43,750/-",
          pro: "INR 43,750/-"
        },
        semesters: 4,
        note: "Online learning platform access included. EMI options available. Campus immersion events included."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 10,
      title: "Online MBA",
      shortTitle: "Online MBA",
      category: "business",
      university: "Sikkim Manipal University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "NAAC A+ accredited online MBA program from Sikkim Manipal University, established in 1995.",
      fullDescription: "The Online MBA program from Sikkim Manipal University is designed for working professionals seeking career advancement. Established in 1995 through a partnership between the Manipal Pai Foundation and the Government of Sikkim, SMU is the first Public-Private Partnership (PPP) in the region. The program is UGC-recognized, NAAC A+ accredited, and offers flexible learning options for working professionals.",
      highlights: [
        "NAAC A+ accredited and UGC-recognized",
        "First Public-Private Partnership (PPP) in the region",
        "Ranked 51st among India's Best Multidisciplinary Universities",
        "Flexible distance education mode",
        "Affordable fee structure"
      ],
      rating: 4.6,
      students: "1.5K+",
      programStructure: [
        {
          semester: "Semester-1",
          subjects: [
            { name: "Management Principles", credits: 4 },
            { name: "Business Economics", credits: 4 },
            { name: "Financial Accounting", credits: 4 },
            { name: "Marketing Management", credits: 4 }
          ]
        },
        {
          semester: "Semester-2",
          subjects: [
            { name: "Human Resource Management", credits: 4 },
            { name: "Financial Management", credits: 4 },
            { name: "Operations Management", credits: 4 },
            { name: "Strategic Management", credits: 4 }
          ]
        }
      ],
      eligibility: "Bachelor's degree in any discipline with minimum 50% marks from a recognized university.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 1,10,000/-",
          pro: "INR 1,10,000/-"
        },
        annualFee: {
          prime: "INR 55,000/-",
          pro: "INR 55,000/-"
        },
        semesterFee: {
          prime: "INR 27,500/-",
          pro: "INR 27,500/-"
        },
        semesters: 4,
        note: "Distance education mode with flexible learning. EMI options available."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    },
    {
      id: 11,
      title: "Online MBA",
      shortTitle: "Online MBA",
      category: "business",
      university: "Uttaranchal University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Affordable online MBA program from Uttaranchal University, NAAC A+ accredited.",
      fullDescription: "The Online MBA program from Uttaranchal University is designed for working professionals seeking quality education at an affordable price. Established in 2013, Uttaranchal University is recognized by NAAC as an esteemed institution offering quality higher education through affordable online programs. The program is UGC and AICTE recognized, making it a valuable choice for career advancement.",
      highlights: [
        "NAAC A+ accredited and UGC-recognized",
        "Affordable fee structure",
        "AICTE approved programs",
        "Quality education with flexible learning",
        "Strong placement support"
      ],
      rating: 4.7,
      students: "1K+",
      programStructure: [
        {
          semester: "Semester-1",
          subjects: [
            { name: "Management Principles", credits: 4 },
            { name: "Business Economics", credits: 4 },
            { name: "Financial Accounting", credits: 4 },
            { name: "Organizational Behavior", credits: 4 }
          ]
        },
        {
          semester: "Semester-2",
          subjects: [
            { name: "Marketing Management", credits: 4 },
            { name: "Human Resource Management", credits: 4 },
            { name: "Financial Management", credits: 4 },
            { name: "Operations Management", credits: 4 }
          ]
        }
      ],
      eligibility: "Bachelor's degree in any discipline with minimum 50% marks from a recognized university.",
      feeStructure: {
        admissionFee: "INR 1,200/-",
        fullFee: {
          prime: "INR 98,000/-",
          pro: "INR 98,000/-"
        },
        annualFee: {
          prime: "INR 49,000/-",
          pro: "INR 49,000/-"
        },
        semesterFee: {
          prime: "INR 24,500/-",
          pro: "INR 24,500/-"
        },
        semesters: 4,
        note: "Affordable online programs with flexible learning. EMI options available."
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6lVIJnKO03mSTx3SfYGqBcqmCZ5dyqcvbg&s"
    }
  ];

  const courseId = parseInt(params.id as string);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-[#0f4c75] dark:text-[#1e7aa8] hover:underline">
            Go back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-student-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          university: course.university,
          course: course.title,
          source: `Course Page - ${course.title}`
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert("Thank you for your interest! We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: course?.university || "",
          course: course?.title || "",
          message: ""
        });
      } else {
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 md:py-20 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#0f4c75]/15 to-[#dc2626]/15 rounded-full blur-[100px] -top-[200px] -right-[200px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className={`text-center mb-8 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
              {course.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="px-4 py-2 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 rounded-lg text-[#0f4c75] dark:text-[#1e7aa8] font-semibold">
                Duration: {course.duration}
              </div>
              <div className="px-4 py-2 bg-[#dc2626]/10 dark:bg-[#ea580c]/10 rounded-lg text-[#dc2626] dark:text-[#ea580c] font-semibold">
                {course.university}
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={() => {
                  const formSection = document.getElementById('course-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'structure'
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Program Structure
            </button>
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'eligibility'
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Eligibility
            </button>
            <button
              onClick={() => setActiveTab('fees')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'fees'
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Fee Structure
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {activeTab === 'overview' && (
            <div className={`max-w-4xl mx-auto transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                <p>{course.fullDescription}</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                  Program at a glance
                </h3>
                <ol className="space-y-3">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#0f4c75] dark:text-[#1e7aa8] font-bold text-xl">{index + 1}.</span>
                      <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'structure' && (
            <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-8">
                {course.programStructure.map((semester, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white px-6 py-4">
                      <h3 className="text-xl font-bold">{semester.semester}</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-slate-50 dark:bg-slate-700">
                          <tr>
                            <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Subjects</th>
                            <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {semester.subjects.map((subject, idx) => (
                            <tr
                              key={idx}
                              className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                            >
                              <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{subject.name}</td>
                              <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{subject.credits}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div className={`max-w-4xl mx-auto transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                  Eligibility Criteria
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {course.eligibility}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'fees' && (
            <div className={`max-w-5xl mx-auto transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  Fee Structure
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Students have the following options for paying the program fee:
                </p>
              </div>

              <div className="space-y-8">
                {/* Option 1: Full Fee */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Option 1: Full fee payment</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Programs</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Admission Processing Fee</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Full Fee Payment (Prime)</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Full Fee Payment (Pro)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200 dark:border-slate-700">
                          <td className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-50">{course.shortTitle}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.admissionFee}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.fullFee.prime}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.fullFee.pro}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Option 2: Annual */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Option 2: Annual payment</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Programs</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Admission Processing Fee</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Program Duration (Years)</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Program fee per Year (Prime)</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Program fee per Year (Pro)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200 dark:border-slate-700">
                          <td className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-50">{course.shortTitle}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.admissionFee}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.duration.split(' ')[0]}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.annualFee.prime}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.annualFee.pro}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Option 3: Semester */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white px-6 py-4">
                    <h4 className="text-xl font-bold">Option 3: Semester wise fee payment</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 dark:bg-slate-700">
                        <tr>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Programs</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Admission Processing Fee</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">No. of semesters</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Program fee per semester (Prime)</th>
                          <th className="px-6 py-3 text-left font-semibold text-slate-900 dark:text-slate-50">Program fee per semester (Pro)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200 dark:border-slate-700">
                          <td className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-50">{course.shortTitle}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.admissionFee}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.semesters}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.semesterFee.prime}</td>
                          <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{course.feeStructure.semesterFee.pro}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {course.feeStructure.note}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Request Call Back Form */}
      <section id="course-form" className="py-24 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 text-center">
              Request a Call Back
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                  placeholder="+91 Phone Number"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all resize-none"
                  placeholder="Message (Optional)"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Submitting..." : "Request Call Back"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

