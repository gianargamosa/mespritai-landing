import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { env } from "@/env.mjs";

import MaxWidthWrapper from "./max-width-wrapper";

export default function CtaSection() {
  return (
    <div className="bg-transparent">
      <MaxWidthWrapper className="container flex max-w-6xl flex-col gap-10 py-32 sm:gap-y-16">
        <div className="relative isolate overflow-hidden rounded-lg bg-transparent pt-16 md:pt-24 lg:flex lg:gap-x-20 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-balance font-heading text-3xl leading-6 text-black dark:text-white sm:text-4xl md:text-4xl lg:text-[40px]">
              Optimize Your Business with Smart Document Analysis!
            </h2>
            <p className="mt-6 text-pretty text-lg/8 text-muted-foreground">
              Don’t let valuable insights go unnoticed. Enhance decision-making,
              improve compliance, and boost efficiency with effective document
              analysis. Take the next step toward smarter business operations
              today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href={env.NEXT_PUBLIC_MESPIRT_APP_URL || ""}
                className="rounded-md border bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm/6 font-semibold text-black dark:text-white"
              >
                Learn more <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="relative mt-[100px] h-80">
            <img
              alt="App screenshot"
              src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
