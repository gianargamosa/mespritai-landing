"use client";

import Image from "next/image";
import Link from "next/link";

import { appLink } from "@/config/landing";
import { cn } from "@/lib/utils";

import { Icons } from "../shared/icons";
import { buttonVariants } from "../ui/button";

export function NavBar() {
  return (
    <nav className="start-0 top-0 z-20 w-full border-b bg-white dark:bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/_static/logo.png"
            className="w-28 dark:hidden"
            width={200}
            height={150}
            alt="Flowbite Logo"
          />
          <Image
            src="/_static/logo-light.png"
            className="hidden w-28 dark:block"
            width={200}
            height={150}
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
                rounded: "full",
              }),
              `hidden gap-2 px-5 md:flex`,
            )}
            href={appLink}
            // variant="default"
            // size="sm"
            // rounded="full"
          >
            <span>Sign In</span>
            <Icons.arrowRight className="size-4" />
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-1 font-medium text-muted-foreground dark:text-white md:mt-0 md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="text-balance text-base"
                aria-current="page"
              >
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-balance text-base">
                Use cases
              </a>
            </li>
            <li>
              <a href="#" className="text-balance text-base">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-balance text-base">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="text-balance text-base">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
