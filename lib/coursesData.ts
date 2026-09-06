import { courseImages, courseImageForTitle } from "./courseImages";

export interface UniversityCourseOffering {
  university: string;
  universitySlug: string;
  universityShortName: string;
  courseSlug: string;
  courseTitle: string;
  duration: string;
  mode: string;
  naacGrade: string;
  approvals: string[];
  totalFee: string;
  semesterFee: string;
  emiStarts: string;
  rating: number;
  reviewsCount: number;
  image: string;
  highlights: string[];
  specializations?: string[];
}

export interface DegreeProgram {
  slug: string;
  aliases: string[];
  title: string;
  shortTitle: string;
  degreeType: "Postgraduate" | "Undergraduate";
  category: "business" | "technology" | "commerce" | "arts";
  categoryLabel: string;
  duration: string;
  mode: string;
  tagline: string;
  description: string;
  fullDescription: string;
  averageSalary: string;
  careerRoles: string[];
  eligibility: string;
  image: string;
  curriculumSemesters: {
    semester: string;
    subjects: string[];
  }[];
  specializations: string[];
  universities: UniversityCourseOffering[];
  faqs: { question: string; answer: string }[];
}

export interface CourseDetailItem {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  category: "business" | "technology" | "commerce" | "arts";
  categoryLabel: string;
  degreeSlug: string;
  university: string;
  universitySlug: string;
  universityShortName: string;
  duration: string;
  level: "Postgraduate" | "Undergraduate";
  mode: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  careerRoles: string[];
  rating: number;
  reviewsCount: number;
  students: string;
  fee: string;
  semesterFee: string;
  emi: string;
  image: string;
  tag: string;
  programStructure: {
    semester: string;
    subjects: { name: string; credits?: number }[];
  }[];
  eligibility: string;
  feeStructure: {
    admissionFee: string;
    fullFee: { prime: string; pro?: string };
    annualFee?: { prime: string; pro?: string };
    semesterFee: { prime: string; pro?: string };
    semesters: number;
    note?: string;
  };
}

export const degreePrograms: DegreeProgram[] = [
  {
    slug: "mba-online",
    aliases: ["mba", "online-mba", "master-of-business-administration"],
    title: "Online Master of Business Administration (MBA)",
    shortTitle: "Online MBA",
    degreeType: "Postgraduate",
    category: "business",
    categoryLabel: "Management",
    duration: "2 Years",
    mode: "100% Online (Live & Recorded)",
    tagline: "Accelerate your executive leadership career with UGC-DEB approved Online MBA programs",
    description: "Compare UGC-recognized Online MBA degrees from top universities with NAAC A+ / A++ rankings, global WES accreditation, and flexible 0% interest EMI options.",
    fullDescription: "An Online MBA is a prestigious 2-year postgraduate management program structured for working professionals, entrepreneurs, and graduates seeking rapid leadership growth. Offering weekend live masterclasses, interactive LMS portals, and top corporate networking, you gain mastery in Strategic Management, Corporate Finance, Digital Marketing, Human Resource Management, and Business Analytics without pausing your career.",
    averageSalary: "₹7.5 LPA - ₹16.0 LPA",
    careerRoles: [
      "Product Manager",
      "Management Consultant",
      "Business Development Manager",
      "Marketing Director",
      "Corporate Finance Analyst",
      "Operations & Supply Chain Lead",
      "HR Business Partner"
    ],
    eligibility: "Bachelor's degree (10+2+3) in any discipline with a minimum of 50% marks (45% for reserved category) from a recognized university. Working experience is preferred but not mandatory.",
    image: "/courses/mba_premium.jpg",
    curriculumSemesters: [
      {
        semester: "Semester 1",
        subjects: [
          "Management Theory & Practice",
          "Organizational Behavior",
          "Managerial Economics",
          "Corporate Communication",
          "Business Statistics & Analytics"
        ]
      },
      {
        semester: "Semester 2",
        subjects: [
          "Marketing Management",
          "Financial Accounting & Analysis",
          "Human Resource Management",
          "Operations & Supply Chain Strategy",
          "Information Systems for Business"
        ]
      },
      {
        semester: "Semester 3",
        subjects: [
          "Specialization Elective 1 (Core Focus)",
          "Specialization Elective 2 (Core Focus)",
          "Strategic Management & Innovation",
          "Corporate Governance & Ethics"
        ]
      },
      {
        semester: "Semester 4",
        subjects: [
          "Specialization Elective 3 & 4",
          "Digital Transformation & Global Business",
          "Industry Capstone Master's Dissertation Project"
        ]
      }
    ],
    specializations: [
      "Marketing & Digital Strategies",
      "Finance & Investment Banking",
      "Human Resource Management",
      "Data Science & Business Analytics",
      "Operations & Supply Chain",
      "International Business (IB)",
      "FinTech & Blockchain",
      "Healthcare & Hospital Management",
      "Information Technology (IT)"
    ],
    universities: [
      {
        university: "Amity University Online",
        universitySlug: "amity-university",
        universityShortName: "Amity",
        courseSlug: "mba-amity-university",
        courseTitle: "Master of Business Administration (MBA)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "QS Ranked #1", "WES Accredited", "AIU"],
        totalFee: "₹1,99,000",
        semesterFee: "₹49,750/sem",
        emiStarts: "₹4,150/mo",
        rating: 4.9,
        reviewsCount: 1420,
        image: "/university/amity-noida-campus.jpg",
        highlights: [
          "QS Ranked #1 Online MBA in India & #37 Globally",
          "WES Accredited in US & Canada",
          "12+ Industry in-demand dual specializations",
          "300+ Corporate hiring partners & virtual job fairs"
        ],
        specializations: ["Marketing", "Finance", "HR", "Analytics", "International Business", "Operations"]
      },
      {
        university: "Manipal University Jaipur",
        universitySlug: "manipal-university-jaipur",
        universityShortName: "MUJ Online",
        courseSlug: "online-mba-manipal-university-jaipur",
        courseTitle: "Online MBA (Manipal University Jaipur)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A++",
        approvals: ["UGC-DEB", "NAAC A++", "AICTE", "WES"],
        totalFee: "₹1,75,000",
        semesterFee: "₹43,750/sem",
        emiStarts: "₹3,650/mo",
        rating: 4.8,
        reviewsCount: 1250,
        image: "/university/manipal_campus_premium.jpg",
        highlights: [
          "Highest NAAC A++ accreditation rating",
          "13 Specialization electives with Coursera access",
          "Prestigious Manipal global alumni network of 3,00,000+",
          "Dedicated mock interviews & placement bootcamp"
        ],
        specializations: ["Finance", "Marketing", "HR", "Analytics & Data Science", "FinTech", "Retail"]
      },
      {
        university: "Sikkim Manipal University",
        universitySlug: "sikkim-manipal-university",
        universityShortName: "SMU",
        courseSlug: "online-mba-sikkim-manipal-university",
        courseTitle: "Online MBA (Sikkim Manipal University)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "AICTE", "AIU"],
        totalFee: "₹1,10,000",
        semesterFee: "₹27,500/sem",
        emiStarts: "₹2,290/mo",
        rating: 4.7,
        reviewsCount: 980,
        image: "/university/sikkim-manipal-campus.jpg",
        highlights: [
          "Over 28 years of academic excellence and distance heritage",
          "Pocket-friendly semester fee of ₹27,500",
          "5,00,000+ Alumni network worldwide",
          "AI-proctored flexible weekend online examinations"
        ],
        specializations: ["Marketing Management", "Financial Management", "Human Resource", "Systems & IT"]
      },
      {
        university: "Uttaranchal University",
        universitySlug: "uttaranchal-university",
        universityShortName: "Uttaranchal Online",
        courseSlug: "online-mba-uttaranchal-university",
        courseTitle: "Online MBA (Uttaranchal University)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "AICTE", "NAAC A+", "AIU"],
        totalFee: "₹1,40,000",
        semesterFee: "₹24,500/sem",
        emiStarts: "₹2,910/mo",
        rating: 4.7,
        reviewsCount: 820,
        image: "/university/uttaranchal_campus_premium.jpg",
        highlights: [
          "AICTE & UGC Recognized program with NAAC A+ standards",
          "Affordable semester installments from ₹24,500",
          "Special one-time payment option at ₹94,000",
          "Full placement cell support with resume & interview mentoring"
        ],
        specializations: ["Marketing", "Finance", "Human Resources", "Information Technology", "Business Analytics"]
      },
      {
        university: "Mangalayatan University",
        universitySlug: "mangalayatan-university",
        universityShortName: "Mangalayatan Online",
        courseSlug: "online-mba-mangalayatan-university",
        courseTitle: "Online MBA (Mangalayatan University)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "AICTE", "NAAC A+", "AIU"],
        totalFee: "₹2,70,000",
        semesterFee: "₹67,500/sem",
        emiStarts: "₹5,625/mo",
        rating: 4.6,
        reviewsCount: 650,
        image: "/university/MangalayatanUniversity.png",
        highlights: [
          "UGC-DEB recognized degree equivalent to on-campus program",
          "Tailored for working executives, entrepreneurs, and remote learners",
          "Flexible online exam schedules from the comfort of your home",
          "Comprehensive live doubt sessions and digital library"
        ],
        specializations: ["Marketing Management", "Finance Management", "HR Management", "International Business", "Operations"]
      },
      {
        university: "MIT University",
        universitySlug: "mit-university",
        universityShortName: "MIT",
        courseSlug: "online-mba-mit-university",
        courseTitle: "Executive / Online MBA (MIT University)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC", "AICTE", "NBA", "NAAC A+"],
        totalFee: "₹1,18,000",
        semesterFee: "₹29,500/sem",
        emiStarts: "₹2,450/mo",
        rating: 4.8,
        reviewsCount: 710,
        image: "/university/%20MITUniversity.jpeg",
        highlights: [
          "Prestigious engineering & technology institute legacy",
          "Curriculum curated by premier corporate and academic veterans",
          "Industry-mentored capstone projects with high placement ROI",
          "Special admission scholarship fee discount at ₹88,500"
        ],
        specializations: ["Technology Management", "Operations Management", "Marketing", "Strategic Finance"]
      }
    ],
    faqs: [
      {
        question: "Is an Online MBA degree valid for government jobs and UPSC?",
        answer: "Yes, 100%. As per UGC notification, an Online MBA awarded by UGC-DEB recognized universities (Amity, Manipal, SMU, Uttaranchal, Mangalayatan) is legally equivalent to a traditional on-campus regular MBA for all Central and State Government examinations, PSU recruitments, and corporate promotions."
      },
      {
        question: "Can I do an Online MBA while working full-time?",
        answer: "Yes! Online MBA programs are specifically engineered for working professionals. Classes are conducted live on weekends and archived on LMS for 24/7 on-demand viewing, with zero commute requirements."
      },
      {
        question: "How are examinations conducted?",
        answer: "Examinations are 100% online through secure AI-proctored examination software. You can choose convenient exam slots and appear from home using a laptop or desktop with internet access."
      },
      {
        question: "What are the payment options and EMI plans available?",
        answer: "Universities provide semester-wise fee payments as well as 0% interest No-Cost EMI plans through partner banks starting from ₹2,290 per month."
      }
    ]
  },
  {
    slug: "bca-online",
    aliases: ["bca", "online-bca", "bachelor-of-computer-applications"],
    title: "Online Bachelor of Computer Applications (BCA)",
    shortTitle: "Online BCA",
    degreeType: "Undergraduate",
    category: "technology",
    categoryLabel: "Computer & IT",
    duration: "3 Years",
    mode: "100% Online (Virtual Coding Labs)",
    tagline: "Build a high-paying tech career in Full-Stack Web, AI, Python, Java, and Cloud Computing",
    description: "Compare UGC-approved Online BCA degrees from top universities. Master programming languages, database architecture, and web development with 0% EMI.",
    fullDescription: "Online BCA is a 3-year undergraduate technology program created for 12th-pass students and working tech aspirants. It provides comprehensive hands-on grounding in Python, Java, Data Structures & Algorithms, Cloud Computing, Full-Stack Web Development, and Database Engineering with interactive virtual lab environments.",
    averageSalary: "₹4.5 LPA - ₹9.0 LPA",
    careerRoles: [
      "Full Stack Web Developer",
      "Software Engineer",
      "Data Analyst",
      "Cloud & DevOps Engineer",
      "Database Administrator (DBA)",
      "Cybersecurity Associate",
      "QA / Automation Tester"
    ],
    eligibility: "10+2 (Higher Secondary) in any stream with minimum 50% aggregate marks (45% for reserved category) from any recognized board. Mathematics or Computer Science background is preferred.",
    image: "/courses/mca_premium.jpg",
    curriculumSemesters: [
      {
        semester: "Year 1 (Sem 1 & 2)",
        subjects: [
          "Programming in C & C++",
          "Data Structures & Algorithms",
          "Digital Electronics & Architecture",
          "Discrete Mathematics & Logic",
          "Web Technologies (HTML, CSS, JavaScript)"
        ]
      },
      {
        semester: "Year 2 (Sem 3 & 4)",
        subjects: [
          "Object-Oriented Programming with Java",
          "Database Management Systems & SQL",
          "Operating Systems & Linux Administration",
          "Computer Networks & Security",
          "Python for Modern Applications"
        ]
      },
      {
        semester: "Year 3 (Sem 5 & 6)",
        subjects: [
          "Cloud Computing & Virtualization",
          "Full Stack Web Frameworks (React / Node)",
          "Software Engineering & Agile Methodologies",
          "Elective: Data Science / AI Basics",
          "Major Capstone Software Project"
        ]
      }
    ],
    specializations: [
      "Full-Stack Software Engineering",
      "Data Analytics & Machine Learning",
      "Cloud Infrastructure & DevOps",
      "Cybersecurity & Threat Defense"
    ],
    universities: [
      {
        university: "Amity University Online",
        universitySlug: "amity-university",
        universityShortName: "Amity",
        courseSlug: "online-bca-amity-university",
        courseTitle: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "WES", "AIU"],
        totalFee: "₹1,50,000",
        semesterFee: "₹25,000/sem",
        emiStarts: "₹2,080/mo",
        rating: 4.8,
        reviewsCount: 1450,
        image: "/university/amity-noida-campus.jpg",
        highlights: [
          "Specializations co-developed with TCS iON & HCLTech",
          "Hands-on virtual coding sandbox and live mentor hours",
          "WES Accredited in US and Canada for overseas master's",
          "Placement drives with 300+ tech hiring partners"
        ],
        specializations: ["Cloud Security", "Data Analytics", "Full Stack"]
      },
      {
        university: "Manipal University Jaipur",
        universitySlug: "manipal-university-jaipur",
        universityShortName: "MUJ Online",
        courseSlug: "online-bca-manipal-university-jaipur",
        courseTitle: "Online BCA (Manipal University Jaipur)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A++",
        approvals: ["UGC-DEB", "NAAC A++", "AICTE", "WES"],
        totalFee: "₹1,35,000",
        semesterFee: "₹22,500/sem",
        emiStarts: "₹1,875/mo",
        rating: 4.8,
        reviewsCount: 1100,
        image: "/university/manipal_campus_premium.jpg",
        highlights: [
          "Prestigious NAAC A++ grade curriculum",
          "Free access to Coursera for Campus tech certifications",
          "Industry live coding assignments and cloud sandbox",
          "Dedicated technical interview bootcamps"
        ],
        specializations: ["Cloud Computing", "Web & Mobile App Development", "Data Science"]
      },
      {
        university: "Uttaranchal University",
        universitySlug: "uttaranchal-university",
        universityShortName: "Uttaranchal Online",
        courseSlug: "online-bca-uttaranchal-university",
        courseTitle: "Online BCA (Uttaranchal University)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "AICTE", "NAAC A+"],
        totalFee: "₹1,20,000",
        semesterFee: "₹17,000/sem",
        emiStarts: "₹1,420/mo",
        rating: 4.7,
        reviewsCount: 780,
        image: "/university/uttaranchal_campus_premium.jpg",
        highlights: [
          "Super pocket-friendly fee of ₹17,000 per semester",
          "Special one-time full fee discount at ₹96,000",
          "AICTE approved software curriculum",
          "Career guidance with resume preparation"
        ],
        specializations: ["Software Engineering", "Web Technologies", "Database Management"]
      },
      {
        university: "Sikkim Manipal University",
        universitySlug: "sikkim-manipal-university",
        universityShortName: "SMU",
        courseSlug: "online-bca-sikkim-manipal-university",
        courseTitle: "Online / Distance BCA (Sikkim Manipal University)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "AICTE"],
        totalFee: "₹75,000",
        semesterFee: "₹12,500/sem",
        emiStarts: "₹1,050/mo",
        rating: 4.6,
        reviewsCount: 890,
        image: "/university/sikkim-manipal-campus.jpg",
        highlights: [
          "Highly affordable semester fee of ₹12,500",
          "28+ Years of academic heritage in distance computing",
          "Weekend proctored online examinations",
          "5,00,000+ Global alumni base"
        ],
        specializations: ["Computer Applications", "Networking", "Database Systems"]
      },
      {
        university: "Mangalayatan University",
        universitySlug: "mangalayatan-university",
        universityShortName: "Mangalayatan Online",
        courseSlug: "online-bca-mangalayatan-university",
        courseTitle: "Online BCA (Mangalayatan University)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "AICTE"],
        totalFee: "₹1,20,000",
        semesterFee: "₹20,000/sem",
        emiStarts: "₹1,670/mo",
        rating: 4.6,
        reviewsCount: 520,
        image: "/university/MangalayatanUniversity.png",
        highlights: [
          "UGC approved degree valid for all MCA and IT master programs",
          "Self-paced digital learning modules with recorded sessions",
          "Zero-stress online examination portal",
          "Installment assistance available"
        ],
        specializations: ["Web Development", "Python Programming", "Software Systems"]
      }
    ],
    faqs: [
      {
        question: "Can I do BCA online without Mathematics in 12th?",
        answer: "Yes! Most online universities (Amity, MUJ, Uttaranchal, Mangalayatan) allow 12th graduates from Arts, Commerce, or Science to enroll in Online BCA with introductory bridge courses in computing math."
      },
      {
        question: "Is Online BCA eligible for MCA or master's degrees?",
        answer: "Yes, an Online BCA from a UGC-entitled university is 100% eligible for MCA, M.Sc IT, MBA, and government tech recruitment tests like SSC CGL and IBPS IT Officer."
      },
      {
        question: "Are practical coding assignments included in Online BCA?",
        answer: "Yes, students receive cloud-hosted coding sandboxes to write, debug, and submit assignments in C++, Java, Python, SQL, and Web stacks."
      }
    ]
  },
  {
    slug: "mca-online",
    aliases: ["mca", "online-mca", "master-of-computer-applications"],
    title: "Online Master of Computer Applications (MCA)",
    shortTitle: "Online MCA",
    degreeType: "Postgraduate",
    category: "technology",
    categoryLabel: "Computer & IT",
    duration: "2 Years",
    mode: "100% Online (Virtual Labs)",
    tagline: "Advance into Lead Software Architect, Cloud DevOps, and AI / Machine Learning Roles",
    description: "Compare top UGC & AICTE recognized Online MCA programs from Amity, Manipal Jaipur, SMU, Uttaranchal, MIT, and Mangalayatan.",
    fullDescription: "Online MCA is a specialized 2-year postgraduate program designed to transform graduates and junior developers into senior software architects, cloud leaders, and AI specialists. It blends advanced algorithmic thinking with cutting-edge industry frameworks.",
    averageSalary: "₹6.8 LPA - ₹15.5 LPA",
    careerRoles: [
      "Senior Software Engineer",
      "Cloud Architect",
      "Data Scientist / AI Engineer",
      "Full Stack Tech Lead",
      "Cybersecurity Consultant",
      "Enterprise Systems Architect"
    ],
    eligibility: "Bachelor's degree in BCA / Computer Science / B.Sc IT or any Bachelor's degree with Mathematics at 10+2 level or graduation level with minimum 50% marks (45% for reserved category).",
    image: "/courses/mca_premium.jpg",
    curriculumSemesters: [
      {
        semester: "Semester 1",
        subjects: [
          "Advanced Data Structures & Algorithms",
          "Advanced Database Management & Distributed SQL",
          "Object Oriented Software Design (Java / Python)",
          "Computer Systems Architecture & Networks"
        ]
      },
      {
        semester: "Semester 2",
        subjects: [
          "Cloud Infrastructure & DevOps Pipeline (AWS/GCP)",
          "Full Stack Web Applications & Microservices",
          "Software Quality Assurance & Automated Testing",
          "Artificial Intelligence & Machine Learning Foundations"
        ]
      },
      {
        semester: "Semester 3 & 4",
        subjects: [
          "Advanced Elective Modules (Cybersecurity / AI / Data Analytics)",
          "Research Methodologies & Technical Papers",
          "Industry Capstone Software Dissertation & Live Project"
        ]
      }
    ],
    specializations: [
      "Cloud Computing & DevOps",
      "Artificial Intelligence & Machine Learning",
      "Cyber Security & Ethical Hacking",
      "Full Stack Development"
    ],
    universities: [
      {
        university: "Amity University Online",
        universitySlug: "amity-university",
        universityShortName: "Amity",
        courseSlug: "online-mca-amity-university",
        courseTitle: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "AICTE", "NAAC A+", "WES"],
        totalFee: "₹1,70,000",
        semesterFee: "₹42,500/sem",
        emiStarts: "₹3,540/mo",
        rating: 4.9,
        reviewsCount: 1320,
        image: "/university/amity-noida-campus.jpg",
        highlights: [
          "Specializations in AI, Machine Learning & Cloud",
          "Curriculum co-created with TCS iON & HCLTech",
          "300+ Tech recruitment partners",
          "AI-proctored online exams"
        ]
      },
      {
        university: "Manipal University Jaipur",
        universitySlug: "manipal-university-jaipur",
        universityShortName: "MUJ Online",
        courseSlug: "online-mca-manipal-university-jaipur",
        courseTitle: "Online MCA (Manipal University Jaipur)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A++",
        approvals: ["UGC-DEB", "NAAC A++", "AICTE", "WES"],
        totalFee: "₹1,58,000",
        semesterFee: "₹39,500/sem",
        emiStarts: "₹3,290/mo",
        rating: 4.8,
        reviewsCount: 1050,
        image: "/university/manipal_campus_premium.jpg",
        highlights: [
          "Highest NAAC A++ accreditation rating",
          "Free Coursera for Campus certification access",
          "Advanced cloud computing and microservices electives",
          "Dedicated technical placement bootcamps"
        ]
      },
      {
        university: "Sikkim Manipal University",
        universitySlug: "sikkim-manipal-university",
        universityShortName: "SMU",
        courseSlug: "online-mca-sikkim-manipal-university",
        courseTitle: "Online MCA (Sikkim Manipal University)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "AICTE"],
        totalFee: "₹98,000",
        semesterFee: "₹24,500/sem",
        emiStarts: "₹2,040/mo",
        rating: 4.7,
        reviewsCount: 810,
        image: "/university/sikkim-manipal-campus.jpg",
        highlights: [
          "Pocket-friendly total fee under ₹1 Lakh",
          "28+ Years legacy in distance technical education",
          "Proctored weekend examinations",
          "5 Lakh+ alumni network"
        ]
      },
      {
        university: "Uttaranchal University",
        universitySlug: "uttaranchal-university",
        universityShortName: "Uttaranchal Online",
        courseSlug: "online-mca-uttaranchal-university",
        courseTitle: "Online MCA (Uttaranchal University)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "AICTE", "NAAC A+"],
        totalFee: "₹1,20,000",
        semesterFee: "₹24,000/sem",
        emiStarts: "₹2,500/mo",
        rating: 4.7,
        reviewsCount: 620,
        image: "/university/uttaranchal_campus_premium.jpg",
        highlights: [
          "AICTE & UGC Recognized program",
          "Special one-time payment discount at ₹92,000",
          "High ROI and placement counseling support",
          "Hands-on coding labs"
        ]
      },
      {
        university: "MIT University",
        universitySlug: "mit-university",
        universityShortName: "MIT",
        courseSlug: "online-mca-mit-university",
        courseTitle: "Executive MCA (MIT University)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC", "AICTE", "NBA", "NAAC A+"],
        totalFee: "₹1,45,000",
        semesterFee: "₹36,250/sem",
        emiStarts: "₹3,020/mo",
        rating: 4.8,
        reviewsCount: 540,
        image: "/university/%20MITUniversity.jpeg",
        highlights: [
          "Prestigious MIT engineering institute pedigree",
          "Live software capstones mentored by tech leads",
          "Advanced enterprise architecture curriculum",
          "Strong placement ties with tech MNCs"
        ]
      }
    ],
    faqs: [
      {
        question: "Is Online MCA degree equivalent to regular campus MCA?",
        answer: "Yes. Under UGC regulations, online MCA degrees from accredited universities are 100% equivalent to full-time on-campus MCA degrees for IT hiring and government jobs."
      },
      {
        question: "What is the duration of Online MCA for BCA graduates?",
        answer: "As per updated AICTE regulations, the Online MCA program is 2 years (4 semesters) for BCA and Computer Science graduates."
      }
    ]
  },
  {
    slug: "bba-online",
    aliases: ["bba", "online-bba", "bachelor-of-business-administration"],
    title: "Online Bachelor of Business Administration (BBA)",
    shortTitle: "Online BBA",
    degreeType: "Undergraduate",
    category: "business",
    categoryLabel: "Management",
    duration: "3 Years",
    mode: "100% Online (UGC Entitled)",
    tagline: "Build solid business leadership, marketing, and finance fundamentals right after 12th",
    description: "Compare accredited Online BBA degrees from Amity, Manipal Jaipur, SMU, Uttaranchal, and Mangalayatan with zero-cost EMI plans.",
    fullDescription: "Online BBA is a 3-year undergraduate management program designed to instill critical business acumen, marketing strategies, financial analysis, organizational leadership, and entrepreneurial problem-solving.",
    averageSalary: "₹4.0 LPA - ₹8.0 LPA",
    careerRoles: [
      "Business Analyst Associate",
      "Marketing & Brand Executive",
      "Financial Operations Associate",
      "Human Resource Coordinator",
      "Sales & Client Success Manager",
      "Digital Marketing Specialist"
    ],
    eligibility: "10+2 from a recognized educational board (CBSE, ICSE, State Board) in any stream with minimum 50% marks (45% for reserved category).",
    image: "/courses/bba_premium.jpg",
    curriculumSemesters: [
      {
        semester: "Year 1",
        subjects: [
          "Principles of Management & Organization",
          "Business Economics (Micro & Macro)",
          "Financial Accounting Principles",
          "Business Communication & Soft Skills"
        ]
      },
      {
        semester: "Year 2",
        subjects: [
          "Marketing Management & Consumer Insights",
          "Human Resource Management",
          "Corporate Financial Management",
          "Operations & Logistics Management"
        ]
      },
      {
        semester: "Year 3",
        subjects: [
          "Strategic Business Planning",
          "International Business & Trade",
          "Entrepreneurship & Startup Management",
          "Final Year Business Research Project"
        ]
      }
    ],
    specializations: [
      "Digital Marketing",
      "Finance & Banking",
      "Human Resource Management",
      "Data Analytics for Business",
      "Retail & E-Commerce"
    ],
    universities: [
      {
        university: "Amity University Online",
        universitySlug: "amity-university",
        universityShortName: "Amity",
        courseSlug: "online-bba-amity-university",
        courseTitle: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "WES", "AIU"],
        totalFee: "₹1,65,000",
        semesterFee: "₹27,500/sem",
        emiStarts: "₹2,300/mo",
        rating: 4.8,
        reviewsCount: 1100,
        image: "/university/amity-noida-campus.jpg",
        highlights: [
          "Industry-oriented curriculum with HCLTech analytics options",
          "WES Accredited in US and Canada",
          "Live case studies from Harvard and Stanford cases",
          "Virtual placement drives with 300+ hiring partners"
        ]
      },
      {
        university: "Manipal University Jaipur",
        universitySlug: "manipal-university-jaipur",
        universityShortName: "MUJ Online",
        courseSlug: "online-bba-manipal-university-jaipur",
        courseTitle: "Online BBA (Manipal University Jaipur)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A++",
        approvals: ["UGC-DEB", "NAAC A++", "AICTE"],
        totalFee: "₹1,35,000",
        semesterFee: "₹22,500/sem",
        emiStarts: "₹1,875/mo",
        rating: 4.8,
        reviewsCount: 950,
        image: "/university/manipal_campus_premium.jpg",
        highlights: [
          "NAAC A++ accredited premier degree",
          "Coursera for Campus professional certificate bundle",
          "Alumni network across top multinational firms",
          "0% Interest EMI available"
        ]
      },
      {
        university: "Uttaranchal University",
        universitySlug: "uttaranchal-university",
        universityShortName: "Uttaranchal Online",
        courseSlug: "online-bba-uttaranchal-university",
        courseTitle: "Online BBA (Uttaranchal University)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "AICTE"],
        totalFee: "₹1,20,000",
        semesterFee: "₹17,000/sem",
        emiStarts: "₹1,420/mo",
        rating: 4.7,
        reviewsCount: 680,
        image: "/university/uttaranchal_campus_premium.jpg",
        highlights: [
          "Budget semester fee starting at ₹17,000",
          "One-time full payment discount at ₹96,000",
          "High quality LMS and recorded lectures",
          "Placement assistance cell"
        ]
      },
      {
        university: "Mangalayatan University",
        universitySlug: "mangalayatan-university",
        universityShortName: "Mangalayatan Online",
        courseSlug: "online-bba-mangalayatan-university",
        courseTitle: "Online BBA (Mangalayatan University)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "AIU"],
        totalFee: "₹2,25,000",
        semesterFee: "₹37,500/sem",
        emiStarts: "₹3,125/mo",
        rating: 4.6,
        reviewsCount: 470,
        image: "/university/MangalayatanUniversity.png",
        highlights: [
          "UGC approved degree valid for all MBA entrance exams (CAT/XAT/GMAT)",
          "Flexible online exam timetable",
          "Dedicated student mentor",
          "EMI options available"
        ]
      }
    ],
    faqs: [
      {
        question: "Can I prepare for government exams while doing an Online BBA?",
        answer: "Yes! Online BBA has a flexible schedule that allows students to prepare for UPSC, SSC, Banking, or CAT simultaneously."
      }
    ]
  },
  {
    slug: "bcom-online",
    aliases: ["bcom", "b-com", "online-bcom", "online-b-com", "bachelor-of-commerce"],
    title: "Online Bachelor of Commerce (B.Com)",
    shortTitle: "Online B.Com",
    degreeType: "Undergraduate",
    category: "commerce",
    categoryLabel: "Commerce",
    duration: "3 Years",
    mode: "100% Online (UGC Entitled)",
    tagline: "Master Financial Accounting, Corporate Taxation, Auditing, and Corporate Law",
    description: "Compare UGC-approved Online B.Com degrees from Amity, Manipal Jaipur, SMU, and Mangalayatan under ₹1 Lakh total fee.",
    fullDescription: "Online B.Com is a rigorous 3-year commerce program offering comprehensive knowledge in Financial Accounting, Auditing Standards, Income Tax & GST laws, Corporate Finance, and Banking Operations.",
    averageSalary: "₹3.8 LPA - ₹7.0 LPA",
    careerRoles: ["Accountant", "Tax Consultant", "Audit Associate", "Financial Analyst", "Banking Operations Executive"],
    eligibility: "10+2 from a recognized board in Commerce, Science, or Arts with minimum 50% marks.",
    image: "/courses/bcom_premium.jpg",
    curriculumSemesters: [
      {
        semester: "Year 1 to 3",
        subjects: [
          "Financial Accounting & Reporting Standards",
          "Business Law & Company Governance",
          "Direct Tax & Goods and Services Tax (GST)",
          "Cost & Management Accounting",
          "Auditing & Assurance Principles",
          "Banking & Financial Services"
        ]
      }
    ],
    specializations: ["Accounting & Finance", "Auditing & Taxation", "Banking & Insurance", "International Finance (ACCA)"],
    universities: [
      {
        university: "Amity University Online",
        universitySlug: "amity-university",
        universityShortName: "Amity",
        courseSlug: "online-bcom-amity-university",
        courseTitle: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "WES"],
        totalFee: "₹99,000",
        semesterFee: "₹16,500/sem",
        emiStarts: "₹1,375/mo",
        rating: 4.7,
        reviewsCount: 1280,
        image: "/university/amity-noida-campus.jpg",
        highlights: [
          "ACCA aligned curriculum options",
          "Total fee under ₹1 Lakh",
          "WES recognized degree",
          "0% EMI starts at ₹1,375/month"
        ]
      },
      {
        university: "Manipal University Jaipur",
        universitySlug: "manipal-university-jaipur",
        universityShortName: "MUJ Online",
        courseSlug: "online-bcom-manipal-university-jaipur",
        courseTitle: "Online B.Com (Manipal University Jaipur)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A++",
        approvals: ["UGC-DEB", "NAAC A++", "AICTE"],
        totalFee: "₹99,000",
        semesterFee: "₹16,500/sem",
        emiStarts: "₹1,375/mo",
        rating: 4.8,
        reviewsCount: 890,
        image: "/university/manipal_campus_premium.jpg",
        highlights: [
          "NAAC A++ highest accredited university",
          "Comprehensive Coursera for Campus access",
          "Dedicated placement assistance",
          "Flexible online exam slots"
        ]
      },
      {
        university: "Sikkim Manipal University",
        universitySlug: "sikkim-manipal-university",
        universityShortName: "SMU",
        courseSlug: "online-bcom-sikkim-manipal-university",
        courseTitle: "Online B.Com (Sikkim Manipal University)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "AIU"],
        totalFee: "₹75,000",
        semesterFee: "₹12,500/sem",
        emiStarts: "₹1,050/mo",
        rating: 4.6,
        reviewsCount: 750,
        image: "/university/sikkim-manipal-campus.jpg",
        highlights: [
          "Most economical semester fee at ₹12,500",
          "UGC and AIU recognized commerce curriculum",
          "Flexible AI proctored weekend exams",
          "28+ Years legacy"
        ]
      },
      {
        university: "Mangalayatan University",
        universitySlug: "mangalayatan-university",
        universityShortName: "Mangalayatan Online",
        courseSlug: "online-bcom-mangalayatan-university",
        courseTitle: "Online B.Com (Mangalayatan University)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+"],
        totalFee: "₹1,20,000",
        semesterFee: "₹20,000/sem",
        emiStarts: "₹1,670/mo",
        rating: 4.6,
        reviewsCount: 420,
        image: "/university/MangalayatanUniversity.png",
        highlights: [
          "UGC approved degree valid for CA/CS/CMA foundation",
          "Interactive LMS with complete study material",
          "Flexible installments",
          "Dedicated academic counselor support"
        ]
      }
    ],
    faqs: [
      {
        question: "Can I pursue CA or CS alongside Online B.Com?",
        answer: "Yes, many students pursue CA / CMA / CS articleship and exams while completing their UGC-approved Online B.Com degree without attendance clashes."
      }
    ]
  },
  {
    slug: "mcom-online",
    aliases: ["mcom", "m-com", "online-mcom", "online-m-com", "master-of-commerce"],
    title: "Online Master of Commerce (M.Com)",
    shortTitle: "Online M.Com",
    degreeType: "Postgraduate",
    category: "commerce",
    categoryLabel: "Commerce",
    duration: "2 Years",
    mode: "100% Online (UGC Entitled)",
    tagline: "Advance your career in Corporate Finance, Financial Modeling, and International Taxation",
    description: "Compare accredited Online M.Com programs from Amity, Manipal Jaipur, and Mangalayatan for Ph.D. & NET eligibility.",
    fullDescription: "Online M.Com is a specialized 2-year postgraduate program offering deep mastery in International Accounting Standards (IFRS), Financial Risk Management, Corporate Tax Laws, and Capital Markets.",
    averageSalary: "₹5.0 LPA - ₹9.5 LPA",
    careerRoles: ["Senior Financial Analyst", "Corporate Tax Consultant", "Finance Manager", "Auditor", "Lecturer / Professor (with UGC-NET)"],
    eligibility: "Bachelor's degree in Commerce (B.Com / BBA / Economics) with minimum 50% marks from a recognized university.",
    image: "/courses/bcom_premium.jpg",
    curriculumSemesters: [
      {
        semester: "Semester 1 to 4",
        subjects: [
          "Advanced Financial Accounting & IFRS",
          "Corporate Financial Management & Strategy",
          "Direct & Indirect Taxation Systems",
          "Research Methodology & Statistical Analysis",
          "Master's Project Dissertation"
        ]
      }
    ],
    specializations: ["Corporate Accounting & Taxation", "Banking & Financial Services", "International Finance"],
    universities: [
      {
        university: "Amity University Online",
        universitySlug: "amity-university",
        universityShortName: "Amity",
        courseSlug: "online-mcom-amity-university",
        courseTitle: "Master of Commerce (M.Com)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "WES"],
        totalFee: "₹1,20,000",
        semesterFee: "₹30,000/sem",
        emiStarts: "₹2,500/mo",
        rating: 4.6,
        reviewsCount: 650,
        image: "/university/amity-noida-campus.jpg",
        highlights: [
          "UGC-DEB approved degree eligible for UGC-NET & Ph.D.",
          "Advanced IFRS and financial modeling modules",
          "Flexible online exam scheduling",
          "Zero percent interest EMI available"
        ]
      },
      {
        university: "Manipal University Jaipur",
        universitySlug: "manipal-university-jaipur",
        universityShortName: "MUJ Online",
        courseSlug: "online-mcom-manipal-university-jaipur",
        courseTitle: "Online M.Com (Manipal University Jaipur)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A++",
        approvals: ["UGC-DEB", "NAAC A++", "AICTE"],
        totalFee: "₹1,08,000",
        semesterFee: "₹27,000/sem",
        emiStarts: "₹2,250/mo",
        rating: 4.8,
        reviewsCount: 520,
        image: "/university/manipal_campus_premium.jpg",
        highlights: [
          "NAAC A++ Grade curriculum with Coursera bundle",
          "Pocket-friendly semester fee of ₹27,000",
          "Dedicated career services and placement drives",
          "AI-proctored online exams"
        ]
      },
      {
        university: "Mangalayatan University",
        universitySlug: "mangalayatan-university",
        universityShortName: "Mangalayatan Online",
        courseSlug: "online-mcom-mangalayatan-university",
        courseTitle: "Online M.Com (Mangalayatan University)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+"],
        totalFee: "₹60,000",
        semesterFee: "₹15,000/sem",
        emiStarts: "₹1,250/mo",
        rating: 4.6,
        reviewsCount: 380,
        image: "/university/MangalayatanUniversity.png",
        highlights: [
          "Most affordable total fee of ₹60,000 total",
          "Valid for UGC NET and state government lectureship exams",
          "Self-paced learning portal",
          "Installment payment support"
        ]
      }
    ],
    faqs: [
      {
        question: "Is Online M.Com eligible for UGC NET and Ph.D.?",
        answer: "Yes, UGC recognizes online master's degrees from DEB-entitled universities as fully eligible for UGC-NET, State SET, and Ph.D. admissions."
      }
    ]
  },
  {
    slug: "ba-online",
    aliases: ["ba", "online-ba", "bachelor-of-arts"],
    title: "Online Bachelor of Arts (BA)",
    shortTitle: "Online BA",
    degreeType: "Undergraduate",
    category: "arts",
    categoryLabel: "Arts & Humanities",
    duration: "3 Years",
    mode: "100% Online (UGC Entitled)",
    tagline: "Strong foundation in Political Science, English Literature, History, and Sociology for Civil Services",
    description: "Compare affordable Online BA degrees from Amity, Uttaranchal, SMU, and Mangalayatan starting from ₹10,200/sem.",
    fullDescription: "Online BA is a flexible 3-year humanities program ideal for students preparing for UPSC, State PSC, SSC, or looking to build careers in content, public policy, and social sectors.",
    averageSalary: "₹3.5 LPA - ₹6.5 LPA",
    careerRoles: ["Civil Services / Govt Aspirant", "Content Specialist", "Public Relations Executive", "Social Work Coordinator", "Research Assistant"],
    eligibility: "10+2 from a recognized board in any stream with minimum 50% marks.",
    image: "/courses/mba_premium.jpg",
    curriculumSemesters: [
      {
        semester: "Year 1 to 3",
        subjects: [
          "English Literature & Composition",
          "Indian Polity & Political Theory",
          "Indian & World History",
          "Sociology & Social Institutions",
          "Public Administration Basics"
        ]
      }
    ],
    specializations: ["Political Science", "English Literature", "Sociology", "History"],
    universities: [
      {
        university: "Amity University Online",
        universitySlug: "amity-university",
        universityShortName: "Amity",
        courseSlug: "online-ba-amity-university",
        courseTitle: "Bachelor of Arts (BA)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "WES"],
        totalFee: "₹99,000",
        semesterFee: "₹16,500/sem",
        emiStarts: "₹1,375/mo",
        rating: 4.6,
        reviewsCount: 750,
        image: "/university/amity-noida-campus.jpg",
        highlights: ["Ideal for UPSC / Govt exam aspirants", "WES recognized globally", "Self-paced study modules", "0% EMI options"]
      },
      {
        university: "Uttaranchal University",
        universitySlug: "uttaranchal-university",
        universityShortName: "Uttaranchal Online",
        courseSlug: "online-ba-uttaranchal-university",
        courseTitle: "Online BA (Uttaranchal University)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+"],
        totalFee: "₹72,000",
        semesterFee: "₹10,200/sem",
        emiStarts: "₹850/mo",
        rating: 4.7,
        reviewsCount: 580,
        image: "/university/uttaranchal_campus_premium.jpg",
        highlights: ["Low semester fee of ₹10,200", "One-time special fee ₹55,200", "NAAC A+ University", "Full digital LMS"]
      },
      {
        university: "Sikkim Manipal University",
        universitySlug: "sikkim-manipal-university",
        universityShortName: "SMU",
        courseSlug: "online-ba-sikkim-manipal-university",
        courseTitle: "Online BA (Sikkim Manipal University)",
        duration: "3 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "AIU"],
        totalFee: "₹75,000",
        semesterFee: "₹12,500/sem",
        emiStarts: "₹1,050/mo",
        rating: 4.6,
        reviewsCount: 490,
        image: "/university/sikkim-manipal-campus.jpg",
        highlights: ["Affordable ₹12,500/semester", "Decades of academic heritage", "Online weekend exams", "UGC recognized"]
      }
    ],
    faqs: [
      {
        question: "Is Online BA valid for UPSC Civil Services Examination?",
        answer: "Yes, UGC approved online degrees fulfill all eligibility criteria for UPSC Civil Services, State PSC, and Banking examinations."
      }
    ]
  },
  {
    slug: "ma-online",
    aliases: ["ma", "online-ma", "master-of-arts"],
    title: "Online Master of Arts (MA)",
    shortTitle: "Online MA",
    degreeType: "Postgraduate",
    category: "arts",
    categoryLabel: "Arts & Humanities",
    duration: "2 Years",
    mode: "100% Online (UGC Entitled)",
    tagline: "Master advanced research in English Literature, Sociology, and Journalism",
    description: "Compare accredited Online MA programs from Amity, Manipal Jaipur, and SMU for UGC-NET and higher academic careers.",
    fullDescription: "Online MA is a 2-year postgraduate humanities program structured for students seeking higher research credentials, editorial leadership, or teaching and lectureship careers.",
    averageSalary: "₹4.5 LPA - ₹8.0 LPA",
    careerRoles: ["College Lecturer (with NET)", "Editorial & Publishing Lead", "Public Policy Analyst", "Communications Specialist"],
    eligibility: "Bachelor's degree in any discipline with minimum 50% marks from a recognized university.",
    image: "/courses/mba_premium.jpg",
    curriculumSemesters: [
      {
        semester: "Semester 1 to 4",
        subjects: [
          "Literary Theory & Critical Analysis",
          "Sociological Theories & Social Research",
          "Public Policy & Cultural Studies",
          "Master's Thesis & Dissertation Project"
        ]
      }
    ],
    specializations: ["English Literature", "Sociology", "Journalism & Mass Comm (J&MC)"],
    universities: [
      {
        university: "Amity University Online",
        universitySlug: "amity-university",
        universityShortName: "Amity",
        courseSlug: "online-ma-amity-university",
        courseTitle: "Master of Arts (MA)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "WES"],
        totalFee: "₹1,30,000",
        semesterFee: "₹32,500/sem",
        emiStarts: "₹2,700/mo",
        rating: 4.6,
        reviewsCount: 680,
        image: "/university/amity-noida-campus.jpg",
        highlights: ["Specializations in English & Sociology", "UGC-NET & Ph.D. eligible", "WES accredited", "Digital LMS"]
      },
      {
        university: "Manipal University Jaipur",
        universitySlug: "manipal-university-jaipur",
        universityShortName: "MUJ Online",
        courseSlug: "online-ma-manipal-university-jaipur",
        courseTitle: "Online MA in Journalism & Mass Communication (J&MC)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A++",
        approvals: ["UGC-DEB", "NAAC A++", "AICTE"],
        totalFee: "₹1,40,000",
        semesterFee: "₹35,000/sem",
        emiStarts: "₹2,920/mo",
        rating: 4.8,
        reviewsCount: 450,
        image: "/university/manipal_campus_premium.jpg",
        highlights: ["Specialized Journalism & Media track", "NAAC A++ university", "Industry masterclasses", "Placement support"]
      },
      {
        university: "Sikkim Manipal University",
        universitySlug: "sikkim-manipal-university",
        universityShortName: "SMU",
        courseSlug: "online-ma-sikkim-manipal-university",
        courseTitle: "Online MA (English / Sociology)",
        duration: "2 Years",
        mode: "100% Online",
        naacGrade: "NAAC A+",
        approvals: ["UGC-DEB", "NAAC A+", "AIU"],
        totalFee: "₹75,000",
        semesterFee: "₹18,750/sem",
        emiStarts: "₹1,560/mo",
        rating: 4.6,
        reviewsCount: 390,
        image: "/university/sikkim-manipal-campus.jpg",
        highlights: ["Cost effective ₹18,750/semester", "UGC-DEB approved", "Weekend online exams", "28+ Yr legacy"]
      }
    ],
    faqs: [
      {
        question: "Is Online MA degree valid for government lecturer and NET exam?",
        answer: "Yes, online master's degrees from UGC-DEB recognized universities are valid for UGC-NET and collegiate lectureship."
      }
    ]
  }
];

// Helper to look up degree program by slug or alias
export function getDegreeProgramBySlug(slug: string): DegreeProgram | undefined {
  const clean = slug.toLowerCase().trim();
  return degreePrograms.find(
    (d) => d.slug === clean || d.aliases.includes(clean)
  );
}

// Generate the complete unified array of all individual university course offerings
export const allCourses: CourseDetailItem[] = [
  // 1. MBA Courses
  {
    id: 1,
    slug: "mba-amity-university",
    degreeSlug: "mba-online",
    title: "Master of Business Administration (MBA) - Amity University",
    shortTitle: "Online MBA",
    category: "business",
    categoryLabel: "Management",
    university: "Amity University",
    universitySlug: "amity-university",
    universityShortName: "Amity",
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
    fee: "₹1,99,000",
    semesterFee: "₹49,750/sem",
    emi: "₹4,150/mo",
    image: "/courses/mba_premium.jpg",
    tag: "QS #1 Ranked",
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
        semester: "Semester 3 & 4",
        subjects: [
          { name: "Dual Specialization Electives (16 Credits)", credits: 16 },
          { name: "Global Business Strategy", credits: 4 },
          { name: "Industry Capstone Master's Project", credits: 6 }
        ]
      }
    ],
    eligibility: "Bachelor's Degree (10+2+3) in any discipline from any recognized University with minimum 50% marks (45% for reserved category).",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,99,000" },
      annualFee: { prime: "₹99,500/year" },
      semesterFee: { prime: "₹49,750/sem" },
      semesters: 4,
      note: "0% interest No-Cost EMI starts at ₹4,150/month with leading banking partners."
    }
  },
  {
    id: 2,
    slug: "online-mba-manipal-university-jaipur",
    degreeSlug: "mba-online",
    title: "Online MBA - Manipal University Jaipur (MUJ)",
    shortTitle: "Online MBA (MUJ)",
    category: "business",
    categoryLabel: "Management",
    university: "Manipal University Jaipur",
    universitySlug: "manipal-university-jaipur",
    universityShortName: "MUJ Online",
    duration: "2 Years",
    level: "Postgraduate",
    mode: "100% Online (Coursera Bundle)",
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
    fee: "₹1,75,000",
    semesterFee: "₹43,750/sem",
    emi: "₹3,650/mo",
    image: "/courses/mba_premium.jpg",
    tag: "NAAC A++",
    programStructure: [
      {
        semester: "Semester 1 & 2",
        subjects: [
          { name: "Management Process & Organizational Behavior", credits: 4 },
          { name: "Managerial Economics", credits: 4 },
          { name: "Accounting for Managers", credits: 4 },
          { name: "Business Statistics & Financial Management", credits: 8 },
          { name: "Marketing Management", credits: 4 }
        ]
      },
      {
        semester: "Semester 3 & 4",
        subjects: [
          { name: "Elective Specialization Subjects", credits: 16 },
          { name: "Strategic Management & Innovation", credits: 4 },
          { name: "Live Industry Capstone Project", credits: 6 }
        ]
      }
    ],
    eligibility: "Graduate degree (10+2+3) in any discipline from a recognized University with at least 50% aggregate marks (45% for reserved category).",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,75,000" },
      annualFee: { prime: "₹87,500/year" },
      semesterFee: { prime: "₹43,750/sem" },
      semesters: 4,
      note: "0% interest No-Cost EMI starts at ₹3,650/month with zero processing fees."
    }
  },
  {
    id: 3,
    slug: "online-mba-sikkim-manipal-university",
    degreeSlug: "mba-online",
    title: "Online MBA - Sikkim Manipal University (SMU)",
    shortTitle: "Online MBA (SMU)",
    category: "business",
    categoryLabel: "Management",
    university: "Sikkim Manipal University",
    universitySlug: "sikkim-manipal-university",
    universityShortName: "SMU",
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
    fee: "₹1,10,000",
    semesterFee: "₹27,500/sem",
    emi: "₹2,290/mo",
    image: "/courses/mba_premium.jpg",
    tag: "High Value",
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
      fullFee: { prime: "₹1,10,000" },
      annualFee: { prime: "₹55,000/year" },
      semesterFee: { prime: "₹27,500/sem" },
      semesters: 4,
      note: "Pocket-friendly installment options available."
    }
  },
  {
    id: 4,
    slug: "online-mba-uttaranchal-university",
    degreeSlug: "mba-online",
    title: "Online MBA - Uttaranchal University",
    shortTitle: "Online MBA (UU)",
    category: "business",
    categoryLabel: "Management",
    university: "Uttaranchal University",
    universitySlug: "uttaranchal-university",
    universityShortName: "Uttaranchal Online",
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
    fee: "₹1,40,000",
    semesterFee: "₹24,500/sem",
    emi: "₹2,910/mo",
    image: "/courses/mba_premium.jpg",
    tag: "Affordable",
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
      fullFee: { prime: "₹1,40,000" },
      annualFee: { prime: "₹70,000/year" },
      semesterFee: { prime: "₹24,500/sem" },
      semesters: 4,
      note: "Special one-time payment discount available at ₹94,000 total."
    }
  },
  {
    id: 5,
    slug: "online-mba-mangalayatan-university",
    degreeSlug: "mba-online",
    title: "Online MBA - Mangalayatan University",
    shortTitle: "Online MBA (Mangalayatan)",
    category: "business",
    categoryLabel: "Management",
    university: "Mangalayatan University",
    universitySlug: "mangalayatan-university",
    universityShortName: "Mangalayatan Online",
    duration: "2 Years",
    level: "Postgraduate",
    mode: "100% Online",
    description: "UGC-DEB and AICTE approved Online MBA focusing on practical business cases, leadership growth, and flexible remote learning.",
    fullDescription: "Mangalayatan University Online MBA is designed for working executives, business founders, and career changers. It offers UGC recognized education with digital study materials and flexible online examination slots.",
    highlights: [
      "UGC-DEB & AICTE Approved Degree",
      "NAAC A+ Accreditation Standards",
      "Personalized Academic Mentor Support",
      "Flexible Weekend Online Exam Slots"
    ],
    careerRoles: ["Marketing Manager", "HR Generalist", "Financial Analyst", "Operations Coordinator"],
    rating: 4.6,
    reviewsCount: 650,
    students: "6,200+",
    fee: "₹2,70,000",
    semesterFee: "₹67,500/sem",
    emi: "₹5,625/mo",
    image: "/courses/mba_premium.jpg",
    tag: "Flexible",
    programStructure: [
      {
        semester: "Semester 1 to 4",
        subjects: [
          { name: "Management Process & Organizational Behavior", credits: 4 },
          { name: "Marketing Management & Market Strategy", credits: 4 },
          { name: "Corporate Financial Analysis", credits: 4 },
          { name: "Specialization Modules (Marketing/HR/Finance)", credits: 16 },
          { name: "Capstone Project", credits: 6 }
        ]
      }
    ],
    eligibility: "Graduation in any stream with minimum 50% marks from a recognized university.",
    feeStructure: {
      admissionFee: "₹1,000",
      fullFee: { prime: "₹2,70,000" },
      annualFee: { prime: "₹1,35,000/year" },
      semesterFee: { prime: "₹67,500/sem" },
      semesters: 4,
      note: "Annual installment options of ₹1,35,000/year available."
    }
  },
  {
    id: 6,
    slug: "online-mba-mit-university",
    degreeSlug: "mba-online",
    title: "Executive / Online MBA - MIT University",
    shortTitle: "Online MBA (MIT)",
    category: "business",
    categoryLabel: "Management",
    university: "MIT University",
    universitySlug: "mit-university",
    universityShortName: "MIT",
    duration: "2 Years",
    level: "Postgraduate",
    mode: "100% Online",
    description: "Industry-aligned management program combining technology innovation, engineering leadership, and strategic business frameworks.",
    fullDescription: "MIT University Online MBA provides hands-on management training rooted in technology, operations, and entrepreneurship. Mentored by senior industry executives.",
    highlights: ["Prestigious Technical Institute Legacy", "High ROI Placement Network", "Applied Case Studies", "Special Offer Fee ₹88,500"],
    careerRoles: ["Operations Lead", "Tech Product Manager", "Strategic Planning Head", "Consultant"],
    rating: 4.8,
    reviewsCount: 710,
    students: "7,000+",
    fee: "₹1,18,000",
    semesterFee: "₹29,500/sem",
    emi: "₹2,450/mo",
    image: "/courses/mba_premium.jpg",
    tag: "High ROI",
    programStructure: [
      {
        semester: "Semester 1 to 4",
        subjects: [
          { name: "Foundations of Modern Business", credits: 8 },
          { name: "Technology & Operations Leadership", credits: 8 },
          { name: "Corporate Strategy & Growth", credits: 8 },
          { name: "Final Master's Capstone", credits: 6 }
        ]
      }
    ],
    eligibility: "Bachelor's degree with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,000",
      fullFee: { prime: "₹1,18,000" },
      annualFee: { prime: "₹59,000/year" },
      semesterFee: { prime: "₹29,500/sem" },
      semesters: 4,
      note: "Special discount admission fee at ₹88,500 total."
    }
  },

  // 2. BCA Courses
  {
    id: 7,
    slug: "online-bca-amity-university",
    degreeSlug: "bca-online",
    title: "Bachelor of Computer Applications (BCA) - Amity University",
    shortTitle: "Online BCA (Amity)",
    category: "technology",
    categoryLabel: "Computer & IT",
    university: "Amity University",
    universitySlug: "amity-university",
    universityShortName: "Amity",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online (Hands-on Labs)",
    description: "Comprehensive computing degree teaching Python, Java, Web Development, Data Structures, and Cloud Computing.",
    fullDescription: "The Online BCA program is a 3-year undergraduate course offering rigorous foundations in coding, database design, and web architecture. Perfect for aspiring software developers seeking flexible, affordable education.",
    highlights: ["Hands-on Python, Java, and Web Development", "Cloud Security & Data Analytics Electives", "Internship & Placement Assistance", "UGC Recognized"],
    careerRoles: ["Junior Software Developer", "Web Developer", "Database Administrator", "Tech Support Engineer"],
    rating: 4.8,
    reviewsCount: 1450,
    students: "14,000+",
    fee: "₹1,50,000",
    semesterFee: "₹25,000/sem",
    emi: "₹2,080/mo",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tag: "Top Tech UG",
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
    eligibility: "10+2 from a recognized board in any stream with minimum 50% aggregate marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,50,000" },
      annualFee: { prime: "₹50,000/year" },
      semesterFee: { prime: "₹25,000/sem" },
      semesters: 6,
      note: "0% interest EMI starts at ₹2,080/month."
    }
  },
  {
    id: 8,
    slug: "online-bca-manipal-university-jaipur",
    degreeSlug: "bca-online",
    title: "Online BCA - Manipal University Jaipur (MUJ)",
    shortTitle: "Online BCA (MUJ)",
    category: "technology",
    categoryLabel: "Computer & IT",
    university: "Manipal University Jaipur",
    universitySlug: "manipal-university-jaipur",
    universityShortName: "MUJ Online",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online",
    description: "NAAC A++ accredited BCA offering Coursera certificates, full-stack software coding, and cloud development.",
    fullDescription: "MUJ Online BCA provides deep computing fundamentals including algorithms, system design, python scripting, and web technologies.",
    highlights: ["NAAC A++ Accreditation", "Coursera for Campus Access", "Cloud Computing & Web Stacks", "Dedicated Placement Drive"],
    careerRoles: ["Software Engineer", "Full Stack Developer", "QA Analyst", "Data Specialist"],
    rating: 4.8,
    reviewsCount: 1100,
    students: "10,500+",
    fee: "₹1,35,000",
    semesterFee: "₹22,500/sem",
    emi: "₹1,875/mo",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tag: "NAAC A++",
    programStructure: [
      {
        semester: "Year 1 to 3",
        subjects: [
          { name: "Programming Foundations (C, C++, Java)", credits: 16 },
          { name: "Database & Web Development", credits: 16 },
          { name: "Cloud Architecture & Python", credits: 16 },
          { name: "Capstone Major Software Project", credits: 8 }
        ]
      }
    ],
    eligibility: "10+2 from a recognized board with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,35,000" },
      annualFee: { prime: "₹45,000/year" },
      semesterFee: { prime: "₹22,500/sem" },
      semesters: 6
    }
  },
  {
    id: 9,
    slug: "online-bca-uttaranchal-university",
    degreeSlug: "bca-online",
    title: "Online BCA - Uttaranchal University",
    shortTitle: "Online BCA (Uttaranchal)",
    category: "technology",
    categoryLabel: "Computer & IT",
    university: "Uttaranchal University",
    universitySlug: "uttaranchal-university",
    universityShortName: "Uttaranchal Online",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online",
    description: "Pocket-friendly 3-year online BCA degree with NAAC A+ accreditation and comprehensive programming modules.",
    fullDescription: "Uttaranchal University Online BCA teaches core coding languages, computer networks, relational databases, and software testing at an accessible semester fee of ₹17,000.",
    highlights: ["Super Affordable ₹17,000/Sem", "NAAC A+ Accredited", "One Time Special ₹96,000", "Placement Assistance"],
    careerRoles: ["Programmer", "Web Designer", "IT Support Analyst", "Database Coordinator"],
    rating: 4.7,
    reviewsCount: 780,
    students: "7,500+",
    fee: "₹1,20,000",
    semesterFee: "₹17,000/sem",
    emi: "₹1,420/mo",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tag: "Budget Tech",
    programStructure: [
      {
        semester: "Year 1 to 3",
        subjects: [
          { name: "C & Data Structures", credits: 8 },
          { name: "Java & DBMS", credits: 8 },
          { name: "Web Technologies & Python", credits: 8 },
          { name: "Final Capstone Project", credits: 6 }
        ]
      }
    ],
    eligibility: "10+2 from a recognized board with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,20,000" },
      annualFee: { prime: "₹34,000/year" },
      semesterFee: { prime: "₹17,000/sem" },
      semesters: 6
    }
  },
  {
    id: 10,
    slug: "online-bca-sikkim-manipal-university",
    degreeSlug: "bca-online",
    title: "Online BCA - Sikkim Manipal University (SMU)",
    shortTitle: "Online BCA (SMU)",
    category: "technology",
    categoryLabel: "Computer & IT",
    university: "Sikkim Manipal University",
    universitySlug: "sikkim-manipal-university",
    universityShortName: "SMU",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online",
    description: "Affordable distance & online BCA with 28+ years legacy, flexible semester installments, and AI-proctored exams.",
    fullDescription: "SMU Online BCA covers software fundamentals, computer architecture, networking, and programming at an affordable semester fee of ₹12,500.",
    highlights: ["Economical ₹12,500/Sem", "28+ Years Academic Heritage", "5 Lakh+ Alumni Network", "UGC Approved"],
    careerRoles: ["Junior Developer", "Tech Support", "Web Associate", "IT Assistant"],
    rating: 4.6,
    reviewsCount: 890,
    students: "11,000+",
    fee: "₹75,000",
    semesterFee: "₹12,500/sem",
    emi: "₹1,050/mo",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tag: "Lowest Fee",
    programStructure: [
      {
        semester: "Year 1 to 3",
        subjects: [
          { name: "Computer Architecture & C Programming", credits: 8 },
          { name: "Data Structures & Java", credits: 8 },
          { name: "Operating Systems & Networking", credits: 8 },
          { name: "Project Work", credits: 6 }
        ]
      }
    ],
    eligibility: "10+2 from a recognized board with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹500",
      fullFee: { prime: "₹75,000" },
      annualFee: { prime: "₹25,000/year" },
      semesterFee: { prime: "₹12,500/sem" },
      semesters: 6
    }
  },
  {
    id: 11,
    slug: "online-bca-mangalayatan-university",
    degreeSlug: "bca-online",
    title: "Online BCA - Mangalayatan University",
    shortTitle: "Online BCA (Mangalayatan)",
    category: "technology",
    categoryLabel: "Computer & IT",
    university: "Mangalayatan University",
    universitySlug: "mangalayatan-university",
    universityShortName: "Mangalayatan Online",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online",
    description: "Student-friendly UGC recognized BCA with hands-on coding modules and simple installment plans.",
    fullDescription: "Mangalayatan University Online BCA gives learners strong foundation in computer programming, database design, and web development with recorded lectures.",
    highlights: ["UGC Recognized", "Self Paced LMS", "Weekend Exams", "Installment Plans"],
    careerRoles: ["Web Developer", "Software Trainee", "Tech Support", "Database Assistant"],
    rating: 4.6,
    reviewsCount: 520,
    students: "4,500+",
    fee: "₹1,20,000",
    semesterFee: "₹20,000/sem",
    emi: "₹1,670/mo",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tag: "Flexible",
    programStructure: [
      {
        semester: "Year 1 to 3",
        subjects: [
          { name: "C, C++, Java Programming", credits: 12 },
          { name: "Web Design & HTML/CSS", credits: 8 },
          { name: "Database & Python", credits: 8 },
          { name: "Project", credits: 4 }
        ]
      }
    ],
    eligibility: "10+2 in any stream from a recognized board.",
    feeStructure: {
      admissionFee: "₹1,000",
      fullFee: { prime: "₹1,20,000" },
      annualFee: { prime: "₹40,000/year" },
      semesterFee: { prime: "₹20,000/sem" },
      semesters: 6
    }
  },

  // 3. MCA Courses
  {
    id: 12,
    slug: "online-mca-amity-university",
    degreeSlug: "mca-online",
    title: "Master of Computer Applications (MCA) - Amity University",
    shortTitle: "Online MCA (Amity)",
    category: "technology",
    categoryLabel: "Computer & IT",
    university: "Amity University",
    universitySlug: "amity-university",
    universityShortName: "Amity",
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
    fee: "₹1,70,000",
    semesterFee: "₹42,500/sem",
    emi: "₹3,540/mo",
    image: "/courses/mca_premium.jpg",
    tag: "Most Popular MCA",
    programStructure: [
      {
        semester: "Semester 1 & 2",
        subjects: [
          { name: "Advanced Data Structures & Algorithms", credits: 4 },
          { name: "Cloud Computing & DevOps", credits: 4 },
          { name: "Full Stack Web Engineering", credits: 4 },
          { name: "AI & Machine Learning Foundations", credits: 4 }
        ]
      },
      {
        semester: "Semester 3 & 4",
        subjects: [
          { name: "Advanced Electives", credits: 16 },
          { name: "Industry Live Project Dissertation", credits: 8 }
        ]
      }
    ],
    eligibility: "Bachelor's Degree in BCA / Computer Science / B.Sc IT or any Bachelor's degree with Mathematics with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,70,000" },
      annualFee: { prime: "₹85,000/year" },
      semesterFee: { prime: "₹42,500/sem" },
      semesters: 4
    }
  },
  {
    id: 13,
    slug: "online-mca-manipal-university-jaipur",
    degreeSlug: "mca-online",
    title: "Online MCA - Manipal University Jaipur (MUJ)",
    shortTitle: "Online MCA (MUJ)",
    category: "technology",
    categoryLabel: "Computer & IT",
    university: "Manipal University Jaipur",
    universitySlug: "manipal-university-jaipur",
    universityShortName: "MUJ Online",
    duration: "2 Years",
    level: "Postgraduate",
    mode: "100% Online",
    description: "NAAC A++ accredited MCA featuring Coursera certifications, cloud microservices, and AI computing.",
    fullDescription: "Manipal Jaipur Online MCA offers master-level software architecture, microservices, and full stack engineering.",
    highlights: ["NAAC A++ Accreditation", "Coursera for Campus certifications", "High placement packages", "Cloud lab"],
    careerRoles: ["Senior Developer", "Cloud Engineer", "Solutions Architect", "Data Engineer"],
    rating: 4.8,
    reviewsCount: 1050,
    students: "9,000+",
    fee: "₹1,58,000",
    semesterFee: "₹39,500/sem",
    emi: "₹3,290/mo",
    image: "/courses/mca_premium.jpg",
    tag: "NAAC A++",
    programStructure: [
      {
        semester: "Semester 1 to 4",
        subjects: [
          { name: "Advanced Software Paradigms", credits: 16 },
          { name: "Cloud & Distributed Computing", credits: 16 },
          { name: "Capstone Project", credits: 8 }
        ]
      }
    ],
    eligibility: "BCA / B.Sc IT / Bachelor's with Math with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,58,000" },
      annualFee: { prime: "₹79,000/year" },
      semesterFee: { prime: "₹39,500/sem" },
      semesters: 4
    }
  },
  {
    id: 14,
    slug: "online-mca-uttaranchal-university",
    degreeSlug: "mca-online",
    title: "Online MCA - Uttaranchal University",
    shortTitle: "Online MCA (Uttaranchal)",
    category: "technology",
    categoryLabel: "Computer & IT",
    university: "Uttaranchal University",
    universitySlug: "uttaranchal-university",
    universityShortName: "Uttaranchal Online",
    duration: "2 Years",
    level: "Postgraduate",
    mode: "100% Online",
    description: "AICTE approved 2-year Online MCA with NAAC A+ standards, practical virtual coding sessions, and placement mentoring.",
    fullDescription: "Uttaranchal University Online MCA covers enterprise Java, Python, Cloud computing, and Machine learning at an affordable ₹24,000/sem fee.",
    highlights: ["AICTE Approved", "One Time Special ₹92,000", "Affordable ₹24,000/Sem", "Placement Cell Support"],
    careerRoles: ["Software Engineer", "Backend Developer", "DevOps Engineer", "Data Specialist"],
    rating: 4.7,
    reviewsCount: 620,
    students: "5,800+",
    fee: "₹1,20,000",
    semesterFee: "₹24,000/sem",
    emi: "₹2,500/mo",
    image: "/courses/mca_premium.jpg",
    tag: "Affordable MCA",
    programStructure: [
      {
        semester: "Semester 1 to 4",
        subjects: [
          { name: "Advanced Algorithms & Java", credits: 12 },
          { name: "Cloud Infrastructure & Database", credits: 12 },
          { name: "Major Project", credits: 6 }
        ]
      }
    ],
    eligibility: "Graduation in BCA/B.Sc Computer Science or equivalent with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,20,000" },
      annualFee: { prime: "₹46,000/year" },
      semesterFee: { prime: "₹24,000/sem" },
      semesters: 4
    }
  },
  {
    id: 15,
    slug: "online-mca-sikkim-manipal-university",
    degreeSlug: "mca-online",
    title: "Online MCA - Sikkim Manipal University (SMU)",
    shortTitle: "Online MCA (SMU)",
    category: "technology",
    categoryLabel: "Computer & IT",
    university: "Sikkim Manipal University",
    universitySlug: "sikkim-manipal-university",
    universityShortName: "SMU",
    duration: "2 Years",
    level: "Postgraduate",
    mode: "100% Online",
    description: "UGC-DEB recognized 2-year Online MCA with over 28 years legacy, pocket-friendly semester fee of ₹24,500, and proctored exams.",
    fullDescription: "SMU Online MCA prepares learners for senior software roles with modular e-learning and dedicated faculty mentoring.",
    highlights: ["Fee ₹24,500/Semester", "NAAC A+ Accredited", "28+ Years Legacy", "Weekend AI-Proctored Exams"],
    careerRoles: ["Software Developer", "System Administrator", "Data Analyst", "Database Manager"],
    rating: 4.7,
    reviewsCount: 810,
    students: "8,500+",
    fee: "₹98,000",
    semesterFee: "₹24,500/sem",
    emi: "₹2,040/mo",
    image: "/courses/mca_premium.jpg",
    tag: "Under ₹1 Lakh",
    programStructure: [
      {
        semester: "Semester 1 to 4",
        subjects: [
          { name: "Advanced Computing Systems", credits: 12 },
          { name: "Enterprise Programming & DB", credits: 12 },
          { name: "Project Dissertation", credits: 6 }
        ]
      }
    ],
    eligibility: "Graduation in BCA or with Math at 10+2 level with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹500",
      fullFee: { prime: "₹98,000" },
      annualFee: { prime: "₹49,000/year" },
      semesterFee: { prime: "₹24,500/sem" },
      semesters: 4
    }
  },

  // 4. BBA Courses
  {
    id: 16,
    slug: "online-bba-amity-university",
    degreeSlug: "bba-online",
    title: "Bachelor of Business Administration (BBA) - Amity University",
    shortTitle: "Online BBA (Amity)",
    category: "business",
    categoryLabel: "Management",
    university: "Amity University",
    universitySlug: "amity-university",
    universityShortName: "Amity",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online (UGC Approved)",
    description: "Foundational 3-year undergraduate degree in modern business administration, finance, marketing, and entrepreneurship.",
    fullDescription: "Amity Online BBA builds strong management fundamentals for high school graduates and working professionals. Learn marketing fundamentals, micro & macroeconomics, business law, and data analytics with flexible online modules.",
    highlights: ["Industry Oriented Curriculum", "Live Interactive Case Studies", "Top B-School Faculty", "0% No-Cost EMI"],
    careerRoles: ["Business Analyst", "Marketing Coordinator", "Operations Associate", "Sales Manager"],
    rating: 4.8,
    reviewsCount: 1100,
    students: "9,000+",
    fee: "₹1,65,000",
    semesterFee: "₹27,500/sem",
    emi: "₹2,300/mo",
    image: "/courses/bba_premium.jpg",
    tag: "Top UG Business",
    programStructure: [
      {
        semester: "Year 1 to 3",
        subjects: [
          { name: "Principles of Management", credits: 12 },
          { name: "Marketing & Financial Management", credits: 16 },
          { name: "Strategic Management & Project", credits: 12 }
        ]
      }
    ],
    eligibility: "10+2 from a recognized educational board with minimum 50% aggregate marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,65,000" },
      annualFee: { prime: "₹55,000/year" },
      semesterFee: { prime: "₹27,500/sem" },
      semesters: 6
    }
  },
  {
    id: 17,
    slug: "online-bba-manipal-university-jaipur",
    degreeSlug: "bba-online",
    title: "Online BBA - Manipal University Jaipur (MUJ)",
    shortTitle: "Online BBA (MUJ)",
    category: "business",
    categoryLabel: "Management",
    university: "Manipal University Jaipur",
    universitySlug: "manipal-university-jaipur",
    universityShortName: "MUJ Online",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online",
    description: "NAAC A++ accredited BBA program with Coursera certificates, industry projects, and high placement value.",
    fullDescription: "Manipal University Jaipur Online BBA delivers world-class management education with Harvard case studies and Coursera certifications.",
    highlights: ["NAAC A++ Grade", "Coursera Certifications", "Prestigious Manipal Alumni", "EMI from ₹1,875/mo"],
    careerRoles: ["Business Associate", "Marketing Specialist", "Sales Lead", "HR Coordinator"],
    rating: 4.8,
    reviewsCount: 950,
    students: "8,500+",
    fee: "₹1,35,000",
    semesterFee: "₹22,500/sem",
    emi: "₹1,875/mo",
    image: "/courses/bba_premium.jpg",
    tag: "NAAC A++",
    programStructure: [
      {
        semester: "Year 1 to 3",
        subjects: [
          { name: "Core Business Principles", credits: 16 },
          { name: "Marketing & Finance Strategy", credits: 16 },
          { name: "Capstone Project", credits: 8 }
        ]
      }
    ],
    eligibility: "10+2 in any stream with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,35,000" },
      annualFee: { prime: "₹45,000/year" },
      semesterFee: { prime: "₹22,500/sem" },
      semesters: 6
    }
  },
  {
    id: 18,
    slug: "online-bba-uttaranchal-university",
    degreeSlug: "bba-online",
    title: "Online BBA - Uttaranchal University",
    shortTitle: "Online BBA (Uttaranchal)",
    category: "business",
    categoryLabel: "Management",
    university: "Uttaranchal University",
    universitySlug: "uttaranchal-university",
    universityShortName: "Uttaranchal Online",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online",
    description: "Cost effective 3-year Online BBA with NAAC A+ accreditation and complete digital learning.",
    fullDescription: "Uttaranchal University Online BBA provides affordable business management training with flexible semester payments of ₹17,000.",
    highlights: ["Affordable ₹17,000/Sem", "One Time Special ₹96,000", "NAAC A+ Accredited", "Career Support"],
    careerRoles: ["Business Executive", "Sales Trainee", "Accounts Associate", "HR Trainee"],
    rating: 4.7,
    reviewsCount: 680,
    students: "6,000+",
    fee: "₹1,20,000",
    semesterFee: "₹17,000/sem",
    emi: "₹1,420/mo",
    image: "/courses/bba_premium.jpg",
    tag: "Affordable BBA",
    programStructure: [
      {
        semester: "Year 1 to 3",
        subjects: [
          { name: "Management Fundamentals", credits: 12 },
          { name: "Functional Business Areas", credits: 16 },
          { name: "Final Project", credits: 6 }
        ]
      }
    ],
    eligibility: "10+2 from recognized board with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,20,000" },
      annualFee: { prime: "₹34,000/year" },
      semesterFee: { prime: "₹17,000/sem" },
      semesters: 6
    }
  },

  // 5. B.Com Courses
  {
    id: 19,
    slug: "online-bcom-amity-university",
    degreeSlug: "bcom-online",
    title: "Bachelor of Commerce (B.Com) - Amity University",
    shortTitle: "Online B.Com (Amity)",
    category: "commerce",
    categoryLabel: "Commerce",
    university: "Amity University",
    universitySlug: "amity-university",
    universityShortName: "Amity",
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
    fee: "₹99,000",
    semesterFee: "₹16,500/sem",
    emi: "₹1,375/mo",
    image: "/courses/bcom_premium.jpg",
    tag: "Under ₹1 Lakh",
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
    eligibility: "10+2 from a recognized board with minimum 50% aggregate marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹99,000" },
      annualFee: { prime: "₹33,000/year" },
      semesterFee: { prime: "₹16,500/sem" },
      semesters: 6
    }
  },
  {
    id: 20,
    slug: "online-bcom-manipal-university-jaipur",
    degreeSlug: "bcom-online",
    title: "Online B.Com - Manipal University Jaipur (MUJ)",
    shortTitle: "Online B.Com (MUJ)",
    category: "commerce",
    categoryLabel: "Commerce",
    university: "Manipal University Jaipur",
    universitySlug: "manipal-university-jaipur",
    universityShortName: "MUJ Online",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online",
    description: "NAAC A++ accredited B.Com degree with comprehensive accounting, taxation, and corporate governance curriculum.",
    fullDescription: "Manipal Jaipur Online B.Com blends academic commerce training with digital Coursera certifications and placement guidance.",
    highlights: ["NAAC A++ Grade", "Coursera for Campus Access", "Affordable ₹16,500/Sem", "0% EMI Available"],
    careerRoles: ["Accountant", "Tax Associate", "Banking Officer", "Audit Analyst"],
    rating: 4.8,
    reviewsCount: 890,
    students: "8,200+",
    fee: "₹99,000",
    semesterFee: "₹16,500/sem",
    emi: "₹1,375/mo",
    image: "/courses/bcom_premium.jpg",
    tag: "NAAC A++",
    programStructure: [
      {
        semester: "Year 1 to 3",
        subjects: [
          { name: "Accounting & Commercial Law", credits: 16 },
          { name: "Taxation & Auditing", credits: 16 },
          { name: "Corporate Finance Project", credits: 8 }
        ]
      }
    ],
    eligibility: "10+2 in any stream with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹99,000" },
      annualFee: { prime: "₹33,000/year" },
      semesterFee: { prime: "₹16,500/sem" },
      semesters: 6
    }
  },

  // 6. M.Com Courses
  {
    id: 21,
    slug: "online-mcom-amity-university",
    degreeSlug: "mcom-online",
    title: "Master of Commerce (M.Com) - Amity University",
    shortTitle: "Online M.Com (Amity)",
    category: "commerce",
    categoryLabel: "Commerce",
    university: "Amity University",
    universitySlug: "amity-university",
    universityShortName: "Amity",
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
    fee: "₹1,20,000",
    semesterFee: "₹30,000/sem",
    emi: "₹2,500/mo",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    tag: "Finance Special",
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
    eligibility: "Bachelor's Degree in Commerce (B.Com / BBA / Economics) with minimum 50% aggregate marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,20,000" },
      annualFee: { prime: "₹60,000/year" },
      semesterFee: { prime: "₹30,000/sem" },
      semesters: 4
    }
  },
  {
    id: 22,
    slug: "online-mcom-manipal-university-jaipur",
    degreeSlug: "mcom-online",
    title: "Online M.Com - Manipal University Jaipur (MUJ)",
    shortTitle: "Online M.Com (MUJ)",
    category: "commerce",
    categoryLabel: "Commerce",
    university: "Manipal University Jaipur",
    universitySlug: "manipal-university-jaipur",
    universityShortName: "MUJ Online",
    duration: "2 Years",
    level: "Postgraduate",
    mode: "100% Online",
    description: "NAAC A++ accredited M.Com program with financial risk analysis, taxation laws, and Coursera certifications.",
    fullDescription: "Manipal Jaipur Online M.Com is structured for commerce graduates aiming for corporate finance leadership or NET lectureship.",
    highlights: ["NAAC A++ Grade", "Affordable ₹27,000/Sem", "Coursera for Campus Bundle", "UGC NET Eligible"],
    careerRoles: ["Finance Manager", "Corporate Tax Consultant", "Account Lead", "Lecturer"],
    rating: 4.8,
    reviewsCount: 520,
    students: "4,200+",
    fee: "₹1,08,000",
    semesterFee: "₹27,000/sem",
    emi: "₹2,250/mo",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    tag: "High Value",
    programStructure: [
      {
        semester: "Semester 1 to 4",
        subjects: [
          { name: "Advanced Accounting & Tax", credits: 16 },
          { name: "Financial Risk & Strategy", credits: 16 },
          { name: "Dissertation", credits: 6 }
        ]
      }
    ],
    eligibility: "B.Com / BBA / Economics graduation with minimum 50% marks.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹1,08,000" },
      annualFee: { prime: "₹54,000/year" },
      semesterFee: { prime: "₹27,000/sem" },
      semesters: 4
    }
  },

  // 7. BA & MA Courses
  {
    id: 23,
    slug: "online-ba-amity-university",
    degreeSlug: "ba-online",
    title: "Bachelor of Arts (BA) - Amity University",
    shortTitle: "Online BA (Amity)",
    category: "arts",
    categoryLabel: "Arts & Humanities",
    university: "Amity University",
    universitySlug: "amity-university",
    universityShortName: "Amity",
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
    fee: "₹95,000",
    semesterFee: "₹16,500/sem",
    emi: "₹1,320/mo",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    tag: "Civil Services",
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
      fullFee: { prime: "₹95,000" },
      annualFee: { prime: "₹31,600/year" },
      semesterFee: { prime: "₹16,500/sem" },
      semesters: 6
    }
  },
  {
    id: 24,
    slug: "online-ba-uttaranchal-university",
    degreeSlug: "ba-online",
    title: "Online BA - Uttaranchal University",
    shortTitle: "Online BA (Uttaranchal)",
    category: "arts",
    categoryLabel: "Arts & Humanities",
    university: "Uttaranchal University",
    universitySlug: "uttaranchal-university",
    universityShortName: "Uttaranchal Online",
    duration: "3 Years",
    level: "Undergraduate",
    mode: "100% Online",
    description: "Most affordable online BA degree starting at ₹10,200/sem, ideal for civil services aspirants.",
    fullDescription: "Uttaranchal University Online BA offers UGC recognized quality education in English, Political Science, and Sociology.",
    highlights: ["Super Low ₹10,200/Sem", "One Time Special ₹55,200", "NAAC A+ Grade", "UGC Approved"],
    careerRoles: ["Government Job Aspirant", "Public Relations", "Content Associate"],
    rating: 4.7,
    reviewsCount: 580,
    students: "5,200+",
    fee: "₹72,000",
    semesterFee: "₹10,200/sem",
    emi: "₹850/mo",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
    tag: "Lowest Fee",
    programStructure: [
      {
        semester: "Year 1 to 3",
        subjects: [
          { name: "English & Political Theory", credits: 16 },
          { name: "Sociology & History", credits: 16 }
        ]
      }
    ],
    eligibility: "10+2 from recognized board.",
    feeStructure: {
      admissionFee: "₹1,200",
      fullFee: { prime: "₹72,000" },
      annualFee: { prime: "₹18,400/year" },
      semesterFee: { prime: "₹10,200/sem" },
      semesters: 6
    }
  },
  {
    id: 25,
    slug: "online-ma-amity-university",
    degreeSlug: "ma-online",
    title: "Master of Arts (MA) - Amity University",
    shortTitle: "Online MA (Amity)",
    category: "arts",
    categoryLabel: "Arts & Humanities",
    university: "Amity University",
    universitySlug: "amity-university",
    universityShortName: "Amity",
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
    fee: "₹1,30,000",
    semesterFee: "₹32,500/sem",
    emi: "₹2,700/mo",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    tag: "Higher Studies",
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
      fullFee: { prime: "₹1,30,000" },
      annualFee: { prime: "₹65,000/year" },
      semesterFee: { prime: "₹32,500/sem" },
      semesters: 4
    }
  }
];

// Helper to look up an individual course by slug or id
export function getCourseBySlugOrId(idOrSlug: string): CourseDetailItem | undefined {
  const clean = idOrSlug.toLowerCase().trim();
  const numId = parseInt(clean);
  return allCourses.find((c) => c.slug === clean || (!isNaN(numId) && c.id === numId));
}
