"use client";


import { appLink } from "@/config/landing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "../shared/icons";
import { buttonVariants } from "../ui/button";

export function NavBar() {

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 dark:border-gray-600 border-b">
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/_static/logo.png"
            className="w-28"
            width={200}
            height={150}
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            className={cn(buttonVariants({ variant: 'default', size: 'sm', rounded: 'full' }), `hidden gap-2 px-5 md:flex`)}
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="text-balance text-base text-muted-foreground"
                aria-current="page"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-balance text-base text-muted-foreground"
              >
                Use cases
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-balance text-base text-muted-foreground"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-balance text-base text-muted-foreground"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-balance text-base text-muted-foreground"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}
