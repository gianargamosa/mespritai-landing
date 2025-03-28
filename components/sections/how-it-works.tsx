import { ChartPie, ChevronRight, DatabaseZap, Timer } from "lucide-react";

import Link from "next/link";
import MaxWidthWrapper from "../shared/max-width-wrapper";

export default function HowItWorks() {
  return (
    <section className="mt-56 py-24">
      <MaxWidthWrapper>
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="text-gradient_indigo-purple mb-4 font-semibold">
            Features
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px]">
            Why it works
          </h2>
          <p className="mt-6 text-balance text-lg text-muted-foreground">
            Revolutionize your legal workflow with our advanced AI tools. Effortlessly extract, organize, and integrate critical data from your documents in seconds, boosting accuracy, saving time, and enhancing productivity. Transform how you work, streamline operations, and make smarter, faster decisions—all with the power of AI.
          </p>
        </div>
        <div className="mx-auto grid max-w-lg auto-cols-max grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4">
          <div className="relative h-auto w-full md:col-span-2">
            <div className="flex flex-row flex-wrap justify-between rounded-lg bg-gray-800 shadow-sm">
              <div className="mb-12 w-full p-5 md:w-1/2 xl:p-8">
                <div className="block">
                  <Timer className="size-10 text-white" strokeWidth={1.2} />
                </div>
                <h3 className="w-full py-5 text-lg font-bold text-white xl:w-64 xl:text-xl">
                  Save Time. Work Smarter. Streamline Legal Tasks Effortlessly!
                </h3>
                <p className="mb-8 w-full text-base font-normal text-gray-300 xl:w-64">
                  Automate legal document analysis and data extraction with our advanced AI tools to reduce manual effort, improve accuracy, and accelerate legal decision-making with AI-powered efficiency.
                </p>
                <Link href="/blog" className="flex items-center justify-between gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5">
                  View More
                  <ChevronRight
                    className="size-4 text-white"
                    strokeWidth={1.2}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-auto w-full">
            <div className="h-full rounded-lg bg-indigo-500 p-5 shadow-sm xl:p-8">
              <div className="block">
                <DatabaseZap className="size-10 text-white" strokeWidth={1.2} />
              </div>
              <h3 className="py-5 text-lg font-bold text-white xl:text-xl">
                Store Smart, Retrieve Fast
              </h3>
              <p className="mb-8 text-base font-normal text-white">
                Optimize the storage of legal documents and extracted data with efficient structuring, reducing costs and enhancing accessibility for faster legal research and decision-making.
              </p>
              <Link href="/blog" className="flex items-center justify-between gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5">
                View More
                <ChevronRight className="size-4 text-white" strokeWidth={1.2} />
              </Link>
            </div>
          </div>
          <div className="relative h-auto w-full">
            <div className="h-full rounded-lg bg-violet-500 p-5 shadow-sm xl:p-8">
              <div className="block">
                <ChartPie className="size-10 text-white" strokeWidth={1.2} />
              </div>
              <h3 className="py-5 text-lg font-bold text-white xl:text-xl">
                Streamline Legal Operations, Boost Efficiency
              </h3>
              <p className="mb-8 text-base font-normal text-white">
                Seamlessly integrate extracted legal data into your practice management systems to enhance accuracy, improve workflow efficiency, and drive productivity in legal operations.
              </p>
              <Link href="/blog" className="flex items-center justify-between gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5">
                View More
                <ChevronRight className="size-4 text-white" strokeWidth={1.2} />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
