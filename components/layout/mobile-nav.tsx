/*import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LuMenu } from "react-icons/lu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LightDarkImage } from "@/components/shared/light-dark-image";
import { ModeToggle } from "../shared/mode-toggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="flex w-full items-center justify-between md:hidden">
        <Link href="/" passHref>
          <div className="mr-6 flex cursor-pointer items-center space-x-2">
            <LightDarkImage
              LightImage="/Green_Sendpicks.png"
              DarkImage="/Green_Sendpicks.png"
              alt="Sendpicks"
              height={32}
              width={32}
            />
          </div>
        </Link>
        <SheetTrigger asChild>
          <button
            className="ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <LuMenu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </button>
        </SheetTrigger>
      </div>
      <SheetContent side="right" className="pr-0">
        <div className="flex items-center gap-x-4">
          <ModeToggle />
        </div>
        <ScrollArea className="my-4 mr-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-4">
            <Link href="/dashboard" passHref>
              <a
                className="block text-base font-medium"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </a>
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
*/
