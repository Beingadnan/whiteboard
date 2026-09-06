"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { courseImageForTitle, courseImages } from "../../../lib/courseImages";
import { toast } from "react-toastify";

export default function CourseDetail() {
  const params = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "fees" | "eligibility">("overview");
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
      slug: "mba-amity-university",
      title: "Master of Business Administration (MBA)",
      shortTitle: "Online MBA",
      category: "Management",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "2 Years",
      level: "Postgraduate",
      mode: "100% Online (Live & Recorded)",
      description: "Premier MBA program designed to develop business leaders with global perspective, strategic thinking, and dual specialization options.",
      fullDescription: "The Online MBA program from Amity University Online is accredited by UGC-DEB and NAAC A+, ranked #1 in India by QS World University Rankings. Over 2 years, students master strategic management, corporate finance, marketing analytics, and operations. The flexible format includes weekend live sessions with international faculty, recorded lectures on a world-class LMS, and networking with over 50,000+ peers worldwide.",
      highlights: [
        "QS Ranked #1 Online MBA in India & #37 Globally",
        "WES Accredited in US & Canada for global career mobility",
        "Over 12 in-demand dual specializations to tailor your career",
        "300+ Fortune 500 corporate recruiters and virtual job fairs"
      ],
      careerRoles: ["Product Manager", "Management Consultant", "Finance Director", "Marketing Head", "Operations Lead"],
      rating: 4.9,
      reviewsCount: 1420,
      students: "15,000+",
      programStructure: [
        {
          semester: "Semester 1",
          subjects: [
            { name: "Management Theory & Practice", credits: 4 },
            { name: "Organizational Behavior", credits: 4 },
            { name: "Business Economics & Decision Making", credits: 4 },
            { name: "Corporate Communication & Strategy", credits: 4 },
            { name: "Information Systems for Managers", credits: 4 }
          ]
        },
        {
          semester: "Semester 2",
          subjects: [
            { name: "Marketing Management", credits: 4 },
            { name: "Financial Accounting & Analysis", credits: 4 },
            { name: "Human Resource Management", credits: 4 },
            { name: "Strategic Management", credits: 4 },
            { name: "Business Analytics & Statistics", credits: 4 }
          ]
        },
        {
          semester: "Semester 3",
          subjects: [
            { name: "Brand Management & Strategy", credits: 4 },
            { name: "Consumer Behavior & Market Research", credits: 4 },
            { name: "Corporate Finance & Risk Management", credits: 4 },
            { name: "Supply Chain & Operations Strategy", credits: 4 }
          ]
        },
        {
          semester: "Semester 4",
          subjects: [
            { name: "Global Business Strategy", credits: 4 },
            { name: "Digital Transformation & Innovation", credits: 4 },
            { name: "Business Ethics & Governance", credits: 4 },
            { name: "Industry Capstone Master's Project", credits: 6 }
          ]
        }
      ],
      eligibility: "Bachelor's Degree (10+2+3) in any discipline from any recognized University with a minimum of 50% marks (45% for reserved category). Working experience is an added advantage but not mandatory.",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹1,99,000", pro: "₹1,99,000" },
        annualFee: { prime: "₹99,500/year", pro: "₹99,500/year" },
        semesterFee: { prime: "₹49,750/sem", pro: "₹49,750/sem" },
        semesters: 4,
        note: "0% interest No-Cost EMI starts at ₹4,150/month with leading banking partners. Examination fee: ₹600 per subject."
      },
      image: courseImageForTitle("Master of Business Administration (MBA)")
    },
    {
      id: 2,
      slug: "online-mba-manipal-university-jaipur",
      title: "Online MBA (Manipal University Jaipur)",
      shortTitle: "Online MBA",
      category: "Management",
      university: "Manipal University Jaipur",
      universitySlug: "manipal-university-jaipur",
      duration: "2 Years",
      level: "Postgraduate",
      mode: "100% Online (LMS & Coursera)",
      description: "NAAC A++ accredited online MBA with 13 specialized electives, Coursera for Campus certifications, and global alumni network.",
      fullDescription: "Manipal University Jaipur Online MBA is designed for ambitious professionals. It blends academic rigor with practical case studies from Harvard and Stanford business reviews. Learners receive complimentary access to 10,000+ Coursera courses, faculty-led live discussions, and access to Manipal's prestigious global alumni network.",
      highlights: [
        "Highest NAAC A++ accreditation with unmatched prestige",
        "13 Career-oriented specializations including FinTech & Analytics",
        "Free Coursera for Campus professional certificates",
        "Dedicated placement cell with mock interviews and live recruiters"
      ],
      careerRoles: ["Business Development Manager", "Strategy Consultant", "Data & Analytics Manager", "Investment Banking Associate"],
      rating: 4.8,
      reviewsCount: 1250,
      students: "12,000+",
      programStructure: [
        {
          semester: "Semester 1",
          subjects: [
            { name: "Management Process & Organizational Behavior", credits: 4 },
            { name: "Managerial Economics", credits: 4 },
            { name: "Accounting for Managers", credits: 4 },
            { name: "Business Statistics & Analytics", credits: 4 }
          ]
        },
        {
          semester: "Semester 2",
          subjects: [
            { name: "Financial Management", credits: 4 },
            { name: "Marketing Management", credits: 4 },
            { name: "Human Resource Management", credits: 4 },
            { name: "Operations & Supply Chain", credits: 4 }
          ]
        },
        {
          semester: "Semester 3 & 4",
          subjects: [
            { name: "Elective Specialization Subjects (4 Modules)", credits: 16 },
            { name: "Strategic Management & Innovation", credits: 4 },
            { name: "Live Industry Capstone Project", credits: 6 }
          ]
        }
      ],
      eligibility: "Graduate degree (10+2+3) in any discipline from a recognized University with at least 50% aggregate marks (45% for reserved category).",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹1,75,000", pro: "₹1,75,000" },
        annualFee: { prime: "₹87,500/year", pro: "₹87,500/year" },
        semesterFee: { prime: "₹43,750/sem", pro: "₹43,750/sem" },
        semesters: 4,
        note: "0% interest No-Cost EMI starts at ₹3,650/month with zero processing fees."
      },
      image: courseImageForTitle("Online MBA")
    },
    {
      id: 3,
      slug: "online-mba-sikkim-manipal-university",
      title: "Online MBA (Sikkim Manipal University)",
      shortTitle: "Online MBA (SMU)",
      category: "Management",
      university: "Sikkim Manipal University",
      universitySlug: "sikkim-manipal-university",
      duration: "2 Years",
      level: "Postgraduate",
      mode: "100% Online (UGC Entitled)",
      description: "Established distance & online MBA program with over 28 years of academic heritage and affordable semester fee plans.",
      fullDescription: "Sikkim Manipal University's Online MBA has empowered over 500,000 alumni across India and abroad. Designed for working executives, this program offers affordable semester installment schedules, self-paced recorded lessons, and digital study materials.",
      highlights: [
        "UGC-DEB and NAAC A+ accredited program",
        "Affordable semester fee of just ₹27,500",
        "Large 5 Lakh+ global alumni network",
        "AI proctored weekend online examinations"
      ],
      careerRoles: ["Operations Manager", "Branch Manager", "Marketing Executive", "Finance Executive"],
      rating: 4.7,
      reviewsCount: 980,
      students: "18,000+",
      programStructure: [
        {
          semester: "Semester 1 & 2",
          subjects: [
            { name: "Management Principles", credits: 4 },
            { name: "Financial Accounting", credits: 4 },
            { name: "Marketing Essentials", credits: 4 },
            { name: "Quantitative Techniques", credits: 4 }
          ]
        },
        {
          semester: "Semester 3 & 4",
          subjects: [
            { name: "Specialization Electives", credits: 16 },
            { name: "Project Dissertation", credits: 6 }
          ]
        }
      ],
      eligibility: "Graduation in any stream from recognized university with minimum 50% aggregate marks.",
      feeStructure: {
        admissionFee: "₹500",
        fullFee: { prime: "₹1,10,000", pro: "₹1,10,000" },
        annualFee: { prime: "₹55,000/year", pro: "₹55,000/year" },
        semesterFee: { prime: "₹27,500/sem", pro: "₹27,500/sem" },
        semesters: 4,
        note: "Pocket-friendly installment options available."
      },
      image: courseImageForTitle("Online MBA")
    },
    {
      id: 4,
      slug: "online-mba-uttaranchal-university",
      title: "Online MBA (Uttaranchal University)",
      shortTitle: "Online MBA (UU)",
      category: "Management",
      university: "Uttaranchal University",
      universitySlug: "uttaranchal-university",
      duration: "2 Years",
      level: "Postgraduate",
      mode: "100% Online (AICTE Approved)",
      description: "Cost-effective online MBA designed for ambitious professionals with AICTE approval and comprehensive digital learning materials.",
      fullDescription: "Uttaranchal University Online MBA offers recognized management training with NAAC A+ standards, covering Finance, Marketing, HR, and Information Technology.",
      highlights: ["AICTE & UGC Recognized", "NAAC A+ Accreditation", "Affordable Fee ₹24,500/Sem", "Placement Assistance"],
      careerRoles: ["HR Executive", "Finance Officer", "Corporate Planner", "Operations Manager"],
      rating: 4.7,
      reviewsCount: 820,
      students: "8,500+",
      programStructure: [
        {
          semester: "Semester 1 to 4",
          subjects: [
            { name: "Core Business Principles", credits: 16 },
            { name: "Specialized Concentration Subjects", credits: 16 },
            { name: "Final Capstone Project", credits: 6 }
          ]
        }
      ],
      eligibility: "Graduation with minimum 50% marks from a recognized university.",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹1,40,000", pro: "₹1,40,000" },
        annualFee: { prime: "₹70,000/year", pro: "₹70,000/year" },
        semesterFee: { prime: "₹24,500/sem", pro: "₹24,500/sem" },
        semesters: 4,
        note: "Special one-time payment discount available at ₹94,000 total."
      },
      image: courseImageForTitle("Online MBA")
    },
    {
      id: 5,
      slug: "online-bba-amity-university",
      title: "Bachelor of Business Administration (BBA)",
      shortTitle: "Online BBA",
      category: "Management",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "3 Years",
      level: "Undergraduate",
      mode: "100% Online (UGC Approved)",
      description: "Comprehensive 3-year undergraduate degree in modern business administration, finance, marketing, and entrepreneurship.",
      fullDescription: "Amity Online BBA builds strong management fundamentals for high school graduates and working professionals. Learn marketing fundamentals, micro & macroeconomics, business law, and data analytics with flexible online modules.",
      highlights: ["Industry Oriented Curriculum", "Live Interactive Case Studies", "Top B-School Faculty", "0% No-Cost EMI"],
      careerRoles: ["Business Analyst", "Marketing Coordinator", "Operations Associate", "Sales Manager"],
      rating: 4.8,
      reviewsCount: 1100,
      students: "9,000+",
      programStructure: [
        {
          semester: "Year 1",
          subjects: [
            { name: "Principles of Management", credits: 4 },
            { name: "Business Economics", credits: 4 },
            { name: "Financial Accounting", credits: 4 },
            { name: "Business Communication", credits: 3 }
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
            { name: "Entrepreneurship & Innovation", credits: 4 },
            { name: "Final Year Capstone Project", credits: 6 }
          ]
        }
      ],
      eligibility: "10+2 (Higher Secondary) in any stream from a recognized educational board (CBSE, ICSE, State Board) with minimum 50% aggregate marks.",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹1,65,000", pro: "₹1,65,000" },
        annualFee: { prime: "₹55,000/year", pro: "₹55,000/year" },
        semesterFee: { prime: "₹27,500/sem", pro: "₹27,500/sem" },
        semesters: 6,
        note: "0% interest EMI available from ₹2,300/month."
      },
      image: courseImageForTitle("Online BBA")
    },
    {
      id: 6,
      slug: "online-mca-amity-university",
      title: "Master of Computer Applications (MCA)",
      shortTitle: "Online MCA",
      category: "Computer & IT",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "2 Years",
      level: "Postgraduate",
      mode: "100% Online with Virtual Labs",
      description: "Advanced computing program covering Cloud Architecture, AI & ML, Full-Stack Software Engineering, and Cyber Security.",
      fullDescription: "Amity's Online MCA equips graduates with modern enterprise software development skills. Featuring curriculum curated with industry leaders like TCS iON and HCLTech, students master Cloud Infrastructure, Python, Advanced Data Structures, and Machine Learning.",
      highlights: [
        "Specializations in AI, Machine Learning, & Cloud Computing",
        "Virtual coding environments and live software projects",
        "300+ Tech hiring partners with dedicated coding mock interviews",
        "UGC-DEB recognized degree equivalent to on-campus MCA"
      ],
      careerRoles: ["Full Stack Developer", "Cloud Architect", "Data Engineer", "Software Engineer", "Systems Architect"],
      rating: 4.9,
      reviewsCount: 1320,
      students: "11,000+",
      programStructure: [
        {
          semester: "Semester 1",
          subjects: [
            { name: "Advanced Data Structures & Algorithms", credits: 4 },
            { name: "Relational Database Management & SQL", credits: 4 },
            { name: "Object-Oriented Programming (Java/Python)", credits: 4 },
            { name: "Computer Networks & Architecture", credits: 4 }
          ]
        },
        {
          semester: "Semester 2",
          subjects: [
            { name: "Cloud Computing & DevOps", credits: 4 },
            { name: "Full Stack Web Engineering", credits: 4 },
            { name: "Software Testing & Quality Assurance", credits: 4 },
            { name: "AI & Machine Learning Foundations", credits: 4 }
          ]
        },
        {
          semester: "Semester 3 & 4",
          subjects: [
            { name: "Advanced Electives (Cybersecurity / AI / Data Analytics)", credits: 16 },
            { name: "Industry Live Project Dissertation", credits: 8 }
          ]
        }
      ],
      eligibility: "Bachelor's Degree in BCA / Computer Science / B.Sc IT or any Bachelor's degree with Mathematics at 10+2 level or graduation level with minimum 50% marks.",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹1,70,000", pro: "₹1,70,000" },
        annualFee: { prime: "₹85,000/year", pro: "₹85,000/year" },
        semesterFee: { prime: "₹42,500/sem", pro: "₹42,500/sem" },
        semesters: 4,
        note: "0% interest EMI starts at ₹3,540/month."
      },
      image: courseImageForTitle("Online MCA")
    },
    {
      id: 7,
      slug: "online-bca-amity-university",
      title: "Bachelor of Computer Applications (BCA)",
      shortTitle: "Online BCA",
      category: "Computer & IT",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "3 Years",
      level: "Undergraduate",
      mode: "100% Online (Hands-on Labs)",
      description: "Comprehensive computing degree teaching Python, Java, Web Development, Data Structures, and Cloud Computing.",
      fullDescription: "The Online BCA program is a 3-year undergraduate course offering rigorous foundations in coding, database design, and web architecture. Perfect for aspiring software developers seeking flexible, affordable education.",
      highlights: ["Hands-on Python, Java, and Web Development", "Cloud Security & Data Analytics Electives", "Internship & Placement Assistance", "UGC Recognized"],
      careerRoles: ["Junior Software Developer", "Web Developer", "Database Administrator", "Tech Support Engineer"],
      rating: 4.7,
      reviewsCount: 1450,
      students: "14,000+",
      programStructure: [
        {
          semester: "Year 1",
          subjects: [
            { name: "Programming in C & C++", credits: 4 },
            { name: "Data Structures & Algorithms", credits: 4 },
            { name: "Computer Architecture", credits: 4 },
            { name: "Discrete Mathematics", credits: 3 }
          ]
        },
        {
          semester: "Year 2",
          subjects: [
            { name: "Java & Object Oriented Programming", credits: 4 },
            { name: "Database Management Systems (MySQL)", credits: 4 },
            { name: "Web Technologies (HTML, CSS, JS)", credits: 4 },
            { name: "Operating Systems", credits: 4 }
          ]
        },
        {
          semester: "Year 3",
          subjects: [
            { name: "Python for Data Science", credits: 4 },
            { name: "Cloud Computing Fundamentals", credits: 4 },
            { name: "Software Engineering Principles", credits: 4 },
            { name: "Major Project Development", credits: 6 }
          ]
        }
      ],
      eligibility: "10+2 from a recognized board in any stream with minimum 50% aggregate marks. Mathematics or Computer Science background is preferred.",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹1,50,000", pro: "₹1,50,000" },
        annualFee: { prime: "₹50,000/year", pro: "₹50,000/year" },
        semesterFee: { prime: "₹25,000/sem", pro: "₹25,000/sem" },
        semesters: 6,
        note: "0% interest EMI starts at ₹2,080/month."
      },
      image: courseImageForTitle("Online BCA")
    },
    {
      id: 8,
      slug: "online-mcom-amity-university",
      title: "Master of Commerce (M.Com)",
      shortTitle: "Online M.Com",
      category: "Commerce",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "2 Years",
      level: "Postgraduate",
      mode: "100% Online (UGC Entitled)",
      description: "Specialized postgraduate program in Corporate Finance, International Taxation, Financial Reporting, and Banking Operations.",
      fullDescription: "Amity Online M.Com provides in-depth mastery over accounting standards (IFRS/Ind AS), financial risk analysis, taxation laws, and investment strategies.",
      highlights: ["Advanced Accounting & IFRS", "Corporate Taxation & Financial Modeling", "UGC Recognized for UGC-NET & Ph.D. eligibility"],
      careerRoles: ["Senior Financial Analyst", "Tax Consultant", "Accounts Manager", "Auditor"],
      rating: 4.6,
      reviewsCount: 650,
      students: "6,000+",
      programStructure: [
        {
          semester: "Semester 1 to 4",
          subjects: [
            { name: "Advanced Financial Accounting", credits: 4 },
            { name: "Direct & Indirect Tax Laws", credits: 4 },
            { name: "Corporate Financial Analysis", credits: 4 },
            { name: "Research Methodology & Project", credits: 6 }
          ]
        }
      ],
      eligibility: "Bachelor's Degree in Commerce (B.Com / BBA / Economics) with minimum 50% aggregate marks from a recognized university.",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹1,20,000", pro: "₹1,20,000" },
        annualFee: { prime: "₹60,000/year", pro: "₹60,000/year" },
        semesterFee: { prime: "₹30,000/sem", pro: "₹30,000/sem" },
        semesters: 4,
        note: "Flexible semester payment schedules available."
      },
      image: courseImageForTitle("Online M.Com")
    },
    {
      id: 9,
      slug: "online-bcom-amity-university",
      title: "Bachelor of Commerce (B.Com)",
      shortTitle: "Online B.Com",
      category: "Commerce",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "3 Years",
      level: "Undergraduate",
      mode: "100% Online (UGC Approved)",
      description: "Rigorous 3-year commerce education covering financial accounting, auditing, corporate governance, and digital commerce.",
      fullDescription: "Amity Online B.Com gives students deep foundational knowledge in business arithmetic, commercial law, corporate financial management, and taxation.",
      highlights: ["ACCA Aligned Curriculum Options", "Affordable Fee under ₹1 Lakh total", "Flexible Online Examinations", "Recognized Globally"],
      careerRoles: ["Accountant", "Audit Assistant", "Financial Analyst", "Tax Consultant"],
      rating: 4.7,
      reviewsCount: 1280,
      students: "12,000+",
      programStructure: [
        {
          semester: "Year 1 to 3",
          subjects: [
            { name: "Financial Accounting & Reporting", credits: 12 },
            { name: "Business Law & Company Law", credits: 8 },
            { name: "Income Tax & GST", credits: 8 },
            { name: "Auditing & Corporate Governance", credits: 8 }
          ]
        }
      ],
      eligibility: "10+2 from a recognized board with minimum 50% aggregate marks (Commerce/Science stream preferred).",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹99,000", pro: "₹99,000" },
        annualFee: { prime: "₹33,000/year", pro: "₹33,000/year" },
        semesterFee: { prime: "₹16,500/sem", pro: "₹16,500/sem" },
        semesters: 6,
        note: "0% interest EMI starts at ₹1,375/month."
      },
      image: courseImageForTitle("Online B.Com")
    },
    {
      id: 10,
      slug: "online-ba-amity-university",
      title: "Bachelor of Arts (BA)",
      shortTitle: "Online BA",
      category: "Humanities",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "3 Years",
      level: "Undergraduate",
      mode: "100% Online (UGC Entitled)",
      description: "Interdisciplinary bachelor's degree in humanities, political science, sociology, and English literature.",
      fullDescription: "The Online BA program offers a flexible foundation in humanities, making it an excellent choice for students preparing for civil services and government competitive exams.",
      highlights: ["Ideal Foundation for UPSC / State PSC", "Self-Paced Study with Digital LMS", "Affordable ₹16,500/Sem", "UGC-DEB Approved"],
      careerRoles: ["Content Writer", "Civil Services Aspirant", "Public Relations Officer", "Social Worker"],
      rating: 4.6,
      reviewsCount: 750,
      students: "7,000+",
      programStructure: [
        {
          semester: "Year 1 to 3",
          subjects: [
            { name: "English Literature & Communication", credits: 12 },
            { name: "Political Science & Indian Polity", credits: 12 },
            { name: "Sociology & Social Thought", credits: 12 },
            { name: "History & Cultural Heritage", credits: 12 }
          ]
        }
      ],
      eligibility: "10+2 in any stream with minimum 50% marks from a recognized board.",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹95,000", pro: "₹95,000" },
        annualFee: { prime: "₹31,600/year", pro: "₹31,600/year" },
        semesterFee: { prime: "₹16,500/sem", pro: "₹16,500/sem" },
        semesters: 6,
        note: "EMI starts from ₹1,320/month."
      },
      image: courseImageForTitle("Online BA")
    },
    {
      id: 11,
      slug: "online-ma-amity-university",
      title: "Master of Arts (MA)",
      shortTitle: "Online MA",
      category: "Humanities",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "2 Years",
      level: "Postgraduate",
      mode: "100% Online (UGC Approved)",
      description: "Advanced master's degree in humanities with specializations in English, Sociology, and Public Administration.",
      fullDescription: "Amity Online MA is structured for students seeking higher research credentials, academic careers, or specialization in literature, sociology, and governance.",
      highlights: ["Specializations in English & Sociology", "UGC-NET & Higher Education Eligible", "Comprehensive e-Library Access", "UGC Entitled"],
      careerRoles: ["Lecturer / Academician", "Editorial Lead", "Policy Analyst", "NGO Project Manager"],
      rating: 4.6,
      reviewsCount: 680,
      students: "5,500+",
      programStructure: [
        {
          semester: "Semester 1 to 4",
          subjects: [
            { name: "Literary Theory & Criticism", credits: 8 },
            { name: "Sociological Theories & Research", credits: 8 },
            { name: "Public Policy & Administration", credits: 8 },
            { name: "Master's Thesis Project", credits: 6 }
          ]
        }
      ],
      eligibility: "Bachelor's Degree in any discipline with minimum 50% marks from a recognized university.",
      feeStructure: {
        admissionFee: "₹1,200",
        fullFee: { prime: "₹1,30,000", pro: "₹1,30,000" },
        annualFee: { prime: "₹65,000/year", pro: "₹65,000/year" },
        semesterFee: { prime: "₹32,500/sem", pro: "₹32,500/sem" },
        semesters: 4,
        note: "0% interest EMI options available."
      },
      image: courseImageForTitle("Online MA")
    }
  ];

  const idParam = params.id as string;
  const courseId = parseInt(idParam);
  const course = useMemo(
    () => courses.find(c => c.slug === idParam || c.id === courseId),
    [idParam, courseId]
  );
  const hasInitialized = useRef<string | null>(null);

  useEffect(() => {
    if (course && hasInitialized.current !== idParam) {
      setFormData(prev => ({
        ...prev,
        university: course.university,
        course: course.title
      }));
      hasInitialized.current = idParam;
    }
  }, [idParam, course]);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-6">
        <div className="text-center max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="text-4xl mb-4">📚</div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Course Not Found</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">The course you are looking for might have been moved or updated.</p>
          <Link href="/courses" className="inline-block px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl text-sm shadow-md">
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          university: course.university,
          course: course.title,
          source: `Course Page - ${course.title}`
        })
      });

      const data = await response.json();
      if (data.success) {
        toast.success("🎉 Consultation booked! Our advisor will contact you shortly.", { icon: false });
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: course?.university || "",
          course: course?.title || "",
          message: ""
        });
      } else {
        toast.error("❌ Something went wrong. Please try again.", { icon: false });
      }
    } catch {
      toast.error("❌ Submission failed. Please try again.", { icon: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f4c75] selection:text-white">
      {/* Course Hero Banner */}
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0f4c75]/10 to-[#dc2626]/10 blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className={`lg:col-span-8 space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Link href="/courses" className="text-xs font-semibold text-[#0f4c75] dark:text-[#38bdf8] hover:underline">
                  ← Back to Courses
                </Link>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                  {course.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                  ✓ UGC-DEB Approved
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {course.title}
              </h1>

              <div className="flex items-center gap-3 text-sm">
                <span className="font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                  Offered by {course.university}
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-amber-500 font-bold">★ {course.rating} ({course.reviewsCount} reviews)</span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {course.description}
              </p>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="text-base font-bold text-[#0f4c75] dark:text-[#38bdf8]">{course.duration}</div>
                  <div className="text-[11px] text-slate-500">Duration</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="text-base font-bold text-slate-900 dark:text-white">{course.level}</div>
                  <div className="text-[11px] text-slate-500">Program Level</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="text-base font-bold text-[#dc2626] dark:text-rose-400">100% Online</div>
                  <div className="text-[11px] text-slate-500">Study Mode</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">0% EMI</div>
                  <div className="text-[11px] text-slate-500">Financial Aid</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById("course-lead-form");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:opacity-95 transition-all"
                >
                  Apply & Talk to Counselor
                </button>
                <a
                  href={`https://wa.me/919335512881?text=Hi%2C%20I%20want%20to%20know%20the%20complete%20syllabus%20and%20fee%20structure%20for%20${encodeURIComponent(course.title)}%20at%20${encodeURIComponent(course.university)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:bg-emerald-700 transition-all flex items-center gap-2"
                >
                  <span>💬 Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Course Form Box */}
            <div id="course-lead-form" className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Download Brochure & Fees
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Get full syllabus, fee installment breakdown, and career guidance.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name *"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone (+91) *"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:opacity-95 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Course Brochure"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {[
              { id: "overview", label: "📖 Overview & Career Scope" },
              { id: "curriculum", label: "📑 Syllabus & Curriculum" },
              { id: "fees", label: "💰 Fee Structure & EMI" },
              { id: "eligibility", label: "🎓 Eligibility & Criteria" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0f4c75] text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Contents */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab 1: Overview & Career Scope */}
        {activeTab === "overview" && (
          <div className="space-y-10 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                About the Program
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {course.fullDescription}
              </p>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                Key Learning Outcomes & Program Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Career Roles */}
            {course.careerRoles && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Target Career Pathways & Job Roles
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Graduates of this program typically secure high-impact roles in top corporations
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {course.careerRoles.map((role, ri) => (
                    <span
                      key={ri}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 text-[#0f4c75] dark:text-[#38bdf8] text-xs sm:text-sm font-semibold rounded-xl border border-blue-200/50 dark:border-slate-700"
                    >
                      💼 {role}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Curriculum & Syllabus */}
        {activeTab === "curriculum" && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Detailed Course Curriculum
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Industry-aligned semester subjects, credits, and practical modules
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.programStructure.map((sem, si) => (
                <div
                  key={si}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
                    <h3 className="text-base font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                      {sem.semester}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">
                      {sem.subjects.length} Subjects
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {sem.subjects.map((sub, sidx) => (
                      <li key={sidx} className="flex items-center justify-between text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="font-medium">{sub.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                          {sub.credits} Credits
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Fee Structure & EMI */}
        {activeTab === "fees" && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Fee Structure & Payment Options
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Transparent pricing with no hidden charges. All fees in Indian Rupees (INR).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Option 1: Full Payment */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/60 text-[#0f4c75] dark:text-[#38bdf8] text-xs font-bold rounded-md">
                    Option 1
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3">
                    One-Time Full Payment
                  </h3>
                  <div className="text-2xl font-black text-slate-900 dark:text-white mt-2">
                    {course.feeStructure.fullFee.prime}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">One-time payment upfront with special discounted pricing.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  Admission Fee: {course.feeStructure.admissionFee}
                </div>
              </div>

              {/* Option 2: Annual Payment */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-[#0f4c75] dark:border-[#38bdf8] shadow-md flex flex-col justify-between relative">
                <span className="absolute -top-3 right-4 px-2 py-0.5 bg-[#0f4c75] text-white text-[10px] font-bold rounded-full">
                  Recommended
                </span>
                <div>
                  <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-md">
                    Option 2
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3">
                    Annual Installments
                  </h3>
                  <div className="text-2xl font-black text-[#0f4c75] dark:text-[#38bdf8] mt-2">
                    {course.feeStructure.annualFee.prime}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Pay per academic year with easy installments.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  Admission Fee: {course.feeStructure.admissionFee}
                </div>
              </div>

              {/* Option 3: Semester Wise */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-2.5 py-1 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-md">
                    Option 3
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3">
                    Semester-Wise Fee
                  </h3>
                  <div className="text-2xl font-black text-slate-900 dark:text-white mt-2">
                    {course.feeStructure.semesterFee.prime}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Pay before each semester begins ({course.feeStructure.semesters} total semesters).</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  Admission Fee: {course.feeStructure.admissionFee}
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              💡 <strong>Fee Note & EMI:</strong> {course.feeStructure.note}
            </div>
          </div>
        )}

        {/* Tab 4: Eligibility & Criteria */}
        {activeTab === "eligibility" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Eligibility Criteria
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {course.eligibility}
              </p>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                Documents Required for Digital Admission
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">✓ Class 10th Marksheet & Passing Certificate</li>
                <li className="flex items-center gap-2">✓ Class 12th Marksheet & Passing Certificate</li>
                <li className="flex items-center gap-2">✓ Graduation Marksheet & Degree Certificate (for PG programs)</li>
                <li className="flex items-center gap-2">✓ Government Photo Identity Proof (Aadhaar / Passport / Voter ID)</li>
                <li className="flex items-center gap-2">✓ Recent Passport Size Colored Photograph</li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
