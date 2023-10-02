import { HTMLAttributes } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Footer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const classes = cn(
    className,
    "flex flex-col items-center justify-center px-4 py-6"
  )

  return (
    <footer className="mt-12 bg-white dark:bg-gray-900 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://sendpicks.vercel.app/"
              className="flex items-center"
            >
              <img
                src="/Green_Sendpicks.png"
                className="mr-3 h-8"
                alt="Sendpicks Logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Sendpicks
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Pages
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://sendpicks.vercel.app/"
                    className="hover:underline"
                  >
                    Daily Picks
                  </a>
                </li>
                <li>
                  <a
                    href="https://sendpicks.vercel.app/"
                    className="hover:underline"
                  >
                    Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://twitter.com/Sendpicks_io"
                    className="hover:underline "
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Sendpicks_io"
                    className="hover:underline"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2023{" "}
            <a href="https://sendpicks.vercel.app/" className="hover:underline">
              Sendpicks™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
