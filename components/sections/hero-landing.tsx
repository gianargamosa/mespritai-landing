import Link from "next/link";

import { Icons } from "@/components/shared/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20 z-10">
      <div className="container flex max-w-6xl flex-col items-center gap-5 text-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4 text-muted-foreground",
          )}
        >
          <span className="mr-3">🎉</span>
          <span className="hidden md:flex">Introducing&nbsp;</span>{" "}
          <span className="text-gradient_indigo-purple font-bold">
            Your all-in-one AI legal assistant
          </span>
        </Link>

        <h1 className="hero-landing-tagline text-balance font-sans text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-[70px]">
          Supercharge Your Legal Practice with{" "}
          <span className="text-gradient_indigo-purple">Smart Assistance</span>
        </h1>

        <p
          className="max-w-xl text-balance leading-normal text-muted-foreground dark:text-white sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Quickly conduct research, streamline your drafting process, and analyze documents with Mesprit. What tasks do you need to tackle today? Simply ask Mesprit.
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/pricing"
            prefetch={true}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg", rounded: "full" }),
              "gap-2 border-2 border-indigo-600 text-indigo-600 font-bold",
            )}
          >
            <span>Try Mesprit for free</span>
            <Icons.arrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
