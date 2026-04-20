export type SocialLinks = {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  tools: string[];
  github: string;
  highlights: string[];
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  dateRange: string;
};

export const profile = {
  name: "Vinay Kumar",
  role: "Data Analyst",
  tagline: "Turning raw data into clear, actionable business insights.",
  summary:
    "Final-year B.Tech CSE student with hands-on experience in end-to-end data analysis — from raw data cleaning and exploratory analysis to interactive dashboards and business reporting. Worked on real-world projects covering loan risk, customer churn, and e-commerce sales using Python, SQL, and BI tools. Seeking a Data Analyst role to deliver actionable insights that support data-driven business decisions.",
  links: {
    email: "vinaysharaya1@gmail.com",
    phone: "+91 7988722405",
    github: "https://github.com/VinayKumar1510",
    linkedin: "https://linkedin.com/in/vinaykumar",
    location: "Haryana, India",
  } satisfies SocialLinks,
  skills: [
    {
      title: "Languages",
      items: ["Python (NumPy, Pandas, Matplotlib, Seaborn)", "SQL (MySQL)"],
    },
    {
      title: "BI & Visualization",
      items: [
        "Power BI",
        "Tableau",
        "Zoho Analytics",
        "Microsoft Excel",
        "Google Sheets",
      ],
    },
    {
      title: "Core Competencies",
      items: [
        "Data Cleaning",
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis",
        "Feature Engineering",
        "Data Storytelling",
      ],
    },
    {
      title: "Other Tools",
      items: ["Git & GitHub", "Jupyter Notebook", "VS Code"],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: "Loan Default Prediction & Risk Analysis",
      tools: ["Python", "Pandas", "scikit-learn", "Zoho Analytics"],
      github: "https://github.com/VinayKumar1510/Loan-Default-Prediction",
      highlights: [
        "Analyzed 30,000+ loan records to identify high-risk borrowers using EDA and feature analysis on FICO score, interest rate, and debt-to-income ratio.",
        "Performed data cleaning, outlier detection, and feature engineering to ensure data quality and uncover patterns driving loan defaults.",
        "Designed a multi-page interactive dashboard in Zoho Analytics to visualize default trends, risk segmentation, and borrower profiles for data-driven lending decisions.",
      ],
    },
    {
      title: "Customer Churn Rate Analyzer",
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/VinayKumar1510/Churn-Analyzer",
      highlights: [
        "Analyzed 15,000+ customer records to identify churn patterns; found monthly-plan users churn 34% more than long-term subscribers.",
        "Cleaned and preprocessed raw CRM data — handled missing values, encoded categorical variables, and removed inconsistencies.",
        "Identified top churn drivers (contract type, tenure, support tickets) via EDA; findings suggest retention campaigns could reduce churn by ~15–20%.",
      ],
    },
    {
      title: "E-Commerce Sales & Customer Behavior Analysis",
      tools: ["Python", "SQL (MySQL)", "Pandas", "Matplotlib"],
      github: "https://github.com/VinayKumar1510/ecommerce",
      highlights: [
        "Merged and analyzed 4 datasets (orders, customers, products, categories) across 20,000+ transactions to surface top-performing SKUs and seasonal revenue trends.",
        "Wrote advanced SQL queries (JOINs, CTEs, window functions) to extract category-wise revenue and customer repeat-purchase rates.",
        "Discovered top 20% of products drove 68% of total revenue (Pareto insight), informing inventory and marketing strategy.",
      ],
    },
  ] satisfies Project[],
  education: {
    degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
    institution: "Maharishi Dayanand University",
    location: "Rohtak, Haryana",
    dateRange: "Jun 2022 – May 2026",
  } satisfies Education,
  certifications: [
    "Frontend Development Internship Certificate — IBM CSRBOX",
    "Google Data Analytics Professional Certificate — Coursera (In Progress)",
  ],
} as const;

