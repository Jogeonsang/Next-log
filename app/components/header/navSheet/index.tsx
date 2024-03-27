import Link from "next/link";
import Logo from "~components/icon/logo";
import MenuIcon from "~components/icon/menuIcon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~components/ui/sheet";

function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="text-left">
          <SheetTitle>
            <Link className="flex items-center" href="/">
              <Logo className="mr-2 h-4 w-4" />
              <span className="font-bold">next log</span>
            </Link>
          </SheetTitle>
          <SheetDescription className="relative overflow-hidden my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-3">
              <Link href="/article">Article</Link>
              <Link href="/resume">Resume</Link>
              <Link href="https://github.com/Jogeonsang" target="_blank">
                GitHub
              </Link>
              <Link
                href={"https://www.linkedin.com/in/geonsan-jo-5a570612b/"}
                target="_blank"
              >
                LinkdeIn
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default NavSheet;
