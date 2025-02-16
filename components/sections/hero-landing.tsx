import Link from "next/link";

import { Icons } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import { env } from "@/env.mjs";
import { cn } from "@/lib/utils";

export default async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/mickasmt/next-saas-stripe-starter",
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-6xl flex-col items-center gap-5 text-center">
        <Link
          href="https://twitter.com/miickasmt/status/1810465801649938857"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4",
          )}
          target="_blank"
        >
          <span className="mr-3">🎉</span>
          <span className="hidden md:flex">Introducing&nbsp;</span> Mesprit AI
          Beta.
        </Link>

        <h1 className="text-balance font-sans text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-[66px]">
          Automated Data Extraction for
          {" "}
          <span className="text-gradient_indigo-purple font-semibold">
            Documents
          </span>
        </h1>

        <p
          className="max-w-xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Use AI to organize unstructured text and documents. Extract key terms and metadata for better decision-making. Turn your documents into strategic assets with Mesprit!
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/pricing"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2",
            )}
          >
            <span>Request a demo</span>
            <Icons.arrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
