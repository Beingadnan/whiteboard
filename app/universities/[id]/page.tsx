"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function UniversityDetail() {
  const params = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("courses");
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

  const universities = [
    {
      id: 1,
      slug: "amity-university",
      name: "Amity University Online",
      shortName: "Amity",
      tagline: "India's #1 Ranked Online University by QS World Ranking",
      description: "Amity University Online offers UGC-accredited online degrees, diplomas, and certifications in India, providing learners with a digitally advanced platform and globally recognized education designed to meet modern industry needs and support career growth.",
      fullDescription: "Amity University Online offers UGC-accredited online degrees, diplomas, and certifications in India, providing learners with a digitally advanced platform and globally recognized education designed to meet modern industry needs and support career growth.",
      programs: ["Engineering", "Business", "Law", "Arts"],
      location: "Noida / Pan-India",
      rating: 4.8,
      students: "50,000+",
      established: "2005",
      image: "/university/amity-noida-campus.jpg",
      naacGrade: "A+ Grade",
      ugcApproved: true,
      accreditations: ["NAAC A+", "WES", "QS WUR", "NIRF Top", "AICTE", "AIU", "UGC DEB"],
      keyFeatures: [
        "Recognized by UGC, AIU, WES, and others, holding an A+ NAAC accreditation and ranked among top universities globally by NIRF and QS World Ranking",
        "Amity Online is placed within the top 3% globally by QS, with its online MBA ranked #1 in India and #37 worldwide",
        "Global exposure through renowned international faculty members and industry leaders from across the globe",
        "Programs at Amity University Online hold full credential accreditation from WES in both the US and Canada",
        "With over 300+ hiring partners, the university facilitates placements through exclusive virtual job fairs and mock interviews"
      ],
      feeTables: [
        {
          title: "Undergraduate (UG) – Fee Structure (INR)",
          headers: ["Program", "Retail Price", "One Time Fee", "Semester Fee", "Yearly Installment"],
          rows: [
            { "Program": "BA (Bachelor of Arts)", "Retail Price": "₹99,000", "One Time Fee": "₹87,120", "Semester Fee": "₹16,500 x 6", "Yearly Installment": "₹31,350/yr" },
            { "Program": "BA (Vernacular)", "Retail Price": "₹85,000", "One Time Fee": "₹85,000", "Semester Fee": "₹14,500 x 6", "Yearly Installment": "₹28,340/yr" },
            { "Program": "BBA (Bachelor of Business Admin)", "Retail Price": "₹1,65,000", "One Time Fee": "₹1,45,200", "Semester Fee": "₹27,500 x 6", "Yearly Installment": "₹52,250/yr" },
            { "Program": "BBA (HCLTech Data Analytics)", "Retail Price": "₹2,25,000", "One Time Fee": "₹1,98,000", "Semester Fee": "₹37,500 x 6", "Yearly Installment": "₹71,250/yr" },
            { "Program": "B.Com (Bachelor of Commerce)", "Retail Price": "₹99,000", "One Time Fee": "₹87,120", "Semester Fee": "₹16,500 x 6", "Yearly Installment": "₹31,350/yr" },
            { "Program": "B.Com (ACCA)", "Retail Price": "₹2,50,000", "One Time Fee": "₹2,20,000", "Semester Fee": "₹41,700 x 6", "Yearly Installment": "₹79,170/yr" },
            { "Program": "BCA (Computer Applications)", "Retail Price": "₹1,50,000", "One Time Fee": "₹1,32,000", "Semester Fee": "₹25,000 x 6", "Yearly Installment": "₹47,500/yr" },
            { "Program": "BCA (HCLTech / TCS iON)", "Retail Price": "₹2,25,000", "One Time Fee": "₹1,98,000", "Semester Fee": "₹37,500 x 6", "Yearly Installment": "₹71,250/yr" }
          ]
        },
        {
          title: "Postgraduate (PG) – Fee Structure (INR)",
          headers: ["Program", "Retail Price", "One Time Fee", "Semester Fee", "Specialization"],
          rows: [
            { "Program": "Online MBA (General)", "Retail Price": "₹1,99,000", "One Time Fee": "₹1,83,080", "Semester Fee": "₹49,750 x 4", "Specialization": "Marketing, Finance, HR, Ops" },
            { "Program": "Online MBA (Dual Specialization)", "Retail Price": "₹2,99,000", "One Time Fee": "₹2,75,080", "Semester Fee": "₹74,750 x 4", "Specialization": "Dual Core Choice" },
            { "Program": "Online MBA (Immersion)", "Retail Price": "₹4,75,000", "One Time Fee": "₹4,37,000", "Semester Fee": "₹1,18,750 x 4", "Specialization": "Global Campus Immersion" },
            { "Program": "Online MCA (General)", "Retail Price": "₹1,70,000", "One Time Fee": "₹1,56,400", "Semester Fee": "₹42,500 x 4", "Specialization": "Full Stack & Cloud" },
            { "Program": "Online MCA (Data Science / AI)", "Retail Price": "₹2,50,000", "One Time Fee": "₹2,30,000", "Semester Fee": "₹62,500 x 4", "Specialization": "AI, ML, Cybersecurity" },
            { "Program": "Online M.Com (Fin & Acct)", "Retail Price": "₹1,20,000", "One Time Fee": "₹1,10,400", "Semester Fee": "₹30,000 x 4", "Specialization": "Corporate Finance" },
            { "Program": "Online MA (English / Sociology)", "Retail Price": "₹1,30,000", "One Time Fee": "₹1,19,600", "Semester Fee": "₹32,500 x 4", "Specialization": "Humanities" }
          ]
        }
      ],
      courses: [
        { name: "Online MBA", duration: "2 years", fullFee: "₹1,99,000", discountFee: "Sem ₹49,750 / One-Time ₹1,83,080" },
        { name: "Online MBA (Dual Specialization)", duration: "2 years", fullFee: "₹2,99,000", discountFee: "Sem ₹74,750 / One-Time ₹2,75,080" },
        { name: "Online BBA", duration: "3 years", fullFee: "₹1,65,000", discountFee: "Sem ₹27,500 x 6" },
        { name: "Online MCA", duration: "2 years", fullFee: "₹1,70,000", discountFee: "Sem ₹42,500 x 4" },
        { name: "Online BCA", duration: "3 years", fullFee: "₹1,50,000", discountFee: "Sem ₹25,000 x 6" },
        { name: "Online B.Com", duration: "3 years", fullFee: "₹99,000", discountFee: "Sem ₹16,500 x 6" },
        { name: "Online M.Com", duration: "2 years", fullFee: "₹1,20,000", discountFee: "Sem ₹30,000 x 4" },
        { name: "Online BA", duration: "3 years", fullFee: "₹99,000", discountFee: "Sem ₹16,500 x 6" },
        { name: "Online MA", duration: "2 years", fullFee: "₹1,30,000", discountFee: "Sem ₹32,500 x 4" }
      ],
      admissionProcess: [
        "Step 1: Application Form - Click Apply Now and fill basic academic & personal details.",
        "Step 2: Document Verification - Upload 10th, 12th, or Graduation marksheets with government ID.",
        "Step 3: Fee Payment - Choose full payment discount or simple 0% interest semester installment.",
        "Step 4: Student Portal (LMS) Access - Receive student ID, portal login, and study materials immediately."
      ],
      benefits: [
        "UGC-DEB entitled online degrees recognized worldwide for Govt jobs and overseas education",
        "Ranked #1 in India and #37 worldwide in QS World Online MBA rankings",
        "WES recognized in USA & Canada for smooth permanent residency and work visa evaluation",
        "300+ Corporate Hiring Partners with 100% placement and mock interview support",
        "Learn from top global faculty with live interactive doubt-clearing sessions"
      ],
      programBenefits: [
        "First in India to receive UGC approval for online programs",
        "Ranked among the top 3% of universities worldwide",
        "Dedicated student relationship managers for continuous guidance",
        "AI-enabled proctored online examinations from the comfort of home"
      ],
      placementPartners: ["Amazon", "Deloitte", "Tech Mahindra", "Wipro", "Infosys", "TCS", "Accenture", "Capgemini", "Cognizant", "HCL", "IBM", "Microsoft", "Oracle", "SAP", "L&T", "Reliance", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak"],
      faqs: [
        {
          question: "Is Amity Online degree valid for UPSC and government jobs?",
          answer: "Yes, absolutely. Amity Online is accredited by NAAC with an 'A+' grade and entitled by UGC-DEB. Its degrees have equal validity to traditional regular degrees for UPSC, SSC, banking, state PSCs, and overseas studies."
        },
        {
          question: "How are exams conducted at Amity University Online?",
          answer: "All semester examinations are conducted 100% online through an AI-proctored secure portal. You can schedule and appear for exams from home with a computer and stable internet connection."
        },
        {
          question: "Can I pay the tuition fee in monthly installments?",
          answer: "Yes! Amity Online offers easy semester payment plans as well as 0% interest No-Cost EMI options starting from as low as ₹3,500/month."
        },
        {
          question: "Are live lectures recorded for later viewing?",
          answer: "Yes. All live sessions are recorded and archived in your Learning Management System (LMS) portal so you can watch them anytime, anywhere at your convenience."
        }
      ]
    },
    {
      id: 2,
      slug: "uttaranchal-university",
      name: "Uttaranchal University",
      shortName: "Uttaranchal",
      tagline: "Premier NAAC A+ Accredited University with High ROI",
      description: "Established in 2013, Uttaranchal University located in Dehradun, Uttarakhand, is recognized with NAAC A+ accreditation offering quality higher education through affordable online programs.",
      fullDescription: "Established in 2013, Uttaranchal University, located in Dehradun, Uttarakhand, is recognized by NAAC as an esteemed institution offering quality higher education through affordable online programs.",
      programs: ["Engineering", "Management", "Law", "Applied Sciences"],
      location: "Dehradun, Uttarakhand",
      rating: 4.7,
      students: "15,000+",
      established: "2013",
      image: "/university/uttaranchal_campus_premium.jpg",
      naacGrade: "NAAC A+",
      ugcApproved: true,
      accreditations: ["UGC", "AICTE", "NAAC A+", "AIU", "WES", "ISO 9001", "UNAI", "ASSOCHAM"],
      keyFeatures: [
        "NAAC A+ Accredited premier university in Dehradun, Uttarakhand",
        "Online degrees officially recognized by UGC & AICTE for govt & corporate jobs",
        "Pocket-friendly fee structure with semester fees starting from ₹10,200",
        "Comprehensive LMS with high-quality recorded lectures and e-books"
      ],
      feeTables: [
        {
          title: "Uttaranchal University Online – Fee Structure (INR)",
          headers: ["Course", "Total Fee", "Semester Fee", "Annual Fee", "One Time Special"],
          rows: [
            { "Course": "Online BA", "Total Fee": "₹72,000", "Semester Fee": "₹10,200", "Annual Fee": "₹18,400", "One Time Special": "₹55,200" },
            { "Course": "Online BBA", "Total Fee": "₹1,20,000", "Semester Fee": "₹17,000", "Annual Fee": "₹32,000", "One Time Special": "₹96,000" },
            { "Course": "Online BCA", "Total Fee": "₹1,20,000", "Semester Fee": "₹17,000", "Annual Fee": "₹32,000", "One Time Special": "₹96,000" },
            { "Course": "Online MBA", "Total Fee": "₹1,40,000", "Semester Fee": "₹24,500", "Annual Fee": "₹47,000", "One Time Special": "₹94,000" },
            { "Course": "Online MCA", "Total Fee": "₹1,20,000", "Semester Fee": "₹24,000", "Annual Fee": "₹46,000", "One Time Special": "₹92,000" }
          ]
        }
      ],
      feeNote: "Exam Fee: ₹2,500 per semester",
      courses: [
        { name: "Online BA", duration: "3 years", fullFee: "₹72,000", discountFee: "Sem ₹10,200 / One-Time ₹55,200" },
        { name: "Online BBA", duration: "3 years", fullFee: "₹1,20,000", discountFee: "Sem ₹17,000 / One-Time ₹96,000" },
        { name: "Online BCA", duration: "3 years", fullFee: "₹1,20,000", discountFee: "Sem ₹17,000 / One-Time ₹96,000" },
        { name: "Online MBA", duration: "2 years", fullFee: "₹1,40,000", discountFee: "Sem ₹24,500 / One-Time ₹94,000" },
        { name: "Online MCA", duration: "2 years", fullFee: "₹1,20,000", discountFee: "Sem ₹24,000 / One-Time ₹92,000" }
      ],
      admissionProcess: [
        "Select your course and complete digital registration on the portal",
        "Verify contact information and mobile OTP",
        "Submit academic credentials and identification documents",
        "Pay the initial semester fee or apply for 0% interest EMI",
        "Receive your student registration number and start learning"
      ],
      benefits: [
        "UGC and AICTE recognized online degree programs",
        "NAAC A+ Accredited University with high academic standards",
        "Most affordable fee structure in northern India",
        "Career services department providing resume building and interview prep"
      ],
      programBenefits: [
        "UGC-recognized state private university",
        "NAAC A+ Accredited",
        "AICTE Approved online programs"
      ],
      placementPartners: ["Amazon", "Deloitte", "Tech Mahindra", "Wipro", "Infosys", "TCS", "Accenture", "Capgemini", "Cognizant", "HCL", "IBM"],
      faqs: [
        {
          question: "What are the advantages of Uttaranchal University Online?",
          answer: "Uttaranchal University offers UGC and AICTE recognized programs with NAAC A+ accreditation at an extremely competitive cost, making quality education accessible to all."
        },
        {
          question: "Is Online MBA at Uttaranchal University good for career growth?",
          answer: "Yes, the 2-year Online MBA is AICTE approved, covers industry-relevant management fundamentals, and connects students with corporate placement opportunities across IT, BFSI, and FMCG sectors."
        }
      ]
    },
    {
      id: 3,
      slug: "sikkim-manipal-university",
      name: "Sikkim Manipal University",
      shortName: "SMU",
      tagline: "Pioneer in Distance & Online Education Since 1995",
      description: "Established in 1995, Sikkim Manipal University (SMU) is a premier UGC-entitled university offering affordable online degrees with a focus on innovation, industry readiness, and student flexibility.",
      fullDescription: "Established in 1995, Sikkim Manipal University (SMU) aims to strengthen education and skill development, especially in the Northeast. NAAC A+ accredited and UGC-entitled, SMU offers affordable online degree programs.",
      programs: ["Distance MBA", "Distance BBA", "Distance MCA", "Health Sciences"],
      location: "Gangtok, Sikkim",
      rating: 4.6,
      students: "35,000+",
      established: "1995",
      image: "/university/sikkim-manipal-campus.jpg",
      naacGrade: "NAAC A+",
      ugcApproved: true,
      accreditations: ["UGC DEB", "NIRF", "NAAC A+", "AICTE", "AIU", "THE WEEK", "QS-WUR"],
      keyFeatures: [
        "Established in 1995 in partnership with the Manipal Pai Foundation",
        "Over 28 years of trusted academic excellence",
        "5,00,000+ alumni network working across global organizations",
        "Ranked 51st among India's Best Multidisciplinary Universities"
      ],
      feeTables: [
        {
          title: "Sikkim Manipal University – Fee Structure (INR)",
          headers: ["Program", "Semester Fee", "Annual Fee", "Total Program Fee"],
          rows: [
            { "Program": "Online BA", "Semester Fee": "₹12,500", "Annual Fee": "₹25,000", "Total Program Fee": "₹75,000" },
            { "Program": "Online B.Com", "Semester Fee": "₹12,500", "Annual Fee": "₹25,000", "Total Program Fee": "₹75,000" },
            { "Program": "Online MA (English / Sociology)", "Semester Fee": "₹18,750", "Annual Fee": "₹37,500", "Total Program Fee": "₹75,000" },
            { "Program": "Online MBA", "Semester Fee": "₹27,500", "Annual Fee": "₹55,000", "Total Program Fee": "₹1,10,000" },
            { "Program": "Online MCA", "Semester Fee": "₹24,500", "Annual Fee": "₹49,000", "Total Program Fee": "₹98,000" }
          ]
        }
      ],
      courses: [
        { name: "Online BA", duration: "3 years", fullFee: "₹75,000", discountFee: "Sem ₹12,500" },
        { name: "Online B.Com", duration: "3 years", fullFee: "₹75,000", discountFee: "Sem ₹12,500" },
        { name: "Online MA", duration: "2 years", fullFee: "₹75,000", discountFee: "Sem ₹18,750" },
        { name: "Online MBA", duration: "2 years", fullFee: "₹1,10,000", discountFee: "Sem ₹27,500" },
        { name: "Online MCA", duration: "2 years", fullFee: "₹98,000", discountFee: "Sem ₹24,500" }
      ],
      admissionProcess: [
        "Choose your degree program and check eligibility",
        "Fill the online registration form and upload clear scanned certificates",
        "Complete fee verification and secure your seat",
        "Receive LMS login credentials with 24/7 student support"
      ],
      benefits: [
        "Decades of trusted legacy with high employer recognition",
        "Accredited by UGC, AICTE, AIU and NAAC with A+ grade",
        "Affordable fee structure with straightforward installment plans",
        "Comprehensive digital learning platform with access from phone or PC"
      ],
      programBenefits: [
        "Approved by UGC DEB",
        "Recognized by NIRF and AIU",
        "Decades of academic legacy"
      ],
      placementPartners: ["Amazon", "Deloitte", "Tech Mahindra", "Wipro", "Infosys", "TCS", "Accenture", "Capgemini", "Cognizant", "HCL", "IBM", "Reliance", "HDFC Bank", "ICICI Bank"],
      faqs: [
        {
          question: "Is SMU online degree recognized for employment?",
          answer: "Yes, Sikkim Manipal University degrees are recognized by UGC, AICTE, and AIU, making them fully accepted for private corporate jobs as well as government examinations."
        },
        {
          question: "Do I need to visit the campus for exams?",
          answer: "No, exams and academic sessions are conducted completely online, making it ideal for working professionals."
        }
      ]
    },
    {
      id: 4,
      slug: "manipal-university-jaipur",
      name: "Manipal University Jaipur",
      shortName: "MUJ",
      tagline: "NAAC A++ Accredited Excellence with Coursera Certifications",
      description: "Manipal University Jaipur (MUJ) Online delivers world-class digital education with NAAC A++ accreditation, offering 13+ career-focused specializations, campus immersion options, and global faculty.",
      fullDescription: "Online Manipal University is a division of the prestigious Manipal University Jaipur (MUJ). UGC authorized and NAAC A++ accredited.",
      programs: ["Engineering", "Management", "Design", "Humanities"],
      location: "Jaipur, Rajasthan",
      rating: 4.8,
      students: "25,000+",
      established: "2011",
      image: "/university/ManipalUniversityJaipur%28MUJ%29.jpeg",
      naacGrade: "NAAC A++",
      ugcApproved: true,
      accreditations: ["NAAC A++", "NIRF", "UGC DEB", "AICTE", "NBA", "WES", "THE WEEK", "QS-WUR"],
      keyFeatures: [
        "UGC-entitled state private university with highest NAAC A++ rating",
        "13 Career-Focused electives including Analytics, FinTech, and Digital Marketing",
        "Free access to Coursera for Campus certification programs",
        "Prestigious Manipal global alumni network of over 300,000 leaders"
      ],
      feeTables: [
        {
          title: "Manipal University Jaipur (MUJ Online) – Fee Structure (INR)",
          headers: ["Program", "Total Course Fee", "Semester Fee", "Duration"],
          rows: [
            { "Program": "Online BCA", "Total Course Fee": "₹1,35,000", "Semester Fee": "₹22,500 x 6", "Duration": "3 Years" },
            { "Program": "Online BBA", "Total Course Fee": "₹1,35,000", "Semester Fee": "₹22,500 x 6", "Duration": "3 Years" },
            { "Program": "Online MBA", "Total Course Fee": "₹1,75,000", "Semester Fee": "₹43,750 x 4", "Duration": "2 Years" },
            { "Program": "Online B.Com", "Total Course Fee": "₹99,000", "Semester Fee": "₹16,500 x 6", "Duration": "3 Years" },
            { "Program": "Online MCA", "Total Course Fee": "₹1,58,000", "Semester Fee": "₹39,500 x 4", "Duration": "2 Years" },
            { "Program": "Online M.Com", "Total Course Fee": "₹1,08,000", "Semester Fee": "₹27,000 x 4", "Duration": "2 Years" },
            { "Program": "Online MA (J&MC)", "Total Course Fee": "₹1,40,000", "Semester Fee": "₹35,000 x 4", "Duration": "2 Years" }
          ]
        }
      ],
      courses: [
        { name: "Online BCA", duration: "3 years", fullFee: "₹1,35,000", discountFee: "₹22,500/sem" },
        { name: "Online BBA", duration: "3 years", fullFee: "₹1,35,000", discountFee: "₹22,500/sem" },
        { name: "Online MBA", duration: "2 years", fullFee: "₹1,75,000", discountFee: "₹43,750/sem" },
        { name: "Online B.Com", duration: "3 years", fullFee: "₹99,000", discountFee: "₹16,500/sem" },
        { name: "Online MCA", duration: "2 years", fullFee: "₹1,58,000", discountFee: "₹39,500/sem" },
        { name: "Online M.Com", duration: "2 years", fullFee: "₹1,08,000", discountFee: "₹27,000/sem" },
        { name: "Online MA (J&MC)", duration: "2 years", fullFee: "₹1,40,000", discountFee: "₹35,000/sem" }
      ],
      admissionProcess: [
        "Select your preferred program and register online",
        "Upload required qualification certificates for eligibility check",
        "Pay application/semester fee securely with multiple EMI options",
        "Get access to learning platform, live webinar schedule, and Coursera bundle"
      ],
      benefits: [
        "Highest NAAC A++ accreditation ensuring unmatched degree value",
        "13 industry-aligned specializations tailored for modern business challenges",
        "Dedicated placement assistance with career readiness bootcamps",
        "Optional on-campus immersion to connect with faculty and fellow peers"
      ],
      programBenefits: [
        "NAAC A++ highest accredited",
        "WES & AICTE approved",
        "Award winning digital education platform"
      ],
      placementPartners: ["Amazon", "Deloitte", "Tech Mahindra", "Wipro", "Infosys", "TCS", "Accenture", "Capgemini", "Cognizant", "HCL", "IBM", "Microsoft", "Oracle", "SAP", "L&T", "Reliance", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak"],
      faqs: [
        {
          question: "Does Online Manipal provide career support?",
          answer: "Yes, MUJ Online provides full placement assistance including resume building, mock interviews, career mentoring, and direct interview opportunities with over 300+ recruiters."
        },
        {
          question: "Is Manipal Online MBA recognized by WES for abroad visas?",
          answer: "Yes, Manipal University Jaipur is approved by WES, ensuring seamless credential evaluation for higher studies or immigration in the US and Canada."
        }
      ]
    },
    {
      id: 5,
      slug: "mit-university",
      name: "MIT University (MIT)",
      shortName: "MIT",
      tagline: "Excellence in Engineering, Tech & Applied Management",
      description: "A prestigious institution known for technical innovation, practical project based learning, and deep corporate integrations across leading manufacturing and tech sectors.",
      fullDescription: "MIT University is a prestigious institution known for excellence in engineering and technology education with strong industry connections.",
      programs: ["Engineering", "Technology", "Aeronautics", "Automotive"],
      location: "Pune / Chennai",
      rating: 4.9,
      students: "18,000+",
      established: "1983",
      image: "/university/%20MITUniversity.jpeg",
      naacGrade: "NAAC A+",
      ugcApproved: true,
      accreditations: ["NAAC A+", "UGC", "AICTE", "NBA", "AIU"],
      keyFeatures: [
        "Prestigious technical legacy with high industry recognition",
        "Excellence in applied engineering, IT, and management",
        "High average placement packages in top tech firms",
        "Industry-mentored capstone projects and internships"
      ],
      courses: [
        { name: "Online MBA", duration: "2 years", fullFee: "₹1,18,000", discountFee: "₹88,500 Special" },
        { name: "Executive MCA", duration: "2 years", fullFee: "₹1,45,000", discountFee: "₹36,250/sem" }
      ],
      benefits: [
        "Robust corporate network across top tech and manufacturing organizations",
        "Curriculum designed by premier academic and industry veterans",
        "Hands-on practical assessments with real-world case studies"
      ],
      placementPartners: ["Tech Mahindra", "Wipro", "Infosys", "Tata Motors", "Capgemini", "Cognizant"],
      faqs: [
        {
          question: "What programs are offered by MIT University?",
          answer: "MIT University offers recognized programs across Management (Online MBA), Computer Applications (MCA), and specialized technical fields."
        }
      ]
    },
    {
      id: 6,
      slug: "mangalayatan-university",
      name: "Mangalayatan University",
      shortName: "Mangalayatan",
      tagline: "Empowering Futures with Student-Centric Accessible Education",
      description: "A progressive UGC-approved university offering student-friendly degree programs with holistic career guidance, affordable fee structure, and accessible digital learning.",
      fullDescription: "Mangalayatan University is a progressive university offering diverse programs with focus on holistic development. The university is UGC recognized.",
      programs: ["Engineering", "Management", "Law", "Arts & Commerce"],
      location: "Aligarh, Uttar Pradesh",
      rating: 4.6,
      students: "12,000+",
      established: "2006",
      image: "/university/MangalayatanUniversity.png",
      naacGrade: "NAAC A+",
      ugcApproved: true,
      accreditations: ["UGC DEB", "NAAC A+", "AICTE", "AIU"],
      keyFeatures: [
        "UGC recognized programs valid for all state and central govt exams",
        "Designed specifically for working individuals and remote learners",
        "Affordable annual fee structure with simple installment schedules",
        "Flexible online examination slots"
      ],
      courses: [
        { name: "Online B.Com", duration: "3 years", fullFee: "₹1,20,000", discountFee: "₹40,000/year" },
        { name: "Online M.Com", duration: "2 years", fullFee: "₹60,000", discountFee: "₹30,000/year" },
        { name: "Online BBA", duration: "3 years", fullFee: "₹2,25,000", discountFee: "₹75,000/year" },
        { name: "Online MBA", duration: "2 years", fullFee: "₹2,70,000", discountFee: "₹1,35,000/year" }
      ],
      benefits: [
        "UGC-DEB recognized degree programs",
        "Focus on holistic career enhancement",
        "Accessible study material and live doubt resolution"
      ],
      placementPartners: ["Wipro", "Infosys", "TCS", "ICICI Bank", "HDFC Bank"],
      faqs: [
        {
          question: "Is Mangalayatan University UGC Recognized?",
          answer: "Yes, Mangalayatan University is fully recognized by the University Grants Commission (UGC) and Distance Education Bureau (DEB)."
        }
      ]
    }
  ];

  const idParam = params.id as string;
  const universityId = parseInt(idParam);
  const university = useMemo(() => {
    const clean = (idParam || "").toLowerCase().trim();
    const withoutOnline = clean.replace(/-online$/, "");
    return universities.find(
      (u) =>
        u.slug === clean ||
        u.slug === withoutOnline ||
        `${u.slug}-online` === clean ||
        (!isNaN(universityId) && u.id === universityId)
    );
  }, [idParam, universityId]);
  const hasInitialized = useRef<string | null>(null);

  useEffect(() => {
    if (university && hasInitialized.current !== idParam) {
      setFormData(prev => ({ ...prev, university: university.name }));
      hasInitialized.current = idParam;
    }
  }, [idParam, university]);

  if (!university) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-6">
        <div className="text-center max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="text-4xl mb-4">🏫</div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">University Not Found</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">The university you are looking for might have been moved or updated.</p>
          <Link href="/universities" className="inline-block px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl text-sm shadow-md">
            Browse All Universities
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
          university: university.name,
          source: `University Detail - ${university.name}`
        })
      });

      const data = await response.json();
      if (data.success) {
        toast.success("🎉 Consultation booked! Our advisor will reach out to you shortly.", { icon: false });
        setFormData({ name: "", email: "", phone: "", university: university.name, course: "", message: "" });
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
      {/* University Hero Header */}
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0f4c75]/10 to-[#dc2626]/10 blur-3xl pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className={`lg:col-span-8 space-y-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {/* Breadcrumb & Accreditations */}
              <div className="flex flex-wrap items-center gap-2">
                <Link href="/universities" className="text-xs font-semibold text-[#0f4c75] dark:text-[#38bdf8] hover:underline">
                  ← Back to Universities
                </Link>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                  ✓ {university.naacGrade}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                  UGC-DEB Entitled
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white dark:bg-slate-800 p-2.5 shadow-md border border-slate-200 dark:border-slate-700 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {university.name}
                  </h1>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {university.tagline || university.location}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {university.fullDescription}
              </p>

              {/* Quick Stat Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="text-lg font-bold text-[#0f4c75] dark:text-[#38bdf8]">★ {university.rating} / 5.0</div>
                  <div className="text-[11px] text-slate-500">Student Rating</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{university.students}</div>
                  <div className="text-[11px] text-slate-500">Active Students</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="text-lg font-bold text-[#dc2626] dark:text-rose-400">{university.established}</div>
                  <div className="text-[11px] text-slate-500">Established Year</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">100% Online</div>
                  <div className="text-[11px] text-slate-500">Exams & Classes</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById("enquiry-form");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:opacity-95 transition-all"
                >
                  Apply & Get Free Counseling
                </button>
                <a
                  href={`https://wa.me/919335512881?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(university.name)}%20admission%20and%20fees.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:bg-emerald-700 transition-all flex items-center gap-2"
                >
                  <span>💬 Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Quick Lead Card */}
            <div id="enquiry-form" className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Direct Admission Enquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Get fee discounts, syllabus, and 1-on-1 counseling for {university.shortName}.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name *"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address *"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number (+91) *"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                </div>
                <div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  >
                    <option value="">Select Desired Course *</option>
                    {university.courses.map((c, i) => (
                      <option key={i} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:opacity-95 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Admission Guidance"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Subnav for Page Sections */}
      <section className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {[
              { id: "courses", label: "📚 Courses & Fees" },
              { id: "features", label: "⭐ Why Choose Us" },
              { id: "accreditations", label: "🏛️ Accreditations" },
              { id: "admission", label: "📝 Admission Steps" },
              { id: "placements", label: "💼 Placement Partners" },
              { id: "faqs", label: "❓ FAQs" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  const el = document.getElementById(tab.id);
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0f4c75] text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Updated Fee Structure & Courses */}
      <section id="courses" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#0f4c75] dark:text-[#38bdf8] uppercase tracking-wider">
            2026-2027 Academic Year
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Courses & Updated Fee Structure
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            All fees in INR. Installments and 0% No-Cost EMI options available.
          </p>
        </div>

        {/* Detailed Table view if feeTables exist */}
        {"feeTables" in university && Array.isArray((university as { feeTables?: { title: string; headers: string[]; rows: Record<string, string>[] }[] }).feeTables) && (
          <div className="space-y-8 mb-12">
            {(university as { feeTables: { title: string; headers: string[]; rows: Record<string, string>[] }[] }).feeTables.map((tbl, ti) => (
              <div key={ti} className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-md">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {tbl.title}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white">
                        {tbl.headers.map((h, hi) => (
                          <th key={hi} className="px-4 py-3 font-semibold whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {tbl.rows.map((row, ri) => (
                        <tr key={ri} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50">
                          {tbl.headers.map((h, hi) => (
                            <td key={hi} className={`px-4 py-3 whitespace-nowrap ${hi === 0 ? "font-semibold text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"}`}>
                              {row[h] ?? "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {university.courses.map((course, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#0f4c75] dark:text-[#38bdf8] text-[10px] font-bold">
                    {course.duration}
                  </span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ UGC Entitled
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {course.name}
                </h3>
                <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <div><span className="font-semibold text-slate-700 dark:text-slate-200">Total Fee:</span> {course.fullFee}</div>
                  <div><span className="font-semibold text-slate-700 dark:text-slate-200">Plan:</span> {course.discountFee}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <Link
                  href="/courses"
                  className="w-full text-center py-2 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs rounded-xl shadow-sm hover:opacity-95"
                >
                  View Details & Syllabus
                </Link>
                <a
                  href={`https://wa.me/919335512881?text=I%20am%20interested%20in%20${encodeURIComponent(course.name)}%20at%20${encodeURIComponent(university.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-200"
                >
                  💬
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Why Choose Us & Key Features */}
      <section id="features" className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Why Choose {university.shortName}?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Key highlights and unique institutional advantages for students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {university.keyFeatures.map((feat, fi) => (
              <div
                key={fi}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0f4c75] to-[#dc2626] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Accreditations Badges */}
      {university.accreditations && (
        <section id="accreditations" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Rankings & Accreditations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Recognized and authorized by apex regulatory bodies
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {university.accreditations.map((acc, ai) => (
              <div
                key={ai}
                className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-base font-extrabold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  {acc}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Accredited</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 4: Admission Process Roadmap */}
      {university.admissionProcess && (
        <section id="admission" className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Simple 4-Step Admission Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Zero hassle digital admissions with full counselor support
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {university.admissionProcess.map((step, si) => (
                <div
                  key={si}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 relative"
                >
                  <div className="text-2xl font-black text-[#0f4c75] dark:text-[#38bdf8] mb-2">
                    0{si + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Placement Partners */}
      {university.placementPartners && (
        <section id="placements" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Hiring & Placement Partners
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Top recruiters offering high-growth roles to {university.shortName} graduates
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {university.placementPartners.map((partner, pi) => (
              <span
                key={pi}
                className="px-4 py-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-sm"
              >
                {partner}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Section 6: FAQs */}
      <section id="faqs" className="py-14 sm:py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Everything you need to know about {university.name}
            </p>
          </div>

          <div className="space-y-3">
            {university.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-100/60 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-base font-bold text-[#0f4c75] dark:text-[#38bdf8] transition-transform ${openFAQ === index ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/40 dark:border-slate-700/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
