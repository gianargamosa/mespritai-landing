import Image from "next/image";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <MaxWidthWrapper>
        <div className="mx-auto mt-8 max-w-7xl">
          <div className="flex h-9 w-full items-center justify-start space-x-1.5 rounded-t-lg border bg-gray-200 px-3 dark:bg-gray-900">
            <span className="size-3 rounded-full bg-red-400"></span>
            <span className="size-3 rounded-full bg-yellow-400"></span>
            <span className="size-3 rounded-full bg-green-400"></span>
          </div>
          <div className="h-96 w-full">
            <div className="rounded-xl md:bg-muted/30">
              <div className="overflow-hidden">
                <Image
                  className="size-full border border-t-0 dark:border-gray-300 dark:opacity-85 dark:invert"
                  src="/_static/landing/product-screenshot.png"
                  alt="preview landing"
                  width={1500}
                  height={1000}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
