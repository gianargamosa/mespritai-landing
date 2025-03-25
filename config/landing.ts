import { FeatureLdg, InfoLdg, TestimonialType } from "types";
import { env } from "@/env.mjs";

export const appLink = env.NEXT_PUBLIC_MESPIRT_APP_URL;

export const faqs = [
  {
    title: "What is Legal Document Data Extraction?",
    description:
      "Legal Document Data Extraction is a process where our AI analyzes and extracts key information from legal documents such as contracts, agreements, and case files. This automated system organizes the extracted data, streamlining workflows, reducing manual effort, and ensuring accuracy in document management.",
  },
  {
    title: "How much does it cost?",
    description:
      "Our pricing is flexible and depends on your needs and the volume of documents you handle. We offer various subscription plans to accommodate different use cases. Please contact our sales team for a personalized quote.",
  },
  {
    title: "Who is it for?",
    description:
      "Our Legal AI Assistant is designed for law firms, in-house legal teams, legal researchers, and anyone involved in managing large volumes of legal documents. It’s perfect for professionals looking to streamline document review, data extraction, and legal research processes.",
  },
  {
    title: "What problems does it solve?",
    description:
      "Our AI tool helps solve several challenges, including reducing manual effort in document review, minimizing human error in data extraction, accelerating decision-making, and improving the overall efficiency of legal workflows. It also helps to cut down operational costs by automating time-consuming tasks.",
  },
  {
    title: "How do I get started?",
    description:
      "Getting started is simple! Just sign up for an account on our website, upload your legal documents, and let our AI do the rest. You’ll be able to extract, organize, and integrate key data with just a few clicks. Our support team is available to assist you during setup if needed.",
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
    title: "Unlock Legal Insights, Drive Smarter Success",
    description:
      "Effective document analysis is the cornerstone of intelligent legal decision-making, streamlined operations, and robust risk management. With advanced legal assistance, law firms and businesses can enhance compliance, increase efficiency, and safeguard critical knowledge—ensuring long-term success in an increasingly data-driven world.",
    image: "/_static/illustrations/work-from-home.jpg",
    list: [
      {
        title: "Improves Decision-Making",
        description:
          "Smart legal assistance ensures that decisions are based on accurate, well-organized legal information, not assumptions or outdated data.",
        icon: "lightbulb",
      },
      {
        title: "Boosts Operational Efficiency",
        description:
          "Automated document review and analysis streamline workflows, eliminate redundancies, and significantly improve productivity in legal processes.",
        icon: "boost",
      },
      {
        title: "Enhances Compliance and Risk Management",
        description:
          "Effective legal document analysis helps organizations stay compliant with regulations and proactively identify potential legal risks before they escalate.",
        icon: "cloudAlert",
      },
      {
        title: "Supports Knowledge Management",
        description:
          "Smart legal assistance ensures that critical legal insights are preserved and easily accessible, safeguarding vital information for future reference and continuity.",
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
