"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function UniversityDetail() {
  const params = useParams();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
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
      name: "Amity University",
      shortName: "Amity",
      description: "Amity University Online offers UGC-accredited online degrees, diplomas, and certifications in India, providing learners with a digitally advanced platform and globally recognized education designed to meet modern industry needs and support career growth.",
      fullDescription: "Amity University Online offers UGC-accredited online degrees, diplomas, and certifications in India, providing learners with a digitally advanced platform and globally recognized education designed to meet modern industry needs and support career growth.",
      programs: ["Engineering", "Business", "Law", "Arts"],
      location: "Multiple Campuses",
      rating: 4.8,
      students: "50K+",
      established: "2005",
      image: "https://collegesgyan.com/wp-content/uploads/2024/03/Untitled-design-10-e1710144513893.webp",
      naacGrade: "A+",
      ugcApproved: true,
      accreditations: ["NAAC", "WES", "QS WUR", "NIRF", "AICTE", "AIU", "UGC"],
      keyFeatures: [
        "Recognized by UGC, AIU, WES, and others, the university holds an A+ NAAC accreditation and ranks as a top online university according to both NIRF and QS World Ranking",
        "Amity Online is placed within the top 3% globally by QS, with its online MBA ranked #1 in India and #37 worldwide",
        "The university offers global exposure through renowned international faculty members from diverse backgrounds",
        "Programs at Amity University Online hold accreditation from WES in both the US and Canada",
        "With over 300 hiring partners, the university facilitates placements through exclusive virtual job fairs"
      ],
      courses: [
        { name: "Online MBA", duration: "2 years", fullFee: "Rs 2,99,000", discountFee: "Rs 2,99,000" },
        { name: "Online MSC", duration: "2 years", fullFee: "Rs 2,50,000", discountFee: "Rs 2,50,000" },
        { name: "Online BBA", duration: "3 years", fullFee: "Rs 1,65,000", discountFee: "Rs 1,65,000" },
        { name: "Online MCA", duration: "2 years", fullFee: "Rs 1,70,000", discountFee: "Rs 1,70,000" },
        { name: "Online BCA", duration: "3 years", fullFee: "Rs 1,50,000", discountFee: "Rs 1,50,000" },
        { name: "Online MA", duration: "2 years", fullFee: "Rs 1,30,000", discountFee: "Rs 1,30,000" },
        { name: "Online M.Com", duration: "2 years", fullFee: "Rs 1,20,000", discountFee: "Rs 1,20,000" },
        { name: "Online B.Com", duration: "3 years", fullFee: "Rs 99,000", discountFee: "Rs 99,000" }
      ],
      admissionProcess: [
        "Visit the official website of Amity Online (Note: Separate websites exist for online and on-campus programs)",
        "Locate and click on the \"Apply Now\" tab situated in the top right corner",
        "Begin by entering your basic personal and academic details, followed by any employment information, if applicable",
        "Upload all necessary documents required for eligibility verification, including a recent colored passport-size photo",
        "Complete the application submission process by paying the required application fee",
        "Once your application is reviewed and documents are verified, the university will communicate with you regarding enrollment and further procedures via email"
      ],
      benefits: [
        "Recognized by UGC, AIU, WES, and others, the university holds an A+ NAAC accreditation and ranks as a top online university according to both NIRF and QS World Ranking",
        "Amity Online is placed within the top 3% globally by QS, with its online MBA ranked #1 in India and #37 worldwide",
        "The university offers global exposure through renowned international faculty members from diverse backgrounds",
        "Programs at Amity University Online hold accreditation from WES in both the US and Canada",
        "With over 300 hiring partners, the university facilitates placements through exclusive virtual job fairs",
        "The university collaborates with over 300 hiring partners to facilitate placements via exclusive virtual job fairs"
      ],
      programBenefits: [
        "First in India to receive UGC approval for online programs",
        "Ranked among the top 3% of universities worldwide",
        "Secured the first position in India in the QS World Ranking",
        "Attained the 37th position globally in the QS World Ranking"
      ],
      placementPartners: ["Amazon", "Deloitte", "Tech Mahindra", "Wipro", "Infosys", "TCS", "Accenture", "Capgemini", "Cognizant", "HCL", "IBM", "Microsoft", "Oracle", "SAP", "Tata Consultancy Services", "L&T", "Mahindra", "Reliance", "Aditya Birla", "HDFC", "ICICI", "Axis Bank", "Kotak", "Yes Bank", "Bajaj", "Godrej", "Maruti", "Hero", "TVS"],
      faqs: [
        {
          question: "What Is The Admission Process Of Amity Online?",
          answer: "The admission process involves visiting the official Amity Online website, clicking on 'Apply Now', entering personal and academic details, uploading required documents including a passport-size photo, paying the application fee, and waiting for verification and enrollment confirmation via email."
        },
        {
          question: "Are The Programs Offered By Amity University Online Accredited?",
          answer: "Yes, Amity University Online programs are fully accredited. The university is recognized by UGC, AIU, WES, and holds an A+ NAAC accreditation. Programs are also accredited by WES in both the US and Canada."
        },
        {
          question: "What Kind Of Study Material Is Given?",
          answer: "Amity University Online provides comprehensive digital study materials through their advanced LMS platform, including recorded lectures, e-books, assignments, and access to online resources designed to support flexible learning."
        },
        {
          question: "Can I Interact With Faculty And Classmates In An Online Program?",
          answer: "Yes, Amity Online provides multiple channels for interaction including live webinars, discussion forums, virtual classrooms, and dedicated support channels to ensure students can interact with faculty and classmates effectively."
        },
        {
          question: "Are Student Loans Available For Online Students?",
          answer: "Yes, Amity University Online students can avail education loans from various banks and financial institutions. The university provides necessary documentation and support for loan applications."
        }
      ]
    },
    {
      id: 2,
      name: "Uttaranchal University (UU)",
      shortName: "UU",
      description: "Established in 2013, Uttaranchal University, located in Dehradun, Uttarakhand, is recognized by NAAC as an esteemed institution offering quality higher education through affordable online programs.",
      fullDescription: "Established in 2013, Uttaranchal University, located in Dehradun, Uttarakhand, is recognized by NAAC as an esteemed institution offering quality higher education through affordable online programs.",
      programs: ["Engineering", "Management", "Law", "Applied Sciences"],
      location: "Dehradun, Uttarakhand",
      rating: 4.7,
      students: "15K+",
      established: "2013",
      image: "https://edukyu.com/assets/cxp-assets/imgs/new-banner/uttarachal-logo.png",
      naacGrade: "A+",
      ugcApproved: true,
      accreditations: ["UGC", "AICTE", "NAAC A+", "AIU", "WES", "ISO", "UNAI", "WURI", "ASSOCHAM"],
      keyFeatures: [
        "Established in 2013, located in Dehradun, Uttarakhand",
        "Recognized by NAAC as an esteemed institution",
        "Offers quality higher education through affordable online programs",
        "Online degrees are recognised by UGC & AICTE"
      ],
      courses: [
        { name: "Online MBA", duration: "2 years", fullFee: "Rs 98,000", discountFee: "Rs 98,000" },
        { name: "Online MCA", duration: "2 years", fullFee: "Rs 96,000", discountFee: "Rs 96,000" },
        { name: "Online BBA", duration: "3 years", fullFee: "Rs 1,02,000", discountFee: "Rs 1,02,000" },
        { name: "Online BCA", duration: "3 years", fullFee: "Rs 1,02,000", discountFee: "Rs 1,02,000" },
        { name: "Online BA", duration: "3 years", fullFee: "Rs 61,200", discountFee: "Rs 61,200" }
      ],
      admissionProcess: [
        "Start by selecting the 'Apply Now' tab on the official website",
        "Complete the registration process on the application page",
        "Verify your contact information through the OTP sent",
        "Fill out the application form with all required information",
        "Pay the specified fee after completing the application form",
        "Upload the necessary documents and submit the form for review"
      ],
      benefits: [
        "UGC and AICTE recognized online degree programs",
        "NAAC A+ Accredited University offering quality education",
        "Affordable online programs with flexible learning options",
        "Comprehensive programs across various disciplines",
        "Modern infrastructure and state-of-the-art facilities",
        "Strong industry connections and placement support"
      ],
      programBenefits: [
        "UGC-recognized state private university",
        "NAAC A+ Accredited",
        "AICTE Approved online programs"
      ],
      placementPartners: ["Amazon", "Deloitte", "Tech Mahindra", "Wipro", "Infosys", "TCS", "Accenture", "Capgemini", "Cognizant", "HCL", "IBM", "Microsoft"],
      faqs: [
        {
          question: "What are the key advantages of Online UU?",
          answer: "Online UU (Uttaranchal University) offers several key advantages including UGC and AICTE recognized programs, NAAC A+ accreditation, affordable fee structure, flexible learning options, and comprehensive support for working professionals."
        },
        {
          question: "What is the course duration for Online UU programs?",
          answer: "Online UU offers programs with varying durations: Online MBA and MCA are 2-year programs, while Online BBA, BCA, and BA are 3-year programs. All programs are designed to be completed through flexible online learning."
        },
        {
          question: "Is Uttaranchal University recognized by UGC?",
          answer: "Yes, Uttaranchal University is fully recognized by the University Grants Commission (UGC) and its online degrees are also recognized by AICTE. The university holds NAAC A+ accreditation, ensuring quality education standards."
        },
        {
          question: "Does Uttaranchal University provide placement support for online students?",
          answer: "Yes, Uttaranchal University provides placement support for online students through its career services department, connecting students with top employers and facilitating job opportunities across various industries."
        },
        {
          question: "What is the total fee for the Online MBA and is it worth it?",
          answer: "The total fee for Online MBA at Uttaranchal University is Rs 98,000 for 2 years. Given the UGC and AICTE recognition, NAAC A+ accreditation, quality curriculum, and placement support, the program offers excellent value for money in online education."
        }
      ]
    },
    {
      id: 3,
      name: "Sikkim Manipal University (SMU)",
      shortName: "SMU",
      description: "Established in 1995, Sikkim Manipal University (SMU) aims to strengthen education and skill development, especially in the Northeast. NAAC A+ accredited and UGC-entitled, SMU offers affordable online degree programs with a focus on innovation, interdisciplinary learning, and professional readiness.",
      fullDescription: "Established in 1995, Sikkim Manipal University (SMU) aims to strengthen education and skill development, especially in the Northeast. NAAC A+ accredited and UGC-entitled, SMU offers affordable online degree programs with a focus on innovation, interdisciplinary learning, and professional readiness.",
      programs: ["Distance MBA", "Distance BBA", "Distance MCA", "Health Sciences"],
      location: "Gangtok, Sikkim",
      rating: 4.6,
      students: "35K+",
      established: "1995",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Logo_of_Sikkim_Manipal_University.jpg",
      naacGrade: "A+",
      ugcApproved: true,
      accreditations: ["UGC", "NIRF", "NAAC", "AICTE", "IIRF", "THE WEEK", "QS-WUR"],
      keyFeatures: [
        "Established in 1995 through a partnership between the Manipal Pai Foundation and the Government of Sikkim",
        "NAAC A+ accredited and UGC-entitled",
        "First Public-Private Partnership (PPP) in the region",
        "Ranked 51st among India's Best Multidisciplinary Universities"
      ],
      courses: [
        { name: "Online MBA", duration: "2 years", fullFee: "Rs 1,10,000", discountFee: "Rs 1,10,000" },
        { name: "Online MCA", duration: "2 years", fullFee: "Rs 98,000", discountFee: "Rs 98,000" },
        { name: "Online M.COM", duration: "2 years", fullFee: "Rs 75,000", discountFee: "Rs 75,000" },
        { name: "Online MA", duration: "2 years", fullFee: "Rs 75,000", discountFee: "Rs 75,000" },
        { name: "Online B.COM", duration: "3 years", fullFee: "Rs 75,000", discountFee: "Rs 75,000" },
        { name: "Online BA", duration: "3 years", fullFee: "Rs 75,000", discountFee: "Rs 75,000" }
      ],
      admissionProcess: [
        "Choose Your Course: Visit the university's official website to select the course you wish to apply for. Review the eligibility criteria and any entrance exam requirements for the chosen course.",
        "Application Process: Once you are familiar with the university and course details, begin your application through the login portal on the website, following the release of the notification.",
        "Complete Your Application: Enter all required details, including your marks and results from qualifying examinations. Ensure all information is accurate and double-check to prevent errors.",
        "Document Submission: Scan and upload the necessary documents to your portal. Ensure that photographs and documents are clear and visible to avoid issues during verification.",
        "Pay the Fee: Submit the application fee, which varies by course. Check the exact fee on the official portal. After successful verification of your application and documents, you will receive an admission confirmation via email or SMS."
      ],
      benefits: [
        "Established: 1995 through a partnership between the Manipal Pai Foundation and the Government of Sikkim.",
        "Programs Offered: MBA, MCA, BA, MA, M.Com, B.Com",
        "Accreditation: University Grants Commission (UGC), Distance Education Council (DEC), NAAC (A+).",
        "Recognition: NIRF, IIRF, THE WEEK.",
        "Unique Status: First Public-Private Partnership (PPP) in the region.",
        "Rankings: 51st among India's Best Multidisciplinary Universities, top state rank for private engineering institutes."
      ],
      programBenefits: [
        "Approved by UGC",
        "Recognized by IIRF and NIRF",
        "Accredited by the Distance Education Council (DEC)"
      ],
      placementPartners: ["Amazon", "Deloitte", "Tech Mahindra", "Wipro", "Infosys", "TCS", "Accenture", "Capgemini", "Cognizant", "HCL", "IBM", "Microsoft", "Oracle", "SAP", "Tata Consultancy Services", "L&T", "Mahindra", "Reliance", "Aditya Birla", "HDFC", "ICICI", "Axis Bank", "Kotak", "Yes Bank"],
      faqs: [
        {
          question: "Is SMU a member of the Association of Indian Universities (AIU)?",
          answer: "Yes, Sikkim Manipal University is a member of the Association of Indian Universities (AIU), which further validates its recognition and standing in the Indian higher education system."
        },
        {
          question: "Is it compulsory to attend classes under the distance education mode?",
          answer: "No, it is not compulsory to attend physical classes under the distance education mode at Sikkim Manipal University. The programs are designed for flexible learning, allowing students to study at their own pace and convenience through online resources and materials."
        },
        {
          question: "What are the documents required for admission into Sikkim Manipal University's online degree programs?",
          answer: "The documents required typically include educational certificates (10th, 12th, and graduation marksheets), identity proof (Aadhar card, passport, or driving license), passport-size photographs, and any other documents specified in the admission notification. All documents should be scanned and uploaded clearly."
        },
        {
          question: "What is the application fee for Sikkim Manipal University's online programs?",
          answer: "The application fee varies by course and is specified on the official university portal. Students should check the exact application fee for their chosen program during the admission process."
        }
      ]
    },
    {
      id: 4,
      name: "Manipal University Jaipur (MUJ)",
      shortName: "MUJ",
      description: "The online Manipal University is a division of the prestigious Manipal University Jaipur (MUJ). In 2021, the university commenced offering courses in an online format. The University Grants Commission (UGC) has granted authorization to Online Manipal University to provide undergraduate (UG) and postgraduate (PG) programs.",
      fullDescription: "The online Manipal University is a division of the prestigious Manipal University Jaipur (MUJ). In 2021, the university commenced offering courses in an online format. The University Grants Commission (UGC) has granted authorization to Online Manipal University to provide undergraduate (UG) and postgraduate (PG) programs.",
      programs: ["Engineering", "Management", "Design", "Humanities"],
      location: "Jaipur, Rajasthan",
      rating: 4.8,
      students: "12K+",
      established: "2011",
      image: "https://www.manipaldubai.com/_next/image?url=https%3A%2F%2Fmanipalblobstorage.blob.core.windows.net%2Fmanipal-azr-container%2F%2F002_Institute_MUJ_1_jpg_1296x700_3653573dc5.webp&w=1920&q=75",
      naacGrade: "A++",
      ugcApproved: true,
      accreditations: ["NAAC A++", "NIRF", "UGC", "NBA", "WES", "THE WEEK", "QS-WUR", "Careers 360", "THE Impact"],
      keyFeatures: [
        "UGC-recognized state private university",
        "NAAC accredited with A++ grade",
        "WES and AICTE Approved",
        "Award-winning next-generation education platform"
      ],
      courses: [
        { name: "Online MBA", duration: "2 years", fullFee: "Rs 1,75,000", discountFee: "Rs 1,75,000" },
        { name: "Online BBA", duration: "3 years", fullFee: "Rs 1,35,000", discountFee: "Rs 1,35,000" },
        { name: "Online MCA", duration: "2 years", fullFee: "Rs 1,58,000", discountFee: "Rs 1,58,000" },
        { name: "Online BCA", duration: "3 years", fullFee: "Rs 1,35,000", discountFee: "Rs 1,35,000" },
        { name: "Online M.Com", duration: "2 years", fullFee: "Rs 1,08,000", discountFee: "Rs 1,08,000" },
        { name: "Online B.Com", duration: "3 years", fullFee: "Rs 99,000", discountFee: "Rs 99,000" },
        { name: "Online MA", duration: "2 years", fullFee: "Rs 80,000", discountFee: "Rs 80,000" }
      ],
      admissionProcess: [
        "Explore the official website of Manipal University Online and complete the online application by selecting the 'Enrol Now' option",
        "Upload all the required documents and proceed to submit your application",
        "Make the payment for the application fee, which will be later adjusted in the Semester 1 fees",
        "In case there are any pending procedures, an admission counselor will contact you and provide assistance throughout the entire process"
      ],
      benefits: [
        "Increased Earning Potential Boost your earning potential by gaining leadership roles with strong salary packages across top organizations in multiple sectors",
        "Gain Job-Ready Business Skills Build strategic, leadership, problem-solving, and operational skills through expert-led courses to prepare for key managerial roles",
        "Global Networking & Alumni Access Connect with global peers, alumni, and industry leaders to learn market trends and join Manipal University Jaipur's prestigious network",
        "13 Career-Focused Electives Choose from 13 industry-relevant specializations like Digital Marketing, Analytics, Supply Chain, International Business, IT and FinTech",
        "Super or Dual Specialization Select one elective for super specialization or two electives for dual specialization to deepen or broaden your expertise",
        "Fully Online Experience with Campus Immersion Experience 100% online learning with enrollment to exams, plus campus immersion events to interact with peers and faculty"
      ],
      programBenefits: [
        "UGC-recognized state private university",
        "NAAC accredited with A++ grade",
        "WES and AICTE Approved"
      ],
      placementPartners: ["Amazon", "Deloitte", "Tech Mahindra", "Wipro", "Infosys", "TCS", "Accenture", "Capgemini", "Cognizant", "HCL", "IBM", "Microsoft", "Oracle", "SAP", "Tata Consultancy Services", "L&T", "Mahindra", "Reliance", "Aditya Birla", "HDFC", "ICICI", "Axis Bank", "Kotak", "Yes Bank", "Bajaj", "Godrej", "Maruti", "Hero", "TVS", "Honda", "Toyota", "Ford", "Volkswagen", "Hyundai", "Nissan", "Suzuki"],
      faqs: [
        {
          question: "Does Online Manipal offer placement assistance?",
          answer: "Yes, Online Manipal University Jaipur offers comprehensive placement assistance services to help students connect with top employers and secure career opportunities."
        },
        {
          question: "Does Online Manipal or Manipal University Jaipur offer access to an alumni network?",
          answer: "Yes, Manipal University Jaipur provides access to a prestigious global alumni network, allowing students to connect with peers, alumni, and industry leaders worldwide."
        },
        {
          question: "Is Manipal online MBA valid?",
          answer: "Yes, the Online MBA from Manipal University Jaipur is fully valid and recognized. It is UGC-recognized, NAAC A++ accredited, and approved by WES and AICTE, making it valid for both national and international opportunities."
        },
        {
          question: "Does Online Manipal offer Career & placement assistance services?",
          answer: "Yes, Online Manipal University Jaipur offers comprehensive career and placement assistance services including career counseling, resume building, interview preparation, and connections with top employers."
        },
        {
          question: "Who is eligible for the career advisory and placement assistance services?",
          answer: "All enrolled students of Online Manipal University Jaipur are eligible for career advisory and placement assistance services throughout their program duration and after graduation."
        }
      ]
    },
    {
      id: 5,
      name: "MIT University",
      shortName: "MIT",
      description: "Madras Institute of Technology - A prestigious institution known for excellence in engineering and technology education with strong industry connections.",
      fullDescription: "MIT University is a prestigious institution known for excellence in engineering and technology education with strong industry connections. The university offers cutting-edge programs in various technical fields.",
      programs: ["Engineering", "Technology", "Aeronautics", "Automotive"],
      location: "Chennai, Tamil Nadu",
      rating: 4.9,
      students: "8K+",
      established: "1949",
      image: "/universities/mit.jpg",
      naacGrade: "A+",
      ugcApproved: true,
      keyFeatures: [
        "Prestigious institution with strong industry connections",
        "Excellence in engineering and technology education",
        "Award-winning programs",
        "Global recognition"
      ],
      courses: [
        { name: "Online MBA", duration: "2 years", fullFee: "Rs 1,18,000", discountFee: "Rs 88,500" }
      ],
      benefits: [
        "Strong industry connections",
        "Excellence in technical education",
        "Global recognition",
        "Award-winning programs"
      ],
      placementPartners: ["Tech Mahindra", "Wipro"],
      faqs: [
        {
          question: "What programs does MIT University offer?",
          answer: "MIT University offers programs in Engineering, Technology, Aeronautics, and Automotive fields."
        }
      ]
    },
    {
      id: 6,
      name: "GLA University",
      shortName: "GLA",
      description: "A leading private university offering quality education in engineering, management, pharmacy, and applied sciences with modern facilities.",
      fullDescription: "GLA University is a leading private university offering quality education in engineering, management, pharmacy, and applied sciences with modern facilities and infrastructure. The university is UGC and AICTE approved.",
      programs: ["Engineering", "Management", "Pharmacy", "Applied Sciences"],
      location: "Mathura, Uttar Pradesh",
      rating: 4.7,
      students: "20K+",
      established: "2010",
      image: "https://gcetl.in/web2manage/images/Universities/University17187822841556781613phpNa5MIG.jpeg",
      naacGrade: "A+",
      ugcApproved: true,
      keyFeatures: [
        "A leading private university offering quality education",
        "Engineering, Management, Pharmacy, and Applied Sciences programs",
        "Modern facilities and infrastructure",
        "UGC and AICTE approved"
      ],
      courses: [
        { name: "Online MBA", duration: "2 years", fullFee: "Rs 1,18,000", discountFee: "Rs 88,500" },
        { name: "Online BBA", duration: "3 years", fullFee: "Rs 1,08,000", discountFee: "Rs 81,000" }
      ],
      benefits: [
        "UGC and AICTE approved programs",
        "Modern facilities and infrastructure",
        "Quality education across multiple disciplines",
        "Strong placement support"
      ],
      placementPartners: ["Tech Mahindra", "Wipro"],
      faqs: [
        {
          question: "Is GLA University UGC Approved?",
          answer: "Yes, GLA University is UGC and AICTE approved and offers quality education across multiple disciplines."
        }
      ]
    },
    {
      id: 7,
      name: "Mangalayatan University",
      shortName: "Mangalayatan",
      description: "A progressive university offering diverse programs in engineering, management, law, and arts with focus on holistic development.",
      fullDescription: "Mangalayatan University is a progressive university offering diverse programs in engineering, management, law, and arts with focus on holistic development. The university is UGC recognized.",
      programs: ["Engineering", "Management", "Law", "Arts & Commerce"],
      location: "Aligarh, Uttar Pradesh",
      rating: 4.6,
      students: "10K+",
      established: "2006",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSFLljfmgx0Y26SkW3viqM71aGDPp-NmOog&s",
      naacGrade: "A",
      ugcApproved: true,
      keyFeatures: [
        "A progressive university offering diverse programs",
        "Engineering, Management, Law, and Arts programs",
        "Focus on holistic development",
        "UGC recognized"
      ],
      courses: [
        { name: "Online MBA", duration: "2 years", fullFee: "Rs 1,18,000", discountFee: "Rs 88,500" },
        { name: "Online BBA", duration: "3 years", fullFee: "Rs 1,08,000", discountFee: "Rs 81,000" }
      ],
      benefits: [
        "UGC recognized programs",
        "Focus on holistic development",
        "Diverse program offerings",
        "Modern learning facilities"
      ],
      placementPartners: ["Wipro", "Infosys"],
      faqs: [
        {
          question: "Is Mangalayatan University UGC Recognized?",
          answer: "Yes, Mangalayatan University is UGC recognized and offers diverse programs with focus on holistic development."
        }
      ]
    }
  ];

  const universityId = parseInt(params.id as string);
  const university = useMemo(() => universities.find(u => u.id === universityId), [universityId]);
  const hasInitialized = useRef<number | null>(null);

  useEffect(() => {
    if (university && hasInitialized.current !== universityId) {
      setFormData(prev => ({ ...prev, university: university.name }));
      hasInitialized.current = universityId;
    }
  }, [universityId, university]);

  if (!university) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">University Not Found</h1>
          <Link href="/universities" className="text-[#0f4c75] dark:text-[#1e7aa8] hover:underline">
            Go back to Universities
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
      const response = await fetch('/api/submit-student-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          university: university.name,
          source: `University Page - ${university.name}`
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert("Thank you for your interest! We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: "",
          course: "",
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
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] bg-gradient-to-br from-[#0f4c75]/20 to-[#dc2626]/20 rounded-full blur-[120px] -top-[300px] -right-[300px] animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#dc2626]/15 to-[#ea580c]/15 rounded-full blur-[100px] -bottom-[200px] -left-[200px] animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white dark:bg-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xl border-4 border-slate-200 dark:border-slate-600">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/96?text=Logo";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 leading-tight">
                    {university.id === 1 ? "Amity University Online" : university.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-[#0f4c75]/10 to-[#0f4c75]/20 dark:from-[#1e7aa8]/20 dark:to-[#1e7aa8]/30 text-[#0f4c75] dark:text-[#1e7aa8] rounded-xl text-sm font-bold border-2 border-[#0f4c75]/30 dark:border-[#1e7aa8]/30">
                      NAAC {university.naacGrade}
                    </span>
                    {university.ugcApproved && (
                      <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-700 dark:text-green-400 rounded-xl text-sm font-bold border-2 border-green-300 dark:border-green-700">
                        UGC Approved
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-medium">
                {university.fullDescription}
              </p>
              <div className="grid grid-cols-3 gap-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent mb-2">
                    {university.students}
                  </div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent mb-2">
                    {university.rating}
                  </div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent mb-2">
                    {university.established}
                  </div>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Established</div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-800 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                  Interested in our courses? Share your details and we'll get back to you.
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
                    <label htmlFor="course" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                      Course <span className="text-[#dc2626]">*</span>
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    >
                      <option value="">Select Course</option>
                      {university.courses.map((course, idx) => (
                        <option key={idx} value={course.name}>{course.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all resize-none"
                      placeholder="Message (Optional)"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Submitting..." : "Let's Connect"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings & Accreditations Section */}
      {university.accreditations && (
        <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
                Rankings & Accreditations
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Recognized by leading accreditation bodies and ranked among the top universities globally
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {university.accreditations.map((acc, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {acc}
                  </div>
                  <div className="mt-2 h-1 w-12 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              Why Choose {university.id === 1 ? "Amity University Online" : university.id === 4 ? "Manipal University Jaipur Online" : university.name}?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover what makes us stand out in the world of online education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {university.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#0f4c75] to-[#dc2626] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg flex-1">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Courses & Fees Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              Updated Fees for Each Courses in 2025
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
            <table className="w-full bg-white dark:bg-slate-800">
              <thead>
                <tr className="bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white">
                  <th className="px-8 py-5 text-left font-bold text-lg">Courses</th>
                  <th className="px-8 py-5 text-left font-bold text-lg">Fees</th>
                  <th className="px-8 py-5 text-left font-bold text-lg">Years</th>
                </tr>
              </thead>
              <tbody>
                {university.courses.map((course, index) => (
                  <tr
                    key={index}
                    className={`border-b-2 border-slate-200 dark:border-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 ${index % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-50 dark:bg-slate-700/30'}`}
                  >
                    <td className="px-8 py-5 font-bold text-lg text-slate-900 dark:text-slate-50">{course.name}</td>
                    <td className="px-8 py-5 text-slate-700 dark:text-slate-300 font-bold text-lg">{course.fullFee}</td>
                    <td className="px-8 py-5 text-slate-700 dark:text-slate-300 font-semibold">{course.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              Benefits of {university.id === 1 ? "Amity University Online" : university.id === 4 ? "Manipal University Jaipur Online" : university.name}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {university.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-[#0f4c75] dark:hover:border-[#1e7aa8] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0f4c75]/10 to-[#dc2626]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-[#0f4c75] to-[#dc2626] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">•</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base flex-1 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      {university.programBenefits && (
        <section className="py-24 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 via-slate-800 dark:to-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              {university.id === 1 ? "Amity University Online" : university.id === 4 ? "Manipal University Jaipur Online" : university.name}'s Program Benefits
            </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {university.fullDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {university.programBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700 hover:border-[#0f4c75] dark:hover:border-[#1e7aa8] text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c75]/5 to-[#dc2626]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
                    <p className="text-slate-700 dark:text-slate-300 font-bold leading-relaxed text-base">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Placement Partners Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              Hiring Partner of {university.id === 1 ? "Amity University Online" : university.id === 4 ? "Manipal University Jaipur Online" : university.name}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Unlimited access to world class courses, hands-on projects, and job-ready certificate programs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {university.placementPartners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-200 dark:border-slate-700 text-center hover:shadow-xl hover:-translate-y-2 hover:border-[#0f4c75] dark:hover:border-[#1e7aa8] transition-all duration-300"
              >
                <div className="text-base font-bold text-slate-900 dark:text-slate-50 group-hover:text-[#0f4c75] dark:group-hover:text-[#1e7aa8] transition-colors duration-300">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-800 via-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Get answers to common questions about our programs and admission process
            </p>
          </div>
          <div className="space-y-4">
            {university.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 pr-4">
                    {faq.question}
                  </h3>
                  <span className={`text-2xl text-[#0f4c75] dark:text-[#1e7aa8] transition-transform flex-shrink-0 ${openFAQ === index ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5 border-t border-slate-200 dark:border-slate-700 pt-4">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917275131439"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}

