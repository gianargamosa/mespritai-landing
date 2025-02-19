import { FeatureLdg, InfoLdg, TestimonialType } from "types";
import { env } from "@/env.mjs";

export const appLink = env.NEXT_PUBLIC_MESPIRT_APP_URL;

export const faqs = [
  {
    title: "What is Automated Data Extraction for Documents?",
    description:
      "Automated Data Extraction uses AI and advanced LLMs to instantly identify, extract, and organize key information from documents, eliminating manual data entry and improving efficiency.",
  },
  {
    title: "How much does it cost?",
    description:
      "Pricing depends on usage, document volume, and integration needs. We offer flexible plans, including pay-as-you-go and enterprise solutions. Contact us for a custom quote!",
  },
  {
    title: "Who is it for?",
    description:
      "Our solution is designed for professionals and teams handling large volumes of documents, including:",
    list: [
      "Finance Teams – Automate invoice processing, expense tracking, and compliance reporting.",
      "Legal Professionals – Extract clauses, case details, and contracts quickly and accurately.",
      "Research Teams & Scientists – Speed up data collection from research papers, clinical studies, and reports.",
      "Enterprises & Businesses – Streamline document-heavy workflows in HR, procurement, and operations.",
      "Healthcare Organizations – Digitize and extract key data from patient records, insurance claims, and medical research.",
      "Government Agencies – Process official records, legal documents, and regulatory reports with speed and accuracy.",
    ],
  },
  {
    title: "What problems does it solve?",
    list: [
      "Saves Time – Eliminates tedious manual data entry, reducing processing time.",
      "Improves Accuracy – AI minimizes human errors in data extraction.",
      "Organizes Data Efficiently – Converts unstructured documents into structured, searchable formats.",
      "Seamless Integration – Works with your existing ERP, CRM, and databases for smooth workflows.",
    ],
  },
  {
    title: "How do I get started?",
    description:
      "Simply upload your documents, and our AI will do the rest! Contact us for a demo or sign up to see it in action.",
  },
];

export const footerLinks = [
  {
    title: "Mesprit",
    link: "/",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "Resources",
    link: "/resources",
  },
  {
    title: "Blogs",
    link: "/blog",
  },
  {
    title: "Support",
    link: "/support",
  },
];

export const infos: InfoLdg[] = [
  {
    title: "Unlock Insights, Drive Success.",
    description:
      "Effective document analysis is the key to smarter business decisions, streamlined operations, and risk management. By analyzing documents, companies can enhance compliance, boost efficiency, and preserve valuable knowledge—ensuring long-term success in a data-driven world.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Improves Decision-Making",
        description:
          "Analyzing documents ensures that business decisions are based on accurate, well-organized information rather than assumptions.",
        icon: "lightbulb",
      },
      {
        title: "Boosts Operational Efficiency",
        description:
          "Reviewing and analyzing documents helps streamline workflows, reduce redundancies, and improve overall productivity.",
        icon: "boost",
      },
      {
        title: "Enhances Compliance and Risk Management",
        description:
          "Proper document analysis helps companies stay compliant with industry regulations and identify potential risks before they escalate.",
        icon: "cloudAlert",
      },
      {
        title: "Supports Knowledge Management",
        description:
          "Document analysis allows companies to retain valuable insights, ensuring that critical information is accessible for future reference and business continuity.",
        icon: "search",
      },
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate our open-source SaaS seamlessly into your existing workflows. Effortlessly connect with your favorite tools and services for a streamlined experience.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Flexible",
        description:
          "Customize your integrations to fit your unique requirements.",
        icon: "laptop",
      },
      {
        title: "Efficient",
        description: "Streamline your processes and reducing manual effort.",
        icon: "search",
      },
      {
        title: "Reliable",
        description:
          "Rely on our robust infrastructure and comprehensive documentation.",
        icon: "settings",
      },
    ],
  },
];

export const features: FeatureLdg[] = [
  {
    title: "Feature 1",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "nextjs",
  },
  {
    title: "Feature 2",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "google",
  },
  {
    title: "Feature 3",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "gitHub",
  },
  {
    title: "Feature 4",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "laptop",
  },
  {
    title: "Feature 5",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "user",
  },
  {
    title: "Feature 6",
    description:
      "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
    link: "/",
    icon: "copy",
  },
];

export const testimonials: TestimonialType[] = [
  {
    name: "John Doe",
    job: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "The next-saas-stripe-starter repo has truly revolutionized my development workflow. With its comprehensive features and seamless integration with Stripe, I've been able to build and deploy projects faster than ever before. The documentation is clear and concise, making it easy to navigate through the setup process. I highly recommend next-saas-stripe-starter to any developer.",
  },
  {
    name: "Alice Smith",
    job: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  },
  {
    name: "David Johnson",
    job: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I was able to streamline the entire process and get payments up and running in no time. ",
  },
  {
    name: "Michael Wilson",
    job: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "I'm impressed by the quality of code and clear documentation of next-saas-stripe-starter. Kudos to the team!",
  },
  {
    name: "Sophia Garcia",
    job: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "next-saas-stripe-starter provided me with the tools I needed to efficiently manage user data. Thank you so much!",
  },
  {
    name: "Emily Brown",
    job: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "next-saas-stripe-starter has been an invaluable asset in my role as a marketing manager. With its seamless integration with Stripe, I've been able to launch targeted marketing campaigns with built-in payment functionality, allowing us to monetize our products and services more effectively.",
  },
  {
    name: "Jason Stan",
    job: "Web Designer",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    review:
      "Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces in record time. The starter kit provides a solid foundation for building sleek and intuitive designs, allowing me to focus more on the creative aspects of my work.",
  },
];
